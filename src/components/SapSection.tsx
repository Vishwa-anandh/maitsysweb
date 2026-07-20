import React from "react";
import image9 from "../assets/image/image5.png";
import { Link } from "react-router-dom";

const SapSection: React.FC = () => {
  return (
    <section
      className="relative w-full  bg-cover bg-center flex items-center text-white py-6"
      style={{
        backgroundImage: `url(${image9})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Left Side Content */}
      <div className="relative z-10 px-8  max-w-xl">
        <h4 className="text-3xl md:text-5xl font-bold mb-4">
          Empowering Businesses with SAP Solutions
        </h4>
        <p className="text-base md:text-lg opacity-90 mb-6">
          Accelerate your business transformation with SAP integration and
          optimization. Gain real-time insights, improve efficiency, and drive
          smarter growth.
        </p>
        <Link
          to="/contact-us"
          className="text-white bg-red-600 hover:bg-red-700 border border-red-600 
              font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 transition-all duration-300 
              hover:shadow-lg shadow-md hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default SapSection;
