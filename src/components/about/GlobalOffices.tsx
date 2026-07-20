import React from "react";
import { motion, type Variants } from "framer-motion";
import argentina from "../../assets/image/icons/flag_argentina.svg";
import boston from "../../assets/image/icons/flag_us.svg";
import brazil from "../../assets/image/icons/flag_brazil.svg";
import india from "../../assets/image/icons/flag-india.svg";
import UnitedKingdom from "../../assets/image/icons/UnitedKingdom.png";
import ukraine from "../../assets/image/icons/ukraine.png";
import poland from "../../assets/image/icons/poland.png";
import philippines from "../../assets/image/icons/philippines.png";
import malaysia from "../../assets/image/icons/malaysia.png";
import singapore from "../../assets/image/icons/singapore.png";
import costaRica from "../../assets/image/icons/costaRica.png";

type Office = {
  city: string;
  country: string;
  label: string;
  address: string;
  flag: string;
  region: "Americas" | "EMEA" | "APAC";
  tz: string;
  isHQ?: boolean;
};

const offices: Office[] = [
  {
    city: "Boston",
    country: "United States",
    label: "Global Headquarters",
    address: "1 Marina Park Drive, Boston, MA 02210, USA",
    flag: boston,
    region: "Americas",
    tz: "GMT −5",
    isHQ: true,
  },
  {
    city: "Alpharetta",
    country: "United States",
    label: "Southeast Office",
    address: "8000 Avalon Blvd, Suites 100 & 200, Alpharetta, GA 30009",
    flag: boston,
    region: "Americas",
    tz: "GMT −5",
  },
  {
    city: "San Jose",
    country: "Costa Rica",
    label: "Nearshore Hub",
    address: "Plaza Roble, Edificio 5, San José, San Rafael, 10203, Costa Rica",
    flag: costaRica,
    region: "Americas",
    tz: "GMT −6",
  },
  {
    city: "Sao Paulo",
    country: "Brazil",
    label: "Latin America Office",
    address:
      "Rua Irma Gabriela 51, Cidade Monções, São Paulo, CEP 04571-130, BR",
    flag: brazil,
    region: "Americas",
    tz: "GMT −3",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    label: "Southern Cone Office",
    address:
      "Avenida del Libertador 2442, Olivos, Buenos Aires Province B1636DSR, AR",
    flag: argentina,
    region: "Americas",
    tz: "GMT −3",
  },
  {
    city: "Walton-on-Thames",
    country: "United Kingdom",
    label: "European Headquarters",
    address:
      "1st Floor, 42-50 Hersham Rd, Walton-on-Thames KT12 1RZ, United Kingdom",
    flag: UnitedKingdom,
    region: "EMEA",
    tz: "GMT +0",
  },
  {
    city: "Krakow",
    country: "Poland",
    label: "Central Europe Office",
    address:
      "Graffit House, Stefana Rogozińskiego 6, 1st Floor, 31-559 Kraków, Poland",
    flag: poland,
    region: "EMEA",
    tz: "GMT +1",
  },
  {
    city: "Kyiv",
    country: "Ukraine",
    label: "Eastern Europe Office",
    address: "IQ Business Centre, Bolsunovska St, 13-15, 01014 Kyiv, Ukraine",
    flag: ukraine,
    region: "EMEA",
    tz: "GMT +2",
  },
  {
    city: "Madurai",
    country: "India",
    label: "Delivery Center",
    address: "4 Sivasakthi Nagar, 7th Street, Royal Garden, Madurai, TN, India",
    flag: india,
    region: "APAC",
    tz: "GMT +5:30",
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    label: "Southeast Asia Office",
    address:
      "Suite 8.01, Level 8, Menara Binjai, Jln Binjai, 50450 Kuala Lumpur, Malaysia",
    flag: malaysia,
    region: "APAC",
    tz: "GMT +8",
  },
  {
    city: "Singapore",
    country: "Singapore",
    label: "APAC Headquarters",
    address: "1 Fullerton Rd, #02-01, One Fullerton, Singapore 049213",
    flag: singapore,
    region: "APAC",
    tz: "GMT +8",
  },
  {
    city: "Makati City",
    country: "Philippines",
    label: "Asia Pacific Office",
    address:
      "Level 40, PBCom Tower, 6795 Ayala Avenue, V.A. Rufino St, Makati City, 1226 Metro Manila, Philippines",
    flag: philippines,
    region: "APAC",
    tz: "GMT +8",
  },
];

const regionAccent: Record<
  Office["region"],
  { dot: string; text: string; pill: string }
> = {
  Americas: {
    dot: "bg-blue-500",
    text: "text-blue-600",
    pill: "bg-blue-50 text-blue-600 border-blue-100",
  },
  EMEA: {
    dot: "bg-emerald-500",
    text: "text-emerald-600",
    pill: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  APAC: {
    dot: "bg-violet-500",
    text: "text-violet-600",
    pill: "bg-violet-50 text-violet-700 border-violet-100",
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.05,
      ease: "easeOut",
    },
  }),
  exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
};

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-3.5 w-3.5"
  >
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M12 7v5l3 2" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const OfficeCard: React.FC<{ office: Office; index: number }> = ({
  office,
  index,
}) => {
  const accent = regionAccent[office.region];

  return (
    <motion.article
      layout
      custom={index}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={cardVariants}
      className={[
        "group relative flex flex-col bg-white rounded-2xl overflow-hidden",
        "border transition-all duration-300 cursor-default",
        office.isHQ
          ? "border-[#F73434]/25 shadow-[0_4px_24px_rgba(247,52,52,0.10)]"
          : "border-gray-150 shadow-[0_2px_12px_rgba(0,0,0,0.06)]",
        "hover:shadow-[0_8px_32px_rgba(0,0,0,0.11)] hover:-translate-y-0.5",
      ].join(" ")}
      style={{ borderColor: office.isHQ ? "rgba(247,52,52,0.22)" : "#EAECF0" }}
    >
      {/* Top accent bar */}
      <div
        className={[
          "h-[3px] w-full transition-all duration-300",
          office.isHQ
            ? "bg-[#F73434]"
            : "bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-gray-200 group-hover:to-gray-100",
        ].join(" ")}
      />

      {/* Card content */}
      <div className="flex flex-1 flex-col p-5 gap-4">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          {/* Flag + City + Label */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative h-11 w-11 shrink-0">
              <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
                <img
                  src={office.flag}
                  alt={`${office.country} flag`}
                  title={`${office.country} flag`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              {office.isHQ && (
                <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#F73434] ring-2 ring-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
              )}
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-semibold  tracking-[0.18em] text-gray-400 mb-0.5 truncate">
                {office.label}
              </p>
              <h3 className="text-[17px] font-bold text-gray-900 leading-tight truncate">
                {office.city}
              </h3>
            </div>
          </div>

          {/* Region pill + HQ badge */}
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            {office.isHQ && (
              <span className="inline-flex items-center gap-1 rounded-md bg-[#F73434] px-2 py-0.5 text-[9px] font-bold  tracking-[0.16em] text-white">
                <span className="h-1 w-1 rounded-full bg-white/80 animate-pulse" />{" "}
                HQ
              </span>
            )}
            <span
              className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold tracking-wide ${accent.pill}`}
            >
              {office.region}
            </span>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-gray-100" />

        {/* Meta row: country + timezone */}
        <div className="flex items-center justify-between text-[11px] font-medium text-gray-400">
          <div className="flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
            <span className="text-gray-500 font-semibold">
              {office.country}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <ClockIcon />
            <span className="font-mono">{office.tz}</span>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-2">
          <span className="mt-0.5 shrink-0 text-[#F73434]">
            <PinIcon />
          </span>
          <p className="text-[13px] leading-relaxed text-gray-500">
            {office.address}
          </p>
        </div>

        {/* View on map link */}
      </div>
    </motion.article>
  );
};

/* ─── Region section header ──────────────────────────────────────────────── */
const regionSectionMeta: Record<
  Office["region"],
  { index: string; title: string; sub: string; color: string }
> = {
  Americas: {
    index: "01",
    title: "Americas",
    sub: "North & Latin America",
    color: "text-blue-500",
  },
  EMEA: {
    index: "02",
    title: "EMEA",
    sub: "Europe, Middle East & Africa",
    color: "text-emerald-500",
  },
  APAC: {
    index: "03",
    title: "APAC",
    sub: "Asia Pacific",
    color: "text-violet-500",
  },
};

/* ─── Main component ─────────────────────────────────────────────────────── */
const GlobalOffices: React.FC = () => {
  return (
    <section
      aria-labelledby="global-offices-heading"
      className="relative bg-[#F8F9FB] pt-4 pb-10 md:pt-6 md:pb-16 overflow-hidden"
    >
      {/* Subtle dot-grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #D1D5DB 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      {/* Warm red glow top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(247,52,52,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section heading ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8 md:mb-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold  tracking-[0.32em] text-[#F73434]">
            <span className="h-px w-6 bg-[#F73434]" /> Global Presence{" "}
            <span className="h-px w-6 bg-[#F73434]" />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="global-offices-heading"
              className="text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-[56px]"
            >
              Twelve offices.{" "}
              <span className=" text-[#F73434]">One global team.</span>
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500 sm:text-right sm:text-base">
              Local expertise across Americas, EMEA, and APAC — wherever you
              are, we're near.
            </p>
          </div>
        </motion.div>

        {/* ── Stats strip ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          {[
            { k: "12", v: "Offices Worldwide" },
            { k: "3", v: "Continents" },
            { k: "24 / 7", v: "Follow-the-Sun" },
            { k: "11", v: "Time Zones" },
          ].map((s, i) => (
            <div
              key={s.v}
              className={[
                "flex flex-col items-start gap-1 px-5 py-5 sm:px-6",
                i >= 2 ? "border-t border-gray-200 sm:border-t-0" : "",
              ].join(" ")}
            >
              <span className="text-2xl font-extrabold text-gray-900 sm:text-3xl tracking-tight">
                {s.k}
              </span>
              <span className="text-[10px] font-semibold  tracking-[0.16em] text-gray-400">
                {s.v}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Cards Grouped by Region ─────────────────────────────────────────────── */}
        <div className="space-y-8 mt-6">
          {(["Americas", "EMEA", "APAC"] as Office["region"][]).map(
            (region) => {
              const regionOffices = offices.filter((o) => o.region === region);
              const meta = regionSectionMeta[region];
              return (
                <div key={region}>
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4 }}
                    className="mb-5 flex items-center gap-4"
                  >
                    <span
                      className={`font-mono text-[11px] font-bold ${meta.color}`}
                    >
                      {meta.index}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-gray-800">
                        {meta.title}
                      </h3>
                      <p className="text-[11px] text-gray-400">{meta.sub}</p>
                    </div>
                    <div className="ml-2 flex-1 h-px bg-gray-200" />
                    <span className="text-[11px] font-medium text-gray-400">
                      {regionOffices.length} offices
                    </span>
                  </motion.div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {regionOffices.map((office) => (
                      <OfficeCard
                        key={office.city}
                        office={office}
                        index={offices.indexOf(office)}
                      />
                    ))}
                  </div>
                </div>
              );
            },
          )}
        </div>

        {/* ── Footer CTA ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          <div className="flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:justify-between md:p-9">
            <div>
              <p className="mb-1 text-[10px] font-bold  tracking-[0.26em] text-[#F73434]">
                Connect with a local team
              </p>
              <h4 className="text-xl font-bold text-gray-900 md:text-2xl">
                Talk to the office closest to you.
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                Reach out and we'll connect you with the right regional team.
              </p>
            </div>
            <a
              href="/contact-us"
              className="group flex justify-center shrink-0 items-center gap-3 rounded-xl bg-[#F73434] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_18px_rgba(247,52,52,0.28)] transition-all duration-300 hover:bg-[#e02a2a] hover:shadow-[0_6px_24px_rgba(247,52,52,0.38)]"
            >
              Contact Maitsys{" "}
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalOffices;
