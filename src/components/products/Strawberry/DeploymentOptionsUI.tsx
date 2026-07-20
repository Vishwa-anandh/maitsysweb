import React from "react";
import { motion } from "framer-motion";

const DeploymentOptionsUI: React.FC = () => {
  /* ------------------ Animations ------------------ */
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const deploymentOptions = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.1663 31.6666H14.9996C12.8361 31.666 10.7153 31.0639 8.87424 29.9274C7.03322 28.7909 5.54448 27.1648 4.5744 25.2309C3.60432 23.2971 3.19111 21.1315 3.38094 18.9763C3.57077 16.8211 4.35616 14.7611 5.64936 13.0266C6.94256 11.292 8.69261 9.95124 10.704 9.15406C12.7153 8.35689 14.9087 8.13471 17.039 8.51236C19.1694 8.89001 21.1527 9.85261 22.7675 11.2926C24.3823 12.7326 25.5648 14.5932 26.1829 16.6666H29.1663C31.1554 16.6666 33.0631 17.4568 34.4696 18.8633C35.8761 20.2698 36.6663 22.1775 36.6663 24.1666C36.6663 26.1557 35.8761 28.0634 34.4696 29.4699C33.0631 30.8764 31.1554 31.6666 29.1663 31.6666Z"
            stroke="white"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "SAP ERP Cloud",
      description:
        "Fully managed cloud deployment with automatic updates and 99.9% uptime SLA.",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.333 3.33325H6.66634C4.82539 3.33325 3.33301 4.82564 3.33301 6.66659V13.3333C3.33301 15.1742 4.82539 16.6666 6.66634 16.6666H33.333C35.174 16.6666 36.6663 15.1742 36.6663 13.3333V6.66659C36.6663 4.82564 35.174 3.33325 33.333 3.33325Z"
            stroke="white"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.333 23.3333H6.66634C4.82539 23.3333 3.33301 24.8256 3.33301 26.6666V33.3333C3.33301 35.1742 4.82539 36.6666 6.66634 36.6666H33.333C35.174 36.6666 36.6663 35.1742 36.6663 33.3333V26.6666C36.6663 24.8256 35.174 23.3333 33.333 23.3333Z"
            stroke="white"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 10H10.0167"
            stroke="white"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 30H10.0167"
            stroke="white"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "On-Premise",
      description:
        "Complete control with on-premise installation for maximum security and customization.",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 35C32.7614 35 35 32.7614 35 30C35 27.2386 32.7614 25 30 25C27.2386 25 25 27.2386 25 30C25 32.7614 27.2386 35 30 35Z"
            stroke="white"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
            stroke="white"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 35V15C10 18.9782 11.5804 22.7936 14.3934 25.6066C17.2064 28.4196 21.0218 30 25 30"
            stroke="white"
            strokeWidth="3.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Hybrid",
      description:
        "Best of both worlds - combine cloud flexibility with on-premise security.",
    },
  ];

  const technologies = [
    {
      title: "SAP ECC",
      description:
        "Full compatibility with SAP ECC systems and IDOC processing",
    },
    {
      title: "S/4HANA",
      description: "Native support for SAP S/4HANA Cloud and On-Premise",
    },
    {
      title: "OData APIs",
      description:
        "Modern OData protocol for secure, standard-based connectivity",
    },
    {
      title: "WebDispatcher",
      description: "SAP-approved secure gateway for protected data access",
    },
    {
      title: "Cloud Foundry",
      description:
        "Deployed on SAP Cloud Foundry for scalability and reliability",
    },
    {
      title: "Node.js & React",
      description:
        "Modern full-stack development for responsive UI and performance",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white py-6 px-6 md:px-8"
    >
      <div className="mx-auto">
        {/* ---------- Header ---------- */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Flexible Deployment Options
          </h1>
          <p className="text-gray-600 text-lg">
            Deploy Strawberry the way that works best for your organization
          </p>
        </motion.div>

        {/* ---------- Deployment Cards ---------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {deploymentOptions.map((option, index) => (
            <motion.div
              key={index + "index"}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-gradient-to-br from-[#FEF2F2] to-white rounded-2xl p-8 shadow-lg hover:shadow-xl"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg text-2xl">
                  {option.icon}
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-900 text-center mb-4">
                {option.title}
              </h2>
              <p className="text-gray-600 text-center leading-relaxed">
                {option.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------- Technologies Header ---------- */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Built on{" "}
            <span className="text-red-500">Enterprise Technologies</span>
          </h2>
        </motion.div>

        {/* ---------- Technology Cards ---------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index + 'index'}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#FEF2F2] to-white rounded-xl p-8 shadow-sm border border-gray-300 hover:shadow-lg hover:border-red-100"
            >
              <h2 className="text-xl font-bold text-gray-900 text-center mb-4">
                {tech.title}
              </h2>
              <p className="text-gray-600 text-center leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DeploymentOptionsUI;
