import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden relative justify-center items-center w-full 2xl:h-full">
      <img
        src="/assets/image9.webp"
        alt="Maitsys banner"
        title="Maitsys banner"
        className="object-cover absolute inset-0 w-full h-full"
        loading="eager"
        fetchPriority="high"
      />
      {/* Content */}
      <motion.div
        className="relative z-10 px-4 pt-4 pb-6 mx-auto text-center md:pt-4 md:pb-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25,
              delayChildren: 0.2,
            },
          },
        }}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-4 text-lg font-semibold tracking-widest text-red-500 2xl:mb-10"
        >
          Innovation at Core
        </motion.p>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 max-w-3xl text-4xl font-bold text-gray-900 sm:text-6xl text-pretty"
        >
          <span className="text-red-600 block leading-[1.2]">
            Your Trusted Partner
          </span>
          <span className="block leading-[1.2]">
            in Enterprise Digital Transformation
          </span>
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-6 max-w-2xl text-lg text-gray-700 lg:text-xl 2xl:mb-12 text-pretty"
        >
          At Maitsys, we craft scalable solutions delivering real impact for
          Fortune 500 enterprises.
        </motion.p>
      </motion.div>

      {/* Bottom white fade effect */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
