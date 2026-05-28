import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
    const handleEmailClick = () => {
      const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
      const email = "info@yukti-solutions.com";

      if (isMobile) {
        // Opens default mail app on mobile
        window.location.href = `mailto:${email}`;
      } else {
        // Opens Gmail compose in browser on desktop
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
          "_blank",
          "noopener,noreferrer",
        );
      }
    };
  return (
    <footer className="relative overflow-hidden bg-[#032b67] text-white">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#d9a12d]"></div>

      {/* Decorative Curve */}
      <div className="absolute bottom-0 right-0 w-[220px] md:w-[300px] h-[100px] md:h-[120px] border-b-[3px] border-r-[3px] border-[#d9a12d] rounded-tl-[100px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {/* Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <img
                src="/yuktilogo.png"
                alt="Yukti Solutions"
                className="w-30 md:w-46 h-15 object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-white/80 text-[14px] leading-6 mt-4 text-center sm:text-left">
              Yukti Solutions is a consulting firm providing HRMS solutions and
              Digital Marketing & Online Sales support to help businesses create
              efficiency and grow sustainably.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 justify-center sm:justify-start">
              {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 rounded-full border border-[#d9a12d] flex items-center justify-center text-[#f3b13e] hover:bg-[#d9a12d] hover:text-[#032b67] transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Hide Extra Sections in Mobile */}
          <div className="hidden md:contents">
            {/* Quick Links */}
            <div className=" lg:pl-2">
              <h3 className="text-[#f3b13e] text-xl md:text-2xl font-bold mb-4">
                Quick Links
              </h3>

              <ul className="space-y-3 text-white/90">
                {["Home", "About Us", "Services", "Contact Us"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="hover:text-[#f3b13e] transition cursor-pointer flex items-center gap-2"
                    >
                      <span className="text-[#f3b13e]">•</span>
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:pl-2">
              <h3 className="text-[#f3b13e] text-xl md:text-2xl font-bold mb-4">
                Our Services
              </h3>

              <ul className="space-y-3 text-white/90">
                {[
                  "HRMS Activity",
                  "Digital Marketing &",
                  "Online Sales Support",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-[#f3b13e] transition cursor-pointer flex items-center gap-2"
                  >
                    <span className="text-[#f3b13e]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className=" lg:pl-2">
              <h3 className="text-[#f3b13e] text-xl md:text-2xl font-bold mb-4">
                Resources
              </h3>

              <ul className="space-y-3 text-white/90">
                {["Blogs", "Case Studies", "FAQs", "Privacy Policy"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="hover:text-[#f3b13e] transition cursor-pointer flex items-center gap-2"
                    >
                      <span className="text-[#f3b13e]">•</span>
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Contact */}
          {/* Contact */}
          <div className="lg:pl-2">
            <h3 className="text-[#f3b13e] text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
              Contact Us
            </h3>

            <div className="space-y-5 text-white/90 w-fit mx-auto md:mx-0">
              {/* Phone */}
              <a
                href="tel:+919591104481"
                className="flex items-start gap-4 hover:text-[#f3b13e] transition"
              >
                <Phone className="w-5 h-5 text-[#f3b13e] mt-1 flex-shrink-0" />
                <p>+91 95911 04481</p>
              </a>

              {/* <a
                href="https://wa.me/919986083930?text=Hello%20Yukti%20Solutions,%20I%20want%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:text-[#25D366] transition"
              >
                <FaWhatsapp className="w-5 h-5 text-[#25D366] mt-1 flex-shrink-0" />

                <p>+91 99860 83930</p>
              </a> */}

              <div
                onClick={handleEmailClick}
                className="flex items-start gap-4 hover:text-[#f3b13e] transition cursor-pointer group"
              >
                <Mail className="w-5 h-5 text-[#f3b13e] mt-1 flex-shrink-0" />

                <p className="group-hover:text-[#f3b13e] transition whitespace-nowrap">
                  info@yukti-solutions.com
                </p>
              </div>

              {/* Location */}
              <a
                href="https://maps.google.com/?q=Bagalkot,Karnataka,India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:text-[#f3b13e] transition"
              >
                <MapPin className="w-5 h-5 text-[#f3b13e] mt-1 flex-shrink-0" />
                <p>Bagalkot, Karnataka, India</p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className=" mt-8 pt-4 text-center text-white/70 text-sm">
          © 2026 Yukti Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}