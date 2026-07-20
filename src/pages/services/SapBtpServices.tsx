import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Cog,
  LayoutGrid,
  BrainCircuit,
  Activity,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import BackgroundVideo from "../../components/ui/BackgroundVideo";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ContactPopup from "../../components/contact/ContactPopup";

const services = [
  {
    icon: <Cog className="w-7 h-7" />,
    title: "Integration Suite & APIs",
    desc: "Enable seamless connectivity across your SAP and non-SAP landscape with SAP Integration Suite:",
    items: [
      "SAP Cloud Integration (CPI) implementation",
      "API design, management, and governance",
      "Event-driven architecture",
    ],
  },
  {
    icon: <LayoutGrid className="w-7 h-7" />,
    title: "Extensions & App Development",
    desc: "Extend your SAP applications without disrupting your core system:",
    items: [
      "Custom development using SAP CAP",
      "SAP Fiori / UI5 app development",
      "ABAP Cloud clean core extensions",
    ],
  },
  {
    icon: <BrainCircuit className="w-7 h-7" />,
    title: "AI, Automation & Analytics",
    desc: "Drive operational efficiency and data-driven decisions with BTP's AI:",
    items: [
      "SAP Build Process Automation",
      "Joule AI copilot integration",
      "Generative AI hub",
    ],
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "SAP BTP Managed Services",
    desc: "Ensure continuous performance, security, and innovation:",
    items: [
      "Platform monitoring and health",
      "Security, compliance, identity",
      "Cost optimisation",
    ],
  },
];

const whyUs = [
  "Clean core-aligned implementation approach — protecting your S/4HANA investment.",
  "Deep expertise in SAP Integration Suite, CAP, Fiori, and AI-powered extensions.",
  "Scalable, cloud-first architecture across AWS, Azure, and Google Cloud.",
  "Faster time-to-value with proven accelerators and reusable frameworks.",
  "End-to-end partnership — from strategy to managed services. We are an SAP-certified partner with extensive BTP delivery experience.",
];

const approach = [
  {
    step: "01",
    title: "BTP Readiness Assessment",
    items: [
      "Platform & landscape evaluation",
      "Clean core gap analysis",
      "Business case development",
    ],
  },
  {
    step: "02",
    title: "Strategy & Architecture",
    items: [
      "BTP roadmap definition",
      "Governance & best practices",
      "Cloud provider selection",
    ],
  },
  {
    step: "03",
    title: "Build & Integrate",
    items: [
      "Integration & extension development",
      "API design & management",
      "AI/automation deployment",
    ],
  },
  {
    step: "04",
    title: "Testing & Go-Live",
    items: [
      "Functional and technical testing",
      "User acceptance testing",
      "Seamless go-live support",
    ],
  },
  {
    step: "05",
    title: "Managed Services",
    items: [
      "Continuous monitoring",
      "Security & compliance",
      "Ongoing optimisation",
    ],
  },
];

const SapBtpServices: React.FC = () => {
  return (
    <>
      <Seo
        title="SAP BTP Services: Build, Integrate & Extend | Maitsys"
        description="Unlock the full potential of your SAP ecosystem with Maitsys SAP BTP (Business Technology Platform) Services. Build intelligent apps, integrate systems, and extend SAP — AI-ready and clean core aligned."
        keywords={[
          "SAP BTP services",
          "SAP Business Technology Platform",
          "SAP Integration Suite",
          "SAP CAP development",
          "SAP Fiori development",
          "SAP BTP consulting",
          "clean core SAP",
          "SAP AI services",
          "SAP BTP managed services",
          "SAP Build Process Automation",
          "Joule AI copilot",
          "Maitsys SAP BTP",
        ]}
        url="/sap-btp-services"
        image="/assets/sap-btp-hero.webp"
        preloadImage={false}
        preloadVideo={true}
        preloadVideo_url="/hero-background.mp4"
      />
      <JsonLd
        schema={{
          "@type": "Service",
          name: "SAP BTP Services: Build, Integrate & Extend",
          description:
            "Unlock the full potential of your SAP ecosystem with Maitsys SAP BTP (Business Technology Platform) Services. Build intelligent apps, integrate systems, and extend SAP — AI-ready and clean core aligned.",
          serviceType: "SAP BTP Services",
          provider: {
            "@type": "Organization",
            name: "Maitsys",
            url: "https://www.maitsys.com",
          },
          areaServed: "Worldwide",
          url: "https://www.maitsys.com/sap-btp-services",
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          {
            name: "SAP BTP Services: Build, Integrate & Extend",
            path: "/sap-btp-services",
          },
        ]}
      />

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
                transition: {
                  staggerChildren: 0.25,
                  delayChildren: 0.2,
                },
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
                className="inline-flex gap-2 items-center px-4 py-2 mb-8 text-sm font-bold tracking-widest text-red-700 bg-red-50 rounded-full border border-red-100 shadow-sm"
              >
                <span className="hidden w-2 h-2 bg-red-600 rounded-full animate-pulse md:block" />
                {"Business Technology Platform"}
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-6 leading-[1.3] tracking-tight text-gray-900"
              >
                <span className="block leading-[1.2]">SAP BTP Services:</span>
                <span className="text-red-600 font-bold block leading-[1.2]">
                  Build, Integrate, Extend
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
                AI-Ready and Clean Core Aligned
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mb-6 max-w-3xl text-lg leading-relaxed text-slate-700"
              >
                Unlock the full potential of your SAP ecosystem with Maitsys SAP
                BTP Services. We help organizations build intelligent
                applications, seamlessly integrate systems, and extend SAP
                capabilities — all while maintaining a clean core strategy and
                accelerating your AI transformation.
              </motion.p>

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
                  <span className="md:hidden">Free BTP Assessment</span>
                  <span className="hidden md:inline">
                    Request a Free BTP Readiness Assessment
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 z-10 w-full h-5 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </section>

        {/* Services Grid (Bento) */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-4 pb-8 bg-white md:pt-6 md:pb-10"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-8">
              <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">End-to-End SAP BTP</span>
                <span className="text-red-600 leading-[1.2]">
                  Consulting Services
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Our SAP BTP consulting services are designed to accelerate
                digital transformation by combining integration, intelligent
                automation, analytics, and AI-powered application development
                into a unified platform strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 auto-rows-min gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Big Bento — Strategy & Architecture */}
              <div className="flex overflow-hidden relative flex-col justify-between p-8 bg-white rounded-3xl border border-gray-100 shadow-md transition-all duration-300 group md:p-10 hover:border-red-200 hover:shadow-xl md:col-span-2 lg:col-span-2">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-red-50 rounded-full opacity-50 blur-3xl pointer-events-none" />
                <div className="relative z-10 mb-8">
                  <div className="flex justify-center items-center mb-8 w-16 h-16 text-red-600 bg-red-50 rounded-2xl transition-transform duration-300 group-hover:scale-110">
                    <Cloud className="w-8 h-8" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold md:text-3xl font-display text-slate-900">
                    SAP BTP Strategy & Architecture
                  </h3>
                  <p className="mb-6 max-w-xl text-base leading-relaxed text-gray-500">
                    We define a robust SAP BTP roadmap aligned with your
                    business goals and SAP's clean core principles:
                  </p>
                </div>
                <ul className="grid relative z-10 gap-4 w-full sm:grid-cols-2">
                  {[
                    "BTP roadmap development and platform selection",
                    "Architecture design for scalable, secure environments",
                    "Clean core-aligned extension strategy for S/4HANA",
                    "Governance, compliance, and best practices frameworks",
                  ].map((li, i) => (
                    <li
                      key={i + "services"}
                      className="flex gap-3 p-4 text-sm font-medium text-gray-700 bg-gray-50 rounded-xl border border-gray-100"
                    >
                      <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />{" "}
                      {li}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Remaining service cards */}
              {services.map((svc, idx) => (
                <div
                  key={idx + "services"}
                  className={`group relative bg-white  p-8 rounded-3xl shadow-md border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300${
                    idx === services.length - 1
                      ? " md:col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >
                  <div className="flex justify-center items-center mb-6 w-14 h-14 text-red-600 bg-red-50 rounded-2xl transition-transform duration-300 group-hover:scale-110">
                    {svc.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold font-display text-slate-900">
                    {svc.title}
                  </h3>
                  <p className="pb-6 mb-6 text-sm leading-relaxed text-gray-500 border-b border-gray-100">
                    {svc.desc}
                  </p>
                  <ul className="space-y-3">
                    {svc.items.map((li, i) => (
                      <li
                        key={i + "items"}
                        className="flex gap-2 text-sm font-medium text-gray-700"
                      >
                        <ChevronRight className="w-4 h-4 text-red-600 shrink-0" />{" "}
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden relative py-8 border-t lg:py-8 bg-slate-50 border-slate-100 text-brand-dark"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50 to-transparent pointer-events-none" />
          <div className="relative z-10 px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10 md:mt-2">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">
                  Why Choose Maitsys for
                </span>
                <span className="text-red-600 leading-[1.2]">SAP BTP?</span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                We empower organizations to move beyond traditional ERP with
                flexible, AI-driven extensions and scalable integrations on SAP
                BTP.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyUs.map((text, i) => (
                <div
                  key={i + "whyUs"}
                  className={`bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4${
                    i === whyUs.length - 1 ? " md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex justify-center items-center w-10 h-10 text-red-600 bg-red-50 rounded-xl shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-gray-700">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* BTP Approach */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-6 pb-2 bg-white border-t border-gray-100 lg:pt-10 lg:pb-4"
        >
          <div className="px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-6">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">Our SAP BTP</span>
                <span className="text-red-600 leading-[1.2]">
                  Delivery Approach
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                A structured lifecycle to maximize the value of your BTP
                investment — from readiness to continuous managed services.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
              {approach.map((s) => (
                <div
                  key={s.step}
                  className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 text-4xl font-black text-red-700">
                    {s.step}
                  </div>
                  <h3 className="mb-4 text-lg font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {s.items.map((item, i) => (
                      <li
                        key={i + "approach"}
                        className="flex gap-2 items-start"
                      >
                        <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Industries */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-6 pb-6 border-t border-gray-100 lg:pt-6 lg:pb-6 bg-slate-50"
        >
          <div className="px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-8">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">Industries We</span>
                <span className="text-red-600 leading-[1.2]">Serve</span>
              </h2>
              <p className="text-lg text-gray-600">
                We deliver SAP BTP Services across leading industries.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                "Manufacturing",
                "Retail & E-commerce",
                "Healthcare",
                "Banking & Financial Services",
                "Logistics & Supply Chain",
              ].map((industry, i) => (
                <span
                  key={i + "industry"}
                  className="px-6 py-3 font-medium text-gray-800 bg-white rounded-full border border-gray-200 shadow-sm transition-shadow cursor-default hover:shadow-md"
                >
                  {industry}
                </span>
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
          className="pt-6 pb-10 text-center bg-white border-t border-gray-100 lg:pt-10 lg:pb-10"
        >
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Get Started with SAP BTP Today
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Transform your SAP landscape with a future-ready, AI-enabled
            platform. Our SAP BTP architects are ready to help you build,
            integrate, and extend — from strategy to deployment.
          </p>
          <a
            href="/contact-us"
            className="inline-flex gap-3 items-center px-8 py-4 text-base font-bold text-white bg-red-600 rounded-xl shadow-lg transition-all md:px-10 md:py-5 hover:bg-red-700 hover:shadow-red-600/30 md:text-lg"
          >
            <span className="md:hidden">👉 Free BTP Assessment</span>
            <span className="hidden md:inline">
              👉 Request a Free BTP Readiness Assessment
            </span>
          </a>
        </motion.section>
      </main>
    </>
  );
};

export default SapBtpServices;
