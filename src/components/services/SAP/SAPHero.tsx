import React from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: "200+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "15+", label: "Years" },
];

function IconCheck(props: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 12.2 10.6 14.7 16.2 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield(props: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.6654 10.8334C16.6654 15 13.7487 17.0834 10.282 18.2917C10.1005 18.3532 9.90331 18.3503 9.7237 18.2834C6.2487 17.0834 3.33203 15 3.33203 10.8334V5.00003C3.33203 4.77902 3.41983 4.56705 3.57611 4.41077C3.73239 4.25449 3.94435 4.1667 4.16536 4.1667C5.83203 4.1667 7.91536 3.1667 9.36536 1.90003C9.54191 1.74919 9.76649 1.66632 9.9987 1.66632C10.2309 1.66632 10.4555 1.74919 10.632 1.90003C12.0904 3.17503 14.1654 4.1667 15.832 4.1667C16.053 4.1667 16.265 4.25449 16.4213 4.41077C16.5776 4.56705 16.6654 4.77902 16.6654 5.00003V10.8334Z"
        stroke="#0A0A0A"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTools(props: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.8983 10.7416L14.1608 17.8466C14.1749 17.9303 14.1632 18.0163 14.1271 18.0931C14.0911 18.1699 14.0324 18.2339 13.959 18.2765C13.8857 18.3191 13.801 18.3382 13.7164 18.3314C13.6319 18.3246 13.5514 18.2921 13.4858 18.2383L10.5024 15.9991C10.3584 15.8915 10.1835 15.8334 10.0037 15.8334C9.82391 15.8334 9.64896 15.8915 9.50494 15.9991L6.5166 18.2375C6.45104 18.2912 6.37065 18.3236 6.28618 18.3304C6.20171 18.3373 6.11716 18.3182 6.04382 18.2757C5.97048 18.2332 5.91183 18.1694 5.8757 18.0927C5.83957 18.0161 5.82768 17.9302 5.8416 17.8466L7.10327 10.7416"
        stroke="#0A0A0A"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11.6667C12.7614 11.6667 15 9.42811 15 6.66669C15 3.90526 12.7614 1.66669 10 1.66669C7.23858 1.66669 5 3.90526 5 6.66669C5 9.42811 7.23858 11.6667 10 11.6667Z"
        stroke="#0A0A0A"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SapHero: React.FC = () => {
  const wrap: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const fadeUpBlur: Variants = {
    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const statsWrap = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };

  const statItem: Variants = {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 16 },
    },
  };

  return (
    <motion.section
      variants={wrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative w-full flex flex-col justify-center py-8 md:py-8 overflow-hidden bg-gradient-to-b from-[#FEF2F2] via-[#FFFFFF] to-[#FEE2E2] text-slate-900"
    >
      <div className="relative z-20 px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2 md:gap-10">
          {/* LEFT */}
          <motion.div variants={fadeUp} className="flex flex-col items-start">
            <motion.div
              variants={fadeUp}
              className="inline-flex gap-2 items-center px-4 py-2 mb-8 text-xs font-bold tracking-widest text-red-700 bg-red-50 rounded-full border border-red-100 shadow-sm"
            >
              <span className="hidden w-2 h-2 bg-red-700 rounded-full animate-pulse md:block" />
              {"SAP Services Portfolio"}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-6 leading-[1.3] tracking-tight text-gray-900"
            >
              <span className="block leading-[1.2]">Your Trusted</span>
              <span className="text-red-600 font-bold block leading-[1.2]">
                SAP Partner
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base"
            >
              Comprehensive SAP services that drive business transformation.
              From BASIS operations to innovation with BTP—we deliver excellence
              at every stage of your SAP journey.
            </motion.p>

            <motion.ul
              variants={fadeUp}
              className="mt-6 space-y-3 text-sm text-slate-700"
            >
              <li className="flex gap-3 items-center">
                <IconCheck className="w-5 h-5 text-black" />
                24/7 Global Support
              </li>
              <li className="flex gap-3 items-center">
                <IconShield className="w-5 h-5 text-black" />
                Security & Compliance First
              </li>
              <li className="flex gap-3 items-center">
                <IconTools className="w-5 h-5 text-black" />
                Tools-Agnostic Approach
              </li>
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-7">
              <Link
                to="/contact-us"
                className="inline-flex gap-2 justify-center items-center px-6 py-3 text-sm font-semibold text-white bg-red-600 rounded-full shadow-sm transition hover:bg-red-700"
              >
                Get Started
                {/* arrow svg */}
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
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUpBlur}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="relative"
          >
            <div className="relative rounded-2xl ring-1 shadow-lg ring-slate-200">
              <img
                src="/assets/SAPEnterpriseTechnology.webp"
                sizes="(max-width: 768px) 100vw, 600px"
                alt="SAP services"
                title="SAP services"
                width={1200}
                height={700}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="object-cover w-full h-auto rounded-2xl"
              />

              {/* bottom glass overlay */}
              <div className="absolute inset-x-0 -bottom-16 p-3 md:p-4">
                <motion.div
                  variants={statsWrap}
                  className="grid grid-cols-3 gap-2 p-3 rounded-2xl md:gap-3 md:p-4"
                >
                  {stats.map((s) => (
                    <motion.div
                      key={s.label}
                      variants={statItem}
                      whileHover={{ scale: 1.03 }}
                      className="rounded-xl bg-[#00000066] px-3 py-3 text-center"
                    >
                      <div className="text-xl font-extrabold text-white md:text-2xl">
                        {s.value}
                      </div>
                      <div className="mt-0.5 text-[11px] font-medium text-white/80">
                        {s.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="absolute -inset-3 bg-gradient-to-br via-transparent rounded-3xl blur-2xl pointer-events-none -z-10 from-red-200/40 to-red-300/30" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
export default SapHero;
