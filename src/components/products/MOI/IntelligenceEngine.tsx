import React from "react";
import { motion } from "framer-motion";

const IntelligenceEngine: React.FC = () => {
  const features = [
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3337 5.83337L11.2503 12.9167L7.08366 8.75004L1.66699 14.1667"
            stroke="#FF6B6B"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.333 5.83337H18.333V10.8334"
            stroke="#FF6B6B"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Predictive Analytics",
      description:
        "Machine learning models capable of predicting sales and performance trends for they strategized enterprise operations.",
      color: "bg-red-50 text-red-600 ",
      border: "border-red-400",
    },
    {
      icon: (
        <svg
          width="15"
          height="19"
          viewBox="0 0 15 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1663 10.0004C14.1663 14.1671 11.2497 16.2504 7.78301 17.4588C7.60148 17.5203 7.40429 17.5173 7.22467 17.4504C3.74967 16.2504 0.833008 14.1671 0.833008 10.0004V4.16708C0.833008 3.94607 0.920805 3.73411 1.07709 3.57783C1.23337 3.42155 1.44533 3.33375 1.66634 3.33375C3.33301 3.33375 5.41634 2.33375 6.86634 1.06708C7.04289 0.916248 7.26747 0.833374 7.49967 0.833374C7.73188 0.833374 7.95646 0.916248 8.13301 1.06708C9.59134 2.34208 11.6663 3.33375 13.333 3.33375C13.554 3.33375 13.766 3.42155 13.9223 3.57783C14.0785 3.73411 14.1663 3.94607 14.1663 4.16708V10.0004Z"
            stroke="#A78BFA"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Smart Anomaly Detection",
      description:
        "AI algorithms automatically identify and optimize and automatically detect situations that indicate potential fraud, inefficiencies, or errors.",
      color: "bg-purple-50 text-purple-600",
      border: "border-purple-400",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 4.16667C10.001 3.83336 9.93532 3.50322 9.80685 3.19567C9.67837 2.88811 9.4897 2.60936 9.25191 2.37579C9.01413 2.14222 8.73204 1.95856 8.42224 1.83561C8.11243 1.71266 7.78117 1.6529 7.44793 1.65984C7.1147 1.66679 6.78621 1.7403 6.4818 1.87606C6.17739 2.01181 5.9032 2.20707 5.67536 2.45034C5.44751 2.69361 5.27061 2.97999 5.15506 3.29263C5.03952 3.60527 4.98765 3.93786 5.00252 4.27083C4.51269 4.39678 4.05794 4.63254 3.67271 4.96026C3.28749 5.28798 2.98189 5.69906 2.77906 6.16237C2.57623 6.62569 2.48149 7.12908 2.50201 7.63443C2.52254 8.13978 2.65779 8.63383 2.89752 9.07917C2.476 9.42161 2.14454 9.86186 1.93197 10.3616C1.7194 10.8614 1.63215 11.4055 1.67782 11.9467C1.7235 12.4878 1.9007 13.0096 2.19403 13.4667C2.48735 13.9237 2.88791 14.3022 3.36085 14.5692C3.30245 15.021 3.3373 15.4801 3.46326 15.9179C3.58922 16.3558 3.8036 16.7632 4.09318 17.115C4.38275 17.4667 4.74136 17.7554 5.14687 17.9631C5.55238 18.1709 5.99617 18.2933 6.45083 18.3228C6.9055 18.3523 7.36139 18.2883 7.79034 18.1347C8.2193 17.9811 8.61221 17.7412 8.94482 17.4298C9.27743 17.1184 9.54267 16.7421 9.72416 16.3242C9.90565 15.9063 9.99953 15.4556 10 15V4.16667Z"
            stroke="#60A5FA"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 4.16667C9.99903 3.83336 10.0647 3.50322 10.1932 3.19567C10.3217 2.88811 10.5103 2.60936 10.7481 2.37579C10.9859 2.14222 11.268 1.95856 11.5778 1.83561C11.8876 1.71266 12.2189 1.6529 12.5521 1.65984C12.8853 1.66679 13.2138 1.7403 13.5182 1.87606C13.8226 2.01181 14.0968 2.20707 14.3247 2.45034C14.5525 2.69361 14.7294 2.97999 14.845 3.29263C14.9605 3.60527 15.0124 3.93786 14.9975 4.27083C15.4873 4.39678 15.9421 4.63254 16.3273 4.96026C16.7125 5.28798 17.0181 5.69906 17.221 6.16237C17.4238 6.62569 17.5185 7.12908 17.498 7.63443C17.4775 8.13978 17.3422 8.63383 17.1025 9.07917C17.524 9.42161 17.8555 9.86186 18.0681 10.3616C18.2806 10.8614 18.3679 11.4055 18.3222 11.9467C18.2765 12.4878 18.0993 13.0096 17.806 13.4667C17.5127 13.9237 17.1121 14.3022 16.6392 14.5692C16.6976 15.021 16.6627 15.4801 16.5368 15.9179C16.4108 16.3558 16.1964 16.7632 15.9069 17.115C15.6173 17.4667 15.2587 17.7554 14.8532 17.9631C14.4477 18.1709 14.0039 18.2933 13.5492 18.3228C13.0945 18.3523 12.6386 18.2883 12.2097 18.1347C11.7807 17.9811 11.3878 17.7412 11.0552 17.4298C10.7226 17.1184 10.4574 16.7421 10.2759 16.3242C10.0944 15.9063 10.0005 15.4556 10 15V4.16667Z"
            stroke="#60A5FA"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 10.8333C11.8004 10.5872 11.1894 10.1392 10.7444 9.54584C10.2994 8.95251 10.0404 8.24056 10 7.5C9.95962 8.24056 9.70056 8.95251 9.25556 9.54584C8.81057 10.1392 8.19963 10.5872 7.5 10.8333"
            stroke="#60A5FA"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.666 5.41671C14.8677 5.0672 14.9818 4.67406 14.9985 4.27087"
            stroke="#60A5FA"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.00293 4.27087C5.01941 4.67399 5.1332 5.06712 5.3346 5.41671"
            stroke="#60A5FA"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.89746 9.08C3.04991 8.95584 3.21305 8.84541 3.38496 8.75"
            stroke="#60A5FA"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.6152 8.75C16.7871 8.84541 16.9503 8.95584 17.1027 9.08"
            stroke="#60A5FA"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.99952 15.0001C4.42521 15.0003 3.86057 14.8522 3.36035 14.5701"
            stroke="#60A5FA"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.6392 14.5701C16.1389 14.8522 15.5743 15.0003 15 15.0001"
            stroke="#60A5FA"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Contextual Learning",
      description:
        "The system continuously learns from your unique SAP environment, adapting processes to maximize efficiency and delivering increasingly precise and accurate insights.",
      color: "bg-blue-50 text-blue-600",
      border: "border-blue-400",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.4997 1.66663H4.99967C4.55765 1.66663 4.13372 1.84222 3.82116 2.15478C3.5086 2.46734 3.33301 2.89127 3.33301 3.33329V16.6666C3.33301 17.1087 3.5086 17.5326 3.82116 17.8451C4.13372 18.1577 4.55765 18.3333 4.99967 18.3333H14.9997C15.4417 18.3333 15.8656 18.1577 16.1782 17.8451C16.4907 17.5326 16.6663 17.1087 16.6663 16.6666V5.83329L12.4997 1.66663Z"
            stroke="#C084FC"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.667 1.66663V4.99996C11.667 5.44199 11.8426 5.86591 12.1551 6.17847C12.4677 6.49103 12.8916 6.66663 13.3337 6.66663H16.667"
            stroke="#C084FC"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.33366 7.5H6.66699"
            stroke="#C084FC"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.3337 10.8334H6.66699"
            stroke="#C084FC"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.3337 14.1666H6.66699"
            stroke="#C084FC"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Natural Language Insights",
      description:
        "Interact with your data using plain English. Ask about KPIs, sales trends, and inventory data to get instant reports, complex patterns without data science expertise.",
      color: "bg-purple-50 text-purple-600",
      border: "border-purple-400",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.55664 17.5C8.70293 17.7533 8.91332 17.9637 9.16668 18.11C9.42003 18.2563 9.70743 18.3333 9.99997 18.3333C10.2925 18.3333 10.5799 18.2563 10.8333 18.11C11.0866 17.9637 11.297 17.7533 11.4433 17.5"
            stroke="#F87171"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.7187 12.7716C2.60984 12.8909 2.538 13.0393 2.51191 13.1987C2.48583 13.3581 2.50663 13.5217 2.57179 13.6695C2.63695 13.8173 2.74365 13.9429 2.87891 14.0312C3.01418 14.1195 3.17218 14.1665 3.3337 14.1666H16.667C16.8285 14.1667 16.9866 14.1198 17.1219 14.0317C17.2573 13.9436 17.3641 13.8181 17.4294 13.6704C17.4948 13.5227 17.5158 13.3592 17.4899 13.1998C17.464 13.0404 17.3924 12.8919 17.2837 12.7725C16.1754 11.63 15.0004 10.4158 15.0004 6.66663C15.0004 5.34054 14.4736 4.06877 13.5359 3.13109C12.5982 2.19341 11.3265 1.66663 10.0004 1.66663C8.67429 1.66663 7.40252 2.19341 6.46483 3.13109C5.52715 4.06877 5.00037 5.34054 5.00037 6.66663C5.00037 10.4158 3.82453 11.63 2.7187 12.7716Z"
            stroke="#F87171"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Intelligent Alerting",
      description:
        "Automated AI-powered alerts on critical situations, such as stock shortages or cash flow anomalies. Real-time proactive critical alerts.",
      color: "bg-red-50 text-red-600",
      border: "border-red-400",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 2.5V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H17.5"
            stroke="#38BDF8"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 14.1667V7.5"
            stroke="#38BDF8"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.833 14.1666V4.16663"
            stroke="#38BDF8"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66699 14.1666V11.6666"
            stroke="#38BDF8"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Root Cause Analysis",
      description:
        "Our system digs deep into your data to identify not just anomalies but the reasons behind them, solving real problems faster with less manual investigation.",
      color: "bg-blue-50 text-blue-600",
      border: "border-[#38BDF8]",
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "Deploy in Days, Not Months",
      description:
        "Pre-built SAP connectors and templates enable rapid deployment. Start monitoring your SAP environment with our AI-augmented cloud platform today.",
      highlight: "3-5 days",
      highlightLabel: "Average deployment time",
    },
    {
      number: "02",
      title: "Reduce Costs by 52%",
      description:
        "Intelligent automation eliminates manual monitoring efforts. AI-powered insights reduce ERP platform and system upkeep allocated to SAP oversight.",
      highlight: "52%",
      highlightLabel: "Cost reduction",
    },
    {
      number: "03",
      title: "Universal SAP Coverage",
      description:
        "Integrate all SAP solutions from your entire environment: ECC, S/4HANA, BTP, SuccessFactors, Ariba, and more. One interface for complete visibility.",
      highlight: "100%",
      highlightLabel: "SAP environment",
    },
    {
      number: "04",
      title: "Zero Learning Curve",
      description:
        "No SQL. No custom-designed query for ERP professionals. Get instant insights without specialized training in data science expertise.",
      highlight: "<1 hour",
      highlightLabel: "Time to first insight",
    },
    {
      number: "05",
      title: "Monitor Anywhere, Anytime",
      description:
        "Fully responsive web dashboards and native mobile apps keep you connected to your critical alerts and insights anywhere you are, anytime, anywhere.",
      highlight: "24/7",
      highlightLabel: "Availability",
    },
    {
      number: "06",
      title: "Proven Enterprise ROI",
      description:
        "We'll work by leading planning measurable results. 43% reduction in downtime, 65% productivity increase, positive ROI in 6 months.",
      highlight: "6 months",
      highlightLabel: "Average ROI timeline",
    },
  ];
  const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.06 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  const card = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: EASE },
    },
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            AI-Powered <span className="text-red-500">Intelligence Engine</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-600 text-lg">
            Machine learning at the core of everything we do
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index + "index"}
              variants={card}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className={`rounded-lg p-6 border-t border-r border-b border-l-4 ${feature.border} hover:shadow-lg transition-shadow`}
            >
              <motion.div
                whileHover={{ rotate: 6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 420, damping: 18 }}
                className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}
              >
                {feature.icon}
              </motion.div>

              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Why Choose <span className="text-red-500">MIO</span>?
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-600 mt-2">
            Built for enterprise SAP environments with real-world results
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index + 'index'}
              variants={card}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="bg-gradient-to-br from-[#FEF2F2] to-[#FFFFFF] rounded-2xl shadow-md p-4 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold text-black"
                >
                  {benefit.number}
                </motion.span>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {benefit.description}
                  </p>

                  <div className="flex items-baseline gap-2 border-t-2 border-black">
                    <span className="text-2xl font-bold text-red-500 pt-4">
                      {benefit.highlight}
                    </span>
                    <span className="text-sm text-gray-400">
                      {benefit.highlightLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default IntelligenceEngine;
