import Navbar from "./components/Navbar";
import Footer from "./Footer";

import Home from "./Home";
import ContactUs from "./Contactus";
import UnderConstructionPage from "./Construction";

import LoginPage from "./components/LoginModal";
import DashboardIframe from "./components/DashboardIframe";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* Navbar */}
    
      <Navbar />

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
      <Footer />
    </>
  );
}

export default App;