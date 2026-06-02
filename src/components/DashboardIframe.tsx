// import React, { useEffect, useMemo, useRef, useState } from "react";

// import { useLocation, useNavigate } from "react-router-dom";

// interface DashboardIframeProps {
//   externalLoginUrlProp?: string;
//   allowedOriginsProp?: string;
// }

// interface LoginData {
//   username?: string;
//   password?: string;
//   orgId?: number;
// }

// interface MessageData {
//   type?: string;
//   username?: string;
//   password?: string;
//   orgId?: number;
//   error?: string;
// }

// const DashboardIframe: React.FC<DashboardIframeProps> = ({
//   externalLoginUrlProp,
//   allowedOriginsProp,
// }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const iframeRef = useRef<HTMLIFrameElement | null>(null);

//   // Route State
//   const routeCreds = (location.state as LoginData) || {};

//   // Session Storage
//   const stored: LoginData = (() => {
//     try {
//       return JSON.parse(sessionStorage.getItem("EMBED_LOGIN") || "{}");
//     } catch {
//       return {};
//     }
//   })();

//   // Credentials
//   const username = routeCreds.username || stored.username || "";

//   const password = routeCreds.password || stored.password || "";

//   const orgId =30;

//   // Save latest credentials
//   useEffect(() => {
//     if (routeCreds.username && routeCreds.password) {
//       sessionStorage.setItem(
//         "EMBED_LOGIN",
//         JSON.stringify({
//           username: routeCreds.username,
//           password: routeCreds.password,
//           orgId,
//         }),
//       );
//     }
//   }, [routeCreds, orgId]);

//   // Iframe URL
//   const externalLoginUrl =
//     externalLoginUrlProp || import.meta.env.VITE_EXTERNAL_LOGIN_URL || "";

//   // Iframe Origin
//   const iframeOrigin = useMemo(() => {
//     try {
//       return new URL(externalLoginUrl).origin;
//     } catch {
//       return "";
//     }
//   }, [externalLoginUrl]);

//   // Allowed Origins
//   const allowedOrigins = useMemo(() => {
//     const raw =
//       allowedOriginsProp ||
//       import.meta.env.VITE_ALLOWED_IFRAME_ORIGINS ||
//       iframeOrigin ||
//       "";

//     return raw
//       .split(",")
//       .map((s) => s.trim())
//       .filter(Boolean);
//   }, [allowedOriginsProp, iframeOrigin]);

//   // States
//   const [iframeLoaded, setIframeLoaded] = useState(false);

//   const [childReady, setChildReady] = useState(false);

//   const [status, setStatus] = useState<"idle" | "sent" | "success" | "failed">(
//     "idle",
//   );

//   const [error, setError] = useState<string | null>(null);

//   // Listen Messages
//   useEffect(() => {
//     const onMessage = (event: MessageEvent<MessageData>) => {
//       const msg = event.data || {};

//       const isFromIframe =
//         iframeRef.current && event.source === iframeRef.current.contentWindow;

//       const originAllowed =
//         allowedOrigins.length === 0 || allowedOrigins.includes(event.origin);

//       if (!originAllowed && !isFromIframe) {
//         return;
//       }

//       // Child Ready
//       if (msg.type === "child-ready") {
//         setChildReady(true);
//         return;
//       }

//       // Login Success
//       if (msg.type === "login-success") {
//         setStatus("success");

//         sessionStorage.removeItem("EMBED_LOGIN");

//         return;
//       }

//       // Login Failed
//       if (msg.type === "login-failed") {
//         setStatus("failed");

//         sessionStorage.removeItem("EMBED_LOGIN");

//         navigate("/", {
//           replace: true,
//           state: {
//             openLogin: true,
//             loginError: msg.error || "Invalid credentials",
//           },
//         });

//         return;
//       }

//       // Logout
//       if (msg.type === "child-logged-out") {
//         sessionStorage.removeItem("EMBED_LOGIN");

//         navigate("/", {
//           replace: true,
//         });
//       }
//     };

//     window.addEventListener("message", onMessage);

//     return () => {
//       window.removeEventListener("message", onMessage);
//     };
//   }, [allowedOrigins, navigate]);

//   // Handshake
//   useEffect(() => {
//     if (!iframeLoaded) return;

//     try {
//       iframeRef.current?.contentWindow?.postMessage(
//         {
//           type: "parent-handshake",
//         },
//         iframeOrigin || "*",
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   }, [iframeLoaded, iframeOrigin]);

//   // Send Login Data
//   useEffect(() => {
//     if (!childReady) return;

//     if (!username || !password) {
//       setError("Missing username or password");
//       return;
//     }

//     try {
//       iframeRef.current?.contentWindow?.postMessage(
//         {
//           type: "parent-login",
//           username,
//           password,
//           orgId,
//         },
//         iframeOrigin || "*",
//       );

//       setStatus("sent");
//     } catch (err) {
//       console.error(err);

//       setError("Failed to send login data");
//     }
//   }, [childReady, username, password, orgId, iframeOrigin]);

//   // Timeout
//   useEffect(() => {
//     if (status !== "sent") return;

//     const timer = setTimeout(() => {
//       setStatus("failed");

//       setError("No response from embedded app");
//     }, 10000);

//     return () => clearTimeout(timer);
//   }, [status]);

//   // Missing URL
//   if (!externalLoginUrl) {
//     return (
//       <div className="flex items-center justify-center h-screen text-red-500 text-lg font-semibold">
//         Missing iframe URL configuration
//       </div>
//     );
//   }

//   return (
//     <div className="w-full h-screen overflow-hidden bg-white">
//       {/* Error */}
//       {error && (
//         <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-red-100 text-red-600 px-5 py-3 rounded-xl shadow-lg z-50">
//           {error}
//         </div>
//       )}

//       {/* Loading */}
//       {!iframeLoaded && (
//         <div className="flex items-center justify-center h-screen">
//           <div className="text-[#1E73D8] text-xl font-semibold">
//             Loading Dashboard...
//           </div>
//         </div>
//       )}

//       {/* Iframe */}
//       <iframe
//         ref={iframeRef}
//         src={externalLoginUrl}
//         title="Yukti Dashboard"
//         onLoad={() => setIframeLoaded(true)}
//         className="w-full h-full border-0"
//         allow="camera; microphone; geolocation; fullscreen"
//       />
//     </div>
//   );
// };

// export default DashboardIframe;
/////////////////////////////////////////
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type DashboardIframeProps = {
  externalLoginUrlProp?: string;
  allowedOriginsProp?: string;
};

type RouteCreds = {
  username?: string;
  password?: string;
  orgId?: number;
};

type MessagePayload = {
  type?: string;
  username?: string;
  password?: string;
  orgId?: number;
  error?: string;
};

export default function DashboardIframe({
  externalLoginUrlProp,
  allowedOriginsProp,
}: DashboardIframeProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const routeCreds = (location.state as RouteCreds) || {};

  const stored: RouteCreds = (() => {
    try {
      return JSON.parse(sessionStorage.getItem("EMBED_LOGIN") || "{}");
    } catch {
      return {};
    }
  })();

  const username = routeCreds.username || stored.username || "";
  const password = routeCreds.password || stored.password || "";
  const orgIdFromStorage = 30;

  useEffect(() => {
    if (routeCreds.username && routeCreds.password) {
      try {
        sessionStorage.setItem(
          "EMBED_LOGIN",
          JSON.stringify({
            username: routeCreds.username,
            password: routeCreds.password,
            orgId: orgIdFromStorage,
          }),
        );
      } catch {
        console.warn("Failed to store embed login");
      }
    }
  }, [routeCreds, orgIdFromStorage]);

  const externalLoginUrl =
    externalLoginUrlProp ||
    import.meta.env.VITE_EXTERNAL_LOGIN_URL ||
    import.meta.env.VITE_EXTERNAL_EMBED_URL ||
    "";

  const iframeOrigin = useMemo(() => {
    try {
      return new URL(externalLoginUrl).origin;
    } catch {
      return "";
    }
  }, [externalLoginUrl]);

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
  }, [iframeOrigin, allowedOriginsProp]);

  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [childReady, setChildReady] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent" | "failed" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.debug("[Parent] allowedOrigins:", allowedOrigins);

    function onMessage(ev: MessageEvent<MessagePayload>) {
      console.debug(
        "[Parent][msg] origin:",
        ev?.origin,
        "source:",
        ev?.source,
        "data:",
        ev?.data,
      );

      const msg = ev?.data || {};

      const isFromIframeWindow =
        iframeRef.current && ev?.source === iframeRef.current.contentWindow;

      const originAllowed =
        allowedOrigins.length === 0 ||
        (ev?.origin && allowedOrigins.includes(ev.origin));

      if (!originAllowed && !isFromIframeWindow) {
        console.debug(
          "[Parent] ignoring message - origin not allowed and not from iframe window:",
          ev?.origin,
        );
        return;
      }

      if (msg.type === "child-ready") {
        console.debug("[Parent] child-ready");
        setChildReady(true);
        return;
      }

      if (msg.type === "login-success") {
        try {
          sessionStorage.removeItem("EMBED_LOGIN");
        } catch {
          console.warn("Failed to remove EMBED_LOGIN");
        }

        navigate("/dashboard", {
          replace: true,
          state: { loginSuccess: true },
        });

        return;
      }

      if (msg.type === "login-failed") {
        try {
          sessionStorage.removeItem("EMBED_LOGIN");
        } catch {
          console.warn("Failed to remove EMBED_LOGIN");
        }

        navigate("/", {
          replace: true,
          state: {
            openLogin: true,
            loginError: msg.error || "Invalid credentials",
          },
        });

        return;
      }

      if (msg.type === "child-logged-out") {
        console.debug("[Parent] child-logged-out received", msg);

        try {
          sessionStorage.removeItem("EMBED_LOGIN");
        } catch (e) {
          console.warn(e);
        }

        try {
          navigate("/", { replace: true });
          console.debug("[Parent] navigate('/') called");
        } catch (navErr) {
          console.warn("[Parent] navigate('/') failed", navErr);

          try {
            window.location.replace("/");
          } catch (locErr) {
            console.error(
              "[Parent] window.location.replace('/') failed",
              locErr,
            );
          }
        }

        setStatus("idle");
      }
    }

    window.addEventListener("message", onMessage, false);

    return () => {
      window.removeEventListener("message", onMessage, false);
    };
  }, [allowedOrigins, navigate]);

  useEffect(() => {
    if (!iframeLoaded) return;

    try {
      const win = iframeRef.current?.contentWindow;

      if (win) {
        win.postMessage({ type: "parent-handshake" }, iframeOrigin || "*");
      }
    } catch (err) {
      console.warn("[Parent] handshake failed", err);
    }

    const fallback = setTimeout(() => {
      if (!childReady && username && password) {
        try {
          iframeRef.current?.contentWindow?.postMessage(
            {
              type: "parent-login",
              username,
              password,
              orgId: orgIdFromStorage,
            },
            iframeOrigin || "*",
          );

          setStatus("sent");
        } catch {
          setStatus("error");
          setError("postMessage failed (fallback)");
        }
      }
    }, 250);

    return () => clearTimeout(fallback);
  }, [
    iframeLoaded,
    childReady,
    username,
    password,
    iframeOrigin,
    orgIdFromStorage,
  ]);

  useEffect(() => {
    if (!childReady) return;
    if (!username || !password) return;

    try {
      iframeRef.current?.contentWindow?.postMessage(
        {
          type: "parent-login",
          username,
          password,
          orgId: orgIdFromStorage,
        },
        iframeOrigin || "*",
      );

      setStatus("sent");
    } catch {
      setStatus("error");
      setError("postMessage failed");
    }
  }, [childReady, username, password, iframeOrigin, orgIdFromStorage]);

  useEffect(() => {
    if (status !== "sent") return;

    const timeout = setTimeout(() => {
      setStatus("failed");
      setError((prev) => prev || "No response from embedded app");
    }, 10000);

    return () => clearTimeout(timeout);
  }, [status]);

  if (!externalLoginUrl) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 shadow-sm">
          Configuration error: missing external login URL
        </p>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-gray-100">
      {/* Optional Status Banner */}
      {status === "failed" && error && (
        <div className="absolute left-1/2 top-4 z-50 -translate-x-1/2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
          {error}
        </div>
      )}

      <div className="h-full w-full pt-20">
        <iframe
          ref={iframeRef}
          src={externalLoginUrl}
          title="Embedded App"
          onLoad={() => setIframeLoaded(true)}
          className="h-full w-full border border-gray-300 bg-white shadow-sm"
          allow="camera; microphone; geolocation; fullscreen"
        />
      </div>
    </div>
  );
}