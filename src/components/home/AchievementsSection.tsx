import React from "react";
import backgroundImage from "../../assets/image/image12.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "../ui/CountUp";

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      number: 100,
      title: "Projects delivered on time",
      char: "+",
    },
    // {
    //   number: "5+",
    //   title: "Years of operation",
    // },
    {
      number: 50,
      title: "Expert Teams",
      char: "+",
    },
    {
      number: 100,
      title: "Customer Satisfaction",
      char: "%",
    },
  ];

  return (
    <>
      <div className="relative w-full">
        {/* Dashed Center Fade Grid */}
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
              repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
              radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
            `,
            WebkitMaskImage: `
              repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
              repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
              radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        {/* Achievements Content */}
        <section className="flex relative flex-col justify-center items-center px-4 py-2 w-full">
          {/* Heading */}
          <motion.div
            className="flex flex-col justify-center items-center text-center max-w-8xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Our <span className="text-red-600">Achievements</span>
            </h2>
            <div className="mx-auto my-4 mb-6 w-12 h-1 bg-red-500 rounded-full"></div>
          </motion.div>

          {/* Achievements Cards */}
          <motion.div
            className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-8xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index + "index"}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className="flex flex-col justify-center items-center p-8 bg-white rounded-2xl transition-shadow duration-300 hover:shadow-xl"
              >
                <h3 className="mb-2 text-5xl font-bold text-gray-900">
                  <CountUp
                    from={0}
                    to={item.number}
                    separator=","
                    direction="up"
                    duration={1}
                  />{" "}
                  {item.char}
                </h3>
                <p className="text-center text-gray-600">{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      {/* SAP CTA Section */}
      <div className="px-4 py-4 rounded-3xl md:px-8">
        <div
          className="relative w-full rounded-3xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(241, 64, 64, 0.1) 0%, rgba(147, 27, 27, 0) 100%)",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="absolute inset-0 z-0 rounded-3xl"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)
              `,
            }}
          />

          <section className="z-10 px-6 py-4 w-full text-white rounded-3xl lg:py-10">
            <motion.div
              className="grid grid-cols-1 gap-10 items-center mx-auto max-w-8xl lg:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.25 } },
              }}
            >
              {/* Left Heading */}
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7 },
                  },
                }}
                className="text-3xl font-semibold text-black lg:text-5xl"
              >
                Ready to Elevate Your <br />
                Business?
              </motion.h2>

              {/* Right Content */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7 },
                  },
                }}
                className="flex flex-col space-y-8 lg:items-start md:space-y-10"
              >
                <p className="max-w-lg text-base font-normal leading-relaxed text-black">
                  Let’s make your IT team deliver smarter architecture, cleaner
                  data, and real business results. Talk to us about what’s
                  holding you back.
                </p>

                <Link
                  to="/contact-us"
                  className="w-fit text-red-500 font-bold hover:bg-red-700 border border-red-600 
                  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 transition-all duration-300 
                  hover:shadow-lg shadow-md hover:scale-105 hover:text-white"
                >
                  Connect with Us
                </Link>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AchievementsSection;
