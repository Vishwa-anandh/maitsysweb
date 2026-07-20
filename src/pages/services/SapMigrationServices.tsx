import React from "react";
import { motion } from "framer-motion";
import {
  RefreshCw,
  Cloud,
  Database,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import BackgroundVideo from "../../components/ui/BackgroundVideo";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ContactPopup from "../../components/contact/ContactPopup";

const SapMigrationServices: React.FC = () => {
  return (
    <>
      <Seo
        title="SAP Migration Services & Cloud Transition | Maitsys"
        description="Seamless SAP Migration from ECC to S/4HANA and Cloud Platforms. Our expert-led services ensure minimal disruption and maximum business value for your enterprise transformation."
        keywords={[
          "SAP migration services",
          "ECC to S/4HANA migration",
          "SAP cloud transition",
          "SAP database modernization",
          "SAP Greenfield migration",
          "SAP Brownfield migration",
          "SAP Bluefield migration",
          "AWS SAP migration",
          "Azure SAP migration",
          "Google Cloud SAP migration",
          "SAP landscape optimization",
          "Maitsys SAP services",
        ]}
        url="/sap-migration-services"
        image="/assets/sap-migration-hero.webp" // Placeholder or actual image path
        preloadImage={true}
        preloadImage_url="/assets/sap-migration-hero.webp"
        preloadVideo={true}
        preloadVideo_url="/hero-background.mp4"
      />
      <JsonLd
        schema={{
          "@type": "Service",
          name: "SAP Migration Services & Cloud Transition",
          description:
            "Seamless SAP Migration from ECC to S/4HANA and Cloud Platforms. Our expert-led services ensure minimal disruption and maximum business value for your enterprise transformation.",
          serviceType: "SAP Migration Services",
          provider: {
            "@type": "Organization",
            name: "Maitsys",
            url: "https://www.maitsys.com",
          },
          areaServed: "Worldwide",
          url: "https://www.maitsys.com/sap-migration-services",
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          {
            name: "SAP Migration Services & Cloud Transition",
            path: "/sap-migration-services",
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
            {/* Overlay to ensure readability and match home page vibe */}
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
                <span className="hidden w-2 h-2 bg-red-700 rounded-full animate-pulse md:block" />
                {"Enterprise Transformation"}
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6 text-4xl font-medium tracking-tight text-gray-900 md:text-5xl lg:text-7xl font-display"
              >
                <span className="block leading-[1.2]">
                  SAP Migration Services &
                </span>
                <span className="text-red-600 font-bold leading-[1.2]">
                  Cloud Transition Solutions
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
                Seamless SAP Migration from ECC to S/4HANA and Cloud Platforms
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
                  Modern enterprises need agile, scalable, and future-ready SAP
                  landscapes. Our SAP Migration Services are designed to help
                  you transition from legacy systems to intelligent,
                  cloud-enabled environments with minimal disruption and maximum
                  business value.
                </p>
                <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
                  Whether you're planning an ECC SAP transformation, cloud
                  adoption, or database modernization, we deliver end-to-end
                  migration expertise tailored to your business goals.
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
                  <span className="md:hidden">Plan Your Migration</span>
                  <span className="hidden md:inline">
                    Plan Your Migration Journey
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom white fade effect matching home page finishing */}
          <div className="absolute bottom-0 left-0 z-10 w-full h-5 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </section>

        {/* Alternating Services Layout */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-4 pb-8 bg-white md:pt-6 md:pb-10"
        >
          <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center md:mb-10">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">End-to-End SAP</span>
                <span className="text-red-600 leading-[1.2]">
                  Migration & Transition Services
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Accelerate your digital transformation with our comprehensive
                migration solutions.
              </p>
            </div>

            <div className="space-y-16">
              {/* Service 1 */}
              <div className="flex flex-col gap-12 items-center lg:flex-row lg:gap-20">
                <div className="order-2 lg:w-1/2 lg:order-1">
                  <div className="flex justify-center items-center mb-6 w-16 h-16 text-red-600 bg-red-50 rounded-2xl">
                    <RefreshCw className="w-8 h-8" />
                  </div>
                  <h3 className="mb-6 text-3xl font-bold font-display text-slate-900">
                    SAP ECC to S/4HANA Migration
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    Accelerate your digital transformation with our proven SAP
                    S/4HANA migration services focusing on minimal downtime and
                    optimized performance:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Greenfield (new implementation)",
                      "Brownfield (system conversion)",
                      "Bluefield (selective data transition)",
                    ].map((li, i) => (
                      <li key={i + "index"} className="flex gap-4 items-center">
                        <span className="flex justify-center items-center w-8 h-8 bg-red-50 rounded-full shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-red-600" />
                        </span>
                        <span className="font-medium text-gray-800">{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:w-1/2 lg:order-2">
                  <div className="overflow-hidden relative rounded-2xl shadow-2xl">
                    <img
                      src="/assets/SAP/image10.png"
                      alt="SAP S/4HANA Migration"
                      title="SAP S/4HANA Migration"
                      loading="lazy"
                      className="object-cover w-full h-full aspect-video"
                    />
                    <div className="absolute inset-0 bg-slate-900/10"></div>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col gap-12 items-center lg:flex-row lg:gap-20">
                <div className="lg:w-1/2">
                  <div className="overflow-hidden relative rounded-2xl shadow-2xl">
                    <img
                      src="/assets/articles/articles_image4.webp"
                      alt="Cloud Migration"
                      title="Cloud Migration"
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-slate-900/10"></div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex justify-center items-center mb-6 w-16 h-16 text-red-600 bg-red-50 rounded-2xl">
                    <Cloud className="w-8 h-8" />
                  </div>
                  <h3 className="mb-6 text-3xl font-bold font-display text-slate-900">
                    Cloud Migration Services
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    Unlock scalability and flexibility with our expert-led Cloud
                    Migration Services tailored for SAP systems:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Migration to AWS, Azure, and GCP",
                      "Hybrid and multi-cloud strategies",
                      "Secure and compliant cloud environments",
                    ].map((li, i) => (
                      <li key={i + "index"} className="flex gap-4 items-center">
                        <span className="flex justify-center items-center w-8 h-8 bg-red-50 rounded-full shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-red-600" />
                        </span>
                        <span className="font-medium text-gray-800">{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col gap-12 items-center lg:flex-row lg:gap-20">
                <div className="order-2 lg:w-1/2 lg:order-1">
                  <div className="flex justify-center items-center mb-6 w-16 h-16 text-red-600 bg-red-50 rounded-2xl">
                    <Database className="w-8 h-8" />
                  </div>
                  <h3 className="mb-6 text-3xl font-bold font-display text-slate-900">
                    Database Migration & Modernization
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    Transform your data infrastructure with advanced Database
                    Migration solutions and industry-leading utilities like AWS
                    Database Migration Service:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Oracle to SAP HANA migration",
                      "SAP database optimization",
                      "Performance tuning and validation",
                    ].map((li, i) => (
                      <li key={i + "index"} className="flex gap-4 items-center">
                        <span className="flex justify-center items-center w-8 h-8 bg-red-50 rounded-full shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-red-600" />
                        </span>
                        <span className="font-medium text-gray-800">{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:w-1/2 lg:order-2">
                  <div className="overflow-hidden relative rounded-2xl shadow-2xl">
                    <img
                      src="/assets/articles/articles_image9.webp"
                      alt="Database Migration"
                      title="Database Migration"
                      loading="lazy"
                      className="object-cover w-full h-full aspect-video"
                    />
                    <div className="absolute inset-0 bg-slate-900/10"></div>
                  </div>
                </div>
              </div>

              {/* Service 4 */}
              <div className="flex flex-col gap-12 items-center lg:flex-row lg:gap-20">
                <div className="lg:w-1/2">
                  <div className="overflow-hidden relative rounded-2xl shadow-2xl">
                    <img
                      src="/assets/articles/image_10.png"
                      alt="System Conversion"
                      title="System Conversion"
                      loading="lazy"
                      className="object-cover w-full h-full aspect-video"
                    />
                    <div className="absolute inset-0 bg-slate-900/10"></div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex justify-center items-center mb-6 w-16 h-16 text-red-600 bg-red-50 rounded-2xl">
                    <Layers className="w-8 h-8" />
                  </div>
                  <h3 className="mb-6 text-3xl font-bold font-display text-slate-900">
                    Technical System Conversion & Data Transformation
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    Enable a seamless transformation to align your SAP
                    environment with modern business processes:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "System landscape optimization",
                      "Data cleansing and harmonization",
                      "Custom code adaptation and simplification",
                    ].map((li, i) => (
                      <li key={i + "index"} className="flex gap-4 items-center">
                        <span className="flex justify-center items-center w-8 h-8 bg-red-50 rounded-full shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-red-600" />
                        </span>
                        <span className="font-medium text-gray-800">{li}</span>
                      </li>
                    ))}
                  </ul>
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
          className="overflow-hidden relative pt-10 pb-8 border-t lg:pt-10 lg:pb-14 bg-slate-50 border-slate-100"
        >
          <div className="relative z-10 px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                <span className="block leading-[1.2]">Why Choose Our</span>
                <span className="text-red-600 leading-[1.2]">
                  SAP Migration Services?
                </span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                We bring unparalleled expertise and tested methodologies to make
                your legacy to digital migration seamless and risk-free.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2">
                <div className="mb-4 text-5xl font-black text-slate-500">
                  01
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Proven Migration Framework
                </h3>
                <p className="text-gray-600">
                  Combining automation, best practices, and deep SAP expertise.
                </p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 lg:translate-y-6">
                <div className="mb-4 text-5xl font-black text-slate-500">
                  02
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Minimized Downtime
                </h3>
                <p className="text-gray-600">
                  Strategies designed to reduce disruption and ensure business
                  continuity.
                </p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2">
                <div className="mb-4 text-5xl font-black text-slate-500">
                  03
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Cloud & SAP Expertise
                </h3>
                <p className="text-gray-600">
                  Cross-domain expertise from cloud migration to SAP S/4HANA
                  transformation.
                </p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 lg:translate-y-6">
                <div className="mb-4 text-5xl font-black text-slate-500">
                  04
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  Tailored Solutions
                </h3>
                <p className="text-gray-600">
                  Customized based on your business needs, landscape, and growth
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Migration Approach */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="pt-6 pb-8 bg-white border-t border-gray-100 lg:pt-10 lg:pb-8"
        >
          <div className="px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                Our SAP <span className="text-red-600">Migration Approach</span>
              </h2>
              <p className="text-lg text-gray-600">
                A structured lifecycle to seamlessly bring your SAP environment
                to the cloud.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
              {/* Step 1 */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 text-4xl font-black text-red-700">
                  01
                </div>
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  Assessment & Strategy
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    Current system evaluation
                  </li>
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    Migration roadmap
                  </li>
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    Business case development
                  </li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 text-4xl font-black text-red-700">
                  02
                </div>
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  Planning & Preparation
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    Landscape design
                  </li>
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    Tool selection
                  </li>
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    Risk assessment
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 text-4xl font-black text-red-700">
                  03
                </div>
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  Migration Execution
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    Data migration and validation
                  </li>
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    System conversion
                  </li>
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    Performance optimization
                  </li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 text-4xl font-black text-red-700">
                  04
                </div>
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  Testing & Go-Live
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    Functional and technical testing
                  </li>
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    User acceptance testing
                  </li>
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    Seamless go-live support
                  </li>
                </ul>
              </div>

              {/* Step 5 */}
              <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 text-4xl font-black text-red-700">
                  05
                </div>
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  Post-Migration
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    Performance tuning
                  </li>
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    Continuous monitoring
                  </li>
                  <li className="flex gap-2 items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />{" "}
                    Support and enhancements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Industries */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="py-12 border-t border-gray-100 lg:py-12 bg-slate-50"
        >
          <div className="px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl font-display text-slate-900">
                Industries We <span className="text-red-600">Serve</span>
              </h2>
              <p className="text-lg text-gray-600">
                We deliver SAP Migration Services across leading industries.
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
                  key={i + "index"}
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
          className="py-12 text-center bg-white border-t border-gray-100 lg:py-12"
        >
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Ready to transform your legacy systems into a modern SAP landscape?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Our experts in SAP Migration Services, Cloud Migration Consulting,
            and Database Migration are here to guide you at every step.
          </p>
          <a
            href="/contact-us"
            className="inline-flex gap-3 items-center px-8 py-4 text-base font-bold text-white bg-red-600 rounded-xl shadow-lg transition-all md:px-10 md:py-5 hover:bg-red-700 hover:shadow-red-600/30 md:text-lg"
          >
            <span className="md:hidden">👉 Contact us today</span>
            <span className="hidden md:inline">
              👉 Contact us today to plan your SAP migration journey
            </span>
          </a>
        </motion.section>
      </main>
    </>
  );
};

export default SapMigrationServices;
