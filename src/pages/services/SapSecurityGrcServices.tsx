import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  AlertTriangle,
  Key,
  ShieldCheck,
  Activity,
  CheckCircle2,
  ChevronRight,
  Lock,
} from "lucide-react";
import BackgroundVideo from "../../components/ui/BackgroundVideo";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ContactPopup from "../../components/contact/ContactPopup";

const capabilities = [
  {
    icon: <UserCheck className="w-7 h-7" />,
    title: "SAP Access and Role Security",
    desc: "Design and manage secure, scalable role-based access controls (RBAC) to ensure users have the right access at the right time—nothing more, nothing less.",
    items: [
      "Role design and optimization",
      "User access management",
      "Authorization concept design",
      "Identity & access governance",
    ],
  },
  {
    icon: <AlertTriangle className="w-7 h-7" />,
    title: "Segregation of Duties (SoD) Management",
    desc: "Identify and eliminate SoD conflicts to reduce fraud risk and improve compliance across your SAP systems.",
    items: [
      "SoD risk analysis and remediation",
      "Rule set design",
      "Preventive controls",
      "Continuous monitoring",
    ],
  },
  {
    icon: <Key className="w-7 h-7" />,
    title: "Firefighter / Emergency Access",
    desc: "Enable controlled emergency access with full transparency and auditability.",
    items: [
      "Firefighter ID setup",
      "Emergency access monitoring",
      "Log review and compliance",
      "Risk-based control",
    ],
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "SAP Security Hardening & Audit",
    desc: "Strengthen your SAP landscape with advanced security hardening and expert audit assistance.",
    items: [
      "System security configuration",
      "Vulnerability assessment",
      "Audit readiness",
      "SOX & GDPR compliance",
    ],
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "Continuous SAP Security Advisory",
    desc: "Stay secure with proactive monitoring, advisory, and continuous improvement.",
    items: [
      "Ongoing risk assessments",
      "Security roadmap",
      "Threat detection",
      "Cloud security advisory",
    ],
  },
];

const whyUs = [
  {
    title: "Tools-Agnostic & Flexible Approach",
    desc: "We work across leading SAP GRC tools and custom frameworks, ensuring seamless integration with your existing SAP landscape including SAP S/4HANA, ECC, and cloud environments.",
  },
  {
    title: "Risk-Focused Security Framework",
    desc: "Our approach prioritizes identifying, assessing, and mitigating risks—helping you stay ahead of compliance challenges and cyber threats.",
  },
  {
    title: "Audit-Ready Compliance",
    desc: "Be fully prepared for internal and external audits with robust controls, documentation, and continuous monitoring aligned with global compliance standards.",
  },
];

const modernItems = [
  "SAP S/4HANA implementation services",
  "SAP ECC to S/4HANA migration",
  "Hybrid and multi-cloud SAP landscapes",
  "Integration with SAP Ariba, SuccessFactors, and more",
];

const partnerPoints = [
  "Deep expertise in SAP consulting services",
  "Proven experience across industries",
  "End-to-end security lifecycle support",
  "Customized solutions aligned with business goals",
  "Strong focus on compliance, risk, and governance",
];

const SapSecurityGrcServices: React.FC = () => {
  return (
    <>
      <Seo
        title="SAP Security & GRC Services: Risk-Focused & Audit-Ready | Maitsys"
        description="Protect your enterprise with Maitsys SAP Security & GRC Services. Tools-agnostic, risk-focused governance, risk, and compliance solutions for SAP S/4HANA, ECC, and cloud environments."
        keywords={[
          "SAP security services",
          "SAP GRC consulting",
          "SAP access control",
          "segregation of duties SAP",
          "SAP role design",
          "SAP audit readiness",
          "SAP SOX compliance",
          "SAP GDPR compliance",
          "SAP firefighter access",
          "SAP security hardening",
          "SAP GRC tools",
          "Maitsys SAP security",
        ]}
        url="/sap-security-grc-services"
        image="/assets/sap-security-hero.webp"
        preloadImage={false}
        preloadVideo={true}
        preloadVideo_url="/hero-background.mp4"
      />
      <JsonLd
        schema={{
          "@type": "Service",
          name: "SAP Security & GRC Services: Risk-Focused & Audit-Ready",
          description:
            "Protect your enterprise with Maitsys SAP Security & GRC Services. Tools-agnostic, risk-focused governance, risk, and compliance solutions for SAP S/4HANA, ECC, and cloud environments.",
          serviceType: "SAP Security & GRC Services",
          provider: {
            "@type": "Organization",
            name: "Maitsys",
            url: "https://www.maitsys.com",
          },
          areaServed: "Worldwide",
          url: "https://www.maitsys.com/sap-security-grc-services",
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          {
            name: "SAP Security & GRC Services: Risk-Focused & Audit-Ready",
            path: "/sap-security-grc-services",
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
            <div className="flex flex-col items-center mx-auto text-center max-w-8xl">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex gap-2 items-center px-4 py-2 mb-8 text-sm font-bold tracking-widest text-red-700 bg-red-50 rounded-full border border-red-100 shadow-sm"
              >
                <span className="w-2 h-2 bg-red-700 rounded-full animate-pulse" />
                {"Governance, Risk & Compliance"}
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6 text-4xl font-medium tracking-tight text-gray-900 md:text-6xl font-display"
              >
                <span className="block leading-[1.2]">
                  SAP Security & GRC Services
                </span>
                <span className="text-red-600 font-bold leading-[1.2]">
                  Risk-Focused & Audit-Ready
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
                Protect your enterprise with robust SAP Security
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mb-6 space-y-6"
              >
                <p className="max-w-3xl text-lg leading-relaxed text-pretty text-slate-700">
                  Protect your enterprise with SAP Security & GRC Services
                  designed to safeguard critical business data, ensure
                  compliance, and minimize risk exposure. Our tools-agnostic and
                  risk-focused approach helps organizations achieve audit-ready
                  SAP environments while maintaining operational efficiency.
                </p>
                <p className="max-w-3xl text-lg leading-relaxed text-pretty text-slate-600">
                  Whether you're implementing, migrating, or optimizing SAP
                  systems, our SAP consulting services deliver end-to-end
                  governance, risk, and compliance (GRC) solutions tailored to
                  your business needs.
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
                  <span className="md:hidden">Assess Security Posture</span>
                  <span className="hidden md:inline">
                    Assess Your Security Posture
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 z-10 w-full h-5 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </section>

        {/* Capabilities Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-6 pb-12 bg-white md:pt-8 md:pb-12"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-6">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">
                  Robust SAP Security &
                </span>
                <span className="text-red-600 leading-[1.2]">
                  GRC Capabilities
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive protection and compliance for your
                mission-critical SAP environments.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx + "capabilities"}
                  className={`group bg-white p-8 rounded-3xl border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 flex flex-col shadow-md ${
                    idx === capabilities.length - 1
                      ? " md:col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >
                  <div className="flex justify-center items-center mb-6 w-14 h-14 text-red-600 bg-red-50 rounded-2xl transition-transform duration-300 group-hover:scale-110">
                    {cap.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900 font-display">
                    {cap.title}
                  </h3>
                  <p className="flex-grow pb-6 mb-6 text-sm leading-relaxed text-gray-600 border-b border-gray-100">
                    {cap.desc}
                  </p>
                  <ul className="mt-auto space-y-3">
                    {cap.items.map((li, i) => (
                      <li
                        key={i + "item"}
                        className="flex gap-3 text-sm font-medium text-gray-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
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
          className="overflow-hidden relative py-10 border-t lg:py-10 bg-slate-50 border-slate-100"
        >
          <div className="relative z-10 px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="flex flex-col gap-16 items-center lg:flex-row">
              <div className="lg:w-1/2">
                <h2 className="mb-6 text-3xl font-bold leading-relaxed font-display text-slate-900 md:text-5xl">
                  <span className="block leading-[1.2]">Why Choose Our</span>
                  <span className="block text-red-600 leading-[1.2]">
                    SAP Security & GRC Services?
                  </span>
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-gray-600">
                  We bring unparalleled expertise to secure your enterprise data
                  and manage complex compliance requirements.
                </p>
                <ul className="space-y-6">
                  {whyUs.map((item, i) => (
                    <li
                      key={i + "whyUs"}
                      className="flex flex-col gap-2 p-5 bg-white rounded-2xl border border-gray-100 transition-colors hover:border-red-200 hover:bg-red-50/30"
                    >
                      <div className="flex gap-2 items-center mb-1">
                        <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                        <strong className="font-bold text-gray-900">
                          {item.title}
                        </strong>
                      </div>
                      <span className="pl-7 text-sm font-medium leading-relaxed text-gray-600">
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative lg:w-1/2">
                <div className="absolute -inset-4 bg-gradient-to-l from-red-100 to-red-50 rounded-[2.5rem] transform rotate-3 z-0" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 border-4 border-white bg-white group aspect-square">
                  <img
                    src="/assets/SAP/image_14.png"
                    alt="SAP Security & GRC"
                    title="SAP Security & GRC"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80 from-slate-900/80" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SAP Security for Modern Enterprises */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="py-8 bg-white border-t border-gray-100 lg:py-8"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="grid gap-16 items-center lg:grid-cols-2">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-red-50 rounded-[2.5rem] transform -rotate-3 z-0" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 border-4 border-white bg-white group aspect-video">
                  <img
                    src="/assets/SAP/image_1.png"
                    alt="Securing Enterprise Data"
                    title="Securing Enterprise Data"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 mix-blend-multiply bg-slate-900/20" />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                  <span className="block leading-[1.2]">SAP Security for</span>
                  <span className="text-red-600 leading-[1.2]">
                    Modern Enterprises
                  </span>
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-600">
                  As organizations adopt cloud migration consulting and digital
                  transformation, securing SAP environments becomes more
                  critical than ever. Our SAP Security & GRC Services ensure
                  your systems remain resilient, compliant, and scalable across:
                </p>
                <ul className="mb-10 space-y-4">
                  {modernItems.map((item, i) => (
                    <li
                      key={i + "modernItems"}
                      className="flex gap-4 items-center"
                    >
                      <span className="flex justify-center items-center w-8 h-8 bg-red-50 rounded-full shrink-0">
                        <Lock className="w-4 h-4 text-red-600" />
                      </span>
                      <span className="font-medium text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  Why Partner With Us?
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {partnerPoints.map((point, i) => (
                    <li
                      key={i + "partnerPoints"}
                      className="flex gap-2 items-center"
                    >
                      <ChevronRight className="w-4 h-4 text-red-600 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
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
          className="pt-8 pb-10 text-center border-t border-gray-100 lg:pt-8 lg:pb-10 bg-slate-50"
        >
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Get Started with SAP Security & GRC Services
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Secure your SAP environment with a trusted partner who understands
            both technology and risk.
          </p>
          <a
            href="/contact-us"
            className="inline-flex gap-3 items-center px-8 py-4 text-base font-bold text-white bg-red-600 rounded-xl shadow-lg transition-all md:px-10 md:py-5 hover:bg-red-700 hover:shadow-red-600/30 md:text-lg"
          >
            <span className="md:hidden">Assess your SAP security</span>
            <span className="hidden md:inline">
              Assess your SAP security posture today
            </span>
          </a>
        </motion.section>
      </main>
    </>
  );
};

export default SapSecurityGrcServices;
