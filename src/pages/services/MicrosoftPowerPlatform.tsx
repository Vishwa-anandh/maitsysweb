import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  RotateCw,
  BarChart3,
  CheckCircle2,
  Zap,
  Target,
  Users,
  ShieldCheck,
  Globe,
  RefreshCw,
} from "lucide-react";
import BackgroundVideo from "../../components/ui/BackgroundVideo";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ContactPopup from "../../components/contact/ContactPopup";

const services = [
  {
    icon: <LayoutGrid className="w-7 h-7 text-red-600" />,
    iconBg: "bg-red-50",
    title: "Custom Business Applications",
    subtitle: "Power Apps Development",
    subtitleColor: "text-red-600",
    listLabel: "Key Use Cases",
    desc: "We design and develop custom low-code business applications using Microsoft Power Apps to replace spreadsheets, manual tracking, and email-based workflows.",
    items: [
      "Field service management apps",
      "Asset tracking systems",
      "Approval workflow applications",
      "Finance & operations apps",
      "Employee self-service portals",
    ],
    featured: false,
  },
  {
    icon: <RotateCw className="w-7 h-7 text-blue-600" />,
    iconBg: "bg-blue-50",
    title: "Workflow Automation",
    subtitle: "Power Automate Services",
    subtitleColor: "text-blue-600",
    listLabel: "Automation Solutions Include",
    desc: "Streamline operations with intelligent automation using Microsoft Power Automate. We help businesses eliminate repetitive tasks and improve productivity through end-to-end workflow automation.",
    items: [
      "Approval routing workflows",
      "Automated notifications & alerts",
      "System-to-system data integration",
      "IT ticket creation automation",
      "Document processing workflows",
    ],
    featured: true,
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-red-600" />,
    iconBg: "bg-red-50",
    title: "Dashboards & Reporting",
    subtitle: "Power BI Solutions",
    subtitleColor: "text-red-600",
    listLabel: "Reporting Solutions",
    desc: "Unlock actionable insights with Microsoft Power BI. We build interactive dashboards and advanced analytics solutions for better decision-making.",
    items: [
      "Executive dashboards",
      "SLA & performance reporting",
      "Financial analytics dashboards",
      "Operations monitoring dashboards",
    ],
    featured: false,
  },
];

const capabilities = [
  "Business process analysis & discovery",
  "Custom Power Apps development",
  "Power Automate workflow implementation",
  "Integration with Microsoft 365",
  "User training, adoption & ongoing support",
];

const whyUs = [
  {
    icon: <Target className="w-6 h-6 text-red-600" />,
    desc: "Deep expertise in Microsoft cloud, Azure, and Power Platform consulting",
    bg: "bg-red-50",
  },
  {
    icon: <Users className="w-6 h-6 text-red-600" />,
    desc: "Strong blend of business process consulting + technical delivery",
    bg: "bg-red-50",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    desc: "Proven experience delivering enterprise-grade automation solutions",
    bg: "bg-blue-50",
  },
  {
    icon: <Globe className="w-6 h-6 text-rose-600" />,
    desc: "Dedicated U.S. consulting team with collaborative global delivery model",
    bg: "bg-rose-50",
  },
];

const MicrosoftPowerPlatform: React.FC = () => {
  return (
    <>
      <Seo
        title="Microsoft Power Platform Services: Power Apps, Automate & BI | Maitsys"
        description="Maitsys delivers end-to-end Microsoft Power Platform services — Power Apps development, Power Automate workflow automation, and Power BI dashboards — to help enterprises automate processes and gain real-time insights."
        keywords={[
          "Microsoft Power Platform services",
          "Power Apps development",
          "Power Automate workflow automation",
          "Power BI dashboards",
          "low-code business applications",
          "Microsoft 365 integration",
          "enterprise automation consulting",
          "Power Platform consulting",
          "business process automation",
          "Maitsys Power Platform",
        ]}
        url="/microsoft-power-platform"
        image="/assets/power/power-platform-hero.webp"
        preloadImage={false}
        preloadVideo={true}
        preloadVideo_url="/hero-background.mp4"
      />
      <JsonLd
        schema={{
          "@type": "Service",
          name: "Microsoft Power Platform Services: Power Apps, Automate & BI",
          description:
            "Maitsys delivers end-to-end Microsoft Power Platform services — Power Apps development, Power Automate workflow automation, and Power BI dashboards — to help enterprises automate processes and gain real-time insights.",
          serviceType: "Microsoft Power Platform Services",
          provider: {
            "@type": "Organization",
            name: "Maitsys",
            url: "https://www.maitsys.com",
          },
          areaServed: "Worldwide",
          url: "https://www.maitsys.com/microsoft-power-platform",
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          {
            name: "Microsoft Power Platform Services: Power Apps, Automate & BI",
            path: "/microsoft-power-platform",
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
                <span className="hidden w-2 h-2 bg-red-600 rounded-full animate-pulse md:block" />
                {"Microsoft Power Platform"}
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 tracking-tight text-gray-900 leading-[1.3]"
              >
                <span className="block leading-[1.2]">Build Scalable</span>
                <span className="block leading-[1.2]">
                  Business Apps with{" "}
                  <span className="font-bold text-red-600">Microsoft</span>
                </span>
                <span className="text-red-600 font-bold block leading-[1.2]">
                  Power Platform
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
                Low-Code. Automated. Insight-Driven.
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
                  Maitsys delivers end-to-end Microsoft Power Platform services
                  to help organizations automate business processes, build
                  low-code applications, and gain real-time insights.
                </p>
                <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
                  We specialize in Power Apps development, Power Automate
                  workflow automation, and Power BI dashboard implementation,
                  enabling enterprises to modernize legacy processes, reduce
                  manual effort, and improve operational efficiency.
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
                  <span className="md:hidden">Get an Assessment</span>
                  <span className="hidden md:inline">
                    Get a Power Platform Assessment
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 z-10 w-full h-5 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </section>

        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-4 pb-10 bg-white md:pt-6 md:pb-10"
        >
          <div className="px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 max-w-3xl text-center md:mb-8">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">Our Microsoft</span>
                <span className="text-red-600 leading-[1.2]">
                  Power Platform Services
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive low-code, automation, and analytics solutions for
                the modern enterprise.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 items-start md:grid-cols-3">
              {services.map((svc, idx) => (
                <div
                  key={idx + "pp"}
                  className={`bg-white p-8 rounded-3xl border flex flex-col transition-all duration-300${
                    svc.featured
                      ? " border-gray-200 shadow-2xl md:-translate-y-4"
                      : " border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200"
                  }`}
                >
                  <div
                    className={`w-14 h-14 ${svc.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    {svc.icon}
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900">
                    {svc.title}
                  </h3>
                  <p
                    className={`${svc.subtitleColor} font-semibold text-xs tracking-wider mb-4`}
                  >
                    {svc.subtitle}
                  </p>
                  <p className="pb-6 mb-6 text-sm leading-relaxed text-gray-500 border-b border-gray-100">
                    {svc.desc}
                  </p>
                  <p className="mb-4 text-xs font-bold tracking-widest text-gray-600">
                    {svc.listLabel}
                  </p>
                  <ul className="space-y-3">
                    {svc.items.map((li) => (
                      <li key={li} className="flex gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Power Platform for Enterprise Operations */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="px-4 pt-8 pb-4 lg:pt-8 lg:pb-8 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-9xl">
            <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-red-900 via-slate-900 to-red-900 p-10 lg:p-16">
              {/* Background image overlay */}
              <div
                className="absolute inset-0 opacity-10 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Glow blobs */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 opacity-20 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-800 opacity-20 blur-[100px] rounded-full pointer-events-none" />

              <div className="flex relative z-10 flex-col gap-16 items-center lg:flex-row">
                {/* Left column */}
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-semibold mb-8 tracking-widest backdrop-blur-sm">
                    Enterprise Capabilities
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-[1.15]">
                    Power Platform for{" "}
                    <span className="text-red-400">Enterprise Operations</span>
                  </h2>
                  <p className="mb-10 text-lg leading-relaxed text-white/70">
                    Maitsys partners with enterprise organizations to implement
                    Microsoft Power Platform solutions that drive digital
                    transformation and operational efficiency at scale.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex gap-3 items-start p-4 rounded-2xl border transition-colors bg-white/5 border-white/10 hover:bg-white/10"
                      >
                        <Zap className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-white/80">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right column — decorative UI mockup (desktop only) */}
                <div className="hidden relative justify-center items-center lg:flex lg:w-1/2">
                  {/* Main floating card */}
                  <div className="relative w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                    <div className="flex gap-3 items-center mb-5">
                      <div className="flex justify-center items-center w-9 h-9 rounded-xl bg-red-500/20">
                        <LayoutGrid className="w-5 h-5 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2.5 bg-white/30 rounded w-3/4 mb-1.5" />
                        <div className="w-1/2 h-2 rounded bg-white/20" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          icon: <RotateCw className="w-4 h-4 text-blue-400" />,
                          bg: "bg-blue-500/20",
                        },
                        {
                          icon: <Zap className="w-4 h-4 text-yellow-400" />,
                          bg: "bg-yellow-500/20",
                        },
                        {
                          icon: (
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                          ),
                          bg: "bg-green-500/20",
                        },
                      ].map((row, i) => (
                        <div
                          key={i + "App"}
                          className="flex gap-3 items-center p-3 rounded-xl bg-white/5"
                        >
                          <div
                            className={`w-7 h-7 rounded-lg ${row.bg} flex items-center justify-center shrink-0`}
                          >
                            {row.icon}
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="w-4/5 h-2 rounded bg-white/25" />
                            <div className="h-1.5 bg-white/15 rounded w-3/5" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bouncing badge — top right */}
                  <div className="absolute -top-4 -right-4 animate-bounce bg-white rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2.5">
                    <BarChart3 className="w-5 h-5 text-red-600" />
                    <span className="text-xs font-bold whitespace-nowrap text-slate-900">
                      Live Analytics
                    </span>
                  </div>

                  {/* Bouncing badge — bottom left */}
                  <div className="absolute -bottom-4 -left-4 animate-bounce [animation-delay:0.4s] bg-slate-800 border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2.5">
                    <RotateCw className="w-5 h-5 text-red-400" />
                    <span className="text-xs font-bold text-white whitespace-nowrap">
                      Automated
                    </span>
                  </div>
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
          className="py-10 bg-white border-t border-gray-100 lg:py-8"
        >
          <div className="px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">
                  Why Choose Maitsys for
                </span>
                <span className="text-red-600 leading-[1.2]">
                  Microsoft Power Platform?
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
                  key={i + "w"}
                  className="p-8 bg-white rounded-3xl border shadow-sm transition-shadow border-slate-100 hover:shadow-md"
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
                  Long-term Partnership
                </h3>
                <p className="text-lg leading-relaxed text-red-100">
                  Ongoing application support, optimization, and enhancement
                  services to ensure your platforms evolve with your business
                  needs.
                </p>
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
          className="pt-6 pb-10 text-center border-t border-gray-100 lg:pt-10 lg:pb-12 bg-slate-50"
        >
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Ready to empower your business with Microsoft Power Platform?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Enable low-code development, automate processes, and gain valuable
            insights with our expert consulting and development services.
          </p>
          <a
            href="/contact-us"
            className="inline-flex gap-3 items-center px-8 py-4 text-base font-bold text-white bg-red-600 rounded-xl shadow-lg transition-all md:px-10 md:py-5 hover:bg-red-700 hover:shadow-red-600/30 md:text-lg"
          >
            <span className="">Talk to Our Experts</span>
          </a>
        </motion.section>
      </main>
    </>
  );
};

export default MicrosoftPowerPlatform;
