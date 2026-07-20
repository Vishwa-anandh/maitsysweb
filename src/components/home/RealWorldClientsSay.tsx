import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Olivia Brown",
    location: "Boston, USA",
    quote:
      "Working with Maitsys was a smooth experience from day one. They understood our challenges quickly and delivered a design that made our platform far more engaging.",
  },
  {
    name: "Daniel Rodriguez",
    location: "California, USA",
    quote:
      "Their technical approach and clarity in communication made a big difference for us. The solution Maitsys built has noticeably reduced our team’s workload.",
  },
  {
    name: "Priya Sharma",
    location: "Chennai, India",
    quote:
      "We appreciated how flexible and quick Maitsys was throughout the project. The updated interface has been very well received by our users.",
  },
  {
    name: "Ethan Walker",
    location: "Texas, USA",
    quote:
      "The transition to our new system — handled by Maitsys — was smooth and reliable. The team made the entire process easier than we expected.",
  },
  {
    name: "Isabella Carter",
    location: "Boston, USA",
    quote:
      "Maitsys brought fresh ideas and delivered a digital experience that aligned perfectly with our brand. We've already started seeing improved engagement.",
  },
  {
    name: "Liam Nguyen",
    location: "Seattle, USA",
    quote:
      "Their blend of creativity and problem-solving stood out. Maitsys’s solution has opened up new opportunities for our roadmap.",
  },
  {
    name: "Sophia Lee",
    location: "Madurai, India",
    quote:
      "From the first discussion to launch, Maitsys handled everything with clarity and professionalism. The final product truly matched the vision we had in mind.",
  },
  {
    name: "Noah Johnson",
    location: "Saudi Arabia",
    quote:
      "Working with Maitsys was seamless. Their process kept us informed at every stage, making the entire journey stress-free.",
  },
];

interface CardStyle {
  scale: number;
  opacity: number;
  zIndex: number;
  y: number;
  x: number;
  rotate: number;
}

const RealWorldClientsSay: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || (globalThis as any).__snapshot) return;
    const intervalRef = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(intervalRef);
  }, [isPaused]);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getCardStyle = (layerIndex: number): CardStyle => {
    const styles: CardStyle[] = [
      { scale: 1, opacity: 1, zIndex: 40, y: 0, x: 0, rotate: 0 },
      { scale: 0.95, opacity: 0.9, zIndex: 30, y: 20, x: 15, rotate: -2 },
      { scale: 0.9, opacity: 0.8, zIndex: 20, y: 40, x: 30, rotate: -4 },
      { scale: 0.85, opacity: 0.6, zIndex: 10, y: 60, x: 45, rotate: -6 },
    ];
    return styles[layerIndex];
  };

  const getTestimonialIndex = (offset: number): number =>
    (index + offset + testimonials.length) % testimonials.length;

  return (
  
      <section className="relative h-[700px] lg:h-[500px] flex flex-col justify-around items-center bg-gradient-to-r from-red-50 to-white px-6 lg:px-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-t from-transparent to-white pointer-events-none" />

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />

        <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center w-full gap-7 max-w-6xl">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug text-pretty">
              What Our Clients Say <br />
              <span className="text-red-600 ">
                Real Experiences, Real Success
              </span>
            </h2>

            <p className="text-gray-700 text-lg max-w-md">
              See how leading organizations across the globe collaborate with us
              to innovate, scale, and achieve measurable success.
            </p>
          </div>

          <section
            aria-label="Testimonials"
            className="relative h-60 w-full max-w-md"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            {[3, 2, 1, 0].map((layer: number) => {
              const t = testimonials[getTestimonialIndex(layer)];
              const style = getCardStyle(layer);

              return (
                <motion.div
                  key={`${t.name}-${layer}`}
                  className="absolute inset-0 bg-white rounded-xl shadow-xl border border-red-100 p-4 origin-bottom-left"
                  animate={{
                    scale: style.scale,
                    opacity: style.opacity,
                    y: style.y,
                    x: style.x,
                    rotate: style.rotate,
                    zIndex: style.zIndex,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="text-red-600 text-3xl mb-2 leading-none rounded-full">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"
                      />
                    </svg>
                  </div>

                  <p className="text-gray-800 text-sm mb-3 leading-relaxed">
                    {t.quote}
                  </p>

                  <div className="pt-3 border-t border-red-100">
                    <p className="font-semibold text-gray-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-gray-600 text-xs">{t.location}</p>
                  </div>
                </motion.div>
              );
            })}

            <div className="absolute -bottom-14 z-50 left-1/2 -translate-x-1/2 flex gap-3">
              <button
                onClick={handlePrev}
                className="p-2 bg-white rounded-full  hover:opacity-75 shadow-lg transition"
              >
                <svg className="w-6 h-6 text-black" fill="none">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15 19-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="p-2 bg-white rounded-full  hover:opacity-75 shadow-lg transition"
              >
                <svg className="w-6 h-6 text-black" fill="none">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </section>
        </div>
      </section>
    
  );
};

export default RealWorldClientsSay;
