import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const cardsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};
interface Props {
  title_1: string;
  title_2: string;
  title_3: string;
  title_4: string;
  desc_1: string;
  desc_2: string;
  schedule_demo_url: string;
  features: Feature[];
}

const HeroSection: React.FC<Props> = ({
  title_1,
  title_2,
  title_3,
  desc_1,
  desc_2,
  features,
  schedule_demo_url,
  title_4,
}) => {
  return (
    <div className="bg-white px-6">
      {/* Hero */}
      <motion.section
        className=" mx-auto px-6 py-8 text-center"
        variants={heroContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="relative">
          {/* Mobile: Back on top | Desktop: Back on left */}
          <div className="flex flex-col gap-3 md:block ">
            <Link
              to="/products"
              className="
        inline-flex w-fit items-center gap-2
        rounded-lg px-3 py-2
        text-sm font-semibold text-black
        hover:bg-slate-100 hover:underline
        focus:outline-none focus:ring-2 focus:ring-red-200
     md:absolute md:left-0 md:top-0 
      "
              aria-label="Back to products"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
              <span className="text-base md:text-lg">Back</span>
            </Link>

            {/* Title (always centered) */}
            <motion.h1
              variants={fadeUp}
              className="text-center text-3xl md:text-5xl font-bold text-black leading-tight"
            >
              {title_1}
            </motion.h1>
          </div>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-red-600 mt-2"
        >
          {title_2}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="max-w-3xl mx-auto mt-6 text-gray-600"
        >
          {desc_1}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col xs:flex-row justify-center gap-4 mt-8"
        >
          <Link
            to={schedule_demo_url}
            target="_blank"
            className="bg-red-600 text-white text-nowrap px-6 py-3 rounded-lg"
          >
            See the product in action
          </Link>

          <Link
            to={"/contact-us"}
            className="border text-nowrap border-red-600 text-red-600 px-6 py-3 rounded-lg"
          >
            Request Pricing
          </Link>
        </motion.div>
      </motion.section>

      {/* Features */}
      <motion.section
        className="px-6 pb-20"
        variants={cardsContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-center text-black">
          {title_3}
          <span className="text-red-600"> {title_4}</span>
        </h3>
        <p className="text-center text-gray-600 mt-2">{desc_2}</p>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((f, i) => (
            <motion.div
              key={i + "index"}
              variants={cardAnim}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-gradient-to-br from-[#FEF2F2] to-[#FFFFFF] rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h4 className="font-semibold text-lg">{f.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};
export default HeroSection;
