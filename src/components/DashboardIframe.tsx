import React, { useEffect, useMemo, useRef, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

interface DashboardIframeProps {
  externalLoginUrlProp?: string;
  allowedOriginsProp?: string;
}

interface LoginData {
  username?: string;
  password?: string;
  orgId?: number;
}

interface MessageData {
  type?: string;
  username?: string;
  password?: string;
  orgId?: number;
  error?: string;
}

const DashboardIframe: React.FC<DashboardIframeProps> = ({
  externalLoginUrlProp,
  allowedOriginsProp,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Route State
  const routeCreds = (location.state as LoginData) || {};

  // Session Storage
  const stored: LoginData = (() => {
    try {
      return JSON.parse(sessionStorage.getItem("EMBED_LOGIN") || "{}");
    } catch {
      return {};
    }
  })();

  // Credentials
  const username = routeCreds.username || stored.username || "";

  const password = routeCreds.password || stored.password || "";

  const orgId = routeCreds.orgId || stored.orgId || 1;

  // Save latest credentials
  useEffect(() => {
    if (routeCreds.username && routeCreds.password) {
      sessionStorage.setItem(
        "EMBED_LOGIN",
        JSON.stringify({
          username: routeCreds.username,
          password: routeCreds.password,
          orgId,
        }),
      );
    }
  }, [routeCreds, orgId]);

  // Iframe URL
  const externalLoginUrl =
    externalLoginUrlProp || import.meta.env.VITE_EXTERNAL_LOGIN_URL || "";

  // Iframe Origin
  const iframeOrigin = useMemo(() => {
    try {
      return new URL(externalLoginUrl).origin;
    } catch {
      return "";
    }
  }, [externalLoginUrl]);

  // Allowed Origins
  const allowedOrigins = useMemo(() => {
    const raw =
      allowedOriginsProp ||
      import.meta.env.VITE_ALLOWED_IFRAME_ORIGINS ||
      iframeOrigin ||
      "";

    return raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }, [allowedOriginsProp, iframeOrigin]);

  // States
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const [childReady, setChildReady] = useState(false);

  const [status, setStatus] = useState<"idle" | "sent" | "success" | "failed">(
    "idle",
  );

  const [error, setError] = useState<string | null>(null);

  // Listen Messages
  useEffect(() => {
    const onMessage = (event: MessageEvent<MessageData>) => {
      const msg = event.data || {};

      const isFromIframe =
        iframeRef.current && event.source === iframeRef.current.contentWindow;

      const originAllowed =
        allowedOrigins.length === 0 || allowedOrigins.includes(event.origin);

      if (!originAllowed && !isFromIframe) {
        return;
      }

      // Child Ready
      if (msg.type === "child-ready") {
        setChildReady(true);
        return;
      }

      // Login Success
      if (msg.type === "login-success") {
        setStatus("success");

        sessionStorage.removeItem("EMBED_LOGIN");

        return;
      }

      // Login Failed
      if (msg.type === "login-failed") {
        setStatus("failed");

        sessionStorage.removeItem("EMBED_LOGIN");

        navigate("/", {
          replace: true,
          state: {
            openLogin: true,
            loginError: msg.error || "Invalid credentials",
          },
        });

        return;
      }

      // Logout
      if (msg.type === "child-logged-out") {
        sessionStorage.removeItem("EMBED_LOGIN");

        navigate("/", {
          replace: true,
        });
      }
    };

    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, [allowedOrigins, navigate]);

  // Handshake
  useEffect(() => {
    if (!iframeLoaded) return;

    try {
      iframeRef.current?.contentWindow?.postMessage(
        {
          type: "parent-handshake",
        },
        iframeOrigin || "*",
      );
    } catch (err) {
      console.error(err);
    }
  }, [iframeLoaded, iframeOrigin]);

  // Send Login Data
  useEffect(() => {
    if (!childReady) return;

    if (!username || !password) {
      setError("Missing username or password");
      return;
    }

    try {
      iframeRef.current?.contentWindow?.postMessage(
        {
          type: "parent-login",
          username,
          password,
          orgId,
        },
        iframeOrigin || "*",
      );

      setStatus("sent");
    } catch (err) {
      console.error(err);

      setError("Failed to send login data");
    }
  }, [childReady, username, password, orgId, iframeOrigin]);

  // Timeout
  useEffect(() => {
    if (status !== "sent") return;

    const timer = setTimeout(() => {
      setStatus("failed");

      setError("No response from embedded app");
    }, 10000);

    return () => clearTimeout(timer);
  }, [status]);

  // Missing URL
  if (!externalLoginUrl) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-lg font-semibold">
        Missing iframe URL configuration
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-hidden bg-white">
      {/* Error */}
      {error && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-red-100 text-red-600 px-5 py-3 rounded-xl shadow-lg z-50">
          {error}
        </div>
      )}

      {/* Loading */}
      {!iframeLoaded && (
        <div className="flex items-center justify-center h-screen">
          <div className="text-[#1E73D8] text-xl font-semibold">
            Loading Dashboard...
          </div>
        </div>
      )}

      {/* Iframe */}
      <iframe
        ref={iframeRef}
        src={externalLoginUrl}
        title="Yukti Dashboard"
        onLoad={() => setIframeLoaded(true)}
        className="w-full h-full border-0"
        allow="camera; microphone; geolocation; fullscreen"
      />
    </div>
  );
};

export default DashboardIframe;
