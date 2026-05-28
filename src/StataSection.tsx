import React from "react";
import { Briefcase, Megaphone, Users, TrendingUp } from "lucide-react";

const statsData = [
  {
    icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    title: "Smart HRMS",
    subtitle: "Solutions",
  },
  {
    icon: <Megaphone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    title: "Digital Marketing",
    subtitle: "& Branding",
  },
  {
    icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    title: "Dedicated",
    subtitle: "Support Team",
  },
  {
    icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    title: "Business",
    subtitle: "Growth Focused",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-[#f5f5f5] px-4 py-8 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Main Box */}
        <div className="bg-[#032b67] rounded-[28px] px-5 py-6 sm:px-8 sm:py-8 md:px-12 shadow-2xl">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {statsData.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-5 px-2 sm:px-4 lg:px-6"
              >
                {/* Divider */}
                {index !== statsData.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-[2px] bg-[#0f4f9d]"></div>
                )}

                {/* Icon Circle */}
                <div className="min-w-[75px] h-[75px] sm:min-w-[90px] sm:h-[90px] rounded-full bg-[#d9a12d] flex items-center justify-center shadow-lg">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-[#f3b13e] text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                    {item.title}
                  </h2>

                  <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-7">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}