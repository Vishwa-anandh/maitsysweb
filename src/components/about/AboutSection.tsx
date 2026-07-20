import React from "react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section className="overflow-hidden px-4 py-5 bg-white md:py-9 lg:px-8">
      <div className="flex flex-col-reverse gap-8 items-center mx-auto max-w-8xl lg:flex-row">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4 text-center lg:text-start"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl"
          >
            Driving Digital Transformation <br />
            <span className="text-red-600">with SAP Innovation</span>
          </motion.h2>

          {/* Paragraphs stagger animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.25 } },
            }}
          >
            {[
              `Maitsys a trusted global SAP consulting partner helping organizations modernize their enterprise landscape through SAP S/4HANA, SAP BTP, and AI-driven analytics.`,
              `Our consulting teams combine deep industry expertise with proven SAP delivery experience to help clients unlock agility, efficiency, and innovation across retail, fashion, manufacturing, consumer goods, and public sector domains.`,
              `With innovative platforms and accelerators, Maitsys delivers measurable business value turning SAP transformation into a competitive advantage.`,
            ].map((text, index) => (
              <motion.p
                key={index + "index"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="py-2 text-base leading-relaxed text-gray-600 text-pretty"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="overflow-hidden relative w-full h-64 rounded-xl border border-gray-100 shadow-sm lg:h-80"
        >
          <img
            src={"/assets/sapimage1.webp"}
            alt="SAP Consulting"
            title="SAP Consulting"
            className="object-cover w-full h-full rounded-xl transition-transform duration-700 transform hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-br to-transparent from-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
