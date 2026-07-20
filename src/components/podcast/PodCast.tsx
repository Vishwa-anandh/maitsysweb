import React from "react";
import { podcasts } from "./data";

const PodcastList: React.FC = () => {
  return (
    <div className=" w-full relative text-white px-6 sm:px-8 py-8 space-y-4">
      {/* Zigzag Lightning - Dark Pattern */}
      <h1 className="text-center text-5xl md:text-5xl font-extrabold text-black tracking-tight">
        🎙️ Maitsys <span className="text-red-600">Podcasts</span>
      </h1>
      <p className={`text-black text-center `}>
        In-depth conversations with industry thought leaders.
      </p>

      {/* Your Content/Components */}
      <div className="relative flex flex-col items-center space-y-10 md:space-y-16 py-4">
        {podcasts.map((podcast, index) => {
          const isEven = index % 2 === 1;
          return (
            <React.Fragment key={podcast.id || index}>
              <div
                key={index + "index"}
                className={`bg-white hover:bg-[#FDECEC] flex flex-col lg:flex-row items-center justify-between w-full max-w-8xl gap-4 md:gap-16 transition-all duration-700 ease-in-out hover:scale-[1.02] px-2 py-4  md:px-6 rounded-2xl  ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* YouTube Embed */}
                <div
                  className={`relative  w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl ${
                    isEven ? "border-l-2 " : "border-r-2 "
                  }`}
                >
                  {(globalThis as { __snapshot?: boolean }).__snapshot ? (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                      Video placeholder for build
                    </div>
                  ) : (
                    <iframe
                      src={podcast.youtubeUrl}
                      title={podcast.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  )}
                </div>

                {/* Info Card */}
                <div className=" backdrop-blur-xl rounded-2xl  p-10 lg:p-12 w-full lg:w-1/2 flex flex-col items-center text-center ">
                  <div className="flex justify-center flex-wrap gap-6 mb-6">
                    {podcast.companyLogos.map((logo, i) => (
                      <img
                        key={i + "index"}
                        src={logo}
                        alt={`Logo ${i + 1}`}
                        title={`Logo ${i + 1}`}
                        width={160}
                        height={80}
                        className="h-20 w-40 object-contain bg-white rounded-lg shadow-md hover:scale-105 transition-transform border"
                      />
                    ))}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
                    {podcast.title}
                  </h2>
                  <p className="text-gray-500 text-lg font-semibold mb-8">
                    {podcast.episode}
                  </p>

                  <a
                    href={podcast.youtubeUrl}
                    target={`_blank`}
                    className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/30 active:scale-95"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Watch Now
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>

                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
              <div className="w-[80%] h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full transition-all duration-500 group-hover:w-32" />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default PodcastList;
