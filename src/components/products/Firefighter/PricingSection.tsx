import { Link } from "react-router-dom";

import QuickViewUi from "../../ui/CountUp/QuickViewUi";
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
    name: "Free Trial",
    subtitle: "7-day free trial",
    price: "$0",
    features: [
      "7-day access to full features",
      "Up to 5 users",
      "Email support",
      "Single workspace",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline",
  },
  {
    name: "Monthly Plan",
    subtitle: "Billed monthly",
    price: "$29",
    priceUnit: "/user/month",
    badge: "POPULAR",
    highlighted: true,
    features: [
      "Unlimited users",
      "Multi-level approvals",
      "Real-time monitoring",
      "Priority support",
      "Advanced reporting",
      "API access",
    ],
    buttonText: "Get Started",
    buttonVariant: "solid",
  },
  {
    name: "Annual Plan",
    subtitle: "Save 17% annually",
    price: "$299",
    priceUnit: "/user/year",
    features: [
      "Everything in Monthly Plan",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
      "24/7 support",
      "Quarterly business reviews",
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
      <div className="max-w-8xl mx-auto px-4 sm:px-8 py-4 sm:py-8">
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
      <QuickViewUi
        title="Ready to Streamline Your SAP SAP Firefighter Access?"
        description="Join leading enterprises using Maitsys to secure and monitor their SAP environments"
        linkName="Connect with Us"
        url="/contact-us"
        title_className="text-3xl text-red-600 text-black lg:text-5xl font-bold text-center leading-tight lg:leading-[1.15]"
      />
    </section>
  );
};

export default PricingSection;
