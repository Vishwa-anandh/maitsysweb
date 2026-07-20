import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { podcasts } from "./data";

const AnimatedVideoCards: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getCardBoxShadow = (index: number): string => {
    if (index === activeIndex) {
      return "0 0 20px rgba(220, 38, 38, 0.35), 0 0 40px rgba(220, 38, 38, 0.15)";
    }
    if (hoveredCard === index) {
      return "0 20px 25px -5px rgba(0, 0, 0, 0.15)";
    }
    return "none";
  };

  const getCardBorder = (index: number): string => {
    return index === activeIndex
      ? "2px solid #dc2626"
      : "2px solid transparent";
  };

  // Auto-play the active video after a delay
  useEffect(() => {
    if (isVideoPlaying && !(globalThis as { __snapshot?: boolean }).__snapshot) {
      const timer = setTimeout(() => {}, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVideoPlaying, activeIndex]);

  // Auto-rotate marquee selection
  useEffect(() => {
    // Disable interval during prerendering to prevent react-snap from hanging
    if (hoveredCard !== null || (globalThis as { __snapshot?: boolean }).__snapshot) return;

    const interval = setInterval(() => {
      if (!isVideoPlaying) {
        setActiveIndex((prev) => (prev + 1) % podcasts.length);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [hoveredCard, isVideoPlaying]);

  const openVideoPopup = (index: number) => {
    setActiveIndex(index);
    setIsVideoPlaying(true);
  };

  const closeVideoPopup = () => {
    setIsVideoPlaying(false);
  };

  return (
    <section className="bg-white  px-4 relative overflow-hidden">
      <div className="max-w-8xl mx-auto relative">
        {/* ------------ ENHANCED MARQUEE ------------ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden bg-white pt-10 rounded-3xl "
        >
          {/* Glowing active indicator */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white via-white to-transparent z-10 " />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white via-white to-transparent z-10" />

          {/* Marquee Wrapper */}
          <div className="group overflow-hidden w-full">
            <div className="flex whitespace-nowrap">
              {/* ================= FIRST SCROLL SET (Interactive) ================= */}
              <div className="flex animate-marquee group-hover:[animation-play-state:paused] items-center min-w-max py-4">
                {podcasts.map((video, index) => (
                  <motion.button
                    key={index + "index"}
                    onClick={() => openVideoPopup(index)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative mx-6 w-60 rounded-2xl overflow-hidden flex-shrink-0 bg-white"
                    whileHover={{
                      y: -16,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    animate={{
                      boxShadow: getCardBoxShadow(index),
                      border: getCardBorder(index),
                    }}
                  >
                    {/* Active Accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-red-600 transition-opacity ${
                        index === activeIndex ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    {/* Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden">
                      <motion.img
                        src={`https://img.youtube.com/vi/${
                          video.youtubeUrl.split("/embed/")[1].split("?")[0]
                        }/hqdefault.jpg`}
                        alt={video.title}
                        title={video.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: hoveredCard === index ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                        onError={(e) => {
                          if ((globalThis as { __snapshot?: boolean }).__snapshot) return;
                          e.currentTarget.src = `https://img.youtube.com/vi/${
                            video.youtubeUrl.split("/embed/")[1].split("?")[0]
                          }/maxresdefault.jpg`;
                        }}
                      />

                      {/* Play Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                      >
                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-7 h-7 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>

                    {/* Title */}
                    <div className="px-3 py-3 text-start">
                      <h3
                        className="text-xs font-semibold text-black truncate"
                        title={video.title}
                      >
                        {video.title}
                      </h3>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* ================= DUPLICATE SCROLL SET (Passive) ================= */}
              <div className="flex animate-marquee group-hover:[animation-play-state:paused] items-center min-w-max py-4">
                {podcasts.map((video, index) => (
                  <motion.button
                    key={video.id}
                    onClick={() => openVideoPopup(index)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="relative mx-6 w-60 rounded-2xl overflow-hidden flex-shrink-0 bg-white"
                    whileHover={{
                      y: -16,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    animate={{
                      boxShadow: getCardBoxShadow(index),
                      border: getCardBorder(index),
                    }}
                  >
                    {/* Active Accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-red-600 transition-opacity ${
                        index === activeIndex ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    {/* Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden">
                      <motion.img
                        src={`https://img.youtube.com/vi/${
                          video.youtubeUrl.split("/embed/")[1].split("?")[0]
                        }/hqdefault.jpg`}
                        alt={video.title}
                        title={video.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: hoveredCard === index ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                        onError={(e) => {
                          if ((globalThis as { __snapshot?: boolean }).__snapshot) return;
                          e.currentTarget.src = `https://img.youtube.com/vi/${
                            video.youtubeUrl.split("/embed/")[1].split("?")[0]
                          }/maxresdefault.jpg`;
                        }}
                      />

                      {/* Play Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                      >
                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-7 h-7 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>

                    {/* Title */}
                    <div className="px-3 py-3 text-start">
                      <h3
                        className="text-xs font-semibold text-black truncate"
                        title={video.title}
                      >
                        {video.title}
                      </h3>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom navigation indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {podcasts.map((_, index) => (
              <motion.button
                key={index + "index"}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to podcast slide ${index + 1}`}
                className="focus:outline-none p-3" // 👈 increases touch target
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className={`h-2 rounded-full ${
                    index === activeIndex ? "bg-red-600 w-8" : "bg-gray-300 w-2"
                  }`}
                  animate={{
                    scale: index === activeIndex ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ------------ VIDEO POPUP MODAL ------------ */}
        <AnimatePresence>
          {isVideoPlaying && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeVideoPopup}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                className="fixed inset-4 md:inset-20 z-50"
              >
                <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl">
                  {/* Modal header */}
                  <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/50 to-transparent z-20">
                    <div className="flex items-center justify-between">
                      <motion.span
                        className="px-4 py-2 bg-red-600 text-white rounded-full font-semibold"
                        animate={{
                          rotate: [0, 5, 0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        {podcasts[activeIndex].episode}
                      </motion.span>
                      <button
                        onClick={closeVideoPopup}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Video player */}
                  <div className="w-full h-full">
                    {(globalThis as { __snapshot?: boolean }).__snapshot ? (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                        Video placeholder for build
                      </div>
                    ) : (
                      <iframe
                        src={`${podcasts[activeIndex].youtubeUrl}&autoplay=1&mute=0`}
                        title={podcasts[activeIndex].title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AnimatedVideoCards;
