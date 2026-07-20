import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundImage from "../../../assets/image/image12.webp";
type Props = {
  title: string;
  description: string;
  title_className?: string;
  url: string;
  linkName: string;
};
const QuickViewUi: React.FC<Props> = ({
  title,
  description,
  url,
  linkName,
  title_className,
}) => {
  return (
    <section className="bg-white pb-6">
      <div className=" rounded-3xl  w-full flex flex-col items-center justify-center mx-auto">
        <div
          className="w-full relative rounded-3xl py-4"
          style={{
            background:
              "linear-gradient(90deg, rgba(241, 64, 64, 0.1) 0%, rgba(147, 27, 27, 0) 100%)",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
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

          <section className="w-full text-white px-2  md:px-6 rounded-3xl">
            <motion.div
              className=" flex flex-col items-center py-4 "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.25 } },
              }}
            >
              <div className="flex flex-col items-center max-w-xl  text-pretty">
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
                  className={
                    title_className ||
                    `text-3xl text-black lg:text-5xl font-bold text-center  leading-tight lg:leading-[1.15]`
                  }
                >
                  {title}
                </motion.h2>
              </div>

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
                className="flex flex-col items-center "
              >
                <p className="text-gray-600 text-center  font-medium text-lg leading-relaxed max-w-xl py-4">
                  {description}
                </p>

                <Link
                  to={url}
                  className="w-fit text-red-500 font-bold hover:bg-red-700 border border-red-600 
                  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 transition-all duration-300 
                  hover:shadow-lg shadow-md hover:scale-105 hover:text-white z-50"
                >
                  {linkName}
                </Link>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default QuickViewUi;
