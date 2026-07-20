import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Shield,
  Activity,
  RefreshCw,
  BarChart2,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import BackgroundVideo from "../../components/ui/BackgroundVideo";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ContactPopup from "../../components/contact/ContactPopup";

const endToEndItems = [
  {
    title: "Reduce Azure Cloud Costs",
    desc: "Instantly eliminate resource waste and optimize cloud spend through advanced analytics.",
  },
  {
    title: "Strengthen Security",
    desc: "Enhance your compliance posture and robust cybersecurity protocols across your cloud.",
  },
  {
    title: "Improve Uptime",
    desc: "Gain unparalleled performance, high-availability, and reliability for critical workloads.",
  },
  {
    title: "Automate Infrastructure",
    desc: "Enable highly scalable operations through Infrastructure as Code and streamlined deployments.",
  },
];

const plans = [
  {
    name: "Essential",
    sub: "Small to Mid-Size",
    dark: false,
    popular: false,
    items: [
      "Azure monitoring & alerting",
      "Incident response",
      "Monthly health checks",
      "Backup validation",
    ],
  },
  {
    name: "Advanced",
    sub: "Growing & Mid-Market",
    dark: true,
    popular: true,
    items: [
      "Infrastructure automation & DevOps",
      "Security monitoring / remediation",
      "Azure cost optimization",
      "SLA-backed managed services",
      "Quarterly architecture reviews",
    ],
  },
  {
    name: "Premium",
    sub: "Enterprise & Regulated",
    dark: false,
    popular: false,
    items: [
      "24/7 Site Reliability Eng. (SRE)",
      "Compliance & audit readiness",
      "Advanced cost analytics (FinOps)",
      "Dedicated Azure architect",
      "Continuous optimization strategy",
    ],
  },
];

const approach = [
  {
    step: "1",
    title: "Assess",
    desc: "Comprehensive Azure cloud assessment to pinpoint structural gaps.",
    items: [
      "Cost inefficiencies",
      "Security vulnerabilities",
      "Performance bottlenecks",
    ],
  },
  {
    step: "2",
    title: "Optimize",
    desc: "We deploy robust strategies to streamline your cloud footprint.",
    items: [
      "Infrastructure automation",
      "Security enhancements",
      "Cost reduction initiatives",
    ],
  },
  {
    step: "3",
    title: "Operate",
    desc: "End-to-end continuous operations and lifecycle management.",
    items: [
      "24/7 monitoring & response",
      "Continuous optimization",
      "Performance reporting",
    ],
  },
];

const whyUs = [
  "Deep expertise in Microsoft Azure cloud services",
  "Integrated cloud, infrastructure, and cybersecurity capabilities",
  "Proven global delivery model with 24/7 support",
  "Strong focus on cost optimization, security, and performance",
  "Experience across mid-market and enterprise clients",
];

const AzureManagedServices: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <Seo
        title="Azure Managed Services: Cloud Optimization & 24/7 Support | Maitsys"
        description="Maitsys Azure Managed Services help enterprises reduce cloud costs, strengthen security, and fully manage Azure operations—so your teams can focus on innovation."
        keywords={[
          "Azure managed services",
          "Azure cloud management",
          "Azure cost optimization",
          "Azure security services",
          "Azure infrastructure management",
          "Azure monitoring support",
          "Azure IaC automation",
          "Azure backup disaster recovery",
          "Microsoft Azure consulting",
          "Azure FinOps",
          "Maitsys Azure services",
        ]}
        url="/azure-managed-services"
        preloadImage={false}
        preloadVideo={true}
        preloadVideo_url="/hero-background.mp4"
      />
      <JsonLd
        schema={{
          "@type": "Service",
          name: "Azure Managed Services: Cloud Optimization & 24/7 Support",
          description:
            "Maitsys Azure Managed Services help enterprises reduce cloud costs, strengthen security, and fully manage Azure operations—so your teams can focus on innovation.",
          serviceType: "Azure Managed Services",
          provider: {
            "@type": "Organization",
            name: "Maitsys",
            url: "https://www.maitsys.com",
          },
          areaServed: "Worldwide",
          url: "https://www.maitsys.com/azure-managed-services",
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          {
            name: "Azure Managed Services: Cloud Optimization & 24/7 Support",
            path: "/azure-managed-services",
          },
        ]}
      />

      <ContactPopup />

      <main className="w-full bg-[#FAFAFA] overflow-clip">
        {/* Hero Section — dark, video-backed */}
        <section className="relative w-full flex flex-col justify-center py-8 md:py-8 overflow-hidden bg-[#0A0A0B] text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 z-0 w-full h-full opacity-60 mix-blend-screen pointer-events-none">
              <BackgroundVideo src="/hero-background.mp4" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/80 to-transparent z-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0B]/50 to-[#0A0A0B] z-0" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600 opacity-10 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600 opacity-10 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
          </div>

          <motion.div
            className="relative z-10 px-4 mx-auto max-w-9xl sm:px-6 lg:px-8"
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
            <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-12 lg:gap-8">
              <div className="flex flex-col items-center pt-8 text-center lg:col-span-7 lg:items-start lg:text-left">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-red-500 text-sm font-semibold mb-8 tracking-[0.2em]"
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  {"Azure Cloud Excellence"}
                </motion.div>

                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 tracking-tight text-white leading-[1.3]"
                >
                  <span className="block leading-[1.2]">
                    Azure Managed Services
                  </span>
                  <span className="block leading-[1.2]">
                    for{" "}
                    <span className="font-bold text-red-600">Optimization</span>{" "}
                    &
                  </span>
                  <span className="block leading-[1.2]">Support</span>
                </motion.h1>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="mb-10 max-w-2xl text-xl font-light leading-relaxed text-gray-400"
                >
                  We help you reduce Azure cloud costs, enhance security, and
                  fully manage your cloud operations—so your teams can focus on
                  innovation.
                </motion.p>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col gap-4 justify-center w-full sm:flex-row lg:justify-start"
                >
                  <a
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-semibold px-6 py-3.5 md:px-8 md:py-4 rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/30 text-base md:text-lg"
                  >
                    Get a Free Assessment
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>

              {/* Decorative card — hidden on mobile */}
              <div className="hidden relative mt-12 lg:block lg:col-span-5 lg:mt-0">
                {/* Decorative floating structural elements */}
                <div className="relative w-full max-w-md mx-auto aspect-[4/5] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl flex flex-col justify-between overflow-hidden group transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-red/20 rounded-full blur-[60px] group-hover:bg-brand-red/30 transition-colors duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center items-center mb-8 w-14 h-14 rounded-2xl border backdrop-blur-md bg-brand-red/20 border-brand-red/20">
                      <Cloud className="w-7 h-7 text-red-600" />
                    </div>
                    <h3 className="mb-3 text-2xl font-medium text-white font-display">
                      Performance Assured
                    </h3>
                    <p className="font-light leading-relaxed text-gray-400">
                      Enterprise-grade Azure SLA, guaranteed uptime and
                      optimized cost control.
                    </p>
                  </div>
                  <div className="overflow-hidden relative z-10 mt-8 w-full h-48 rounded-2xl border transition-colors border-white/10 group-hover:border-brand-red/30">
                    <img
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      src="/assets/Cloud/image_16.png"
                      alt="Azure Data Center"
                      title="Azure Data Center"
                      className="object-cover w-full h-full transition-transform duration-700 transform scale-100 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent"></div>
                    <div className="flex absolute right-4 bottom-4 left-4 justify-between items-end">
                      <div className="bg-[#0A0A0B]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg">
                        <span className="text-sm font-bold tracking-wider text-red-600">
                          99.99%
                        </span>
                        <span className="ml-2 text-xs text-gray-400">
                          Uptime
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating accent elements */}
                <div
                  className="flex absolute -left-8 top-1/4 justify-center items-center w-16 h-16 rounded-2xl border shadow-xl backdrop-blur-xl animate-bounce bg-white/5 border-white/10"
                  style={{ animationDuration: "3s" }}
                >
                  <Shield className="w-8 h-8 text-red-600 opacity-80" />
                </div>
                <div
                  className="flex absolute -right-6 bottom-1/4 justify-center items-center w-20 h-20 rounded-2xl border shadow-xl backdrop-blur-xl animate-bounce bg-white/5 border-white/10"
                  style={{ animationDuration: "4s", animationDelay: "1s" }}
                >
                  <Activity className="w-10 h-10 text-red-600 opacity-80" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* End-to-End Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="py-12 bg-white border-t border-gray-100 lg:py-12"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="grid gap-16 items-start lg:grid-cols-2">
              <div className="lg:sticky lg:top-32">
                <h2 className="mb-6 text-4xl font-medium md:text-5xl font-display text-slate-900">
                  <span className="block leading-[1.2]">End-to-End Azure</span>
                  <span className="text-red-600 leading-[1.2]">
                    Cloud Management
                  </span>
                </h2>
                <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-600">
                  Maitsys is a leading Azure Managed Services provider
                  delivering end-to-end management services to help
                  organizations optimize, secure, and scale their Microsoft
                  cloud environments.
                </p>
                <div className="overflow-hidden relative p-8 text-white bg-red-600 rounded-3xl">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-bl-[100px] pointer-events-none" />
                  <p className="relative z-10 text-lg font-medium leading-relaxed">
                    Whether you're running enterprise workloads, hybrid
                    environments, or cloud-native applications, our Azure
                    experts ensure your infrastructure is secure,
                    cost-efficient, and high-performing.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {endToEndItems.map((item, i) => (
                  <div
                    key={i + "index"}
                    className={`group bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:bg-white hover:border-red-200 hover:shadow-xl transition-all duration-300${
                      i % 2 === 0 ? "" : " md:ml-12"
                    }`}
                  >
                    <div className="flex gap-5 items-start">
                      <div className="flex justify-center items-center w-12 h-12 bg-white rounded-2xl border border-gray-200 shadow-sm transition-colors duration-300 shrink-0 group-hover:bg-red-600">
                        <CheckCircle2 className="w-6 h-6 text-red-600 group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="leading-relaxed text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Section — dark bento grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="py-8 lg:py-8 bg-[#0A0A0B] border-t border-gray-900 text-white"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 justify-between items-end mb-8 md:flex-row">
              <div className="max-w-2xl">
                <div className="inline-block px-4 py-1.5 rounded-lg border border-white/10 text-red-400 text-sm font-semibold mb-6 tracking-wider">
                  Our Services
                </div>
                <h2 className="text-4xl font-medium md:text-5xl lg:text-6xl font-display">
                  <span className="block leading-[1.2]">Azure Managed</span>
                  <span className="text-red-500 leading-[1.2]">Services</span>
                </h2>
              </div>
              <p className="mb-2 max-w-sm text-lg font-light leading-relaxed text-gray-400">
                Deep expertise ensuring robust infrastructure, rigorous
                monitoring, and exceptional performance.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
              {/* Wide card — Infrastructure */}
              <div className="sm:col-span-2 lg:col-span-8 bg-[#16191F] rounded-[2rem] p-8 lg:p-12 border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[400px] h-full pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#16191F] via-[#16191F]/80 to-transparent z-10" />
                  <img
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    src="/assets/articles/articles_image4.webp"
                    alt="Azure network"
                    title="Azure network"
                    className="w-full h-full object-cover opacity-40 mix-blend-lighten transform scale-100 group-hover:scale-125 transition-transform duration-[1.5s] ease-out"
                  />
                </div>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-bl-[100%] pointer-events-none group-hover:bg-red-600/10 transition-colors duration-500 z-20" />
                <div className="relative z-30">
                  <Server className="mb-8 w-12 h-12 text-red-500" />
                  <h3 className="mb-4 text-2xl font-bold font-display">
                    Azure Infrastructure Management
                  </h3>
                  <p className="mb-8 max-w-xl text-gray-400">
                    Comprehensive Azure infrastructure management services to
                    build and manage scalable cloud environments.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      "Virtual Network (VNet) architecture",
                      "Virtual Machines compute optimization",
                      "Azure Kubernetes Service (AKS)",
                      "Storage optimization (Blob, Disks)",
                      "High availability multi-region setups",
                    ].map((li) => (
                      <div
                        key={li}
                        className="flex gap-2 items-center text-sm font-medium text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                        {li}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Monitoring card */}
              <div className="sm:col-span-1 lg:col-span-4 bg-[#16191F] rounded-[2rem] p-8 lg:p-12 border border-white/5 hover:border-white/10 transition-colors flex flex-col">
                <Activity className="mb-8 w-12 h-12 text-red-500" />
                <h3 className="mb-4 text-2xl font-bold font-display">
                  Monitoring & 24/7 Support
                </h3>
                <p className="flex-grow mb-8 text-gray-400">
                  Reliable Azure monitoring services and 24/7 cloud support to
                  ensure business continuity.
                </p>
                <ul className="space-y-4">
                  {[
                    "Real-time Azure Monitor alerts",
                    "Azure Log Analytics insights",
                    "24/7 incident issue resolution",
                    "SLA-driven support tiers",
                  ].map((li, i) => (
                    <li
                      key={i + "monitor"}
                      className="flex gap-3 text-sm font-medium text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0" />{" "}
                      {li}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Four smaller cards */}
              {[
                {
                  icon: <Shield className="mb-6 w-10 h-10 text-red-500" />,
                  title: "Security & Compliance",
                  desc: "Advanced Azure cloud security services to protect your environment.",
                  items: [
                    "Microsoft Entra ID identity",
                    "Defender for Cloud protection",
                    "ISO, SOC 2, GDPR readiness",
                    "Encryption & patching",
                  ],
                },
                {
                  icon: <Cloud className="mb-6 w-10 h-10 text-red-500" />,
                  title: "IaC & Automation",
                  desc: "Modernize your deployments with Azure Infrastructure as Code.",
                  items: [
                    "Terraform & Bicep templates",
                    "Automated provisioning",
                    "Standardized DevOps",
                    "Faster, error-free releases",
                  ],
                },
                {
                  icon: <BarChart2 className="mb-6 w-10 h-10 text-red-500" />,
                  title: "Cost Optimization",
                  desc: "Maximize ROI with expert Azure cost optimization services.",
                  items: [
                    "Usage cost analysis",
                    "Workload rightsizing",
                    "Reserved Instances strategy",
                    "Budgeting governance",
                  ],
                },
                {
                  icon: <RefreshCw className="mb-6 w-10 h-10 text-red-500" />,
                  title: "Backup & DR",
                  desc: "Robust Azure backup and disaster recovery solutions.",
                  items: [
                    "Azure Backup configuration",
                    "Azure Site Recovery DR",
                    "Defined RPO/RTO strategies",
                    "Continuous failover testing",
                  ],
                },
              ].map((svc, i) => (
                <div
                  key={i + "services"}
                  className="sm:col-span-1 lg:col-span-3 bg-[#16191F] rounded-[2rem] p-8 border border-white/5 hover:border-white/10 transition-colors"
                >
                  {svc.icon}
                  <h3 className="mb-3 text-xl font-bold font-display">
                    {svc.title}
                  </h3>
                  <p className="pb-6 mb-6 text-sm text-gray-400 border-b border-white/5">
                    {svc.desc}
                  </p>
                  <ul className="space-y-3">
                    {svc.items.map((li, idx) => (
                      <li
                        key={idx + "list"}
                        className="flex gap-2 text-sm text-gray-300"
                      >
                        <ChevronRight className="w-4 h-4 text-red-500 shrink-0" />{" "}
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Plans Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="py-10 lg:py-10 bg-[#FAFAFA] border-t border-gray-100"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-medium md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">Azure Managed</span>
                <span className="text-red-600 leading-[1.2]">Plans</span>
              </h2>
              <p className="text-lg text-gray-600">
                Flexible plans designed to scale with your business.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 items-stretch md:grid-cols-3">
              {plans.map((plan, i) => (
                <div
                  key={i + "plan"}
                  className={`relative flex flex-col h-full ${
                    plan.dark ? "md:-translate-y-6" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-5 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] z-30 whitespace-nowrap shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div
                    className={`h-full p-[2px] rounded-[2.5rem] transition-all duration-300 ${
                      plan.dark
                        ? "bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 shadow-2xl shadow-red-500/20"
                        : "bg-gray-200 hover:bg-gray-300 shadow-sm"
                    }`}
                  >
                    <div
                      className={`h-full rounded-[2.4rem] p-8 md:p-10 flex flex-col relative overflow-hidden ${
                        plan.dark
                          ? "bg-[#0A0A0B] text-white"
                          : "bg-white text-slate-900"
                      }`}
                    >
                      {plan.dark && (
                        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 rounded-full blur-3xl bg-red-500/5" />
                      )}

                      <h3 className="mb-2 text-3xl font-bold font-display">
                        {plan.name}
                      </h3>
                      <p
                        className={`text-[10px] font-black mb-8 tracking-[0.2em] ${
                          plan.dark ? "text-red-500" : "text-gray-500"
                        }`}
                      >
                        {plan.sub}
                      </p>
                      <div
                        className={`h-px w-full mb-8 ${
                          plan.dark ? "bg-white/10" : "bg-gray-100"
                        }`}
                      />
                      <ul className="flex-grow space-y-5">
                        {plan.items.map((item, j) => (
                          <li
                            key={j + "item"}
                            className="flex gap-4 items-center text-sm font-semibold"
                          >
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 shadow-sm border ${
                                plan.dark
                                  ? "bg-red-500 border-red-600"
                                  : "bg-gray-100 border-gray-200"
                              }`}
                            >
                              <CheckCircle2
                                className={`w-4 h-4 ${
                                  plan.dark ? "text-white" : "text-gray-400"
                                }`}
                                strokeWidth={3}
                              />
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Approach — timeline */}
        <section className="py-10 bg-white border-t border-gray-100 lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8"
          >
            <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
              <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
                <div>
                  <h2 className="flex gap-2 mb-6 text-3xl font-semibold md:text-4xl text-slate-900">
                    <span className="block text-red-600">Our</span>
                    <span className="">Approach</span>
                  </h2>
                </div>
              </div>

              <div className="space-y-12 lg:w-2/3">
                {approach.map((step, i) => (
                  <motion.div
                    key={i + "approach"}
                    onViewportEnter={() => setActiveStep(i)}
                    viewport={{ margin: "-30% 0px -30% 0px" }}
                    className={`relative pl-12${
                      i < approach.length - 1 ? " border-l border-gray-200" : ""
                    }`}
                  >
                    {i === approach.length - 1 && (
                      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-gray-200 to-transparent" />
                    )}
                    <div
                      className={`absolute top-0 left-0 w-8 h-8 rounded-full flex items-center justify-center -translate-x-[16.5px] border-4 border-white transition-colors duration-300 ${
                        activeStep === i ? " bg-red-600" : " bg-[#0A0A0B]"
                      }`}
                    >
                      <span className="text-xs font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mb-4 text-3xl font-medium font-display text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mb-6 text-gray-500">{step.desc}</p>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                      {step.items.map((item, j) => (
                        <div
                          key={j + "approach"}
                          className="p-4 text-sm font-medium text-gray-800 bg-gray-50 rounded-xl"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Why Choose Us + CTA — dark card */}
        <motion.section
          id="main-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="px-4 py-8 mb-10 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto bg-[#0A0A0B] rounded-[3rem] p-10 lg:p-20 relative overflow-hidden text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600 opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="grid relative z-10 gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-10 text-4xl font-medium md:text-5xl font-display">
                  <span className="block leading-[1.2]">Why Choose</span>
                  <span className="text-red-500 leading-[1.2]">Maitsys</span>
                </h2>
                <div className="space-y-6">
                  {whyUs.map((item, i) => (
                    <div key={i + "whyUs"} className="flex gap-4 items-start">
                      <div className="flex justify-center items-center mt-1 w-8 h-8 text-red-500 rounded-full border bg-white/5 border-white/10 shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-xl font-light leading-relaxed text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center p-10 rounded-3xl border bg-white/5 border-white/10">
                <div className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-widest text-red-400 rounded-lg border bg-red-600/10 border-red-600/20 w-fit">
                  Free Assessment
                </div>
                <h3 className="mb-6 text-3xl font-medium lg:text-4xl font-display">
                  Get a Free Azure Cloud Assessment
                </h3>
                <p className="mb-8 leading-relaxed text-gray-400">
                  Not sure if your Azure environment is optimized? Request an
                  assessment to uncover cost savings, security gaps, and
                  performance enhancements.
                </p>
                <a
                  href="/contact-us"
                  className="inline-flex gap-3 justify-center items-center px-8 py-4 text-base font-semibold text-white bg-red-600 rounded-2xl shadow-lg transition-all md:px-10 md:py-5 hover:bg-red-700 hover:shadow-red-600/30 md:text-lg font-display"
                >
                  Request Assessment <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default AzureManagedServices;
