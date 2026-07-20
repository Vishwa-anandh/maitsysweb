import { motion, type Variants } from "framer-motion";
import type React from "react";
import { Link } from "react-router-dom";

const CheckCircle = ({ white = false }: { white?: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={white ? "white" : "#3b82f6"}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const rapidFeatures = [
  "Critical/high vulnerability validation",
  "Hands-on remediation execution",
  "Patch and change coordination",
  "Verification scans",
  "30/60/90-day remediation roadmap",
];

const managedFeatures = [
  "Ongoing remediation sprints",
  "Patch execution and configuration fixes",
  "Exception and risk acceptance governance",
  "SLA tracking (MTTR, closure rate)",
  "Monthly executive and audit reporting",
];

// Icons
const CheckCircleIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const ClockIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const TrendDownIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>
);
const TargetIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const AwardIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
const BoltIcon = ({ color = "white" }: { color?: string }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const ShieldIcon = ({ color = "white" }: { color?: string }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const ArrowDownRightIcon = ({ color = "white" }: { color?: string }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.6693 19.8332L15.7526 9.9165L9.91927 15.7498L2.33594 8.1665"
      stroke={color}
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.6641 19.8335H25.6641V12.8335"
      stroke={color}
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ScaleIcon = ({ color = "white" }: { color?: string }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const EngagementModels: React.FC = () => {
  const results = [
    {
      icon: <CheckCircleIcon color="#ef4444" />,
      title: "Vulnerabilities Closed",
      desc: "Real fixes, not just reports",
    },
    {
      icon: <ClockIcon color="#ef4444" />,
      title: "Reduced MTTR",
      desc: "Faster remediation cycles",
    },
    {
      icon: <TrendDownIcon color="#ef4444" />,
      title: "Fewer Repeat Findings",
      desc: "Permanent solutions",
    },
    {
      icon: <TargetIcon color="#ef4444" />,
      title: "Clear Accountability",
      desc: "Know who owns what",
    },
    {
      icon: <AwardIcon color="#ef4444" />,
      title: "Risk Reduction",
      desc: "Not just dashboards",
    },
  ];

  const features = [
    {
      icon: <BoltIcon />,
      iconBg: "linear-gradient(135deg, #f97316 0%, #fb923c 100%)",
      title: "Execution-first",
      desc: "We fix issues, not just flag them",
    },
    {
      icon: <ShieldIcon />,
      iconBg: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
      title: "Enterprise-ready",
      desc: "Aligned to change management and audits",
    },
    {
      icon: <ArrowDownRightIcon />,
      iconBg: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
      title: "Cost-efficient",
      desc: "Hybrid onshore/offshore delivery",
    },
    {
      icon: <ScaleIcon />,
      iconBg: "linear-gradient(135deg, #a855f7 0%, #c084fc 100%)",
      title: "Scalable",
      desc: "From tactical cleanup to long-term managed service",
    },
  ];
  const cards = [
    {
      title: "40–70%",
      subtitle: "Reduction in critical/high vulnerabilities\nwithin 90 days",
    },
    {
      title: "Faster",
      subtitle: "Safer patch cycles with coordinated\nexecution",
    },
    {
      title: "Clear",
      subtitle: "Evidence for auditors and leadership teams",
    },
  ];
  const wrap = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  };

  const li: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col justify-center items-center py-2 lg:py-4">
      <motion.div
        variants={wrap}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="px-4 mx-auto w-full max-w-8xl lg:px-8"
      >
        {/* Header */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center mb-10"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-semibold tracking-widest text-gray-500 border border-gray-200 rounded-full px-4 py-1.5 mb-5 mt-10 md:mt-14"
          >
            Our Difference
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-black text-center text-gray-900"
          >
            Choose your approach
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 gap-4 items-stretch md:grid-cols-2 md:gap-14"
        >
          {/* Card 1 */}
          <motion.div
            variants={card}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col p-7 bg-white rounded-3xl border border-gray-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-5">
              <span className="px-3 py-1 text-xs font-bold tracking-widest text-blue-600 bg-blue-50 rounded-full border border-blue-100">
                Rapid Start
              </span>
              <span className="text-2xl">🚀</span>
            </div>

            <h3 className="mb-1 text-2xl font-black text-gray-900">
              Remediation Kickstart
            </h3>
            <p className="mb-4 text-sm font-medium text-gray-500">2–4 Weeks</p>

            <p className="mb-6 text-sm text-gray-600">
              For teams needing immediate reduction in critical risk.
            </p>

            <motion.ul variants={list} className="flex flex-col gap-3 mb-8">
              {rapidFeatures.map((f, i) => (
                <motion.li
                  key={i + "index"}
                  variants={li}
                  className="flex items-center gap-2.5"
                >
                  <span className="shrink-0">
                    <CheckCircle />
                  </span>
                  <span className="text-sm text-gray-700">{f}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-auto">
              <div className="mt-auto">
                <Link
                  to="/contact-us"
                  className="block w-full py-3.5 text-white font-semibold text-sm rounded-full text-center transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 bg-gradient-to-r from-[#2B7FFF] to-[#00B8DB]"
                >
                  Contact Our Security Experts
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={card}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col p-7 bg-red-700 rounded-3xl shadow-lg"
          >
            <div className="flex justify-between items-start mb-5">
              <span className="px-3 py-1 text-xs font-bold tracking-widest text-red-600 bg-white rounded-full">
                Most Popular
              </span>
              <span className="text-2xl">⚡</span>
            </div>

            <h3 className="mb-1 text-2xl font-black text-white">
              Managed Remediation
            </h3>
            <p className="mb-4 text-sm font-medium text-white">
              Monthly Service
            </p>

            <p className="mb-6 text-sm text-red-100">
              A fully managed, execution-focused service.
            </p>

            <motion.ul variants={list} className="flex flex-col gap-3 mb-8">
              {managedFeatures.map((f, i) => (
                <motion.li
                  key={i + "index"}
                  variants={li}
                  className="flex items-center gap-2.5"
                >
                  <span className="shrink-0">
                    <CheckCircle white />
                  </span>
                  <span className="text-sm text-white">{f}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-auto">
              <Link
                to="/contact-us"
                className="block w-full py-3.5 rounded-full bg-white text-red-600 font-semibold text-sm text-center transition hover:bg-red-50"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="px-4 py-4 mx-auto bg-white lg:py-6 max-w-9xl lg:px-8">
        <div className="flex flex-col mx-auto">
          {/* ── Section 1: Real, measurable results ── */}
          <div className="py-10">
            <div className="flex flex-col items-center mb-10">
              <span className="text-xs font-semibold tracking-widest text-gray-500 border border-gray-200 rounded-full px-4 py-1.5 mb-5 mt-8 md:mt-10">
                What You Get
              </span>
              <h2 className="text-4xl font-black text-center text-red-500">
                Real, measurable results
              </h2>
            </div>

            {/* Result cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
              {results.map((r, i) => (
                <div
                  key={i + "index"}
                  className="flex flex-col gap-3 items-center p-5 text-center bg-red-50 rounded-2xl border border-red-100"
                >
                  <div className="flex justify-center items-center w-12 h-12 bg-red-100 rounded-full">
                    {r.icon}
                  </div>

                  <div>
                    <p className="text-base font-bold leading-snug text-gray-900">
                      {r.title}
                    </p>
                    <p className="mt-1 text-xs text-gray-700">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Section 2: Built for enterprise scale ── */}
          <div className="py-6">
            <div className="flex flex-col items-center mb-10">
              <span className="text-xs font-semibold tracking-widest text-gray-500 border border-gray-200 rounded-full px-4 py-1.5 mb-5">
                Why Maitsys
              </span>
              <h2 className="text-4xl font-bold text-center text-black">
                Built for enterprise scale
              </h2>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <div
                  key={i + "index"}
                  className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-md"
                >
                  {/* Icon */}
                  <div
                    className="flex justify-center items-center w-12 h-12 rounded-xl shrink-0"
                    style={{ background: f.iconBg }}
                  >
                    {f.icon}
                  </div>
                  {/* Text */}
                  <div>
                    <p className="mb-1 text-base font-bold text-gray-900">
                      {f.title}
                    </p>
                    <p className="text-xs leading-relaxed text-gray-500">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="w-full">
        <div className="mx-auto">
          {/* Background block */}
          <div className=" bg-gradient-to-r from-[#00C950] to-[#00BC7D] px-6 py-8 md:px-12">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Proven Results
              </h2>
              <p className="mt-3 text-sm md:text-base text-white/85">
                Real outcomes from real engagements*
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className={[
                    "rounded-2xl border border-white/25",
                    "bg-white/10 backdrop-blur-md",
                    "px-8 py-10 text-center shadow-sm",
                  ].join(" ")}
                >
                  <div className="text-4xl font-extrabold text-white md:text-5xl">
                    {c.title}
                  </div>

                  <p className="mt-3 text-sm md:text-[13px] leading-relaxed text-white whitespace-pre-line">
                    {c.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <p className="mt-10 text-xs italic text-center text-white/90">
              *Results vary by environment and scope
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngagementModels;
