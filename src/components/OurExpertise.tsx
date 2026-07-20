import React from "react";

const OurExpertise: React.FC = () => {
  return (
    <div className="w-full relative">
      {/* Dashed Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      {/* Your Content/Components */}
      <section className="relative bg-gradient-to-br  py-11 px-6 lg:px-12 overflow-hidden">
        {/* subtle red tint background */}

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-red-600">Expertise</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Empowering enterprises with technology-driven solutions, intelligent
            automation, and digital innovation.
          </p>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseData.map((item, index) => (
              <div
                key={index + "index"}
                className="bg-white rounded-2xl p-8 border border-red-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-red-100 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurExpertise;

// Expertise Data
const expertiseData = [
  {
    title: "SAP Implementation",
    description:
      "Transform your enterprise operations with SAP integration and optimization — enabling real-time insights and streamlined workflows.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-red-600 group-hover:text-white transition-all"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description:
      "Migrate and modernize securely with AWS, Azure, or GCP — ensuring scalability and high performance for your digital ecosystem.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-red-600 group-hover:text-white transition-all"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-10 5.002 5.002 0 10-9.78 2.1A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
  {
    title: "AI & Automation",
    description:
      "Leverage AI-powered automation and analytics to simplify operations and drive smarter, faster decision-making.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-red-600 group-hover:text-white transition-all"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "IT Infrastructure",
    description:
      "Reliable and scalable IT infrastructure management to keep your business operations secure and always-on.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-red-600 group-hover:text-white transition-all"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
    ),
  },
];
