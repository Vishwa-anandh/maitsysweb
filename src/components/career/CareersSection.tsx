"use client";
import React from "react";
import { motion } from "framer-motion";

import image1 from "../../assets/image/CompetitiveCompensation.svg";
import image2 from "../../assets/image/GlobalOpportunities.svg";
import image3 from "../../assets/image/LearningDevelopment.svg";
import image4 from "../../assets/image/HealthWellness.svg";
import image5 from "../../assets/image/FlexibleWork.svg";
import image6 from "../../assets/image/CuttingEdgeTechnology.svg";

const CareersSection: React.FC = () => {
  const companyBenefits = [
    {
      icon: image1,
      title: "Competitive Compensation",
      description:
        "Industry-leading salaries with performance bonuses and equity options",
    },
    {
      icon: image2,
      title: "Global Opportunities",
      description:
        "Work with international clients and teams across Boston and India",
    },
    {
      icon: image3,
      title: "Learning & Development",
      description:
        "Annual training budget and certification support for skill enhancement",
    },
    {
      icon: image4,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and mental health coverage",
    },
    {
      icon: image5,
      title: "Flexible Work",
      description: "Hybrid and remote work options with flexible scheduling",
    },
    {
      icon: image6,
      title: "Cutting-Edge Technology",
      description:
        "Access to latest tools and technologies for professional growth",
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative pt-4 md:pt-6"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
          <div className="text-center mb-8">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4"
            >
              Maitsys{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Careers
              </span>
            </motion.h1>

            {/* Red underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-1 bg-gradient-to-r from-red-600 via-red-400 to-transparent mx-auto mb-6 rounded-full origin-left"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-6"
            >
              Embark on a career with Maitsys, a global leader in AI, SAP ERP,
              Cloud Migration, and IT Infrastructure Services. With offices in
              Boston and India, we’re committed to attracting the best talent.
            </motion.p>

            {/* Highlight Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-red-500/10 to-red-400/10 backdrop-blur-sm 
                         border border-red-500/20 rounded-2xl p-6 max-w-2xl mx-auto"
            >
              <p className="text-lg text-slate-900 font-semibold italic">
                "Maitsys: Where only the best become the brightest."
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
          },
        }}
        viewport={{ once: true }}
        className="relative py-4 max-w-8xl"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Join Maitsys?
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              We invest in our team's growth and well-being with comprehensive
              benefits and opportunities.
            </p>
          </motion.div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <motion.div
                key={index + "index"}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group p-6 bg-gradient-to-br from-white/80 to-red-50/40 backdrop-blur-md 
                          border border-red-300/40 rounded-2xl shadow-md transition-all duration-500
                          hover:border-red-500/50 hover:-translate-y-2"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    title={benefit.title}
                    width={48}
                    height={32}
                    className="h-12 w-auto filter brightness-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CareersSection;
