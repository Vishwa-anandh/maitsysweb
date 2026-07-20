import React from "react";
import { motion } from "framer-motion";

const StrawberryUI: React.FC = () => {
  const features = [
    {
      title: "Reduce Interface Downtime",
      description:
        "Detect and resolve IDOC failures instantly with our intelligent monitoring, minimizing business disruption.",
    },
    {
      title: "Eliminate Manual Checks",
      description:
        "Replace time-consuming manual transaction checks with automated real-time visibility into your IDOC flows.",
    },
    {
      title: "Ensure Data Reliability",
      description:
        "Guarantee reliable data exchange between SAP and external systems with comprehensive monitoring and intelligence.",
    },
    {
      title: "No SAP Modifications",
      description:
        "Works seamlessly with standard SAP interfaces on ECC and S/4HANA without requiring custom ABAP development.",
    },
    {
      title: "Support Team Enablement",
      description:
        "Empower your support teams with instant visibility, enabling faster issue detection and resolution.",
    },
    {
      title: "Flexible Integration",
      description:
        "Integrate with ticketing, alerts, and analytics tools for a unified enterprise monitoring platform.",
    },
  ];

  const stats = [
    {
      label: "Success",
      value: "2,847",
      icon: (
        <svg
          className="w-6 h-6 text-gray-800"
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
            d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
          />
        </svg>
      ),
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      label: "Failed",
      value: "23",
      icon: (
        <svg
          className="w-6 h-6 text-gray-800"
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
            d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      label: "Processing",
      value: "156",
      icon: (
        <svg
          className="w-6 h-6 text-gray-800"
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
            d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
    {
      label: "Inbound",
      value: "1,924",
      icon: (
        <svg
          className="w-6 h-6 text-gray-800"
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
            d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
          />
        </svg>
      ),
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
  ];

  // ===== Motion Variants (typed) =====
  const sectionStagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 px-8">
      <div className="mx-auto">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          Why Choose Strawberry?
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Features */}
          <motion.div
            className="space-y-6"
            variants={sectionStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div key={index + 'index'} className="flex gap-4">
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 420, damping: 20 }}
                >
                  <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white font-semibold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </motion.div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Dashboard */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg shadow-red-100 p-6 sticky top-20"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            >
              <motion.div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    IDOC Status Dashboard
                  </h2>
                  <p className="text-sm text-gray-500">
                    Real-time monitoring • Last updated: just now
                  </p>
                </div>

                {/* Your logo SVG (no change) */}
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.3851 16.5734H26.9599C26.3563 16.5721 25.7689 16.7686 25.2875 17.1327C24.8062 17.4969 24.4573 18.0087 24.2943 18.5898L21.0487 30.136C21.0278 30.2077 20.9842 30.2707 20.9244 30.3155C20.8646 30.3604 20.7919 30.3846 20.7172 30.3846C20.6425 30.3846 20.5698 30.3604 20.5101 30.3155C20.4503 30.2707 20.4067 30.2077 20.3858 30.136L12.762 3.01081C12.7411 2.93909 12.6975 2.87609 12.6377 2.83126C12.5779 2.78644 12.5052 2.76221 12.4305 2.76221C12.3558 2.76221 12.2831 2.78644 12.2234 2.83126C12.1636 2.87609 12.12 2.93909 12.0991 3.01081L8.85343 14.557C8.6911 15.1359 8.34432 15.646 7.86574 16.0099C7.38716 16.3738 6.80291 16.5717 6.20168 16.5734H2.7627"
                    stroke="#E7000B"
                    strokeWidth="2.76224"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4 mb-6"
                variants={sectionStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index + 'index'}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className={`${stat.bgColor} rounded-lg p-4 shadow-lg`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-3xl font-bold ${stat.textColor}`}>
                        {stat.value}
                      </span>
                      {stat.icon}
                    </div>
                    <div className={`text-sm font-medium ${stat.textColor}`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Alert */}
              <motion.div
                className="flex items-center gap-3 rounded-lg bg-red-50 border-l-4 border-red-500 px-4 py-3 text-sm"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                animate={{
                  // subtle pulse (won’t be annoying)
                  boxShadow: [
                    "0 0 0 rgba(231,0,11,0)",
                    "0 0 18px rgba(231,0,11,0.12)",
                    "0 0 0 rgba(231,0,11,0)",
                  ],
                }}
              >
                {/* your alert icon svg (no change) */}
                <svg
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_297_203)">
                    <path
                      d="M19.8927 16.4781L12.5691 3.66181C12.4094 3.38004 12.1779 3.14567 11.898 2.98261C11.6182 2.81955 11.3001 2.73364 10.9762 2.73364C10.6524 2.73364 10.3343 2.81955 10.0544 2.98261C9.77462 3.14567 9.54304 3.38004 9.38336 3.66181L2.05979 16.4781C1.89838 16.7576 1.81374 17.0748 1.81446 17.3976C1.81517 17.7204 1.90121 18.0373 2.06386 18.3161C2.22651 18.5949 2.45997 18.8258 2.7406 18.9853C3.02123 19.1448 3.33904 19.2273 3.66182 19.2244H18.309C18.6302 19.2241 18.9457 19.1392 19.2237 18.9784C19.5018 18.8176 19.7327 18.5864 19.8931 18.3081C20.0536 18.0299 20.1381 17.7143 20.138 17.393C20.1379 17.0718 20.0533 16.7562 19.8927 16.4781Z"
                      stroke="#E7000B"
                      strokeWidth="1.83089"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.9854 8.23901V11.9008"
                      stroke="#E7000B"
                      strokeWidth="1.83089"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.9854 15.5626H10.9954"
                      stroke="#E7000B"
                      strokeWidth="1.83089"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_297_203">
                      <rect width="21.9707" height="21.9707" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="flex items-center justify-between w-full">
                  <p className="font-semibold text-base mb-1 text-black">
                    Alert: Sales Order Interface
                  </p>
                  <p className="text-gray-600 text-sm">
                    3 Failed IDOCs require attention
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StrawberryUI;
