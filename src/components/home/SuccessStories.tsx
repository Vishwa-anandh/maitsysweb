import { useEffect, useState } from "react";
import image4 from "../../assets/image/image4.png";
import image2 from "../../assets/image/image16.png";
import image5 from "../../assets/image/image15.png";
import image1 from "../../assets/image/image17.png";
import { AnimatePresence, motion } from "framer-motion";

const fadeSlide = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 2, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.5 },
};

export default function Slider() {
  const slides = [
    {
      title: "SAP S/4HANA",
      subtitle: "Transformation Boosts Efficiency by 40%",
      description:
        "We helped a leading enterprise modernize its legacy systems with SAP S/4HANA and intelligent automation boosting efficiency by 40%, improving data visibility, and enabling smarter, faster decision making.",
      image: image1,
    },
    {
      title: "SAP Cloud Solutions",
      subtitle: "Driving Scalable Growth",
      description:
        "Our SAP cloud migration enabled seamless scalability, reduced infrastructure cost, and improved performance for global operations.",
      image: image2,
    },
    {
      title: "Intelligent Automation",
      subtitle: "Enhancing Decision Intelligence",
      description:
        "We implemented AI-driven automation to streamline workflows, optimize processes, and empower data-driven decision making.",
      image: image4,
    },
    {
      title: "Intelligent Automation lass",
      subtitle: "Enhancing Decision Intelligence",
      description:
        "We implemented AI-driven automation to streamline workflows, optimize processes, and empower data-driven decision making.",
      image: image5,
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  // AUTO PLAY
  useEffect(() => {
    if ((globalThis as any).__snapshot) return;
    const auto = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(auto);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getVisibleSlides = () => {
    return [
      slides[(current - 1 + slides.length) % slides.length], // left
      slides[current], // big card (left side)
      slides[(current + 1) % slides.length], // center image
      slides[(current + 2) % slides.length], // right image
    ];
  };

  const [bigCard, centerImg, rightImg] = getVisibleSlides();

  return (
    <div className="w-full  flex flex-col space-y-7 items-center justify-center py-4">
      <motion.div
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
        className="w-full max-w-8xl flex flex-col items-center md:items-start px-4 md:px-8  space-y-3"
      >
        <h1 className="text-3xl flex text-center gap-2  lg:text-4xl xl:text-5xl font-bold text-gray-900 ">
          Success <span className="block text-red-600">Stories</span>
        </h1>
        <p className="text-sm md:text-lg text-center md:text-start text-gray-600 max-w-3xl text-pretty">
          Discover how Maitsys has helped businesses transform with SAP, Cloud,
          and AI—driving measurable efficiency, growth, and innovation.
        </p>
      </motion.div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl px-4 md:px-8 w-full ">
        <AnimatePresence mode="wait">
          <motion.div
            key={bigCard.title}
            {...fadeSlide}
            className="w-full h-[400px] sm:h-[460px] bg-black rounded-2xl overflow-hidden relative"
          >
            <img
              src={bigCard.image}
              alt={bigCard.title}
              title={bigCard.title}
              className="w-full h-full object-cover opacity-40"
            />

            <div className="absolute top-4 left-0 p-6 text-white">
              <h3 className="text-3xl font-bold">{bigCard.title}</h3>
              <p className="text-lg mt-2 mb-4 font-medium">
                {bigCard.subtitle}
              </p>
              <p className="text-lg py-4">{bigCard.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className=" w-full  overflow-hidden hidden sm:flex">
          <div className={`flex flex-col items-start gap-6`}>
            <img
              src={centerImg.image}
              alt={centerImg.title}
              title={centerImg.title}
              className={`w-full h-[360px] object-cover rounded-2xl`}
            />
            <div className={` flex items-center justify-center gap-4 `}>
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 hover:bg-gray-100"
              >
                <svg
                  className="w-5 h-5 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
              </button>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600"
              >
                <svg
                  className="w-5 h-5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full  overflow-hidden hidden lg:flex">
          <img
            src={rightImg.image}
            alt={rightImg.title}
            title={rightImg.title}
            className="w-full  object-cover rounded-2xl  h-[360px]"
          />
        </div>
      </div>
      <div className={`block sm:hidden `}>
        <div className={`  flex items-center justify-center gap-4 `}>
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 hover:bg-gray-100"
          >
            <svg
              className="w-5 h-5 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
          </button>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600"
          >
            <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
