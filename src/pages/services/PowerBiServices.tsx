import React from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Activity,
  LineChart,
  TrendingUp,
  Lightbulb,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import BackgroundVideo from "../../components/ui/BackgroundVideo";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ContactPopup from "../../components/contact/ContactPopup";

const solutions = [
  "Executive and leadership dashboards",
  "Financial and revenue analytics reports",
  "Operational performance dashboards",
  "KPI and SLA tracking dashboards",
  "Real-time business intelligence solutions",
];

const capabilities = [
  "Interactive dashboards and reports",
  "Real-time data visualization",
  "AI-powered insights and forecasting",
  "Data modeling and DAX calculations",
];

const benefits = [
  {
    icon: <LineChart className="w-5 h-5" />,
    text: "Real-time data visibility",
  },
  { icon: <TrendingUp className="w-5 h-5" />, text: "Faster decision-making" },
  {
    icon: <Activity className="w-5 h-5" />,
    text: "Improved operational performance",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    text: "Centralized reporting and analytics",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: "Scalable business intelligence",
  },
];

const PowerBiServices: React.FC = () => {
  return (
    <>
      <Seo
        title="Microsoft Power BI Dashboard & Analytics Services | Maitsys"
        description="Maitsys builds interactive Microsoft Power BI dashboards and business intelligence solutions that transform raw data into real-time, actionable insights for smarter enterprise decision-making."
        keywords={[
          "Microsoft Power BI services",
          "Power BI dashboard development",
          "Power BI analytics consulting",
          "business intelligence dashboards",
          "Power BI report development",
          "real-time data visualization",
          "DAX Power BI",
          "Power BI KPI dashboards",
          "enterprise analytics solutions",
          "Maitsys Power BI",
        ]}
        url="/power-bi"
        image="/assets/power/power-bi-hero.webp"
        preloadImage={false}
        preloadVideo={true}
        preloadVideo_url="/hero-background.mp4"
      />
      <JsonLd
        schema={{
          "@type": "Service",
          name: "Microsoft Power BI Dashboard & Analytics Services",
          description: "Maitsys builds interactive Microsoft Power BI dashboards and business intelligence solutions that transform raw data into real-time, actionable insights for smarter enterprise decision-making.",
          serviceType: "Power BI Analytics Services",
          provider: { "@type": "Organization", name: "Maitsys", url: "https://www.maitsys.com" },
          areaServed: "Worldwide",
          url: "https://www.maitsys.com/power-bi",
        }}
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Microsoft Power BI Dashboard & Analytics Services", path: "/power-bi" }]} />

      <ContactPopup />

      <main className="overflow-hidden w-full bg-white">
        {/* Hero Section */}
        <section className="flex overflow-hidden relative flex-col justify-center pt-6 pb-8 w-full bg-white md:pt-8 md:pb-8 text-slate-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 z-0 w-full h-full opacity-40 mix-blend-multiply pointer-events-none">
              <BackgroundVideo src="/hero-background.mp4" />
            </div>
            <div className="absolute inset-0 bg-slate-50/40" />
          </div>

          <motion.div
            className="relative z-20 px-4 mx-auto max-w-9xl sm:px-6 lg:px-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.25, delayChildren: 0.2 },
              },
            }}
          >
            <div className="flex flex-col items-center mx-auto text-center max-w-9xl">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex gap-2 items-center px-4 py-2 mb-6 text-sm font-bold tracking-widest text-red-700 bg-red-50 rounded-full border border-red-100 shadow-sm"
              >
                <span className="hidden w-2 h-2 bg-red-700 rounded-full animate-pulse md:block" />
                {`Data Analytics`}
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-6 leading-[1.3] tracking-tight text-gray-900"
              >
                <span className="block leading-[1.2]">Microsoft Power BI</span>
                <span className="text-red-600 font-bold block leading-[1.2]">
                  Dashboard & Analytics Services
                </span>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mb-8 max-w-2xl text-xl font-semibold leading-relaxed lg:text-2xl text-slate-800"
              >
                Make smarter decisions with real-time dashboards and advanced
                analytics.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mb-6 space-y-6"
              >
                <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
                  Maitsys helps organizations build interactive Power BI
                  dashboards and business intelligence solutions that transform
                  data into meaningful insights.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col gap-4 justify-center sm:flex-row"
              >
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-semibold px-6 py-3.5 md:px-8 md:py-4 rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/30 text-base md:text-lg"
                >
                  <span className="md:hidden">Request a Demo</span>
                  <span className="hidden md:inline">
                    Request a Power BI Demo
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 z-10 w-full h-5 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </section>

        {/* Solutions & Capabilities */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-4 pb-8 bg-white md:pt-6 md:pb-8"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 max-w-3xl text-center md:mb-10">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">
                  Business Intelligence
                </span>
                <span className="text-red-600 leading-[1.2]">
                  with Power BI
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                We design data visualisation and analytics solutions that
                provide real-time insights and support data-driven
                decision-making.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Solutions */}
              <div className="p-10 rounded-3xl border shadow-md transition-all duration-300 group bg-slate-50 border-slate-100 hover:border-red-200 hover:shadow-lg">
                <PieChart className="mb-6 w-10 h-10 text-red-600" />
                <h3 className="mb-6 text-2xl font-bold font-display text-slate-900">
                  Power BI Solutions We Deliver
                </h3>
                <ul className="space-y-4">
                  {solutions.map((li, i) => (
                    <li
                      key={i + "solution"}
                      className="flex gap-3 items-start text-slate-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{li}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capabilities */}
              <div className="p-10 rounded-3xl border shadow-md transition-all duration-300 group bg-slate-50 border-slate-100 hover:border-red-200 hover:shadow-lg">
                <Activity className="mb-6 w-10 h-10 text-red-600" />
                <h3 className="mb-6 text-2xl font-bold font-display text-slate-900">
                  Power BI Features & Capabilities
                </h3>
                <ul className="space-y-4">
                  {capabilities.map((li, i) => (
                    <li
                      key={i + "capability"}
                      className="flex gap-3 items-start text-slate-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Benefits + Approach */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden relative pt-6 pb-6 border-t lg:pt-6 lg:pb-6 bg-slate-50 border-slate-100"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="grid gap-12 items-center lg:grid-cols-2">
              {/* Benefits */}
              <div>
                <h3 className="flex gap-2 mb-8 text-3xl font-semibold md:text-4xl text-slate-900">
                  <span className="block">Benefits of</span>
                  <span className="text-red-600">Power BI</span>
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {benefits.map((item, i) => (
                    <div
                      key={i + "benefit"}
                      className="flex gap-4 items-center p-5 bg-white rounded-2xl border shadow-md transition-all duration-300 border-slate-100 hover:border-red-100"
                    >
                      <div className="text-red-600 bg-red-50 p-2.5 rounded-xl shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-sm font-semibold leading-snug text-slate-800">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approach card */}
              <div className="overflow-hidden relative p-10 text-white bg-gradient-to-br from-red-600 to-red-800 rounded-3xl shadow-2xl">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-400 rounded-full blur-[60px] opacity-40 pointer-events-none" />
                <h3 className="relative z-10 mb-8 text-2xl font-bold font-display">
                  Our Power BI Implementation Approach
                </h3>
                <ol className="relative z-10 space-y-5">
                  {[
                    "Data discovery and requirement analysis",
                    "Data modelling and transformation",
                    "Dashboard design and development",
                    "Deployment, training, and support",
                  ].map((step, i) => (
                    <li key={i + "step"} className="flex gap-4 items-start">
                      <span className="flex justify-center items-center w-7 h-7 text-sm font-bold rounded-full bg-white/20 shrink-0">
                        {i + 1}
                      </span>
                      <span className="font-medium leading-snug text-red-50">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="relative z-10 pt-8 mt-10 border-t border-red-500/50">
                  <a
                    href="/contact-us"
                    className="flex gap-2 items-center text-base font-bold transition-colors hover:text-red-200"
                  >
                    Build Smarter Dashboards 👉 Request Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="py-8 bg-white border-t border-gray-100 lg:py-10"
        >
          <div className="relative z-10 px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">Why Choose Our</span>
                <span className="text-red-600 leading-[1.2]">
                  Power BI Services?
                </span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                We bring unparalleled BI expertise and tested methodologies to
                turn your raw data into clear, actionable intelligence.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "01",
                  title: "Data-First Approach",
                  desc: "We start with your data strategy, not just the visualisations.",
                },
                {
                  num: "02",
                  title: "Enterprise-Grade Security",
                  desc: "Row-level security, role-based access, and compliance-ready deployments.",
                },
                {
                  num: "03",
                  title: "Microsoft Ecosystem Expertise",
                  desc: "Deep knowledge of Power BI, Azure Synapse, and Microsoft Fabric.",
                },
                {
                  num: "04",
                  title: "Ongoing Partnership",
                  desc: "Continuous support, refresh management, and dashboard evolution.",
                },
              ].map((card, i) => (
                <div
                  key={i + "why"}
                  className={`bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2${i % 2 === 1 ? " lg:translate-y-6" : ""}`}
                >
                  <div className="mb-4 text-5xl font-black text-slate-500" aria-hidden="true">
                    {card.num}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          id="main-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-8 pb-10 text-center border-t border-gray-100 lg:pt-8 lg:pb-8 bg-slate-50"
        >
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Ready to transform your data into actionable insights?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Get started with interactive dashboards and advanced analytics using
            Microsoft Power BI.
          </p>
          <a
            href="/contact-us"
            className="inline-flex gap-3 items-center px-8 py-4 text-base font-bold text-white bg-red-600 rounded-xl shadow-lg transition-all md:px-10 md:py-5 hover:bg-red-700 hover:shadow-red-600/30 md:text-lg"
          >
            Build Smarter Dashboards 👉
          </a>
        </motion.section>
      </main>
    </>
  );
};

export default PowerBiServices;
