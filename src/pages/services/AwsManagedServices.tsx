import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Activity,
  Shield,
  Cloud,
  BarChart2,
  RefreshCw,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import BackgroundVideo from "../../components/ui/BackgroundVideo";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ContactPopup from "../../components/contact/ContactPopup";

const services = [
  {
    icon: <Server className="w-7 h-7" />,
    title: "AWS Infrastructure Management",
    desc: "Comprehensive AWS infrastructure management services to design, deploy, and manage scalable cloud environments:",
    items: [
      "Amazon VPC architecture and cloud networking",
      "EC2, containers (EKS/ECS), and serverless",
      "Storage optimization using S3, EBS, and Glacier",
      "High availability, auto-scaling, and multi-region",
    ],
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "AWS Monitoring & 24/7 Support",
    desc: "Proactive AWS monitoring services and 24/7 cloud support to ensure continuous uptime and performance:",
    items: [
      "Real-time monitoring with Amazon CloudWatch",
      "Centralized logging and observability",
      "24/7 incident management and response",
      "SLA-driven AWS support services",
    ],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "AWS Security & Compliance",
    desc: "End-to-end AWS cloud security services to protect your infrastructure and data from threats:",
    items: [
      "Identity and Access Management (IAM)",
      "Threat detection with AWS GuardDuty",
      "Audit logging using AWS CloudTrail",
      "Data encryption and vulnerability management",
    ],
  },
  {
    icon: <Cloud className="w-7 h-7" />,
    title: "Infrastructure as Code (IaC)",
    desc: "Modernize your cloud with Infrastructure as Code on AWS to enable speed and reliability:",
    items: [
      "Terraform and AWS CloudFormation pipelines",
      "Automated infrastructure provisioning",
      "Consistent DevOps workflows",
      "Reduced manual errors and faster deployments",
    ],
  },
  {
    icon: <BarChart2 className="w-7 h-7" />,
    title: "AWS Cost Optimization",
    desc: "Maximize ROI with expert AWS cost optimization services tailored for enterprise-scale workloads:",
    items: [
      "AWS cost analysis and usage optimization",
      "Rightsizing EC2 and storage resources",
      "Reserved Instances & Savings Plans",
      "Monthly cost reports and recommendations",
    ],
  },
  {
    icon: <RefreshCw className="w-7 h-7" />,
    title: "Backup & Disaster Recovery",
    desc: "Reliable AWS backup and disaster recovery solutions ensuring unbroken business continuity:",
    items: [
      "Automated AWS backups and snapshots",
      "Cross-region and multi-AZ replication",
      "Disaster recovery planning and testing",
      "Defined RTO and RPO benchmarks",
    ],
  },
];

const AwsManagedServices: React.FC = () => {
  return (
    <>
      <Seo
        title="AWS Managed Services Provider | Cloud Optimization & 24/7 Support | Maitsys"
        description="Maitsys is a leading AWS Managed Services Provider delivering end-to-end cloud management, 24/7 monitoring, cost optimization, and security compliance for enterprise workloads."
        keywords={[
          "AWS managed services provider",
          "AWS cloud management",
          "AWS infrastructure management",
          "AWS 24/7 monitoring",
          "AWS cost optimization",
          "AWS security compliance",
          "cloud operations",
          "AWS DevOps",
          "cloud managed services",
          "Maitsys AWS services",
        ]}
        url="/aws-managed-services"
        image="/assets/aws-managed-services-hero.webp"
        preloadImage={false}
        preloadVideo={true}
        preloadVideo_url="/hero-background.mp4"
      />
      <JsonLd
        schema={{
          "@type": "Service",
          name: "AWS Managed Services",
          description:
            "Maitsys is a leading AWS Managed Services Provider delivering end-to-end cloud management, 24/7 monitoring, cost optimization, and security compliance for enterprise workloads.",
          serviceType: "AWS Managed Services",
          provider: {
            "@type": "Organization",
            name: "Maitsys",
            url: "https://www.maitsys.com",
          },
          areaServed: "Worldwide",
          url: "https://www.maitsys.com/aws-managed-services",
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "AWS Managed Services", path: "/aws-managed-services" },
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
                className="inline-flex gap-2 items-center px-4 py-6 mb-6 text-sm font-bold tracking-widest text-red-700 bg-red-50 rounded-full border border-red-100 shadow-sm"
              >
                <span className="hidden w-2 h-2 bg-red-700 rounded-full animate-pulse md:block" />
                {"Cloud Operations Excellence"}
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-6 tracking-tight text-gray-900 leading-[1.3]"
              >
                <span className="block leading-[1.2]">
                  AWS Managed Services
                </span>
                <span className="block leading-[1.2]">
                  for{" "}
                  <span className="font-bold text-red-600">Optimization</span> &
                  24/7
                </span>
                <span className="block leading-[1.2]">Support</span>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mb-8 max-w-2xl text-xl font-semibold leading-relaxed lg:text-2xl text-slate-800"
              >
                Secure, cost-efficient, and high-performing AWS environments —
                whether migrating, running production workloads, or scaling
                globally.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mb-6 max-w-3xl text-lg leading-relaxed text-slate-600"
              >
                Maitsys helps organizations manage and optimize their AWS
                environments with 24/7 monitoring, expert-led automation, and
                enterprise-grade technical support.
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
                  Get a Free Assessment
                </a>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 z-10 w-full h-5 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </section>

        {/* End-to-End Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-2 pb-8 bg-white md:pt-4 md:pb-8"
        >
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 items-center lg:flex-row lg:gap-20">
              <div className="lg:w-1/2">
                <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                  <span className="block leading-[1.2]">End-to-End AWS</span>
                  <span className="text-red-600 leading-[1.2]">
                    Cloud Management Services
                  </span>
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-gray-600">
                  Maitsys is a leading AWS Managed Services provider delivering
                  end-to-end AWS cloud management services to help businesses
                  optimize, secure, and scale their cloud infrastructure.
                </p>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Reduce AWS cloud costs and eliminate waste",
                    "Improve cloud security and compliance posture",
                    "Enhance performance, uptime, and reliability",
                    "Enable scalable, automated cloud infrastructure",
                  ].map((item, i) => (
                    <li
                      key={i + "endToEnd"}
                      className="flex gap-3 items-start p-4 bg-gray-50 rounded-2xl border border-gray-100 transition-colors hover:border-red-200 hover:bg-red-50/30"
                    >
                      <span className="mt-0.5 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </span>
                      <span className="text-sm font-medium leading-snug text-gray-800">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative w-full lg:w-1/2">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-red-50 rounded-[2.5rem] -rotate-2 z-0" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-white aspect-video">
                  <img
                    src="/assets/Cloud/image_15.png"
                    alt="AWS Cloud Management"
                    title="AWS Cloud Management"
                    loading="lazy"
                    decoding="async"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-slate-900/60" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-8 pb-8 border-t border-gray-100 lg:pt-8 lg:pb-8 bg-slate-50"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 max-w-3xl text-center md:mb-6">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                {"Our"}
                <span className="text-red-600 leading-[1.2]">
                  {" AWS Managed Services"}
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive solutions designed to help you build, deploy, and
                scale seamlessly on Amazon Web Services.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((svc, i) => (
                <div
                  key={i + "services"}
                  className="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm transition-all duration-300 transform group hover:border-red-200 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex justify-center items-center mb-6 w-14 h-14 text-red-600 bg-red-50 rounded-2xl transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white shrink-0">
                    {svc.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold font-display text-slate-900">
                    {svc.title}
                  </h3>
                  <p className="pb-6 mb-6 text-sm leading-relaxed text-gray-500 border-b border-gray-100">
                    {svc.desc}
                  </p>
                  <ul className="space-y-3">
                    {svc.items.map((li, j) => (
                      <li
                        key={j + "li"}
                        className="flex gap-2 items-start text-sm font-medium text-gray-700"
                      >
                        <ChevronRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
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
          className="py-8 bg-white border-t border-gray-100 lg:py-12"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl font-display text-slate-900">
                {"AWS Managed "}
                <span className="text-red-600 leading-[1.2]">
                  {"Service Plans"}
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Choose the right level of support and automation for your cloud
                operations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 items-end md:grid-cols-3">
              {/* Essential */}
              <div className="p-8 rounded-[2rem] border border-gray-200 bg-white shadow-sm flex flex-col hover:shadow-md transition-shadow h-full">
                <h3 className="mb-2 text-2xl font-bold font-display text-slate-900">
                  Essential
                </h3>
                <p className="pb-8 mb-8 text-sm text-gray-500 border-b border-gray-100">
                  Basic monitoring and incident response.
                </p>
                <ul className="space-y-5 text-sm font-medium text-slate-700">
                  {[
                    "AWS monitoring and alerting",
                    "Incident management",
                    "Monthly AWS health checks",
                  ].map((li, i) => (
                    <li
                      key={i + "essential"}
                      className="flex gap-4 items-center"
                    >
                      <div className="flex justify-center items-center w-6 h-6 rounded-full border-2 border-gray-200 shrink-0">
                        <CheckCircle2
                          className="w-4 h-4 text-gray-300"
                          strokeWidth={3}
                        />
                      </div>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advanced — highlighted */}
              <div className="relative h-full md:-translate-y-8 group">
                {/* Red glow effect behind the card */}
                <div className="absolute -inset-1 bg-red-500/20 rounded-[2.6rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] z-30 whitespace-nowrap shadow-xl border border-white/10">
                  Most Popular
                </div>

                <div className="h-full p-[3px] rounded-[2.5rem] bg-gradient-to-b from-red-600 via-orange-500 to-yellow-400 shadow-2xl relative z-10">
                  <div className="h-full bg-white rounded-[2.35rem] p-8 md:p-10 flex flex-col relative overflow-hidden">
                    {/* Subtle inner glow */}
                    <div className="absolute top-0 right-0 -mt-24 -mr-24 w-48 h-48 rounded-full blur-3xl bg-red-500/5" />

                    <h3 className="mb-2 text-3xl font-bold text-red-600 font-display">
                      Advanced
                    </h3>
                    <p className="pb-8 mb-8 text-sm text-gray-500 border-b border-gray-100">
                      Comprehensive automation and optimization.
                    </p>
                    <ul className="flex-grow space-y-5 text-sm font-bold text-slate-800">
                      {[
                        "Infrastructure automation and DevOps",
                        "Security monitoring and compliance",
                        "AWS cost optimization",
                        "SLA-backed managed cloud services",
                      ].map((li, i) => (
                        <li
                          key={i + "advanced"}
                          className="flex gap-4 items-center"
                        >
                          <div className="flex justify-center items-center w-6 h-6 bg-red-500 rounded-full border border-red-600 shadow-md shrink-0">
                            <CheckCircle2
                              className="w-4 h-4 text-white"
                              strokeWidth={3}
                            />
                          </div>
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Premium */}
              <div className="p-8 rounded-[2rem] border border-gray-200 bg-slate-50 shadow-sm flex flex-col hover:shadow-md transition-shadow h-full">
                <h3 className="mb-2 text-2xl font-bold font-display text-slate-900">
                  Premium
                </h3>
                <p className="pb-8 mb-8 text-sm text-gray-500 border-b border-gray-200">
                  24/7 dedicated SRE and deep compliance.
                </p>
                <ul className="space-y-5 text-sm font-medium text-slate-700">
                  {[
                    "24/7 Site Reliability Engineering (SRE)",
                    "Compliance and audit readiness",
                    "Advanced AWS cost analytics",
                    "Dedicated AWS cloud architect",
                  ].map((li, i) => (
                    <li key={i + "premium"} className="flex gap-4 items-center">
                      <div className="flex justify-center items-center w-6 h-6 bg-blue-500 rounded-full border border-blue-600 shadow-sm shrink-0">
                        <CheckCircle2
                          className="w-4 h-4 text-white"
                          strokeWidth={3}
                        />
                      </div>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Approach */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="py-10 md:py-10 bg-[#0A0A0B] text-white rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-10 overflow-hidden relative shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600 opacity-[0.15] blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 opacity-[0.10] blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl font-display">
                Our AWS Managed Services Approach
              </h2>
              <p className="text-lg text-gray-400">
                A proven methodology to maximize your cloud ROI and secure your
                workloads.
              </p>
            </div>

            <div className="grid relative grid-cols-1 gap-12 md:grid-cols-3">
              {/* Connector line centered on the 80px (5rem) circles — top-10 = 2.5rem */}
              <div className="hidden md:block absolute top-10 left-[calc(16.66%+2.5rem)] right-[calc(16.66%+2.5rem)] h-[2px] bg-gradient-to-r from-red-500/60 via-red-500/40 to-red-500/60"></div>

              {[
                {
                  n: "1",
                  title: "Assess",
                  desc: "Comprehensive AWS cloud assessment to identify cost leaks, security gaps, and performance bottlenecks.",
                },
                {
                  n: "2",
                  title: "Optimize",
                  desc: "Implement cloud optimization strategies including automation, security enhancements, and cost reduction.",
                },
                {
                  n: "3",
                  title: "Operate",
                  desc: "Continuous AWS cloud operations and monitoring to ensure reliability, performance, and scalability.",
                },
              ].map((s) => (
                <div key={s.n} className="relative text-center">
                  <div className="w-20 h-20 bg-[#161820] border-2 border-red-500/60 shadow-[0_0_40px_rgba(220,38,38,0.35)] rounded-full flex items-center justify-center text-3xl font-display font-bold text-red-400 mx-auto mb-8 relative z-10">
                    {s.n}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-white font-display">
                    {s.title}
                  </h3>
                  <p className="px-4 text-base leading-relaxed text-gray-400">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us & CTA */}
        <motion.section
          id="main-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-4 pb-8 mb-4 md:pt-4 md:pb-4"
        >
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col gap-16 lg:flex-row">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-10 leading-[1.15]">
                  Why Choose Maitsys
                  <br />
                  as Your <span className="text-red-600">AWS Managed</span>
                  <br />
                  <span className="text-red-600">Services Provider</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Certified expertise in AWS cloud, cybersecurity, and enterprise systems",
                    "Proven AWS managed services delivery model",
                    "Focus on measurable ROI and cost savings",
                    "Experience supporting startups, mid-market, and enterprise clients",
                    "24/7 AWS cloud support and proactive monitoring",
                  ].map((item, i) => (
                    <div
                      key={i + "index"}
                      className="flex gap-4 items-start p-5 bg-gray-50 rounded-2xl border border-gray-100 transition-colors hover:bg-red-50 hover:border-red-100"
                    >
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="pt-2 font-semibold leading-snug text-gray-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-[#1A1D24] to-[#0A0A0B] rounded-[2.5rem] p-10 md:p-12 text-white shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden h-full flex flex-col justify-center">
                  {/* Decorative mesh/dots */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                      backgroundSize: "32px 32px",
                    }}
                  ></div>
                  <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-600 rounded-full opacity-40 blur-[80px]"></div>
                  <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600 rounded-full opacity-25 blur-[80px]"></div>

                  <div className="relative z-10">
                    <div className="inline-block px-4 py-1.5 mb-8 rounded-lg bg-white/10 border border-white/20 text-xs font-bold tracking-widest text-red-300 backdrop-blur-md">
                      Free Assessment
                    </div>
                    <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl font-display">
                      Get a Free{" "}
                      <span className="text-brand-red">AWS Cloud</span>{" "}
                      Assessment
                    </h2>
                    <p className="mb-10 text-lg leading-relaxed text-gray-300">
                      Not sure if your AWS environment is optimized? Maitsys
                      offers a free AWS cloud assessment to help you:
                    </p>
                    <ul className="mb-6 space-y-4 font-medium text-gray-300">
                      <li className="flex gap-3 items-center">
                        <ChevronRight className="w-5 h-5 text-brand-red shrink-0" />{" "}
                        Identify AWS cost savings opportunities
                      </li>
                      <li className="flex gap-3 items-center">
                        <ChevronRight className="w-5 h-5 text-brand-red shrink-0" />{" "}
                        Detect cloud security vulnerabilities
                      </li>
                      <li className="flex gap-3 items-center">
                        <ChevronRight className="w-5 h-5 text-brand-red shrink-0" />{" "}
                        Improve performance and scalability
                      </li>
                    </ul>
                    <a
                      href="/contact-us"
                      className="inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold px-8 py-4 w-full sm:w-auto rounded-full hover:bg-red-600 transition-all shadow-[0_10px_20px_rgba(218,41,28,0.3)] hover:-translate-y-1"
                    >
                      Request your free assessment{" "}
                      <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default AwsManagedServices;
