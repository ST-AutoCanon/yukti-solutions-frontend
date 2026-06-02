import React from "react";

export default function ContactUsPage() {
  const handleEmailClick = () => {
    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
    const email = "info@yukti-solutions.com";

    if (isMobile) {
      window.location.href = `mailto:${email}`;
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  return (
    <div className="w-full bg-[#f7f7f7] py-5 sm:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-[#d4a12f] uppercase tracking-[2px] font-semibold text-[11px] sm:text-sm">
            CONTACT US
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#032b67] mt-2 leading-tight">
            Let’s Connect & Grow Together
          </h1>

          <div className="w-16 sm:w-20 h-1 bg-[#d4a12f] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {/* Left - Form */}
          <div className="bg-white rounded-[20px] shadow-lg p-4 sm:p-6 border border-gray-100 h-full">
            <h2 className="text-xl sm:text-2xl font-bold text-[#032b67] mb-4 sm:mb-5">
              Send Us a Message
            </h2>

            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-[#032b67] font-semibold mb-1.5 text-sm">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base outline-none focus:border-[#d4a12f] transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[#032b67] font-semibold mb-1.5 text-sm">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base outline-none focus:border-[#d4a12f] transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[#032b67] font-semibold mb-1.5 text-sm">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base outline-none focus:border-[#d4a12f] transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#032b67] font-semibold mb-1.5 text-sm">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Write your message"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base outline-none focus:border-[#d4a12f] transition-all resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#d4a12f] hover:bg-[#bf8f27] transition-all duration-300 text-white font-bold py-3 rounded-xl shadow-md text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-5 h-full">
            {/* Map */}
            <div className="rounded-[20px] overflow-hidden shadow-lg border border-gray-200 h-[240px] sm:h-[300px] lg:flex-1">
              <iframe
                title="Google Satellite Map"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Bagalkot,Karnataka,India&t=k&z=14&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="bg-[#032b67] rounded-[20px] p-5 sm:p-6 text-white shadow-lg relative overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#d4a12f]/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-[#f3b13e] mb-5">
                  Contact Information
                </h2>

                <div className="space-y-5">
                  {/* Phone */}
                  <a
                    href="tel:+918050298966"
                    className="block hover:text-[#f3b13e] transition"
                  >
                    <p className="text-[#f3b13e] font-semibold text-sm sm:text-base">
                      Phone
                    </p>

                    <p className="text-white/90 mt-1 text-sm sm:text-base">
                      +91 80502 98966
                    </p>
                  </a>

                  {/* Email */}
                  <div
                    onClick={handleEmailClick}
                    className="cursor-pointer group"
                  >
                    <p className="text-[#f3b13e] font-semibold text-sm sm:text-base">
                      Email
                    </p>

                    <p className="text-white/90 mt-1 break-all text-sm sm:text-base group-hover:text-[#f3b13e] transition">
                      info@yukti-solutions.com
                    </p>
                  </div>

                  {/* Location */}
                  <a
                    href="https://maps.google.com/?q=Bagalkot,Karnataka,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#f3b13e] transition"
                  >
                    <p className="text-[#f3b13e] font-semibold text-sm sm:text-base">
                      Location
                    </p>

                    <p className="text-white/90 mt-1 text-sm sm:text-base leading-6">
                      Bagalkot, Karnataka, India
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
