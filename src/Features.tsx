// import React from "react";
// import {
//   Target,
//   Users,
//   Lightbulb,
//   ShieldCheck,
//   Handshake,
//   ArrowRight,
// } from "lucide-react";

// const features = [
//   {
//     icon: <Target className="w-10 h-10" />,
//     title: "Tailored Solutions",
//     description:
//       "Customized strategies designed for your unique business needs.",
//   },
//   {
//     icon: <Users className="w-10 h-10" />,
//     title: "Expert Team",
//     description:
//       "Skilled professionals with deep industry knowledge and experience.",
//   },
//   {
//     icon: <Lightbulb className="w-10 h-10" />,
//     title: "Results-Driven",
//     description:
//       "Focused on delivering measurable results and business impact.",
//   },
//   {
//     icon: <ShieldCheck className="w-10 h-10" />,
//     title: "Reliable Support",
//     description:
//       "Dedicated support team ensuring smooth operations and continuous growth.",
//   },
//   {
//     icon: <Handshake className="w-10 h-10" />,
//     title: "Long-Term Partnership",
//     description:
//       "We grow when you grow. Building true partnerships for lasting success.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="w-full bg-[#f7f7f7] py-10 px-4 ">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center">
//           <p className="text-[#d4a12f] uppercase tracking-[3px] font-semibold text-sm">
//             WHY CHOOSE US
//           </p>

//           <h2 className="text-3xl md:text-5xl font-bold text-[#0c1d4d] mt-3 leading-tight">
//             We Bring{" "}
//             <span className="text-[#d4a12f] relative">
//               Yukti
//               <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#d4a12f] rounded-full"></span>
//             </span>{" "}
//             (Right Solution) to Your Business
//           </h2>
//         </div>

//         {/* Features */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-6">
//           {features.map((item, index) => (
//             <div key={index} className="relative text-center px-4">
//               {/* Vertical Divider */}
//               {index !== features.length - 1 && (
//                 <div className="hidden lg:block absolute top-8 right-0 h-28 w-[1px] bg-[#d4a12f]/30"></div>
//               )}

//               {/* Icon */}
//               <div className="w-20 h-20 mx-auto rounded-full border border-[#d4a12f]/40 flex items-center justify-center text-[#d4a12f] bg-white shadow-sm">
//                 {item.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-[#0c1d4d] text-xl font-bold mt-3">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 text-[15px] leading-7 mt-3">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="relative  rounded-[24px] overflow-hidden bg-[#032b67] px-8 py-8 md:px-12 md:py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
//           {/* Decorative Dots Left */}
//           <div className="absolute left-0 top-0 h-full w-28 opacity-30">
//             <div className="grid grid-cols-6 gap-2 p-4">
//               {Array.from({ length: 60 }).map((_, i) => (
//                 <span
//                   key={i}
//                   className="w-1.5 h-1.5 rounded-full bg-[#f3b13e]"
//                 ></span>
//               ))}
//             </div>
//           </div>

//           {/* Decorative Dots Right */}
//           <div className="absolute right-0 bottom-0 h-full w-28 opacity-30">
//             <div className="grid grid-cols-6 gap-2 p-4">
//               {Array.from({ length: 60 }).map((_, i) => (
//                 <span
//                   key={i}
//                   className="w-1.5 h-1.5 rounded-full bg-[#f3b13e]"
//                 ></span>
//               ))}
//             </div>
//           </div>

//           {/* Left Content */}
//           <div className="relative z-10">
//             <h3 className="text-3xl font-bold text-[#f3b13e]">
//               Ready to Transform Your Business?
//             </h3>

//             <p className="text-white/90 text-lg mt-3 leading-8 max-w-2xl">
//               Let's build the right solutions to drive your people, your brand
//               and your growth.
//             </p>
//           </div>

//           {/* Button */}
//           <button className="relative z-10 bg-[#f3b13e] hover:bg-[#dd9f35] transition-all duration-300 text-[#0c1d4d] font-bold px-8 py-5 rounded-2xl flex items-center gap-3 shadow-xl">
//             Schedule a Free Consultation
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import {
  Target,
  Users,
  Lightbulb,
  ShieldCheck,
  Handshake,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: <Target className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Tailored Solutions",
    description:
      "Customized strategies designed for your unique business needs.",
  },
  {
    icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Expert Team",
    description:
      "Skilled professionals with deep industry knowledge and experience.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Results-Driven",
    description:
      "Focused on delivering measurable results and business impact.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Reliable Support",
    description:
      "Dedicated support team ensuring smooth operations and continuous growth.",
  },
  {
    icon: <Handshake className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Long-Term Partnership",
    description:
      "We grow when you grow. Building true partnerships for lasting success.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#f7f7f7] py-10 lg:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[#d4a12f] uppercase tracking-[3px] font-semibold text-xs sm:text-sm">
            WHY CHOOSE US
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c1d4d] mt-3 leading-tight">
            We Bring{" "}
            <span className="text-[#d4a12f] relative inline-block">
              Yukti
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#d4a12f] rounded-full"></span>
            </span>{" "}
            (Right Solution) to Your Business
          </h2>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mt-10 lg:mt-14">
          {features.map((item, index) => (
            <div key={index} className="relative text-center px-4">
              {/* Vertical Divider */}
              {index !== features.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 h-28 w-[1px] bg-[#d4a12f]/30"></div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full border border-[#d4a12f]/40 flex items-center justify-center text-[#d4a12f] bg-white shadow-sm">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#0c1d4d] text-lg sm:text-xl font-bold mt-5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-[14px] sm:text-[15px] leading-7 mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-14 rounded-[24px] overflow-hidden bg-[#032b67] px-6 py-8 sm:px-8 sm:py-10 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Decorative Dots Left */}
          <div className="absolute left-0 top-0 h-full w-20 sm:w-28 opacity-30">
            <div className="grid grid-cols-6 gap-2 p-4">
              {Array.from({ length: 60 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#f3b13e]"
                ></span>
              ))}
            </div>
          </div>

          {/* Decorative Dots Right */}
          <div className="absolute right-0 bottom-0 h-full w-20 sm:w-28 opacity-30">
            <div className="grid grid-cols-6 gap-2 p-4">
              {Array.from({ length: 60 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#f3b13e]"
                ></span>
              ))}
            </div>
          </div>

          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f3b13e] leading-tight">
              Ready to Transform Your Business?
            </h3>

            <p className="text-white/90 text-base sm:text-lg mt-3 leading-7 sm:leading-8 max-w-2xl">
              Let's build the right solutions to drive your people, your brand
              and your growth.
            </p>
          </div>

          {/* Button */}
          <button className="relative z-10 bg-[#f3b13e] hover:bg-[#dd9f35] transition-all duration-300 text-[#0c1d4d] font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-2xl flex items-center gap-3 shadow-xl text-sm sm:text-base whitespace-nowrap">
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}