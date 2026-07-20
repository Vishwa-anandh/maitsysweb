import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundImage from "../../../assets/image/image12.webp";
type Plan = {
  name: string;
  subtitle: string;
  price: string;
  priceUnit?: string;
  badge?: string;
  features: string[];
  buttonText: string;
  buttonVariant: "outline" | "solid";
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    subtitle: "Perfect for small teams",
    price: "$9",
    priceUnit: "/month",
    features: [
      "Up to 3 cloud accounts",
      "Basic cost analytics",
      "Email support",
      "Monthly reports",
      "Usage tracking",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
  },
  {
    name: "Professional",
    subtitle: "For growing businesses",
    price: "$39",
    priceUnit: "/month",
    badge: "MOST POPULAR",
    highlighted: true,
    features: [
      "All cloud platforms",
      "AI-powered recommendations",
      "Priority support",
      "Unlimited resources",
      "Real-time alerts",
      "Custom dashboards",
      "API access",
    ],
    buttonText: "Get Started",
    buttonVariant: "solid",
  },
  {
    name: "Enterprise",
    subtitle: "For large organizations",
    price: "Custom",
    features: [
      "All cloud platforms",
      "AI-powered recommendations",
      "Priority support",
      "Unlimited resources",
      "Real-time alerts",
      "Custom dashboards",
      "API access",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline",
  },
];

const CheckIcon = () => (
  <svg
    className="h-4 w-4 text-emerald-500 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 011.415-1.415l2.793 2.793 6.793-6.793a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Flexible Pricing for Every Organization
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Choose the plan that best fits your organization&#39;s needs
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={[
                "relative rounded-2xl bg-white border",
                p.highlighted
                  ? "border-red-500 shadow-[0_18px_45px_rgba(239,68,68,0.20)]"
                  : "border-slate-200 shadow-sm",
                p.highlighted ? "lg:scale-[1.02]" : "",
                "p-6 sm:p-7",
              ].join(" ")}
            >
              {/* Badge */}
              {p.badge && (
                <div className="absolute left-6 top-6">
                  <span className="inline-flex items-center rounded-full bg-red-600 px-2 py-1 text-[10px] font-bold tracking-wide text-white border border-red-100">
                    {p.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className={p.badge ? "pt-7" : ""}>
                <h3 className="text-lg font-semibold text-slate-900">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{p.subtitle}</p>

                <div className="mt-5 flex items-end gap-2">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-900">
                    {p.price}
                  </span>
                  {p.priceUnit && (
                    <span className="text-xs text-slate-500 pb-1">
                      {p.priceUnit}
                    </span>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-slate-100" />

              {/* Features */}
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="text-sm text-slate-600 leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="mt-7">
                <Link
                  to={"/contact-us"}
                  className={[
                    "w-full rounded-lg px-4 py-3 text-sm font-semibold transition",
                    p.buttonVariant === "solid"
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "border border-red-300 text-red-600 hover:bg-red-50",
                  ].join(" ")}
                >
                  {p.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-8 pt-10 pb-6 rounded-3xl">
        <div
          className="w-full relative rounded-3xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(241, 64, 64, 0.1) 0%, rgba(147, 27, 27, 0) 100%)",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="absolute inset-0 z-0 rounded-3xl"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)
              `,
            }}
          />

          <section className="w-full text-white px-6  rounded-3xl z-10">
            <motion.div
              className="max-w-8xl flex flex-col items-center py-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.25 } },
              }}
            >
              {/* Left Heading */}
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7 },
                  },
                }}
                className="text-3xl text-red-600 lg:text-4xl font-bold text-center "
              >
                Ready to Optimize Your Cloud Costs?
              </motion.h2>

              {/* Right Content */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7 },
                  },
                }}
                className="flex flex-col lg:items-center"
              >
                <p className="text-black text-center font-medium text-sm leading-relaxed max-w-xl py-6">
                  Join hundreds of companies saving millions on their cloud
                  infrastructure with intelligent cost optimization
                </p>

                <Link
                  to="/contact-us"
                  className="w-fit text-red-500 font-bold hover:bg-red-700 border border-red-600 
                  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 transition-all duration-300 
                  hover:shadow-lg shadow-md hover:scale-105 hover:text-white"
                >
                  Connect with Us
                </Link>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
