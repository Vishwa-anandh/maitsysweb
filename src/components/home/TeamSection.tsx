import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import linkedin from "../../assets/image/icons/linkedin.svg";
import mani from "../../assets/image/leaders/mani.png";
import ineshPandi from "../../assets/image/leaders/IneshPandi.png";
import type React from "react";
import type { Variants } from "framer-motion";

export interface Member {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
}

const members: Member[] = [
  {
    name: "Mani Pandi",
    role: "Founder and CEO, Maitsys",
    image: mani,
    linkedin: "https://www.linkedin.com/in/mani-pandi-38a6432/",
  },
  {
    name: "Inesh Pandi",
    role: "Partner & Global Vice President, Maitsys",
    image: ineshPandi,
    linkedin: "https://www.linkedin.com/in/ineshpandi/",
  },
  // {
  //   name: "Mani Pandi",
  //   role: "Founder and CEO, Matsys",
  //   image: mani,
  //   linkedin: "#",
  // },
  // {
  //   name: "Inesh Pandi",
  //   role: "Partner & Global Vice President, Matsys",
  //   image: mani,
  //   linkedin: "#",
  // },
];
// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      duration: 0.8,
    },
  },
};

const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      delay: 0.2,
    },
  },
};

const TeamSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2, // Trigger when 20% of component is visible
  });

  return (
    <motion.section
      ref={ref}
      className="w-full max-w-8xl mx-auto px-4 md:px-8 py-16"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* ---- TOP TEXT ---- */}
      <div className="flex items-end justify-between mb-5">
        <div>
          <motion.div
            className="inline-block bg-gray-100 px-4 py-1 rounded-full text-sm text-gray-800 mb-2 font-semibold"
            variants={badgeVariants}
          >
            About us
          </motion.div>

          <motion.h2
            className="text-4xl font-bold leading-tight max-w-2xl"
            variants={headerVariants}
          >
            Driven by Expertise. Powered by{" "}
            <motion.span
              className="text-red-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              Innovation.
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-gray-600 mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            We're not just IT consultants—we're your strategic partners, using
            SAP, AI, and deep industry expertise to drive smart, secure, and
            future-ready transformation.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Link
            to={"/about-us#leaders"}
            className="hidden md:block bg-red-500 text-white px-6 py-2 rounded-md font-medium hover:bg-red-600 transition"
          >
            See All
          </Link>
        </motion.div>
      </div>

      {/* ---- TEAM GRID ---- */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
      >
        {members.map((m, i) => (
          <motion.div
            key={i + "index"}
            variants={itemVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
          >
            <Link
              to={m.linkedin || "#"}
              className="bg-white min-h-[260px] flex flex-col group"
            >
              {/* Image box with hover effect */}
              <motion.div
                className="relative  w-full h-full xs:w-[240px] xs:h-[230px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {m.image ? (
                  <motion.img
                    src={m.image}
                    className="w-full h-full object-fill "
                    alt={m.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <div className="text-gray-300 text-xl">No Image</div>
                )}

                {m.linkedin && (
                  <motion.a
                    href={m.linkedin}
                    target="_blank"
                    className="absolute bottom-1 right-3  rounded-full p-2 shadow-lg"
                    whileHover={{ scale: 1.2, backgroundColor: "#0077b5" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.img
                      src={linkedin}
                      className="w-6 h-6"
                      alt="LinkedIn"
                      whileHover={{ filter: "brightness(0) invert(1)" }}
                    />
                  </motion.a>
                )}

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
                  initial={false}
                />
              </motion.div>

              {/* Name + Role */}
              <motion.h3
                className="font-semibold text-gray-800 mt-4 group-hover:text-red-500 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {m.name}
              </motion.h3>
              <motion.p
                className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {m.role}
              </motion.p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile "See All" Button */}
      <motion.div
        className="md:hidden flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Link
          to={"about-us"}
          className="bg-red-500 text-white px-6 py-2 rounded-md font-medium hover:bg-red-600 transition"
        >
          See All
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default TeamSection;
