// import "./App.css";
// import Navbar from "./components/Navbar";
// import Footer from "./Footer";
// import Home from "./Home";
// import ContactUs from "./Contactus";
// import { Route, Routes } from "react-router-dom";
// import UnderConstructionPage from "./Construction";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/construction" element={<UnderConstructionPage />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./Footer";

import Home from "./Home";
import ContactUs from "./Contactus";
import UnderConstructionPage from "./Construction";

import LoginPage from "./components/LoginModal";
import DashboardIframe from "./components/DashboardIframe";

import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // Hide Navbar & Footer on Dashboard Page
  const hideLayout = location.pathname === "/dashboard";

  return (
    <>
      {/* Navbar */}
      {!hideLayout && <Navbar />}

      {/* Routes */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactUs />} />

        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard Iframe */}
        <Route path="/dashboard" element={<DashboardIframe />} />

        {/* Construction */}
        <Route path="/construction" element={<UnderConstructionPage />} />
      </Routes>

      {/* Footer */}
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;