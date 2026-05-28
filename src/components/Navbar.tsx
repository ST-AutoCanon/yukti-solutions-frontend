// import React, { useState } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// // IMPORT PAGES
// import ContactUsPage from "../Contactus";

// const Navbar = () => {
//   const [activeTab, setActiveTab] = useState("Home");
//   const [mobileMenu, setMobileMenu] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/construction" },
//     { name: "Why Us", path: "/construction" },
//     { name: "Resources", path: "/construction" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   return (
//     <header className="w-full bg-white shadow-sm border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">
//         <div className="flex items-center justify-between h-24">
//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <img
//               src="/yuktilogo.png"
//               alt="Yukti Solutions"
//               className="h-26 w-auto"
//             />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-10">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => setActiveTab(item.name)}
//                 className={`transition pb-1 ${
//                   activeTab === item.name
//                     ? "text-[#1E73D8] font-semibold border-b-2 border-[#D4A017]"
//                     : "text-gray-700 hover:text-[#1E73D8]"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* CTA Button Desktop */}
//           <div className="hidden lg:block">
//             {/* <button className="bg-gradient-to-r from-[#D4A017] to-[#8B5A00] hover:opacity-90 text-white px-7 py-3 rounded-full font-medium shadow-lg transition-all duration-300">
//               Let's Talk
//             </button> */}
//             <Link
//               to="/login"
//               className="bg-gradient-to-r from-[#D4A017] to-[#8B5A00] hover:opacity-90 text-white px-7 py-3 rounded-full font-medium shadow-lg transition-all duration-300 w-fit inline-block"
//             >
//               Login
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-gray-700"
//             onClick={() => setMobileMenu(!mobileMenu)}
//           >
//             {mobileMenu ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenu && (
//           <div className="lg:hidden pb-6">
//             <nav className="flex flex-col gap-5">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   onClick={() => {
//                     setActiveTab(item.name);
//                     setMobileMenu(false);
//                   }}
//                   className={`transition w-fit pb-1 ${
//                     activeTab === item.name
//                       ? "text-[#1E73D8] font-semibold border-b-2 border-[#D4A017]"
//                       : "text-gray-700 hover:text-[#1E73D8]"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               {/* CTA Button Mobile */}
//               {/* <button className="bg-gradient-to-r from-[#D4A017] to-[#8B5A00] hover:opacity-90 text-white px-7 py-3 rounded-full font-medium shadow-lg transition-all duration-300 w-fit">
//                 Let's Talk
//               </button> */}
//               <Link
//                 to="/login"
//                 className="bg-gradient-to-r from-[#D4A017] to-[#8B5A00] hover:opacity-90 text-white px-7 py-3 rounded-full font-medium shadow-lg transition-all duration-300 w-fit inline-block"
//               >
//                 Login
//               </Link>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// IMPORT LOGIN PAGE
import LoginPage from "./LoginModal";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenu, setMobileMenu] = useState(false);

  // LOGIN POPUP STATE
  const [showLogin, setShowLogin] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/construction" },
    { name: "Why Us", path: "/construction" },
    { name: "Resources", path: "/construction" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="w-full bg-white shadow-sm border-b border-gray-100 relative z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/yuktilogo.png"
                alt="Yukti Solutions"
                className="h-26 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setActiveTab(item.name)}
                  className={`transition pb-1 ${
                    activeTab === item.name
                      ? "text-[#1E73D8] font-semibold border-b-2 border-[#D4A017]"
                      : "text-gray-700 hover:text-[#1E73D8]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Login Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => setShowLogin(true)}
                className="bg-gradient-to-r from-[#D4A017] to-[#8B5A00] hover:opacity-90 text-white px-7 py-3 rounded-full font-medium shadow-lg transition-all duration-300"
              >
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenu && (
            <div className="lg:hidden pb-6">
              <nav className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setActiveTab(item.name);
                      setMobileMenu(false);
                    }}
                    className={`transition w-fit pb-1 ${
                      activeTab === item.name
                        ? "text-[#1E73D8] font-semibold border-b-2 border-[#D4A017]"
                        : "text-gray-700 hover:text-[#1E73D8]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Login Button */}
                <button
                  onClick={() => {
                    setShowLogin(true);
                    setMobileMenu(false);
                  }}
                  className="bg-gradient-to-r from-[#D4A017] to-[#8B5A00] hover:opacity-90 text-white px-7 py-3 rounded-full font-medium shadow-lg transition-all duration-300 w-fit"
                >
                  Login
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-6">
          {/* Background Click Close */}
          <div
            className="absolute inset-0"
            onClick={() => setShowLogin(false)}
          ></div>

          {/* Login Popup */}
          <div className="relative z-50">
            <LoginPage closeLogin={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;