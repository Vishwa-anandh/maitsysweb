import React, { useRef } from "react";
import { motion } from "framer-motion";
import image5 from "../../assets/image/AISolutions.svg";
import image8 from "../../assets/image/ApplicationDevelopment.svg";
import image7 from "../../assets/image/mdi_middleware-outline.svg";
import image1 from "../../assets/image/salesforce.svg";
import image3 from "../../assets/image/EnterpriseApplications.svg";
import image4 from "../../assets/image/InfrastructureManagement.svg";
import image2 from "../../assets/image/ManagedSecurity.svg";
import image6 from "../../assets/image/SAP.svg";
import image10 from "../../assets/image/mdi_microsoft.svg";
import image11 from "../../assets/image/dynamics.svg";
import image12 from "../../assets/image/workday.svg";
import image13 from "../../assets/image/oracel.svg";

interface Service {
  title: string;
  description: string;
  icon?: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: image5,
      title: "AI & Machine Learning",
      description:
        "#Predictive analytics, automation, NLP, and computer vision. #Generative AI and enterprise-ready LLM integrations. #Custom AI solutions built on your enterprise data. #Governance, compliance, and secure model operations. #Workforce and talent intelligence using Eightfold AI.",
    },
    {
      icon: image6,
      title: "SAP ECC & S/4HANA",
      description:
        "#Transformations: ECC → S/4HANA, global rollouts, templates. #Functional: SD, MM, PP, FICO, EWM, TM, OTC, S2P/P2P, HCM. #Technical: ABAP, BTP, DVM/ILM, Cloud ALM, Fiori, RPA, Analytics, IoT. #Governance: Basis, Security, GRC, MDG, Signavio, LeanIX, Pathlock, SecurityBridge.",
    },
    {
      icon: image3,
      title: "NetSuite",
      description:
        "#Multi-entity and multi-subsidiary implementations. #Financial process automation across OTC, P2P, and R2R. #Advanced configurations, customizations, and workflow design.#Integrations across ERP, CRM, finance, and legacy systems.#Reporting, analytics, and governance for scalable operations.",
    },
    {
      icon: image1,
      title: "Salesforce & Veeva",
      description:
        "#Salesforce Sales Cloud, Service Cloud, and CPQ implementations. #Veeva CRM & Vault solutions for life sciences and regulated industries. #End-to-end process automation and workflow digitization. #Cross-platform integrations with SAP, NetSuite, Workday, and more. #Platform governance, security, and adoption programs",
    },
    {
      icon: image4,
      title: "Infrastructure (On-Prem & Cloud)",
      description:
        "#Data center modernization and hybrid infrastructure management. #Cloud architecture & migration across AWS, Azure, and GCP. #Network, storage, compute, and systems administration. #High availability, disaster recovery, and business continuity programs. #Enterprise-wide monitoring and licensing management.",
    },
    {
      icon: image2,
      title: "Cybersecurity",
      description:
        "#Threat detection and response (XDR) with 24/7 monitoring. #Identity and access management for hybrid/cloud environments. #Dedicated NOC and SOC operations for proactive defense. #Cloud security posture management across major platforms. #Data protection, compliance, and governance assurance.",
    },
    {
      icon: image7,
      title: "Middleware & Integrations",
      description:
        "#Integration platforms: MuleSoft, SAP CPI/PI, Boomi, Informatica, Coupa. #API-led, service-oriented, and event-driven architectures. #Enterprise integrations across SAP, Oracle, Salesforce, Workday, and NetSuite. #Legacy modernization and system interoperability programs. #Secure integration governance, monitoring, and observability.",
    },
    {
      icon: image8,
      title: "Agile & Application Development",
      description:
        "#Custom enterprise applications for mission-critical workflows. #Cloud-native engineering, microservices, and API platforms. #Full SDLC delivery using Agile/Scrum methodologies. #UX/UI design, prototyping, and iterative improvements. #Quality engineering, performance testing, and DevOps enablement",
    },
    {
      icon: image13,
      title: "Oracle ERP & Cloud Applications",
      description:
        "#E-Business Suite to Oracle Cloud ERP transformations. #Global rollouts and process standardization. #Functional expertise across Financials, SCM, HCM, Procurement, PPM, and CRM. #Strong technical capabilities in SQL, PL/SQL, OCI, BI Publisher, OTBI, and Analytics. #Secure governance with GRC, cloud controls, automation, and LeanIX.",
    },

    {
      icon: image10,
      title: "Microsoft 365 (M365) & Collaboration Suite",
      description:
        "#Exchange to Microsoft 365 transformations. #Teams adoption, SharePoint modernization, and global deployments. #Collaboration, productivity, and workflow automation. #Power Platform expertise across Power BI, Power Automate, and Power Apps. #Governance with IAM, DLP, compliance, and adoption insights.",
    },
    {
      icon: image11,
      title: "Microsoft Dynamics 365",
      description:
        "#AX and CRM to Dynamics 365 transformations. #Global rollouts and process optimization. #Finance, supply chain, sales, service, marketing, and HR solutions. #Power Platform, Dataverse, integrations, analytics, and AI insights. #Governance with security, compliance, and audit controls.",
    },
    {
      icon: image12,
      title: "Workday HCM & Financials",
      description:
        "#On-prem HR and Finance to Workday transformations. #Global deployments and process optimization. #Core HCM, payroll, talent, recruiting, learning, and finance. #Workday Studio, integrations, analytics, RPA, and AI insights. #Governance with security, compliance, and data integrity.",
    },
  ];

  const ref = useRef(null);

  // Framer Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring" as const, stiffness: 120 },
    }),
    hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(220,38,38,0.3)" },
  };

  return (
    <section className="relative w-full" ref={ref}>
      {/* Dashed Center Fade Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e7e5e4 1px, transparent 1px),
            linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <section className="px-4 py-6 space-y-6 bg-white md:px-8">
        {/* Header */}
        <div className="mx-auto text-center max-w-8xl">
          <h2 className="flex flex-col gap-2 justify-center items-center mb-4 w-full text-3xl font-bold text-center text-gray-900 sm:flex-row text-wrap md:text-4xl lg:text-5xl">
            Comprehensive IT{" "}
            <span className="block text-red-700">Solutions</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
            Partner with our full-service IT provider to navigate modern
            technology complexities and drive your business forward with
            innovative solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto max-w-8xl">
          <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index + "index"}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover="hover"
                variants={cardVariants}
                className="group relative bg-white rounded-[50px] border-2 border-red-200 shadow-md shadow-red-200 transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 transition-all duration-500 group-hover:from-red-100 group-hover:to-white group-hover:opacity-100"></div>

                {/* Content */}
                <div className="flex relative flex-col p-8 h-full">
                  <div className="mb-6">
                    <div className="flex justify-center items-center w-16 h-16 rounded-2xl transition-all duration-500 group-hover:bg-red-400 group-hover:scale-110">
                      <img
                        src={service.icon}
                        alt={service.title}
                        title={service.title}
                        className="w-8 h-8 transition-all duration-500 group-hover:filter group-hover:brightness-0 group-hover:invert"
                      />
                    </div>
                  </div>

                  <h2 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-700 text-pretty">
                    {service.title}
                  </h2>

                  <div className="flex-grow text-sm leading-relaxed text-gray-600">
                    {service.description
                      ?.split("#")
                      ?.filter(Boolean)
                      ?.map((item, i) => (
                        <ul key={i + "index"} className="list-disc">
                          <li>{item.trim()}</li>
                        </ul>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServicesSection;
