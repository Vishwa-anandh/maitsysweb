import React from "react";
import { motion } from "framer-motion";
import QuickViewUi from "../../ui/CountUp/QuickViewUi";
interface SAPModule {
  name: string;
  icon: React.ReactNode;
}

const sapModules: SAPModule[] = [
  {
    name: "SAP ECC",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_297_1107)">
          <path
            d="M10 6.7915C14.1421 6.7915 17.5 5.67222 17.5 4.2915C17.5 2.91079 14.1421 1.7915 10 1.7915C5.85786 1.7915 2.5 2.91079 2.5 4.2915C2.5 5.67222 5.85786 6.7915 10 6.7915Z"
            stroke="#DC2626"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 4.2915V15.9582C2.5 16.6212 3.29018 17.2571 4.6967 17.7259C6.10322 18.1948 8.01088 18.4582 10 18.4582C11.9891 18.4582 13.8968 18.1948 15.3033 17.7259C16.7098 17.2571 17.5 16.6212 17.5 15.9582V4.2915"
            stroke="#DC2626"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 10.125C2.5 10.788 3.29018 11.4239 4.6967 11.8928C6.10322 12.3616 8.01088 12.625 10 12.625C11.9891 12.625 13.8968 12.3616 15.3033 11.8928C16.7098 11.4239 17.5 10.788 17.5 10.125"
            stroke="#DC2626"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_297_1107">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "S/4HANA",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5831 15.9582H7.49981C6.41803 15.9579 5.35763 15.6568 4.43712 15.0886C3.51661 14.5203 2.77224 13.7073 2.2872 12.7403C1.80216 11.7734 1.59555 10.6906 1.69047 9.61302C1.78538 8.53541 2.17808 7.50543 2.82468 6.63816C3.47128 5.77089 4.3463 5.1005 5.35198 4.70191C6.35765 4.30332 7.45434 4.19223 8.51952 4.38106C9.58469 4.56988 10.5764 5.05118 11.3838 5.77118C12.1911 6.49117 12.7824 7.42149 13.0915 8.45817H14.5831C15.5777 8.45817 16.5315 8.85326 17.2348 9.55652C17.9381 10.2598 18.3331 11.2136 18.3331 12.2082C18.3331 13.2027 17.9381 14.1566 17.2348 14.8598C16.5315 15.5631 15.5777 15.9582 14.5831 15.9582Z"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "SAP BW",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 2.625V15.9583C2.5 16.4004 2.67559 16.8243 2.98816 17.1368C3.30072 17.4494 3.72464 17.625 4.16667 17.625H17.5"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 14.2917V7.625"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.833 14.2915V4.2915"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66699 14.2915V11.7915"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "SAP GRC",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_297_1127)">
          <path
            d="M16.6663 10.9585C16.6663 15.1252 13.7497 17.2085 10.283 18.4169C10.1015 18.4784 9.90429 18.4755 9.72467 18.4085C6.24967 17.2085 3.33301 15.1252 3.33301 10.9585V5.12521C3.33301 4.9042 3.42081 4.69224 3.57709 4.53596C3.73337 4.37968 3.94533 4.29188 4.16634 4.29188C5.83301 4.29188 7.91634 3.29188 9.36634 2.02521C9.54289 1.87438 9.76747 1.7915 9.99967 1.7915C10.2319 1.7915 10.4565 1.87438 10.633 2.02521C12.0913 3.30021 14.1663 4.29188 15.833 4.29188C16.054 4.29188 16.266 4.37968 16.4223 4.53596C16.5785 4.69224 16.6663 4.9042 16.6663 5.12521V10.9585Z"
            stroke="#DC2626"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_297_1127">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "SAP CRM",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3337 17.625V15.9583C13.3337 15.0743 12.9825 14.2264 12.3573 13.6013C11.7322 12.9762 10.8844 12.625 10.0003 12.625H5.00033C4.11627 12.625 3.26842 12.9762 2.6433 13.6013C2.01818 14.2264 1.66699 15.0743 1.66699 15.9583V17.625"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.50033 9.29167C9.34127 9.29167 10.8337 7.79928 10.8337 5.95833C10.8337 4.11738 9.34127 2.625 7.50033 2.625C5.65938 2.625 4.16699 4.11738 4.16699 5.95833C4.16699 7.79928 5.65938 9.29167 7.50033 9.29167Z"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.333 17.6251V15.9584C18.3325 15.2198 18.0866 14.5024 17.6341 13.9187C17.1817 13.3349 16.5481 12.918 15.833 12.7334"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.333 2.7334C14.05 2.91698 14.6855 3.33398 15.1394 3.91866C15.5932 4.50333 15.8395 5.22242 15.8395 5.96257C15.8395 6.70271 15.5932 7.4218 15.1394 8.00647C14.6855 8.59115 14.05 9.00815 13.333 9.19173"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "SAP SCM",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.667 15.1252V5.12516C11.667 4.68314 11.4914 4.25921 11.1788 3.94665C10.8663 3.63409 10.4424 3.4585 10.0003 3.4585H3.33366C2.89163 3.4585 2.46771 3.63409 2.15515 3.94665C1.84259 4.25921 1.66699 4.68314 1.66699 5.12516V14.2918C1.66699 14.5128 1.75479 14.7248 1.91107 14.8811C2.06735 15.0374 2.27931 15.1252 2.50033 15.1252H4.16699"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 15.125H7.5"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8337 15.1248H17.5003C17.7213 15.1248 17.9333 15.037 18.0896 14.8808C18.2459 14.7245 18.3337 14.5125 18.3337 14.2915V11.2498C18.3333 11.0607 18.2687 10.8773 18.1503 10.7298L15.2503 7.10484C15.1724 7.00724 15.0735 6.9284 14.961 6.87417C14.8485 6.81993 14.7252 6.79168 14.6003 6.7915H11.667"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1667 16.7918C15.0871 16.7918 15.8333 16.0456 15.8333 15.1252C15.8333 14.2047 15.0871 13.4585 14.1667 13.4585C13.2462 13.4585 12.5 14.2047 12.5 15.1252C12.5 16.0456 13.2462 16.7918 14.1667 16.7918Z"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83366 16.7918C6.75413 16.7918 7.50033 16.0456 7.50033 15.1252C7.50033 14.2047 6.75413 13.4585 5.83366 13.4585C4.91318 13.4585 4.16699 14.2047 4.16699 15.1252C4.16699 16.0456 4.91318 16.7918 5.83366 16.7918Z"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "SAP SRM",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_297_1149)">
          <path
            d="M6.66634 18.4582C7.12658 18.4582 7.49967 18.0851 7.49967 17.6248C7.49967 17.1646 7.12658 16.7915 6.66634 16.7915C6.2061 16.7915 5.83301 17.1646 5.83301 17.6248C5.83301 18.0851 6.2061 18.4582 6.66634 18.4582Z"
            stroke="#DC2626"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 18.4582C16.2936 18.4582 16.6667 18.0851 16.6667 17.6248C16.6667 17.1646 16.2936 16.7915 15.8333 16.7915C15.3731 16.7915 15 17.1646 15 17.6248C15 18.0851 15.3731 18.4582 15.8333 18.4582Z"
            stroke="#DC2626"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.70801 1.8335H3.37467L5.59134 12.1835C5.67266 12.5625 5.88357 12.9014 6.18777 13.1417C6.49197 13.382 6.87043 13.5088 7.25801 13.5002H15.408C15.7873 13.4995 16.1551 13.3696 16.4505 13.1317C16.746 12.8938 16.9515 12.5623 17.033 12.1918L18.408 6.00016H4.26634"
            stroke="#DC2626"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_297_1149">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "SAP HCM",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3337 17.625V15.9583C13.3337 15.0743 12.9825 14.2264 12.3573 13.6013C11.7322 12.9762 10.8844 12.625 10.0003 12.625H5.00033C4.11627 12.625 3.26842 12.9762 2.6433 13.6013C2.01818 14.2264 1.66699 15.0743 1.66699 15.9583V17.625"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.50033 9.29167C9.34127 9.29167 10.8337 7.79928 10.8337 5.95833C10.8337 4.11738 9.34127 2.625 7.50033 2.625C5.65938 2.625 4.16699 4.11738 4.16699 5.95833C4.16699 7.79928 5.65938 9.29167 7.50033 9.29167Z"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.333 9.29167L14.9997 10.9583L18.333 7.625"
          stroke="#DC2626"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const card = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE },
  },
};
const SAPIntegrationUI: React.FC = () => {
  return (
    <div className=" bg-white">
      {/* SAP Integration Section */}
      <motion.div
        className="mx-auto px-4 py-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-center mb-3"
        >
          Works Seamlessly With Your{" "}
          <span className="text-red-500">SAP Stack</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="text-center text-gray-600 mb-12">
          Native integration with all major SAP modules and versions
        </motion.p>

        {/* SAP Modules Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8"
        >
          {sapModules.map((module, index) => (
            <motion.div
              key={index +'index'}
              variants={card}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 4 }}
                transition={{ type: "spring", stiffness: 420, damping: 18 }}
                className="text-3xl mb-3 text-red-500"
              >
                {module.icon}
              </motion.div>

              <p className="text-sm font-semibold text-center text-gray-800">
                {module.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Testimonials Section */}
      {/* <div className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-white">Trusted by Leading </span>
            <span className="text-red-500">Enterprises</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-700 rounded-lg p-8 hover:bg-slate-600 transition-colors"
              >
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div>
                  <p className="text-white font-semibold mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <QuickViewUi
        title="Ready to Transform Your SAP Monitoring?"
        description="Join leading enterprises using Strawberry to achieve complete SAP integration visibility."
        linkName="Connect with Us"
        url="/contact-us"
        title_className="text-3xl text-red-600 text-black lg:text-5xl font-bold text-center leading-tight lg:leading-[1.15]"
      />
    </div>
  );
};

export default SAPIntegrationUI;
