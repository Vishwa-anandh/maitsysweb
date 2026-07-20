import React from "react";
import { motion } from "framer-motion";

type StepCard = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  theme: "blue" | "pink" | "green";
};

const themeMap = {
  blue: {
    cardBg: "bg-gradient-to-br from-[#EFF6FF] to-[#ECFEFF] border-[#DBEAFE]",
    iconWrap: "bg-sky-100 text-sky-600",
    badgeRing: "bg-[linear-gradient(135deg,_#2B7FFF_0%,_#00B8DB_100%)]",
    badgeDot: "bg-sky-500",
  },
  pink: {
    cardBg: "bg-gradient-to-br from-[#FAF5FF] to-[#FDF2F8] border-[#FCE7F3]",
    iconWrap: "bg-fuchsia-100 text-fuchsia-600",
    badgeRing: "bg-gradient-to-br from-[#AD46FF] to-[#F6339A]",
    badgeDot: "bg-fuchsia-500",
  },
  green: {
    cardBg: "bg-gradient-to-br from-[#F0FDF4] to-[#ECFDF5] border-[#DCFCE7]",
    iconWrap: "bg-emerald-100 text-emerald-600",
    badgeRing: "bg-gradient-to-br from-[#00C950] to-[#00BC7D]",
    badgeDot: "bg-emerald-500",
  },
} as const;

function StepCardItem({
  item,
  index,
}: Readonly<{ item: StepCard; index: number }>) {
  const t = themeMap[item.theme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 16,
        delay: index * 0.08,
      }}
      whileHover={{ y: -6, rotate: -0.3, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={[
        "relative rounded-2xl border p-6 shadow-sm",
        "transition hover:shadow-md will-change-transform",
        t.cardBg,
      ].join(" ")}
    >
      {/* top-right badge */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 14,
          delay: index * 0.08 + 0.1,
        }}
        className="absolute -right-4 -top-4"
      >
        <div
          className={`relative grid h-10 w-10 place-items-center rounded-full ${t.badgeRing}`}
        >
          <span className="text-sm font-semibold text-white">{item.id}</span>
        </div>
      </motion.div>

      <div className="flex flex-col items-start gap-7">
        {/* icon */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 160,
            damping: 14,
            delay: index * 0.08 + 0.05,
          }}
          whileHover={{ scale: 1.08 }}
          className="h-7 w-7"
        >
          {item.icon}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: index * 0.08 + 0.12 }}
          className="pr-10"
        >
          <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
          <p className="mt-1 text-base leading-relaxed text-slate-500">
            {item.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

const StepsCards: React.FC = () => {
  const items: StepCard[] = [
    {
      id: 1,
      title: "Validate & Prioritize",
      description:
        "Remove noise and focus on exploitable, business-critical vulnerabilities",
      icon: (
        <svg
          className="h-10 w-10"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.6012 20C44.5146 24.4826 43.8637 29.1428 41.7569 33.2036C39.6502 37.2643 36.215 40.4801 32.0243 42.3146C27.8335 44.1491 23.1405 44.4915 18.7278 43.2847C14.3152 42.0779 10.4496 39.3948 7.77577 35.6828C5.10194 31.9709 3.78147 27.4545 4.03455 22.8868C4.28763 18.319 6.09898 13.9762 9.16652 10.5823C12.2341 7.18848 16.3724 4.94884 20.8914 4.23689C25.4103 3.52493 30.0368 4.3837 33.9992 6.66998"
            stroke="#155DFC"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 22L24 28L44 8"
            stroke="#155DFC"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      theme: "blue",
    },
    {
      id: 2,
      title: "Execute Remediation",
      description:
        "Hands-on patching, hardening, and fixes across all your systems",
      icon: (
        <svg
          className="h-10 w-10"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.44 4H23.56C22.4991 4 21.4817 4.42143 20.7316 5.17157C19.9814 5.92172 19.56 6.93913 19.56 8V8.36C19.5593 9.06145 19.3741 9.75038 19.0231 10.3577C18.672 10.965 18.1675 11.4693 17.56 11.82L16.7 12.32C16.0919 12.6711 15.4022 12.8559 14.7 12.8559C13.9979 12.8559 13.3081 12.6711 12.7 12.32L12.4 12.16C11.4821 11.6305 10.3917 11.4869 9.36801 11.7606C8.34434 12.0343 7.47111 12.7031 6.94 13.62L6.5 14.38C5.97053 15.2979 5.82689 16.3883 6.10062 17.412C6.37435 18.4357 7.04308 19.3089 7.96 19.84L8.26 20.04C8.86456 20.389 9.36724 20.8902 9.71811 21.4937C10.069 22.0971 10.2558 22.7819 10.26 23.48V24.5C10.2628 25.2048 10.0793 25.8979 9.72809 26.509C9.37688 27.1201 8.87042 27.6276 8.26 27.98L7.96 28.16C7.04308 28.6911 6.37435 29.5643 6.10062 30.588C5.82689 31.6117 5.97053 32.7021 6.5 33.62L6.94 34.38C7.47111 35.2969 8.34434 35.9657 9.36801 36.2394C10.3917 36.5131 11.4821 36.3695 12.4 35.84L12.7 35.68C13.3081 35.3289 13.9979 35.1441 14.7 35.1441C15.4022 35.1441 16.0919 35.3289 16.7 35.68L17.56 36.18C18.1675 36.5307 18.672 37.035 19.0231 37.6423C19.3741 38.2496 19.5593 38.9385 19.56 39.64V40C19.56 41.0609 19.9814 42.0783 20.7316 42.8284C21.4817 43.5786 22.4991 44 23.56 44H24.44C25.5009 44 26.5183 43.5786 27.2684 42.8284C28.0186 42.0783 28.44 41.0609 28.44 40V39.64C28.4407 38.9385 28.6259 38.2496 28.9769 37.6423C29.328 37.035 29.8325 36.5307 30.44 36.18L31.3 35.68C31.9081 35.3289 32.5979 35.1441 33.3 35.1441C34.0021 35.1441 34.6919 35.3289 35.3 35.68L35.6 35.84C36.5179 36.3695 37.6083 36.5131 38.632 36.2394C39.6557 35.9657 40.5289 35.2969 41.06 34.38L41.5 33.6C42.0295 32.6821 42.1731 31.5917 41.8994 30.568C41.6257 29.5443 40.9569 28.6711 40.04 28.14L39.74 27.98C39.1296 27.6276 38.6231 27.1201 38.2719 26.509C37.9207 25.8979 37.7372 25.2048 37.74 24.5V23.5C37.7372 22.7952 37.9207 22.1021 38.2719 21.491C38.6231 20.8799 39.1296 20.3724 39.74 20.02L40.04 19.84C40.9569 19.3089 41.6257 18.4357 41.8994 17.412C42.1731 16.3883 42.0295 15.2979 41.5 14.38L41.06 13.62C40.5289 12.7031 39.6557 12.0343 38.632 11.7606C37.6083 11.4869 36.5179 11.6305 35.6 12.16L35.3 12.32C34.6919 12.6711 34.0021 12.8559 33.3 12.8559C32.5979 12.8559 31.9081 12.6711 31.3 12.32L30.44 11.82C29.8325 11.4693 29.328 10.965 28.9769 10.3577C28.6259 9.75038 28.4407 9.06145 28.44 8.36V8C28.44 6.93913 28.0186 5.92172 27.2684 5.17157C26.5183 4.42143 25.5009 4 24.44 4Z"
            stroke="#9810FA"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"
            stroke="#9810FA"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      theme: "pink",
    },
    {
      id: 3,
      title: "Verify & Report",
      description: "Re-scan, confirm closure, and provide audit-ready evidence",
      icon: (
        <svg
          className="h-10 w-10"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.12501 24.6962C3.95833 24.2472 3.95833 23.7533 4.12501 23.3042C5.74841 19.3679 8.50404 16.0023 12.0426 13.634C15.5811 11.2657 19.7431 10.0015 24.001 10.0015C28.2589 10.0015 32.421 11.2657 35.9595 13.634C39.498 16.0023 42.2536 19.3679 43.877 23.3042C44.0437 23.7533 44.0437 24.2472 43.877 24.6962C42.2536 28.6325 39.498 31.9982 35.9595 34.3664C32.421 36.7347 28.2589 37.999 24.001 37.999C19.7431 37.999 15.5811 36.7347 12.0426 34.3664C8.50404 31.9982 5.74841 28.6325 4.12501 24.6962Z"
            stroke="#00A63E"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"
            stroke="#00A63E"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      theme: "green",
    },
  ];

  return (
    <section className="w-full max-w-8xl mx-auto px-4 lg:px-8 py-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <StepCardItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};
export default StepsCards;
