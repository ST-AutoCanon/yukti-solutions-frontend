import React, { useState, useEffect, useRef } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface LoginPageProps {
  closeLogin?: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ closeLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((location.state as any)?.loginError) {
      setErrorMessage((location.state as any).loginError);
    }
  }, [location.state]);

  useEffect(() => {
    if (errorMessage && errorRef.current) {
      errorRef.current.focus();
    }
  }, [errorMessage]);

  const closeModal = () => {
    setIsModalOpen(false);

    if (closeLogin) {
      closeLogin();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");

    if (!username || !password) {
      setErrorMessage("Username and password are required.");
      return;
    }

    try {
      sessionStorage.setItem(
        "EMBED_LOGIN",
        JSON.stringify({
          username,
          password,
          orgId: 30,
        }),
      );
    } catch (err) {
      console.warn("sessionStorage write failed", err);
    }
    closeModal(); // close popup
    navigate("/dashboard", { replace: true });
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative"
      >
        <button
          onClick={closeModal}
          aria-label="Close login"
          className="absolute top-5 right-5 text-gray-500 hover:text-[#1E73D8]"
        >
          <X size={24} />
        </button>

        <div className="flex justify-center mb-6">
          <img
            src="/yuktilogo.png"
            alt="Logo"
            className="h-20 w-auto"
          />
        </div>

        <div className="text-center mb-8">
          <h1
            id="login-title"
            className="text-3xl font-bold text-[#1E73D8]"
          >
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              User Name
            </label>

            <input
              id="username"
              type="text"
              value={username}
              autoComplete="username"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E73D8] focus:ring-2 focus:ring-[#1E73D8]/20 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                autoComplete="current-password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E73D8] focus:ring-2 focus:ring-[#1E73D8]/20 outline-none pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {errorMessage && (
            <div
              role="alert"
              tabIndex={-1}
              ref={errorRef}
              className="bg-red-100 border border-red-300 text-red-600 px-4 py-3 rounded-xl text-sm"
            >
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#D4A017] to-[#8B5A00] hover:opacity-90 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

