import map from "../assets/image/map-orignal.svg";
import argentina from "../assets/image/icons/flag_argentina.svg";
import boston from "../assets/image/icons/flag_us.svg";
import brazil from "../assets/image/icons/flag_brazil.svg";
import india from "../assets/image/icons/flag-india.svg";
import UnitedKingdom from "../assets/image/icons/UnitedKingdom.png";
import ukraine from "../assets/image/icons/ukraine.png";
import poland from "../assets/image/icons/poland.png";
import philippines from "../assets/image/icons/philippines.png";
import malaysia from "../assets/image/icons/malaysia.png";
import singapore from "../assets/image/icons/singapore.png";
import costaRica from "../assets/image/icons/costaRica.png";
import { motion } from "framer-motion";

const WorldMap: React.FC = () => {
  const locations = [
    {
      name: "Maitsys HQ - Boston",
      address: ["1 Marina Park Drive, Boston, MA 02210, USA"],
      x: "27%",
      y: "28%",
      flag: boston,
    },
    {
      name: "Maitsys - Alpharetta",
      address: ["8000 Avalon Blvd Suites 100 and 200, Alpharetta, GA 30009"],
      x: "19.8%",
      y: "34%",
      flag: boston,
    },
    {
      name: "Maitsys - United Kingdom",
      address:
        "1st Floor, 42-50 Hersham Rd, Walton-on-Thames KT12 1RZ, United Kingdom",
      x: "44%",
      y: "23%",
      flag: UnitedKingdom,
    },
    {
      name: "Maitsys - Poland",
      address:
        "Graffit House, Stefana Rogozińskiego 6/1st Floor, 31‑559 Kraków, Poland",
      x: "52%",
      y: "26%",
      flag: poland,
    },
    {
      name: "Maitsys - Ukraine",
      address: "IQ Business Centre, Bolsunovska St, 13‑15, 01014 Kyiv, Ukraine",
      x: "58%",
      y: "25%",
      flag: ukraine,
    },
    {
      name: "Maitsys - Argentina",
      address:
        "Avenida del Libertador 2442, Olivos, Buenos Aires Province B1636DSR, AR",
      x: "26.6%",
      y: "73%",
      flag: argentina,
    },
    {
      name: "Maitsys - India",
      address:
        "4 Sivasakthi Nagar, 7th Street, Royal Garden, Madurai, TN, India",
      x: "67%",
      y: "47%",
      flag: india,
    },
    {
      name: "Maitsys - Malaysia",
      address:
        "2 Suite 8.01, Level 8,Menara Binjai, Jln Binjai, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
      x: "79%",
      y: "54%",
      flag: malaysia,
    },
    {
      name: "Maitsys - Singapore",
      address: "1 Fullerton Rd, #02‑01, One Fullerton, Singapore 049213",
      x: "75%",
      y: "58%",
      flag: singapore,
    },
    {
      name: "Maitsys - Philippines",
      address:
        "Level 40, PBCom Tower, 6795 Ayala Avenue, V.A. Rufino St, Makati City, 1226 Metro Manila, Philippines",
      x: "81%",
      y: "46%",
      flag: philippines,
    },
    {
      name: "Maitsys - Brazil",
      address:
        "Rua Irma Gabriela 51, Cidade Moncoes, Sao Paulo, CEP 04571‑130, Sao Paulo, BR",
      x: "32%",
      y: "60%",
      flag: brazil,
    },
    {
      name: "Maitsys - Costa Rica",
      address:
        "Plaza Roble, Edificio 5, San José, San Rafael, 10203, Costa Rica",
      x: "21%",
      y: "49%",
      flag: costaRica,
    },
  ];

  return (
    <div className="flex overflow-x-hidden justify-center items-center pt-4 pb-8 w-full bg-gradient-to-b from-white to-gray-50 md:pt-4 md:pb-14">
      <div className="relative px-4 w-full max-w-7xl">
        {/* Heading Animation Wrapper */}
        <motion.div
          className="mx-auto text-center max-w-8xl"
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
        >
          <h3 className="flex gap-2 justify-center items-center mb-3 w-full text-3xl font-bold text-center text-gray-900 md:text-4xl lg:text-5xl">
            Our Global <span className="block text-red-600">Presence</span>
          </h3>
          <p className="mx-auto mb-5 max-w-3xl text-lg leading-relaxed text-gray-600">
            Connecting teams across continents with seamless collaboration
          </p>
        </motion.div>

        {/* Main Card */}
        <div className="relative z-0 p-3 w-full bg-white rounded-2xl border border-gray-100 shadow sm:p-5 md:p-7 xl:p-20">
          <div className="relative">
            <img
              src={map}
              alt="World Map"
              title="World Map"
              width={1200}
              height={600}
              loading="lazy"
              decoding="async"
              className="object-contain z-0 w-full max-w-full h-auto opacity-95"
            />

            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none from-white/10" />
          </div>

          {locations.map((loc, i) => (
            <div
              key={i + "index"}
              className="absolute group cursor-pointer z-10 hover:z-[100]"
              style={{
                left: loc.x,
                top: loc.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Ping */}
              <div
                className="absolute z-0 rounded-full animate-ping bg-red-500/20"
                style={{
                  animationDelay: `${i * 0.5}s`,
                  width: "1.3rem",
                  height: "1.3rem",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Pin */}
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(255,0,0,0.35)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-red-600 drop-shadow-md transition-all duration-300 sm:w-10 sm:h-10 group-hover:text-red-700"
                >
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                </svg>

                {/* Flag badge */}
                <div className="overflow-hidden absolute -top-1 -right-1 w-6 h-6 rounded-full border-2 border-white shadow-md">
                  <img
                    src={loc.flag}
                    alt={`${loc.name} flag`}
                    title={`${loc.name} flag`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Tooltip (Responsive + safe width) */}
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none w-[220px] sm:w-[280px] max-w-[90vw] z-[9999]">
                <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-white border-r border-b border-gray-200 rotate-45 -translate-x-1/2 translate-y-1/2" />

                <div className="relative p-4 bg-white rounded-xl border border-gray-200 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-start space-x-3">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-full opacity-20 blur-sm" />
                      <div className="overflow-hidden relative w-10 h-10 rounded-full border-2 border-white shadow-md">
                        <img
                          src={loc.flag}
                          alt={loc.name}
                          title={loc.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <h2 className="text-base font-bold text-gray-900 truncate">
                          {loc.name}
                        </h2>
                      </div>

                      {Array.isArray(loc.address) ? (
                        loc.address.map((addr, idx) => (
                          <p
                            key={idx + "index"}
                            className={`text-sm text-gray-600 leading-relaxed break-words ${idx === loc.address.length - 1 ? "" : "mb-2 pb-2 border-b border-gray-100"}`}
                          >
                            {addr}
                          </p>
                        ))
                      ) : (
                        <p className="text-sm leading-relaxed text-gray-600 break-words">
                          {loc.address}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
