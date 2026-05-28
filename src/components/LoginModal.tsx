// import React, { useState } from "react";
// import { Eye, EyeOff, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const LoginPage = ({ closeLogin }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     // Overlay Container
//     <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-6">
//       {/* Login Card */}
//       <div className="w-full max-w-md bg-white/95 rounded-3xl shadow-2xl border border-white/20 p-8 relative">
//         {/* Close Button */}
//         <button
//           onClick={closeLogin}
//           className="absolute top-5 right-5 text-gray-500 hover:text-[#1E73D8] transition"
//         >
//           <X size={24} />
//         </button>

//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//           <img
//             src="/yuktilogo.png"
//             alt="Yukti Solutions"
//             className="h-20 w-auto"
//           />
//         </div>

//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-[#1E73D8]">Welcome Back</h1>

//           <p className="text-gray-500 mt-2">Login to continue your journey</p>
//         </div>

//         {/* Form */}
//         <form className="space-y-5">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Email Address
//             </label>

//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E73D8] focus:ring-2 focus:ring-[#1E73D8]/20 outline-none transition"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Password
//             </label>

//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E73D8] focus:ring-2 focus:ring-[#1E73D8]/20 outline-none transition pr-12"
//               />

//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//           </div>

//           {/* Forgot Password */}
//           <div className="flex justify-end">
//             <Link
//               to="/forgot-password"
//               className="text-sm text-[#1E73D8] hover:text-[#D4A017]"
//             >
//               Forgot Password?
//             </Link>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-[#D4A017] to-[#8B5A00] hover:opacity-90 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState, useEffect, useRef } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LoginPage = ({ closeLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);

  // Login States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Extra iframe / embed details
  const [orgId] = useState(1);
  const [iframeUrl] = useState("https://your-iframe-domain.com/dashboard");

  const [errorMessage, setErrorMessage] = useState("");

  const errorRef = useRef(null);

  // Get login error from route state
  useEffect(() => {
    if (location.state?.loginError) {
      setErrorMessage(location.state.loginError);
    }
  }, [location.state]);

  // Accessibility focus
  useEffect(() => {
    if (errorMessage && errorRef.current) {
      errorRef.current.focus();
    }
  }, [errorMessage]);

  // Submit Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");

    // Validation
    if (!username || !password) {
        console.log("USERNAME OR PASSWORD MISSING");
      setErrorMessage("Username and password are required.");
      return;
    }

    try {
      // Create login payload
      const loginData = {
        username,
        password,
        orgId,
        loginTime: new Date().toISOString(),
      };
console.log("LOGIN DATA:", loginData);
      // Save login session
      sessionStorage.setItem("EMBED_LOGIN", JSON.stringify(loginData));

      // Save iframe config
      sessionStorage.setItem(
        "IFRAME_CONFIG",
        JSON.stringify({
          iframeUrl,
          autoLogin: true,
        }),
      );

      
      // Optional User Data
      const userData = {
        name: username,
        email: `${username}@yukti.com`,
        role: "User",
      };
   console.log("USER DATA:", userData);

   console.log("REDIRECTING TO DASHBOARD...");
      sessionStorage.setItem("USER_DATA", JSON.stringify(userData));

      // Navigate Dashboard
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error(error);
      setErrorMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-6">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white/95 rounded-3xl shadow-2xl border border-white/20 p-8 relative">
        {/* Close Button */}
        <button
          onClick={closeLogin}
          className="absolute top-5 right-5 text-gray-500 hover:text-[#1E73D8] transition"
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/yuktilogo.png"
            alt="Yukti Solutions"
            className="h-20 w-auto"
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1E73D8]">Welcome Back</h1>

          <p className="text-gray-500 mt-2">Login to continue your journey</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E73D8] focus:ring-2 focus:ring-[#1E73D8]/20 outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1E73D8] focus:ring-2 focus:ring-[#1E73D8]/20 outline-none transition pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div
              className="bg-red-100 border border-red-300 text-red-600 px-4 py-3 rounded-xl text-sm"
              role="alert"
              tabIndex={-1}
              ref={errorRef}
            >
              {errorMessage}
            </div>
          )}

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-[#1E73D8] hover:text-[#D4A017]"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#D4A017] to-[#8B5A00] hover:opacity-90 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Hidden iframe */}
        <iframe title="Embedded Login" src={iframeUrl} className="hidden" />
      </div>
    </div>
  );
};

export default LoginPage;