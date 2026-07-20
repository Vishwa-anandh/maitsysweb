import React, { useState } from "react";
import backgroundImage from "../assets/image/animatebg.avif"; // put your uploaded image in src/assets

const AboutUs: React.FC = () => {
  const [particles] = useState(() => {
    return Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
  });

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        objectFit: "cover",
        objectPosition: "50% 50%",
        backgroundPosition: "cover",
        backgroundAttachment: "fixed",
        // background-attachment: scroll;
      }}
      className="relative py-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Animated Orbs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Floating Particles */}
        {particles.map((particle, i) => (
          <div
            key={i + "index"}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-150" />
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-300" />
            </div>
            <span className="text-white/80 text-xs font-semibold tracking-wider">
              ABOUT MAITSYS
            </span>
          </div>

          <h1 className="text-5xl md:text-3xl lg:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
              Us
            </span>
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-transparent mx-auto mb-8 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - The Maitsys Promise */}
          <div className="group relative">
            {/* Background Card */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 hover:border-red-500/30 transition-all duration-500 hover:transform hover:-translate-y-2">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/20 to-transparent rounded-tr-3xl rounded-bl-3xl" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    The Maitsys Promise
                  </h2>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We prioritize your needs. Our dedication to delivering
                    exceptional service encompasses every stage, from the
                    initial discussions to anticipating and fulfilling your
                    organization's future needs and opportunities.
                  </p>

                  {/* Feature Points */}
                  <div className="space-y-4">
                    {[
                      "End-to-end service excellence",
                      "Future-ready solutions",
                      "Client-centric approach",
                      "Proactive opportunity identification",
                    ].map((feature, index) => (
                      <div
                        key={index + "index"}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full group-hover/item:scale-150 transition-transform duration-300" />
                        <span className="text-gray-400 group-hover/item:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r  from-red-500 to-transparent group-hover:w-3/4 transition-all duration-1000 delay-300" />
              </div>
            </div>
          </div>

          {/* Right Column - Adaptability & Scope */}
          <div className="group relative">
            {/* Background Card */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:-translate-y-2">
              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-tl-3xl rounded-br-3xl" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Adaptability & Scope
                  </h2>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    At Maitsys, our mission is to empower organizations through
                    innovative, cost-effective, and tailored solutions. With an
                    agile mindset, we prioritize delivering high-quality
                    services that exceed customer expectations.
                  </p>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    Leveraging cutting-edge technologies, experienced resources,
                    and hiring consultants, we drive digital transformation and
                    foster lasting partnerships through our creativity.
                  </p>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-transparent group-hover:w-3/4 transition-all duration-1000 delay-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
