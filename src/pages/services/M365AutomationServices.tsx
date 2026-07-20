import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  FileText,
  Mail,
  Cloud,
  CheckCircle2,
} from "lucide-react";
import BackgroundVideo from "../../components/ui/BackgroundVideo";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ContactPopup from "../../components/contact/ContactPopup";

const m365Apps = [
  {
    icon: <MessageSquare className="w-5 h-5 text-red-600" />,
    text: "Microsoft Teams",
  },
  {
    icon: <FileText className="w-5 h-5 text-red-600" />,
    text: "SharePoint Online",
  },
  {
    icon: <Mail className="w-5 h-5 text-red-600" />,
    text: "Outlook & Exchange",
  },
  {
    icon: <Cloud className="w-5 h-5 text-red-600" />,
    text: "OneDrive & M365 Apps",
  },
];

const integrations = [
  "Power Platform integration (Apps, Automate, BI)",
  "API and third-party integrations",
  "Azure-based automation workflows",
  "Cross-platform data synchronization",
];

const useCases = [
  "Document management & approval workflows",
  "Team collaboration automation",
  "Email and calendar automation",
  "SharePoint-based business applications",
  "Integration with Power Apps and Power Automate",
];

const benefits = [
  "Improved collaboration and communication",
  "Reduced manual effort and process delays",
  "Better document and data governance",
  "Increased employee productivity",
  "Enhanced operational efficiency",
];

const implApproach = [
  "Environment assessment & audit",
  "Process optimization & automation strategy",
  "Implementation & integration",
  "User training & adoption support",
];

const M365AutomationServices: React.FC = () => {
  return (
    <>
      <Seo
        title="Microsoft 365 Automation & Integration Services | Maitsys"
        description="Maitsys helps organizations maximize productivity by connecting and automating business processes across Microsoft 365 tools using Power Platform, SharePoint, Teams, and Azure integrations."
        keywords={[
          "Microsoft 365 automation services",
          "M365 integration consulting",
          "SharePoint automation",
          "Microsoft Teams automation",
          "Power Automate M365",
          "Microsoft 365 workflow automation",
          "Outlook automation",
          "M365 Power Platform integration",
          "business process automation M365",
          "Maitsys Microsoft 365",
        ]}
        url="/m365-automation"
        preloadImage={false}
        preloadVideo={true}
        preloadVideo_url="/hero-background.mp4"
      />
      <JsonLd
        schema={{
          "@type": "Service",
          name: "Microsoft 365 Automation & Integration Services",
          description: "Maitsys helps organizations maximize productivity by connecting and automating business processes across Microsoft 365 tools using Power Platform, SharePoint, Teams, and Azure integrations.",
          serviceType: "Microsoft 365 Automation Services",
          provider: { "@type": "Organization", name: "Maitsys", url: "https://www.maitsys.com" },
          areaServed: "Worldwide",
          url: "https://www.maitsys.com/m365-automation",
        }}
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Microsoft 365 Automation & Integration Services", path: "/m365-automation" }]} />

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
                className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-bold tracking-widest text-red-700 bg-red-50 rounded-full border border-red-100 shadow-sm"
              >
                <span className="hidden w-2 h-2 bg-red-700 rounded-full animate-pulse md:block" />
                {`Microsoft 365 Solutions`}
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-medium mb-6 leading-[1.3] tracking-tight text-gray-900"
              >
                <span className="block leading-[1.2]">Microsoft 365</span>
                <span className="text-red-600 font-bold block leading-[1.2]">
                  Automation & Integration Services
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
                Maximize productivity by connecting and automating your business
                processes across Microsoft 365 tools.
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
                  Maitsys helps organizations implement Microsoft 365 automation
                  and integration solutions using Power Platform, SharePoint,
                  Teams, and Azure integrations.
                </p>
                <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
                  Whether you need document management automation, team
                  collaboration workflows, or cross-platform data
                  synchronization, our experts deliver scalable M365 solutions
                  tailored to your business.
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
                  <span className="md:hidden">Get M365 Assessment</span>
                  <span className="hidden md:inline">
                    Get a Free M365 Assessment
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 z-10 w-full h-5 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </section>

        {/* M365 Apps + Integration Capabilities */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-6 pb-10 bg-white md:pt-8 md:pb-10"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 max-w-3xl text-center md:mb-8">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">
                  End-to-End Microsoft 365
                </span>
                <span className="text-red-600 leading-[1.2]">Automation</span>
              </h2>
              <p className="text-lg text-gray-600">
                We automate workflows and integrate your Microsoft 365 ecosystem
                to eliminate manual effort and unify your business processes.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {/* M365 Apps grid */}
              <div>
                <h3 className="mb-1 text-2xl font-bold font-display text-slate-900">
                  Apps We Automate
                </h3>
                <p className="mb-8 leading-relaxed text-slate-600">
                  We automate workflows across your core Microsoft 365 tools:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {m365Apps.map((item, i) => (
                    <div
                      key={i + item.text}
                      className="flex flex-col gap-3 justify-center items-center p-5 text-center rounded-2xl border transition-colors bg-slate-50 border-slate-100 hover:border-red-200 hover:bg-red-50/30"
                    >
                      <div className="p-3 bg-white rounded-full shadow-sm">
                        {item.icon}
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 rounded-[2rem] p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-600 rounded-full blur-[50px] opacity-20 pointer-events-none" />
                <h3 className="flex relative z-10 gap-2 mb-6 text-2xl font-semibold">
                  <span className="block">Integration</span>
                  <span className="text-red-500">Capabilities</span>
                </h3>
                <ul className="relative z-10 space-y-4">
                  {integrations.map((item, i) => (
                    <li key={i + "text"} className="flex gap-3 items-center">
                      <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0" />
                      <span className="font-light text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-8 pb-4 border-t lg:pt-8 lg:pb-8 bg-slate-50 border-slate-100"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">Microsoft 365</span>
                <span className="text-red-600 leading-[1.2]">
                  Automation Use Cases
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Real-world automation scenarios we deliver for enterprise
                clients.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {useCases.map((item, i) => (
                <div
                  key={i + "index"}
                  className="px-6 py-4 font-medium bg-white rounded-2xl border border-red-100 shadow-sm transition-all cursor-default text-slate-700 hover:border-red-300 hover:shadow-md"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits + Implementation Approach */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="px-4 pt-8 pb-4 bg-white border-t border-gray-100 lg:pt-8 lg:pb-8"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 bg-red-50 rounded-[3rem] p-8 lg:p-16 border border-red-100">
              {/* Benefits */}
              <div>
                <h2 className="mb-8 text-2xl font-bold font-display text-slate-900">
                  Business Benefits
                </h2>
                <ul className="space-y-4">
                  {benefits.map((item) => (
                    <li
                      key={item}
                      className="flex gap-4 items-center p-4 bg-white rounded-2xl shadow-sm"
                    >
                      <div className="bg-red-100 text-red-600 rounded-full p-1.5 shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Implementation Approach — alternating zigzag */}
              <div>
                <h2 className="mb-8 text-2xl font-bold font-display text-slate-900">
                  Our Implementation Approach
                </h2>
                <div className="relative">
                  <div className="absolute top-5 bottom-5 left-1/2 w-px bg-red-300 -translate-x-1/2" />
                  <div className="space-y-6">
                    {implApproach.map((item, i) => (
                      <div key={item} className="flex relative items-center">
                        <div className="w-[calc(50%-1.25rem)] flex justify-end pr-3">
                          {i % 2 !== 0 && (
                            <div className="p-3 text-sm font-medium text-right bg-white rounded-2xl border border-red-100 shadow-sm text-slate-800">
                              {item}
                            </div>
                          )}
                        </div>
                        <div className="flex z-10 justify-center items-center w-10 h-10 text-sm font-bold text-white bg-red-600 rounded-full shrink-0">
                          {i + 1}
                        </div>
                        <div className="w-[calc(50%-1.25rem)] flex justify-start pl-3">
                          {i % 2 === 0 && (
                            <div className="p-3 text-sm font-medium bg-white rounded-2xl border border-red-100 shadow-sm text-slate-800">
                              {item}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
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
          className="overflow-hidden relative py-8 border-t lg:py-10 bg-slate-50 border-slate-100"
        >
          <div className="relative z-10 px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">Why Choose Our</span>
                <span className="text-red-600 leading-[1.2]">
                  M365 Automation Services?
                </span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                We bring deep Microsoft 365 expertise and proven delivery to
                transform how your teams work.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: "01",
                  title: "Microsoft-Certified Experts",
                  desc: "Deep expertise across Microsoft 365, Power Platform, and Azure services.",
                },
                {
                  num: "02",
                  title: "Business-First Approach",
                  desc: "We focus on your workflows first, then build the right automation around them.",
                  offset: true,
                },
                {
                  num: "03",
                  title: "Secure & Compliant",
                  desc: "All solutions are built with M365 security, governance, and compliance standards.",
                },
                {
                  num: "04",
                  title: "End-to-End Delivery",
                  desc: "From discovery to training and ongoing support — we own the full lifecycle.",
                  offset: true,
                },
              ].map((item, i) => (
                <div
                  key={i + "index"}
                  className={`bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2${
                    item.offset ? " lg:translate-y-6" : ""
                  }`}
                >
                  <div className="mb-4 text-5xl font-black text-slate-500" aria-hidden="true">
                    {item.num}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
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
          className="pt-4 pb-10 text-center border-t border-gray-100 lg:pt-8 lg:pb-10 bg-slate-50"
        >
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Optimize Your Microsoft 365 Environment
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Let our experts assess your current M365 setup and design a tailored
            automation and integration roadmap for your business.
          </p>
          <a
            href="/contact-us"
            className="inline-flex gap-3 items-center px-8 py-4 text-base font-bold text-white bg-red-600 rounded-xl shadow-lg transition-all md:px-10 md:py-5 hover:bg-red-700 hover:shadow-red-600/30 md:text-lg"
          >
            Get a Free Assessment 👉
          </a>
        </motion.section>
      </main>
    </>
  );
};

export default M365AutomationServices;
