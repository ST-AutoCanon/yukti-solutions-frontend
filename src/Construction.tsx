import React from "react";
import { Construction, ArrowLeft } from "lucide-react";

export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-white rounded-[30px] shadow-2xl overflow-hidden border border-gray-100">
        {/* Top Section */}
        <div className="bg-[#032b67] relative px-6 sm:px-10 py-14 text-center overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute -top-10 -right-10 w-52 h-52 bg-[#d4a12f]/20 rounded-full blur-3xl"></div>

          {/* Icon */}
          <div className="relative z-10 w-24 h-24 mx-auto rounded-full bg-[#d4a12f]/10 flex items-center justify-center border border-[#d4a12f]/30">
            <Construction className="w-12 h-12 text-[#f3b13e]" />
          </div>

          {/* Heading */}
          <h1 className="relative z-10 text-3xl sm:text-4xl font-bold text-white mt-6">
            Page Under Construction
          </h1>

          {/* Description */}
          <p className="relative z-10 text-white/80 mt-4 max-w-xl mx-auto leading-7">
            This page is currently being developed and will be available soon.
            We’re working hard to bring you the best experience.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="px-6 sm:px-10 py-8 text-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center gap-2 bg-[#032b67] hover:bg-[#021f4b] text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
}
