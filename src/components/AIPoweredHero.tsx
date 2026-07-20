import React from "react";

import backgroundImage from "../assets/image/image7.png"; // put your uploaded image in src/assets
import { Link } from "react-router-dom";

const AIPoweredHero: React.FC = () => {
  return (
    <section
      className="relative w-full h-[100vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 lg:px-16 text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            AI-Powered
          </span>{" "}
          Digital Transformation & IT Services
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-2xl">
          We help businesses scale their operations with unique AI-enabled
          software solution development and seamless AI integration services.
        </p>
        <div className={`mt-8`}>
          <Link
            to="/contact-us"
            className="text-white  bg-red-600 hover:bg-red-700 border mt-8 border-red-600 
              font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 transition-all duration-300 
              hover:shadow-lg shadow-md hover:scale-105"
          >
            Let’s Discuss
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIPoweredHero;
