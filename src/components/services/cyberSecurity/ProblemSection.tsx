import { motion, type Variants } from "framer-motion";

const issues = [
  "Growing vulnerability backlogs",
  "Missed patch windows",
  "Repeated audit findings",
  '"Accepted risk" becoming permanent risk',
];

const TriangleAlert = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e53e3e"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const ProblemSection = () => {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 30, scale: 0.98 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };
  return (
    <section className="flex items-center px-4 py-4 mx-auto font-sans bg-white lg:py-8 max-w-9xl lg:px-8">
      <motion.div
        className="grid grid-cols-1 gap-12 items-center mx-auto w-full problem-section max-w-8xl lg:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Left Column */}
        <motion.div className="flex flex-col gap-6" variants={fadeUp}>
          {/* Tag */}
          <motion.div className="inline-flex w-fit" variants={fadeUp}>
            <span className="px-3 py-1 text-xs font-semibold tracking-widest text-red-700 bg-red-50 rounded-full border border-red-300">
              The Problem
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl font-black tracking-tight leading-tight lg:text-6xl text-gray-950"
            variants={fadeUp}
          >
            Most vendors stop at scanning
          </motion.h2>

          {/* Description */}
          <motion.p
            className="max-w-lg text-base leading-relaxed text-gray-500"
            variants={fadeUp}
          >
            Security vendors generate reports. Internal teams struggle with
            limited time and resources to actually fix the issues.
          </motion.p>

          {/* Issue List */}
          <motion.ul className="flex flex-col gap-3 mt-2" variants={container}>
            {issues.map((issue, i) => (
              <motion.li
                key={i + "index"}
                variants={itemVariant}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex gap-3 items-center px-4 py-3 bg-red-50 rounded-lg border-l-2 border-red-500"
              >
                <motion.span
                  className="shrink-0"
                  initial={{ rotate: -8, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <TriangleAlert />
                </motion.span>
                <span className="text-base text-gray-800">{issue}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Column — Result Card */}
        <motion.div
          className="flex justify-center items-center"
          variants={slideInRight}
        >
          <motion.div
            className="flex flex-col gap-5 items-center p-10 w-full max-w-full text-center rounded-2xl border-4 border-red-500 shadow-sm"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Icon */}
            <motion.div
              className="flex justify-center items-center w-16 h-16 bg-red-100 rounded-full animate-pulse"
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e53e3e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-xl font-bold text-gray-900 lg:text-2xl"
              variants={fadeUp}
            >
              The Result?
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-base leading-relaxed text-gray-500"
              variants={fadeUp}
            >
              Growing backlogs, missed patches, and risks that never actually
              get fixed.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default ProblemSection;
