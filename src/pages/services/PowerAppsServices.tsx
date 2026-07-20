import React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Layers,
  Settings,
  Shield,
  Smartphone,
  Code,
  CheckCircle2,
  Zap,
  Target,
  Users,
  RefreshCw,
} from "lucide-react";
import BackgroundVideo from "../../components/ui/BackgroundVideo";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ContactPopup from "../../components/contact/ContactPopup";

const solutions = [
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Field service management apps",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Asset and inventory management systems",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Approval workflow and request automation apps",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "HR and employee self-service portals",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Finance and operations management apps",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile-first and cross-platform business apps",
  },
];

const integrations = [
  "Microsoft 365 (SharePoint, Excel, Outlook)",
  "Microsoft Teams",
  "Microsoft Dynamics 365",
  "Azure services and APIs",
  "Third-party enterprise systems",
];

const devProcess = [
  { step: "01", text: "Business process analysis and requirement discovery" },
  { step: "02", text: "UI/UX design for user-friendly applications" },
  { step: "03", text: "Rapid low-code development and testing" },
  { step: "04", text: "Deployment, governance, and security setup" },
  { step: "05", text: "Ongoing support, optimization, and enhancements" },
];

const whyUs = [
  {
    icon: <Target className="w-6 h-6 text-red-600" />,
    bg: "bg-red-50",
    desc: "Certified Microsoft Power Platform experts with deep enterprise experience",
  },
  {
    icon: <Users className="w-6 h-6 text-red-600" />,
    bg: "bg-red-50",
    desc: "Experience in enterprise-grade app development across industries",
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    bg: "bg-blue-50",
    desc: "Secure, scalable, and compliant architectures with proven delivery",
  },
  {
    icon: <Zap className="w-6 h-6 text-rose-600" />,
    bg: "bg-rose-50",
    desc: "Faster time-to-market with low-code delivery and agile methodology",
  },
];

const PowerAppsServices: React.FC = () => {
  return (
    <>
      <Seo
        title="Microsoft Power Apps Development Services | Maitsys"
        description="Maitsys designs and develops custom Microsoft Power Apps solutions that replace manual processes, automate workflows, and drive faster decision-making for enterprise organizations."
        keywords={[
          "Power Apps development services",
          "Microsoft Power Apps consulting",
          "custom Power Apps solutions",
          "low-code business applications",
          "Power Platform development",
          "enterprise app development",
          "Power Apps workflow automation",
          "Microsoft 365 app integration",
          "business process automation",
          "Maitsys Power Apps",
        ]}
        url="/power-apps"
        preloadImage={false}
        preloadVideo={true}
        preloadVideo_url="/hero-background.mp4"
      />
      <JsonLd
        schema={{
          "@type": "Service",
          name: "Microsoft Power Apps Development Services",
          description: "Maitsys designs and develops custom Microsoft Power Apps solutions that replace manual processes, automate workflows, and drive faster decision-making for enterprise organizations.",
          serviceType: "Power Apps Development Services",
          provider: { "@type": "Organization", name: "Maitsys", url: "https://www.maitsys.com" },
          areaServed: "Worldwide",
          url: "https://www.maitsys.com/power-apps",
        }}
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Microsoft Power Apps Development Services", path: "/power-apps" }]} />

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
                {`Power Apps Experts`}
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
                  Microsoft Power Apps
                </span>
                <span className="text-red-600 font-bold block leading-[1.2]">
                  Development Services
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
                Replace manual processes, spreadsheets, and legacy systems with
                scalable, low-code applications.
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
                  Maitsys helps organizations design, develop, and deploy custom
                  Power Apps solutions that improve efficiency, automate
                  workflows, and drive faster decision-making.
                </p>
                <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
                  Using Microsoft Power Apps and Power Platform, we enable rapid
                  application development with enterprise-grade security,
                  scalability, and seamless integrations.
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
                  <span className="md:hidden">Build Your Power App</span>
                  <span className="hidden md:inline">
                    Build Your Power App Today
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 z-10 w-full h-5 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </section>

        {/* Solutions We Build */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-6 pb-12 bg-white md:pt-8 md:pb-16"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 max-w-3xl text-center md:mb-8">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">
                  Custom Power Apps for
                </span>
                <span className="text-red-600 leading-[1.2]">
                  Business Operations
                </span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                We design and develop low-code and no-code business applications
                that eliminate manual work and unify disconnected systems — with
                enterprise-grade security, scalability, and seamless
                integrations.
              </p>
            </div>

            <h3 className="pb-4 mb-8 text-xl font-bold tracking-wider border-b text-slate-900 border-slate-100">
              Power Apps Solutions We Build
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((item, i) => (
                <div
                  key={i + "index"}
                  className="flex gap-4 items-start p-6 bg-white rounded-2xl border shadow-md transition-all duration-300 border-slate-100 hover:border-red-200 hover:shadow-md"
                >
                  <div className="flex justify-center items-center w-12 h-12 text-red-600 bg-red-50 rounded-xl shrink-0">
                    {item.icon}
                  </div>
                  <h4 className="pt-2 text-lg font-semibold leading-snug text-slate-800">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Integration & Process — dark section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden relative pt-8 pb-6 text-white border-t lg:pt-8 lg:pb-10 bg-slate-900 border-slate-800"
        >
          <div
            className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 10px 10px, white 2px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Integration */}
              <div>
                <h2 className="mb-8 text-3xl font-bold lg:text-4xl font-display">
                  Microsoft Power Platform Integration
                </h2>
                <p className="mb-8 text-lg font-light leading-relaxed text-slate-400">
                  Our Power Apps solutions seamlessly integrate with your
                  existing enterprise ecosystem:
                </p>
                <div className="space-y-4">
                  {integrations.map((item, i) => (
                    <div
                      key={i + "integration"}
                      className="flex gap-4 items-center p-4 rounded-xl border bg-white/5 border-white/10"
                    >
                      <div className="p-2 rounded-lg bg-red-500/20 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="font-medium text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dev Process */}
              <div>
                <h2 className="mb-8 text-3xl font-bold lg:text-4xl font-display">
                  Our Power Apps Development Process
                </h2>
                <div className="space-y-6">
                  {devProcess.map((item, i) => (
                    <div
                      key={i + "devProcess"}
                      className="flex gap-5 items-start"
                    >
                      <span className="w-10 text-2xl font-bold text-red-500 font-display shrink-0">
                        {item.step}
                      </span>
                      <p className="text-lg text-slate-300 font-medium pt-0.5 leading-snug">
                        {item.text}
                      </p>
                    </div>
                  ))}
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
          className="py-10 bg-white border-t border-gray-100 lg:py-10"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">
                  Why Choose Maitsys for
                </span>
                <span className="text-red-600 leading-[1.2]">
                  Power Apps Development
                </span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                We combine deep platform expertise with business process
                understanding to deliver solutions that truly transform
                operations.
              </p>
            </div>

            <div className="grid gap-6 mx-auto max-w-5xl md:grid-cols-2 lg:grid-cols-3">
              {whyUs.map((item, i) => (
                <div
                  key={i + "index"}
                  className="p-8 bg-white rounded-3xl border shadow-md transition-all duration-300 border-slate-100 hover:shadow-md hover:border-red-100"
                >
                  <div
                    className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mb-6`}
                  >
                    {item.icon}
                  </div>
                  <p className="font-medium leading-relaxed text-slate-800">
                    {item.desc}
                  </p>
                </div>
              ))}

              <div className="flex flex-col justify-center p-8 text-white bg-gradient-to-br from-red-600 to-red-700 rounded-3xl border border-red-500 shadow-lg lg:col-span-2">
                <div className="flex justify-center items-center mb-6 w-12 h-12 rounded-full bg-white/20">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-medium font-display">
                  End-to-End Support
                </h3>
                <p className="text-lg leading-relaxed text-red-100">
                  Ongoing application support, optimization, and enhancement
                  services to ensure your Power Apps evolve with your business
                  needs.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          id="main-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden relative pt-4 pb-8 text-center bg-gradient-to-br from-red-50 to-red-100 border-t border-red-100 lg:pt-8 lg:pb-8"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-200 rounded-full blur-[80px] opacity-50 pointer-events-none" />
          <div className="relative z-10 px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Start Your Power Apps Journey Today
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
              Transform your business processes with scalable, low-code
              applications built on Microsoft Power Platform.
            </p>
            <a
              href="/contact-us"
              className="inline-flex gap-3 items-center px-8 py-4 text-base font-bold text-white bg-red-600 rounded-xl shadow-lg transition-all md:px-10 md:py-5 hover:bg-red-700 hover:shadow-red-600/30 md:text-lg"
            >
              <span className="">Request a Demo</span>
            </a>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default PowerAppsServices;
