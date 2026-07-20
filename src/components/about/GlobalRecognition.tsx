import React from "react";
import { motion } from "framer-motion";

import patner1 from "../../assets/image/logo/patner-1.png";
import patner2 from "../../assets/image/logo/patner-2.png";
import patner3 from "../../assets/image/logo/patner-3.png";
import patner4 from "../../assets/image/logo/patner-4.png";
import patner5 from "../../assets/image/logo/patner-5.png";
import patner6 from "../../assets/image/logo/patner-6.png";
import patner7 from "../../assets/image/logo/patner-7.png";
import patner8 from "../../assets/image/logo/patner-8.png";
import patner9 from "../../assets/image/logo/patner-9.jpg";

type Logo = { src: string; name: string };

const allLogos: Logo[] = [
  { src: patner1, name: "Bayer" },
  { src: patner2, name: "Casella" },
  { src: patner3, name: "Dover" },
  { src: patner4, name: "Johnson & Johnson" },
  { src: patner5, name: "Sears" },
  { src: patner6, name: "Kimberly-Clark" },
  { src: patner7, name: "Kmart" },
  { src: patner8, name: "Kenmore" },
  { src: patner9, name: "Panasonic" },
];

// Split into 3 columns; duplicate within each for seamless loop
const col1 = [allLogos[0], allLogos[3], allLogos[6]];
const col2 = [allLogos[1], allLogos[4], allLogos[7]];
const col3 = [allLogos[2], allLogos[5], allLogos[8]];

const stats = [
  { value: "100+", label: "Projects delivered" },
  { value: "50+", label: "Expert Teams" },
  { value: "40+", label: "Global awards" },
];

type LogoCardProps = { logo: Logo };

const LogoCard: React.FC<LogoCardProps> = ({ logo }) => (
  <div className="group relative w-full h-[88px] md:h-[100px] rounded-xl bg-white border border-gray-900/[0.06] shadow-[0_1px_2px_rgba(17,24,39,0.04)] hover:shadow-[0_10px_24px_-14px_rgba(17,24,39,0.18)] hover:border-gray-900/[0.12] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
    <div className="flex absolute inset-0 justify-center items-center px-4 py-3">
      <img
        src={logo.src}
        alt={logo.name}
        title={logo.name}
        loading="lazy"
        draggable={false}
        width={160}
        height={80}
        className="object-contain max-w-full max-h-full transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  </div>
);

type ColumnProps = {
  items: Logo[];
  direction: "up" | "down";
  duration: number;
};

const ScrollColumn: React.FC<ColumnProps> = ({
  items,
  direction,
  duration,
}) => {
  // Duplicate items for seamless infinite loop
  const loop = [...items, ...items, ...items, ...items];
  const animClass = direction === "up" ? "gr-scroll-up" : "gr-scroll-down";
  return (
    <div className="relative overflow-hidden h-[420px] md:h-[480px]">
      <div
        className={`flex flex-col gap-3 ${animClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((logo, i) => (
          <LogoCard key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
};

const GlobalRecognition: React.FC = () => {
  return (
    <section
      aria-labelledby="global-recognition-heading"
      className="relative overflow-hidden bg-[#f6f4ef] pt-4 pb-4 md:pt-6 md:pb-6 px-4 lg:px-8"
    >
      {/* Inline keyframes for the section */}
      <style>{`
        @keyframes gr-spin { to { transform: rotate(360deg); } }
        @keyframes gr-sheen {
          0% { transform: translateX(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateX(420%); opacity: 0; }
        }
        @keyframes gr-blob {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          33% { transform: translate3d(40px,-30px,0) scale(1.08); }
          66% { transform: translate3d(-30px,20px,0) scale(0.96); }
        }
        @keyframes gr-draw {
          from { stroke-dashoffset: 360; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes gr-float-chip {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes gr-scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes gr-scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .gr-scroll-up {
          animation: gr-scroll-up linear infinite;
        }
        .gr-scroll-down {
          animation: gr-scroll-down linear infinite;
        }
        .gr-scroll-up:hover, .gr-scroll-down:hover {
          animation-play-state: paused;
        }
        .gr-underline path {
          stroke-dasharray: 360;
          stroke-dashoffset: 360;
          animation: gr-draw 1.4s cubic-bezier(.22,1,.36,1) 0.5s forwards;
        }
      `}</style>

      {/* Soft mesh accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(185,28,28,0.10), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(17,24,39,0.07), transparent 65%)",
        }}
      />

      {/* dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(17,24,39,1) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="grid relative grid-cols-1 gap-10 mx-auto max-w-8xl lg:grid-cols-12 lg:gap-14">
        {/* LEFT — heading */}
        <div className="flex flex-col lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] text-red-700/90 font-semibold mb-5"
            >
              <motion.span
                className="block h-px bg-red-700/70"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              />
              Recognition
              <motion.span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-red-600"
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            </motion.div>

            <h2
              id="global-recognition-heading"
              className=" text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight text-gray-900"
            >
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                viewport={{ once: true }}
                className="block"
              >
                Global Recognition
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="block"
              >
                for{" "}
                <span className="inline-block relative text-red-700">
                  Sustained
                  {/* hand-drawn underline */}
                  <svg
                    aria-hidden
                    className="absolute left-0 -bottom-2 w-full gr-underline"
                    height="14"
                    viewBox="0 0 360 14"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M2 9 C 80 2, 180 14, 358 5"
                      stroke="url(#gr-grad)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gr-grad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#B91C1C" />
                        <stop
                          offset="100%"
                          stopColor="#EF4444"
                          stopOpacity="0.5"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>{" "}
                Excellence
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
              className="mt-6 text-gray-600 text-base md:text-[1.02rem] leading-relaxed max-w-md"
            >
              Accolades from partners, certifying bodies, and customers — proof
              of the relentless craft Maitsys brings to every engagement.
            </motion.p>

            {/* Animated stats row */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.5 },
                },
              }}
              className="grid grid-cols-3 gap-4 mt-10 max-w-md"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className="relative px-3 py-3 rounded-xl border backdrop-blur-sm bg-white/70 border-gray-200/80"
                >
                  <div className="text-2xl md:text-[1.7rem] font-bold text-gray-900 leading-none">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-[10.5px] tracking-[0.14em] text-gray-500">
                    {s.label}
                  </div>
                  <span
                    aria-hidden
                    className="absolute -bottom-px right-3 left-3 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(185,28,28,0.5), transparent)",
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT — partner gallery */}
        <div className="relative lg:col-span-7">
          {/* gallery header strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-between items-center px-1 mb-5"
          >
            <div className="flex gap-3 items-center">
              <span className="w-10 h-px bg-gray-300" />
              <span className="text-[11px] text-gray-600">
                Trusted by global leaders
              </span>
            </div>
          </motion.div>

          {/* 3-column vertical scrolling marquee */}
          <div className="relative">
            {/* top/bottom fade masks */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-20 z-10 bg-gradient-to-b from-[#f6f4ef] via-[#f6f4ef]/80 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 z-10 bg-gradient-to-t from-[#f6f4ef] via-[#f6f4ef]/80 to-transparent"
            />

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <ScrollColumn items={col1} direction="up" duration={28} />
              <ScrollColumn items={col2} direction="down" duration={34} />
              <ScrollColumn items={col3} direction="up" duration={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalRecognition;
