import React from "react";
import backgroundImage from "../assets/image/image1.png"; // put your uploaded image in src/assets

const industries = [
  "Technology",
  "Manufacturing",
  "Education",
  "Healthcare",
  "Retail",
  "Financial Services",
  "Federal Government",
  "Consumer Goods",
];

const IndustriesServed: React.FC = () => {
  return (
    <section
      className="relative py-10  md:py-28"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Subtle animated background effect */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,0,0.15),transparent_60%),radial-gradient(circle_at_top_right,rgba(255,0,0,0.1),transparent_60%)] pointer-events-none" /> */}

      <div className="relative z-10  mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-3">
          Industries <span className="text-red-500">Served</span>
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-12">
          Discover how our unmatched business IT solutions can be customized to
          align precisely with your unique business requirements, regardless of
          your industry.
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {industries.map((industry, index) => (
            <div
              key={index + "index"}
              className="group flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-medium mb-3 text-white group-hover:text-red-500 transition-colors duration-300">
                {industry}
              </h3>
              {/* Decorative red border line */}
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full transition-all duration-500 group-hover:w-32" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
