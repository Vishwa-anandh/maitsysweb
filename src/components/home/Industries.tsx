import React from "react";
import { motion } from "framer-motion";

const industries = [
  "Manufacturing",
  "Government",
  "Retail",
  "Consumer Products",
  "Financial Services",
  "Healthcare",
  "High Tech",
  "Transportation ",
  "Chemicals & Life Sciences",
  "Energy & Utilities",
];

const Industries: React.FC = () => {
  return (
    <section className="w-full py-10 bg-white flex flex-col items-center px-4">
      {/* Heading Animation Wrapper */}
      <motion.div
        className="max-w-8xl mx-auto text-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          },
        }}
      >
        <h3 className="text-3xl flex text-center w-full items-center justify-center gap-2 md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {"Industries"}
          <span className="block text-red-600">Served</span>
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover how our unmatched business IT solutions can be customized to
          align precisely with your unique business requirements, regardless of
          your industry.
        </p>
      </motion.div>

      {/* Circles Animation */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-6 max-w-8xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {industries.map((item, index) => (
          <motion.div
            key={index + "index"}
            animate={{ rotate: 360 }}
            variants={{
              hidden: { opacity: 0, scale: 0.4, y: 40 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                  bounce: 0.3,
                },
              },
            }}
            className="w-28 text-pretty h-28 md:w-32 md:h-32 bg-red-600 rounded-full flex items-center justify-center text-white font-medium text-center shadow-lg px-4"
          >
            {item.includes("&") ? (
              <span className="leading-tight">
                {item.split("&").map((part, i) => (
                  <span key={i + "index"} className="block">
                    {part.trim()}
                    {i === 0 && <span className="block">&</span>}
                  </span>
                ))}
              </span>
            ) : (
              item
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Industries;
