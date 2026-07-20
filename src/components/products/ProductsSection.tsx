import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import QuickViewUi from "../ui/CountUp/QuickViewUi";
type Product = {
  title: string;
  tag: string;
  description: string;
  features: string[];
  icon?: React.ReactNode;
  link?: string;
};

const products: Product[] = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.3332 16H26.0265C25.4438 15.9987 24.8767 16.1884 24.412 16.5399C23.9473 16.8915 23.6105 17.3856 23.4532 17.9467L20.3198 29.0933C20.2996 29.1626 20.2575 29.2234 20.1998 29.2667C20.1421 29.3099 20.072 29.3333 19.9998 29.3333C19.9277 29.3333 19.8575 29.3099 19.7998 29.2667C19.7421 29.2234 19.7 29.1626 19.6798 29.0933L12.3198 2.90666C12.2996 2.83742 12.2575 2.7766 12.1998 2.73332C12.1421 2.69005 12.072 2.66666 11.9998 2.66666C11.9277 2.66666 11.8575 2.69005 11.7998 2.73332C11.7421 2.7766 11.7 2.83742 11.6798 2.90666L8.5465 14.0533C8.38979 14.6122 8.05501 15.1047 7.59299 15.456C7.13097 15.8073 6.56693 15.9983 5.9865 16H2.6665"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    link: "/products/sap-idoc-monitoring",
    title: "Strawberry - SAP IDOC Monitoring",
    tag: "SAP Integration",
    description:
      "Real-time monitoring for SAP IDOC flows with proactive alerts and analytics.",
    features: [
      "Real-Time Monitoring",
      "Smart Notifications",
      "Advanced Analytics",
    ],
  },
  {
    icon: (
      <svg
        width="24"
        height="30"
        viewBox="0 0 24 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6668 16.0006C22.6668 22.6673 18.0002 26.0006 12.4535 27.9339C12.163 28.0324 11.8475 28.0277 11.5602 27.9206C6.00016 26.0006 1.3335 22.6673 1.3335 16.0006V6.66728C1.3335 6.31365 1.47397 5.97452 1.72402 5.72447C1.97407 5.47442 2.31321 5.33394 2.66683 5.33394C5.3335 5.33394 8.66683 3.73394 10.9868 1.70728C11.2693 1.46594 11.6286 1.33334 12.0002 1.33334C12.3717 1.33334 12.731 1.46594 13.0135 1.70728C15.3468 3.74728 18.6668 5.33394 21.3335 5.33394C21.6871 5.33394 22.0263 5.47442 22.2763 5.72447C22.5264 5.97452 22.6668 6.31365 22.6668 6.66728V16.0006Z"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    link: "/products/mio-user-monitoring",
    title: "MIO - SAP User Activity Control",
    tag: "Monitoring",
    description:
      "Take complete control of SAP user activity with real-time monitoring, AI-powered intelligence.",
    features: [
      "Real-Time Activity Monitoring",
      "AI-Powered Threat Detection",
      "Compliance & Audit Trails",
    ],
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    link: "/products/firefighter",
    title: "Maitsys Access Governance",
    tag: "Security",
    description:
      "Streamline SAP firefighter access with automated credentials, multi-level approvals, and real-time audit monitoring.",
    features: [
      "1-Level Approval Workflow",
      "Instant Access Request",
      "Secure Credential Sharing",
    ],
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.3332 25.3333H11.9999C10.269 25.3329 8.57241 24.8511 7.09959 23.942C5.62677 23.0328 4.43578 21.7319 3.65972 20.1848C2.88365 18.6377 2.55308 16.9053 2.70494 15.1811C2.85681 13.4569 3.48513 11.8089 4.51968 10.4213C5.55424 9.03367 6.95428 7.96105 8.56336 7.32331C10.1724 6.68556 11.9271 6.50782 13.6314 6.80994C15.3357 7.11206 16.9224 7.88214 18.2142 9.03413C19.506 10.1861 20.452 11.6746 20.9466 13.3333H23.3332C24.9245 13.3333 26.4506 13.9655 27.5759 15.0907C28.7011 16.2159 29.3332 17.742 29.3332 19.3333C29.3332 20.9246 28.7011 22.4507 27.5759 23.576C26.4506 24.7012 24.9245 25.3333 23.3332 25.3333Z"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    link: "/products/cloud-cost-optimizer",
    title: "Cloud Cost Optimizer",
    tag: "Cloud",
    description:
      "Monitor and optimize your cloud costs across all platforms with AI-powered recommendations and automated savings.",
    features: [
      "Multi-Cloud Support (AWS, Azure, GCP)",
      "AI-Powered Cost Recommendations",
      "Real-Time Cost Analytics",
    ],
  },
];
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.5,
    },
  }),
};

const ProductsSection: React.FC = () => {
  const MotionLink = motion.create(Link);

  return (
    <section className="py-6 bg-white">
      <div className="px-4 mx-auto text-center max-w-8xl">
        {/* Badge */}

        <span className="inline-block mb-4 rounded-full bg-gradient-to-r from-[#FF8282] to-[#E7000B] px-4 py-1 text-sm font-medium text-white">
          SAP Integration Solutions
        </span>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4 text-center lg:text-start"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl font-bold leading-tight text-center text-gray-900 lg:text-6xl"
          >
            Our <span className="text-red-600">Products</span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-lg text-gray-600"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          Enterprise-grade SAP integration monitoring and intelligence platform
        </motion.p>

        {/* Cards Grid */}
        <div className="grid gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <MotionLink
              key={`${product.title}-${index}`}
              custom={index}
              to={product.link || "#"}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="flex flex-col items-start p-6 bg-white rounded-xl border shadow-sm transition hover:shadow-lg hover:bg-red-50 hover:border-red-400"
            >
              {/* Icon */}
              <div className="flex justify-center items-center mb-4 w-12 h-12 bg-red-600 rounded-lg">
                <span className="text-lg font-bold text-white">
                  {product.icon}
                </span>
              </div>

              {/* Tag */}
              <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-white bg-red-600 rounded-full">
                {product.tag}
              </span>

              {/* Title */}
              <h2 className="mt-2 text-lg font-bold text-black text-start">
                {product.title}
              </h2>

              {/* Description */}
              <p className="mt-2 text-xs text-gray-600 text-start">
                {product.description}
              </p>

              {/* Features */}
              <ul className="mt-4 space-y-2 text-sm text-gray-700 text-start">
                {product.features.map((feature, i) => (
                  <li
                    key={`${product.title}-feature-${i}`}
                    className="flex gap-2 items-center"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA (NOT a Link - avoids <a> inside <a>) */}
              <span className="inline-flex gap-1 items-center pt-4 mt-auto text-sm font-semibold text-red-600 hover:underline">
                View Details →
              </span>
            </MotionLink>
          ))}
        </div>
      </div>
      <QuickViewUi
        title="Ready to Transform Your SAP Integration?"
        description="Get complete visibility and control over your SAP IDOC flows"
        linkName="Connect with Us"
        url="/contact-us"
        title_className="text-3xl text-red-600 text-black lg:text-5xl font-bold text-center leading-tight lg:leading-[1.15]"
      />
    </section>
  );
};

export default ProductsSection;
