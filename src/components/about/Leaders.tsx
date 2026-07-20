import type React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import type { Member } from "../home/TeamSection";
import { motion } from "framer-motion";

import mani from "../../assets/image/leaders/mani.png";
import ineshPandi from "../../assets/image/leaders/IneshPandi.png";
import prashanthRaja from "../../assets/image/leaders/prasanth.png";
import faizaan from "../../assets/image/leaders/faizan.png";
import priyabrata from "../../assets/image/leaders/priyabrata.png";
import dipankar from "../../assets/image/leaders/dipankar.png";
import connor from "../../assets/image/leaders/connorTwombly.jpg";
import jenna from "../../assets/image/leaders/jenna.png";
import tucker from "../../assets/image/leaders/tuckerGuard.jpg";
import tyler from "../../assets/image/leaders/tylerWalser.png";
import anbu from "../../assets/image/leaders/anbu.png";
import sowmiya from "../../assets/image/leaders/sowmiya.png";
import anthony from "../../assets/image/leaders/anthony.png";
// import asavari from "../../assets/image/leaders/asavariGore.png";
// import jyotip from "../../assets/image/leaders/jyotiP.png";
import mayank from "../../assets/image/leaders/mayank.png";
// import sridhar from "../../assets/image/leaders/sridhar.png";
// import satish from "../../assets/image/leaders/sathishkannan.jpg";
import debbie from "../../assets/image/leaders/debbie.png";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

interface LeaderCardProps {
  member: Member;
  size?: "large" | "medium" | "small";
}

const LeaderCard: React.FC<LeaderCardProps> = ({ member, size = "medium" }) => {
  let imageHeight = "h-64";

  if (size === "large") {
    imageHeight = "h-96";
  } else if (size === "medium") {
    imageHeight = "h-72";
  }

  return (
    <motion.div variants={fadeUp} className="group">
      <div
        className="relative overflow-hidden bg-[#f5f4f0]"
        style={{ borderRadius: "2px" }}
      >
        {/* Image container */}
        <div className={`overflow-hidden relative ${imageHeight}`}>
          {member.image ? (
            <img
              src={member.image}
              className="object-cover object-top w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
              alt={member.name}
              title={member.name}
            />
          ) : (
            <div className="w-full h-full bg-[#1a1a2e] flex items-center justify-center">
              <span className="text-[#c8c0b0] text-4xl font-light tracking-widest">
                {member.name.charAt(0)}
              </span>
            </div>
          )}

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-[#1a1a2e] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

          {/* LinkedIn pill — slides up on hover */}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${member.name} on LinkedIn`}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out flex items-center gap-2 bg-white text-[#0a66c2] text-xs font-semibold tracking-wider px-4 py-2 shadow-lg"
              style={{ borderRadius: "2px" }}
            >
              <LinkedInIcon />
              Connect
            </a>
          )}
        </div>

        {/* Card footer */}
        <div className="px-4 py-4">
          <div
            className="font-bold text-[#1a1a2e] tracking-tight leading-tight"
            style={{
              fontSize: size === "large" ? "1.2rem" : "1rem",
            }}
          >
            {member.name}
          </div>
          <p
            className="text-[#6b6b6b] mt-1 font-medium tracking-wide"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.05em",
              // textTransform: "uppercase",
            }}
          >
            {member.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  accent: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  accent,
}) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="w-full max-w-6xl"
  >
    <p
      className="text-[#c0392b] font-bold tracking-[0.2em] mb-2"
      style={{ fontSize: "0.7rem" }}
    >
      {eyebrow}
    </p>
    <div className="flex gap-3 items-end">
      <h2
        className="text-[#1a1a2e] font-bold leading-none"
        style={{
          fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
        }}
      >
        {title} <span className="text-[#c0392b]">{accent}</span>
      </h2>
    </div>
    <div className="flex gap-3 items-center mt-4">
      <div className="h-px bg-[#c0392b] w-12" />
      <div className="h-px bg-[#ddd] flex-1" />
    </div>
  </motion.div>
);

const Leaders: React.FC = () => {
  const ceos: Member[] = [
    {
      name: "Mani Pandi",
      role: "Founder and CEO",
      image: mani,
      linkedin: "https://www.linkedin.com/in/mani-pandi-38a6432/",
    },
    {
      name: "Inesh Pandi",
      role: "Partner & Global Vice President",
      image: ineshPandi,
      linkedin: "https://www.linkedin.com/in/ineshpandi/",
    },
    {
      name: "Deb Christensen",
      role: "Advisor-Human Resources",
      image: debbie,
      linkedin: "https://www.linkedin.com/in/debbie-c-aa2387a/",
    },
  ];

  const technologyDeliveryLeaders: Member[] = [
    {
      name: "Faizaan Ahmed",
      role: "Senior SAP AI Architect",
      image: faizaan,
      linkedin: "https://www.linkedin.com/in/faizaanahmed-sapbtp/",
    },
    {
      name: "Sowmiya S",
      role: "Senior SAP Security Consultant",
      image: sowmiya,
      linkedin: "https://www.linkedin.com/in/sowmiya-s-03b1684a/",
    },
    {
      name: "Prashanth Raja",
      role: "Senior Technical Architect",
      image: prashanthRaja,
      linkedin: "https://www.linkedin.com/in/prashanthrajaravi/",
    },
    {
      name: "Anbu",
      role: "SAP Technical Architect",
      image: anbu,
      linkedin: "https://www.linkedin.com/in/anbarasu-t-0a6070368/",
    },
    {
      name: "Priyabrata Hota",
      role: "IAM Consultant",
      image: priyabrata,
      linkedin: "https://www.linkedin.com/in/priyabrata12/",
    },
    {
      name: "Dipankar Diwan",
      role: "AI and SAP SD Solution Lead",
      image: dipankar,
      linkedin: "https://www.linkedin.com/in/dipankar-diwan-441246124/",
    },
    {
      name: "Mayank Bhateja",
      role: "Senior SAP ABAP Consultant",
      image: mayank,
      linkedin: "https://www.linkedin.com/in/mayank-b-28871069/",
    },

    {
      name: "Anthony Muthu",
      role: "SAP Technical Architect",
      image: anthony,
      linkedin: "https://www.linkedin.com/in/anthony-muthu-8b478077/",
    },
    // {
    //   name: "Sridhar Chadalavada",
    //   role: "SAP Security Consultant",
    //   image: sridhar,
    //   linkedin: "https://www.linkedin.com/in/sridhar-chadalavada-08405a217/",
    // },
    // {
    //   name: "Asavari Gore",
    //   role: "IAG | IAM consultant",
    //   image: asavari,
    //   linkedin: "https://www.linkedin.com/in/asavari-gore-98470024/",
    // },
    // {
    //   name: "Jyoti P",
    //   role: "SAP Fiori Lead",
    //   image: jyotip,
    //   linkedin: "https://www.linkedin.com/in/jyoti-p-65404682/",
    // },
    // {
    //   name: "Sri Sathish Kannan S",
    //   role: "SAP PLM Functional Lead",
    //   image: satish,
    //   linkedin: "https://www.linkedin.com/in/sathish-k-51b2a98b/",
    // },
  ];

  const businessDevelopmentAndSalesLeaders: Member[] = [
    {
      name: "Connor Twombly",
      role: "SAP Account Manager",
      image: connor,
      linkedin: "https://www.linkedin.com/in/connor-twombly/",
    },
    {
      name: "Jenna DeEll",
      role: "SAP Account Manager",
      image: jenna,
      linkedin: "https://www.linkedin.com/in/jenna-deell/",
    },
    {
      name: "Tucker Gardner",
      role: "SAP Account Manager",
      image: tucker,
      linkedin: "https://www.linkedin.com/in/tucker-guard-8406061b9/",
    },
    {
      name: "Tyler Walser",
      role: "SAP Account Manager",
      image: tyler,
      linkedin: "https://www.linkedin.com/in/tyler-walser-9a230927b/",
    },
  ];

  const location = useLocation();
  const leadersRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollWithOffset = (element: HTMLElement, offset: number = -120) => {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    };

    if (location.pathname === "/about-us#leaders") {
      if (leadersRef.current) scrollWithOffset(leadersRef.current);
    } else if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) scrollWithOffset(element);
    }
  }, [location]);

  return (
    <section
      id="leaders"
      ref={leadersRef}
      className="w-full bg-[#faf9f6] py-6 px-4 md:px-10 lg:px-16 mt-4"
      style={{
        backgroundImage:
          "radial-gradient(circle at 80% 20%, rgba(192,57,43,0.04) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(26,26,46,0.03) 0%, transparent 50%)",
      }}
    >
      <div className="flex flex-col gap-8 mx-auto max-w-8xl">
        {/* ── Page title ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="text-[#c0392b] font-bold tracking-[0.25em]"
            style={{ fontSize: "0.68rem" }}
          >
            Our People
          </p>
          <h1
            className="text-[#1a1a2e] font-bold leading-tight"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            }}
          >
            Strategy &amp; Execution{" "}
            <span className="text-[#c0392b]">Leaders</span>
          </h1>
          <p className="mt-2 text-[#6b6b6b] max-w-xl mx-auto text-sm leading-relaxed">
            Seasoned professionals driving global transformation through deep
            SAP expertise and visionary leadership.
          </p>
        </motion.div>

        {/* ── C-Suite: large portrait cards ── */}
        <motion.div
          className="grid grid-cols-1 gap-6 mx-auto w-full max-w-5xl sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ceos.map((m, i) => (
            <LeaderCard key={i + "CEOs"} member={m} size="large" />
          ))}
        </motion.div>
        {/* ── Business Development ── */}
        <div className="flex flex-col gap-6">
          <SectionHeader
            eyebrow="Revenue &amp; Growth"
            title="Business Development &amp; SAP Account"
            accent="Managers"
          />
          <motion.div
            className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {businessDevelopmentAndSalesLeaders.map((m, i) => (
              <LeaderCard key={i + "BD"} member={m} size="medium" />
            ))}
          </motion.div>
        </div>
        {/* ── Technology & Delivery ── */}
        <div className="flex flex-col gap-6">
          <SectionHeader
            eyebrow="Engineering Excellence"
            title="Technology &amp; Delivery"
            accent="Leaders"
          />
          <motion.div
            className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologyDeliveryLeaders.map((m, i) => (
              <LeaderCard key={i + "TDL"} member={m} size="medium" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
