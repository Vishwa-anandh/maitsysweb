import React from "react";
import { motion } from "framer-motion";
import { Cloud, Network, Cpu, Gauge, Zap } from "lucide-react";
import BackgroundVideo from "../../components/ui/BackgroundVideo";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ContactPopup from "../../components/contact/ContactPopup";

const features = [
  {
    icon: <Cloud className="w-7 h-7" />,
    title: "Cloud flows and desktop flows (RPA)",
  },
  {
    icon: <Network className="w-7 h-7" />,
    title: "API and third-party integrations",
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "AI Builder for intelligent automation",
  },
  {
    icon: <Gauge className="w-7 h-7" />,
    title: "Real-time triggers & event workflows",
  },
];

const benefits = [
  "Reduce manual effort and operational costs",
  "Accelerate business processes",
  "Improve accuracy and compliance",
  "Enhance process visibility and tracking",
  "Enable scalable automation across departments",
];

const approach = [
  {
    title: "Process discovery and automation assessment",
    desc: "Identify key bottlenecks and automation opportunities.",
  },
  {
    title: "Workflow design and architecture",
    desc: "Map out flow logic, dependencies, and integration points.",
  },
  {
    title: "Automation development and deployment",
    desc: "Build cloud and desktop flows leveraging AI Builder.",
  },
  {
    title: "Testing, monitoring, and optimization",
    desc: "Rigorous QA to ensure flawless execution.",
  },
  {
    title: "Continuous improvement and scaling",
    desc: "Expand automation to other departments.",
  },
];

const PowerAutomateServices: React.FC = () => {
  return (
    <>
      <Seo
        title="Microsoft Power Automate Services: Workflow Automation & RPA | Maitsys"
        description="Maitsys delivers end-to-end Microsoft Power Automate services — cloud flows, desktop RPA, AI Builder, and third-party integrations — to eliminate manual tasks and accelerate enterprise processes."
        keywords={[
          "Microsoft Power Automate services",
          "Power Automate workflow automation",
          "RPA Power Automate",
          "cloud flows Power Automate",
          "desktop flows RPA",
          "AI Builder automation",
          "business process automation",
          "Power Automate consulting",
          "enterprise workflow automation",
          "Maitsys Power Automate",
        ]}
        url="/power-automate"
        image="/assets/power/power-automate-hero.webp"
        preloadImage={false}
        preloadVideo={true}
        preloadVideo_url="/hero-background.mp4"
      />
      <JsonLd
        schema={{
          "@type": "Service",
          name: "Microsoft Power Automate Services: Workflow Automation & RPA",
          description: "Maitsys delivers end-to-end Microsoft Power Automate services — cloud flows, desktop RPA, AI Builder, and third-party integrations — to eliminate manual tasks and accelerate enterprise processes.",
          serviceType: "Power Automate Services",
          provider: { "@type": "Organization", name: "Maitsys", url: "https://www.maitsys.com" },
          areaServed: "Worldwide",
          url: "https://www.maitsys.com/power-automate",
        }}
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Microsoft Power Automate Services: Workflow Automation & RPA", path: "/power-automate" }]} />

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
                className="inline-flex gap-2 items-center px-4 py-2 mb-8 text-sm font-bold tracking-widest text-red-700 bg-red-50 rounded-full border border-red-100 shadow-sm"
              >
                <span className="hidden w-2 h-2 bg-red-700 rounded-full animate-pulse md:block" />
                {`Power Automate Services`}
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-6 leading-[1.3] tracking-tight text-gray-900"
              >
                <span className="block leading-[1.2]">
                  Microsoft Power Automate
                </span>
                <span className="text-red-600 font-bold block leading-[1.2]">
                  Services
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
                Eliminate repetitive tasks and streamline operations with
                intelligent workflow automation.
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
                  Maitsys helps organizations implement Power Automate workflows
                  and RPA solutions to improve efficiency, reduce manual effort,
                  and accelerate business processes.
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
                  <span className="md:hidden">Start Automating</span>
                  <span className="hidden md:inline">
                    Start Automating Your Business
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 z-10 w-full h-5 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </section>

        {/* Intelligent Workflow Automation */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-6 pb-8 bg-white md:pt-8 md:pb-8"
        >
          <div className="flex flex-col items-center px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl text-center md:mb-6">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                Intelligent Workflow Automation
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                We design automated workflows and robotic process automation
                (RPA) solutions that connect systems, trigger actions, and
                eliminate manual processes.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 w-full sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feat, i) => (
                <div
                  key={i + 1}
                  className="flex flex-col gap-4 items-center p-8 text-center rounded-2xl border shadow-md transition-all duration-300 group bg-slate-50 border-slate-100 hover:border-red-200 hover:bg-red-50/30"
                >
                  <div className="p-3 text-red-600 bg-red-50 rounded-xl transition-transform duration-300 group-hover:scale-110">
                    {feat.icon}
                  </div>
                  <h3 className="font-semibold leading-snug text-slate-800">
                    {feat.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="px-4 pt-6 pb-6 lg:pt-6 lg:pb-6 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-8xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-900 rounded-[3rem] p-10 lg:p-14 text-white shadow-xl">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display">
                  <span className="block leading-[1.2]">Benefits of</span>
                  <span className="text-red-400 leading-[1.2]">
                    Power Automate
                  </span>
                </h2>
                <ul className="space-y-6">
                  {benefits.map((item, i) => (
                    <li key={i + "index"} className="flex gap-4 items-center">
                      <span className="flex justify-center items-center w-9 h-9 rounded-full bg-red-600/20 shrink-0">
                        <Zap className="w-5 h-5 text-red-400" />
                      </span>
                      <span className="text-lg font-light text-slate-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr rounded-3xl blur-xl from-red-600/20 to-red-400/10" />
                <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] group aspect-video">
                  <img
                    src="/assets/Cloud/image_18.jpg"
                    alt="Power Automate workflow automation benefits"
                    title="Power Automate workflow automation benefits"
                    loading="lazy"
                    decoding="async"
                    className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-slate-900/60" />
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
          className="overflow-hidden relative pt-6 pb-6 bg-white border-t lg:pt-10 lg:pb-12 border-slate-100"
        >
          <div className="relative z-10 px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">Why Choose Our</span>
                <span className="text-red-600 leading-[1.2]">
                  Power Automate Services?
                </span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                We combine deep platform expertise with business process
                understanding to deliver automation that truly transforms
                operations.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "01",
                  title: "Proven Automation Framework",
                  desc: "Combining cloud flows, desktop RPA, and AI Builder with best practices.",
                },
                {
                  num: "02",
                  title: "Minimized Disruption",
                  desc: "Strategies designed to automate without interrupting business continuity.",
                },
                {
                  num: "03",
                  title: "Microsoft Cloud Expertise",
                  desc: "Deep cross-domain knowledge across Power Platform and Microsoft 365.",
                },
                {
                  num: "04",
                  title: "Tailored Solutions",
                  desc: "Customized automation aligned with your business needs and growth strategy.",
                },
              ].map((card, i) => (
                <div
                  key={i + "index"}
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

        {/* Implementation Approach */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="py-6 bg-white border-t border-gray-100 lg:py-6"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">Our Power Automate</span>
                <span className="text-red-600 leading-[1.2]">
                  Implementation Approach
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                A structured lifecycle to deliver reliable automation from
                discovery to continuous scaling.
              </p>
            </div>

            <div className="relative mx-auto max-w-3xl">
              <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-red-100" />
              <div className="space-y-6">
                {approach.map((s) => (
                  <div key={s.title} className="flex gap-6 items-start">
                    <div className="relative z-10 w-8 h-8 bg-white rounded-full border-4 border-red-600 shadow-sm shrink-0" />
                    <div className="pt-0.5">
                      <h3 className="mb-1 text-lg font-bold text-slate-800">
                        {s.title}
                      </h3>
                      <p className="text-slate-500">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
          className="pt-8 pb-10 text-center border-t border-gray-100 lg:pt-6 lg:pb-10 bg-slate-50"
        >
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Start Automating Your Business Processes Today
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Our Power Automate experts are ready to assess your workflows and
            design automation solutions tailored to your business.
          </p>
          <a
            href="/contact-us"
            className="inline-flex gap-3 items-center px-8 py-4 text-base font-bold text-white bg-gray-800 rounded-xl shadow-lg transition-all md:px-10 md:py-5 hover:opacity-85 md:text-lg"
          >
            <span className="md:hidden">Get Free Assessment</span>
            <span className="hidden md:inline">
              👉 Get a Free Automation Assessment
            </span>
          </a>
        </motion.section>
      </main>
    </>
  );
};

export default PowerAutomateServices;
