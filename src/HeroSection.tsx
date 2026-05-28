import React from "react";

export default function YuktiHeroSection() {
  return (
    <div className="w-full min-h-screen bg-[#032b67] overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,190,60,0.08),_transparent_45%)]" />

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 250"
          className="w-full h-[120px] sm:h-[160px] md:h-[180px] lg:h-[220px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,140 C280,220 420,20 720,100 C980,170 1150,40 1440,120 L1440,250 L0,250 Z"
            fill="#f5f5f5"
          />

          <path
            d="M0,110 C280,190 420,-10 720,70 C980,140 1150,10 1440,90"
            stroke="#d9a63b"
            strokeWidth="3"
            fill="none"
          />

          <path
            d="M0,130 C280,210 420,10 720,90 C980,160 1150,30 1440,110"
            stroke="#d9a63b"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* <div className="max-w-[1450px] mx-auto px-5 sm:px-6 md:px-8 py-10 relative z-10 flex flex-col lg:flex-row items-center justify-between"> */}
      <div className="max-w-[1450px] mx-auto px-5 sm:px-6 md:px-8 pt-5 pb-32 sm:pb-40 md:pb-44 lg:pb-52 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[45%]  text-center lg:text-left">
          <div className="inline-block border border-[#f3b13e] rounded-full px-4 sm:px-6 py-2 text-white text-xs sm:text-sm tracking-wide mb-6 sm:mb-8">
            CONSULTING THAT EMPOWERS GROWTH
          </div>

          <h1 className="text-white text-[34px] leading-[42px] sm:text-[44px] sm:leading-[52px] md:text-[52px] md:leading-[60px] lg:text-[58px] lg:leading-[66px] font-bold">
            Empowering People
            <br />
            Elevating Brands
            <br />
            <span className="text-[#f3b13e]">Driving Growth</span>
          </h1>

          <p className="text-[#d7dff2] text-[15px] sm:text-base lg:text-lg leading-7 lg:leading-8 mt-6 sm:mt-8 max-w-[580px] mx-auto lg:mx-0">
            Yukti Solutions is your trusted partner for HRMS solutions and
            Digital Marketing & Online Sales support to help your business scale
            smarter and faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-10 justify-center lg:justify-start">
            <button className="bg-[#f3b13e] hover:bg-[#df9f2f] transition-all duration-300 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl w-full sm:w-auto">
              Explore Services
            </button>

            <button className="border border-[#f3b13e] hover:bg-[#f3b13e] transition-all duration-300 text-white font-semibold px-8 py-4 rounded-2xl w-full sm:w-auto">
              About Us
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[55%] flex items-center justify-center relative mt-5 lg:mt-0">
          {/* Glow */}
          <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] lg:w-[620px] lg:h-[620px] rounded-full bg-[#f3b13e]/10 blur-3xl" />

          {/* Main Image */}
          {/* <img
            src="/Herosection8.png"
            alt="Yukti Solutions"
            className="relative z-10 w-full max-w-[320px] sm:max-w-[480px] md:max-w-[600px] lg:w-[720px] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
          /> */}
                  <img
  src="/Herosection8.png"
  alt="Yukti Solutions"
  className="relative z-10 
  w-full 
  max-w-[360px] 
  sm:max-w-[520px] 
  md:max-w-[650px] 
  lg:max-w-[760px]
  xl:max-w-[820px]
  h-[320px]
  sm:h-[450px]
  md:h-[560px]
  lg:h-[640px]
  object-contain 
  drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
/>
        </div>
      </div>
    </div>
  );
}