import type React from "react";
import backgroundImage from "../../assets/image/image12.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WhyChooseUs: React.FC = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const floatGlow = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  const dotColors: string[] = ["bg-green-500", "bg-yellow-500", "bg-red-500"];

  return (
    <div className="overflow-hidden px-4 py-2 w-full lg:px-8">
      <div className="mx-auto space-y-4 max-w-8xl md:space-x-10">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
            Why Choose <span className="text-red-600">Us?</span>
          </h1>
          <div className="mx-auto w-20 h-1 bg-red-600 rounded"></div>
        </motion.div>

        {/* Main Innovation Section */}
        <div className="grid grid-cols-1 gap-8 py-4 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.h2
                className="mb-4 text-2xl font-bold text-gray-800"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Accelerate Innovation
              </motion.h2>
              <motion.p
                className="mb-6 leading-relaxed text-gray-600"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Ensure seamless compatibility with your existing technology
                ecosystem and scale effortlessly as your business grows. Powered
                by AI-driven automation, cloud-native engineering, and deep
                industry expertise, we streamline development, remove
                bottlenecks, and accelerate time-to-market.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {[
                  { text: "Auto Scaling", color: "text-blue-700" },
                  { text: "Lean Six Sigma", color: "text-green-700" },
                  { text: "Cloud Tools", color: "text-purple-700" },
                  { text: "AI", color: "text-red-700" },
                ].map((tag, i) => (
                  <motion.span
                    key={i + "index"}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
                    variants={{
                      hidden: { opacity: 0, y: 5 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {tag.text}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Rotating & floating red background */}
              <motion.div
                className="absolute -inset-4 bg-red-200 rounded-3xl opacity-50"
                initial={{ rotate: 0, scale: 0.95, opacity: 0 }}
                whileInView={{
                  rotate: [0, 8, 4], // subtle bounce
                  scale: [0.95, 1, 0.98],
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
              />

              {/* Main Card */}
              <motion.div
                className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0px 20px 30px rgba(0,0,0,0.2)",
                }}
              >
                <div className="space-y-4">
                  {[
                    { text: "Real-time Scaling" },
                    { text: "Methodology Driven" },
                    { text: "Seamless Integration" },
                  ].map((item, index) => (
                    <motion.div
                      key={index + 'index'}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2 + index * 0.2,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${dotColors[index]}`}
                      ></div>

                      <span className="text-sm text-gray-600">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          className="relative py-4 text-white rounded-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="relative w-full rounded-3xl"
            style={{
              background:
                "linear-gradient(90deg, rgba(241, 64, 64, 0.1) 0%, rgba(147, 27, 27, 0) 100%)",
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Floating Glow Effect */}
            <motion.div
              className="absolute inset-0 z-0 rounded-3xl"
              variants={floatGlow}
              animate={{
                opacity: [0.8, 1, 0.8],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              style={{
                backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)`,
              }}
            />

            {/* Content Grid */}
            <motion.div
              className="grid z-10 grid-cols-1 gap-8 items-center p-5 lg:grid-cols-3"
              variants={stagger}
            >
              {/* Left Text Section */}
              <motion.div className="w-full lg:col-span-2" variants={fadeUp}>
                <motion.h2
                  className="mb-4 text-3xl font-bold text-black"
                  variants={fadeUp}
                >
                  Security, Cloud & IT Auditing
                </motion.h2>

                <motion.p
                  className="w-full text-lg leading-relaxed text-black text-pretty sm:text-sm"
                  variants={fadeUp}
                >
                  As your requirements evolve and industries undergo changes, we
                  employ discrete solution portfolio audits to ensure that you
                  always have access to the most suitable and top-tier options
                  available.
                </motion.p>
              </motion.div>

              {/* Right Floating Card */}
              <motion.div
                className="flex overflow-x-hidden justify-center w-full lg:justify-end"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-block relative">
                  <motion.div
                    className="p-6 rounded-2xl border border-b-2 backdrop-blur-sm bg-white/20 will-change-transform"
                    whileHover={{
                      scale: 1.03, // ⭐ reduce from 1.05
                      y: -4, // ⭐ reduce from -6
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <div className="mb-2 text-2xl font-bold text-black">
                        360°
                      </div>
                      <div className="text-sm text-black">
                        Comprehensive Audit
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 items-center py-2 lg:grid-cols-2">
          {/* Left Visual */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden relative p-8 text-white bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl">
              <div className="relative z-10">
                <h3 className="mb-4 text-xl font-semibold">
                  Network Advantage
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">
                      Maitsys-Exclusive Consultants
                    </span>
                    <span className="font-bold">10,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Preferred Rates</span>
                    <span className="font-bold text-green-400">Up to 80%</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full opacity-20 translate-x-16 -translate-y-16"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Off-Book Rates
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Collaboration offers its benefits, including the ability to
              advocate for preferential agreements on behalf of our extensive
              network of consultants, positioning us advantageously in
              negotiations.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex justify-center items-center w-12 h-12 bg-orange-100 rounded-xl">
                <svg
                  className="w-6 h-6 text-orange-600"
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
              <span className="font-medium text-gray-700">
                Leverage our collective bargaining power
              </span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pt-5 pb-6 text-center">
          <Link
            to={`/careers#apply-now`}
            className="inline-block px-8 py-4 font-semibold text-white bg-red-600 rounded-2xl shadow-lg transition-all duration-300 transform hover:bg-red-700 hover:scale-105 hover:shadow-xl"
          >
            Start Your Journey With Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
