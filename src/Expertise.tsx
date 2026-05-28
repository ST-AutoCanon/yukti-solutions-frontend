import React from "react";
import { Megaphone, Users, ArrowRight, Check } from "lucide-react";

const expertiseData = [
  {
    title: "HRMS Activity",
    description:
      "Streamline your HR operations with intelligent HRMS solutions that improve efficiency, ensure compliance and empower your people.",
    points: [
      "End-to-End HR Management",
      "Automated Processes",
      "Data-Driven Insights",
      "Scalable & Secure Solutions",
    ],
    icon: <Users className="w-7 h-7 text-white" />,
    iconBg: "bg-blue-700",
    border: "border-blue-200",
    button: "bg-blue-700",
    titleColor: "text-blue-700",
    checkColor: "text-blue-700",
    image:
      "https://img.freepik.com/free-vector/hr-management-abstract-concept-vector-illustration_335657-2965.jpg",
  },
  {
    title: "Digital Marketing & Online Sales Support",
    description:
      "Boost your brand visibility and drive online sales with result-oriented digital marketing strategies and dedicated support.",
    points: [
      "Digital Strategy & Campaigns",
      "Social Media Management",
      "Lead Generation & Nurturing",
      "Online Sales & Growth Support",
    ],
    icon: <Megaphone className="w-7 h-7 text-white" />,
    iconBg: "bg-yellow-600",
    border: "border-yellow-200",
    button: "bg-yellow-600",
    titleColor: "text-yellow-600",
    checkColor: "text-yellow-600",
    image: "./marketing.png",
  },
];

export default function ConsultingExpertise() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 mt-10">
      {/* Heading */}
      <div className="text-center mb-12 lg:mb-16">
        <p className="text-yellow-600 font-semibold tracking-[3px] uppercase text-xs sm:text-sm">
          WHAT WE DO
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 mt-3 leading-tight">
          Our Consulting Expertise
        </h2>

        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-[28px] border ${item.border} bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden`}
          >
            {/* Main Layout */}
            <div className="flex flex-col gap-8 items-start">
              {/* LEFT SIDE */}
              <div className="flex-1 w-full">
                {/* Icon */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${item.iconBg} flex items-center justify-center shadow-lg mb-5 sm:mb-6`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight ${item.titleColor}`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-5 leading-7 text-[14px] sm:text-[15px]">
                  {item.description}
                </p>

                {/* Bullet Points + Image */}
                <div className="mt-7 flex flex-col md:flex-row gap-6 items-start justify-between">
                  {/* LEFT SIDE CONTENT */}
                  <ul className="space-y-4 flex-1">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="min-w-[22px] h-[22px] flex items-center justify-center mt-[2px]">
                          <Check className={`w-5 h-5 ${item.checkColor}`} />
                        </div>

                        <span className="text-gray-700 text-[14px] sm:text-[15px] leading-6">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* RIGHT SIDE IMAGE */}
                  <div className="w-full md:w-[170px] shrink-0 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[180px] sm:w-[220px] md:w-full object-contain"
                    />
                  </div>
                </div>

                {/* Button */}
                <button
                  className={`w-12 h-12 rounded-full ${item.button} flex items-center justify-center text-white hover:scale-110 transition-all duration-300 mt-8 shadow-lg`}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Decorative Background Circle */}
            <div className="absolute -bottom-24 -right-24 w-52 h-52 sm:w-72 sm:h-72 bg-gray-100 rounded-full opacity-40"></div>
          </div>
        ))}
      </div>
    </section>
  );
}