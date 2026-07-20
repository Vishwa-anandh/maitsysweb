import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import patner1 from "../../assets/image/logo/patner-1.png";
import patner2 from "../../assets/image/logo/patner-2.png";
import patner3 from "../../assets/image/logo/patner-3.png";
import patner4 from "../../assets/image/logo/patner-4.png";
import patner5 from "../../assets/image/logo/patner-5.png";
import patner6 from "../../assets/image/logo/patner-6.png";
import patner7 from "../../assets/image/logo/patner-7.png";
import patner8 from "../../assets/image/logo/patner-8.png";
import patner9 from "../../assets/image/logo/patner-9.jpg";

/* ---------- Types ---------- */
type Workstream = { title: string; detail: string };
type Sector =
  | "All"
  | "Manufacturing"
  | "BFSI"
  | "Retail"
  | "Healthcare"
  | "Logistics"
  | "Energy"
  | "Telecom"
  | "Public Sector"
  | "Pharma";

type Case = {
  id: string;
  logo: string;
  codename: string;
  sector: Exclude<Sector, "All">;
  region: string;
  duration: string;
  scaleNote: string;
  summary: string;
  workstreams: Workstream[];
  stack: string[];
};

/* ---------- Data ---------- */
const cases: Case[] = [
  {
    id: "01",
    logo: patner1,
    codename: "Global Manufacturing Leader",
    sector: "Manufacturing",
    region: "EMEA · DACH",
    duration: "6-year partnership",
    scaleNote: "12 plants · 18 countries",
    summary:
      "Replaced a fragmented legacy ERP estate with a single SAP S/4HANA core and a cloud-native foundation that gave plant leaders real-time visibility for the first time.",
    workstreams: [
      {
        title: "Greenfield S/4HANA design & build",
        detail:
          "Unified finance, procurement, and manufacturing on a single template across 12 plants and 6 legal entities.",
      },
      {
        title: "Cloud landing zone on Azure",
        detail:
          "Multi-region foundation with FinOps guardrails, IaC modules, and zero-trust networking baked in from day one.",
      },
      {
        title: "Hypercare & managed services",
        detail:
          "Follow-the-sun L2/L3 support with embedded SRE rotations during the first 12 months post go-live.",
      },
      {
        title: "Change & adoption",
        detail:
          "Trained 2,400+ end users across 18 countries with role-based learning paths and in-app guidance.",
      },
    ],
    stack: ["SAP S/4HANA", "Azure", "SAP Fiori", "SAP BTP", "Terraform"],
  },
  {
    id: "02",
    logo: patner2,
    codename: "Tier-1 Private Bank",
    sector: "BFSI",
    region: "APAC · Singapore",
    duration: "4-year partnership",
    scaleNote: "9M customer records",
    summary:
      "Stood up a co-managed security operations center that absorbed rising threat volume and audit scrutiny without forcing the bank to expand its in-house headcount.",
    workstreams: [
      {
        title: "Co-managed SOC operations",
        detail:
          "24×7 monitoring, triage, and escalation across cloud, endpoint, and core banking telemetry.",
      },
      {
        title: "SIEM engineering & content tuning",
        detail:
          "Re-engineered detection content against MITRE ATT&CK, removed noisy rules, and cut false positives by 60%.",
      },
      {
        title: "SOAR automation",
        detail:
          "Built 40+ playbooks for phishing, account takeover, and lateral-movement scenarios to compress response time.",
      },
      {
        title: "Regulatory readiness",
        detail:
          "Prepared evidence packs for MAS TRM and ISO 27001 audits with continuous control attestations.",
      },
    ],
    stack: ["Microsoft Sentinel", "Splunk", "CrowdStrike", "Palo Alto XSOAR"],
  },
  {
    id: "03",
    logo: patner3,
    codename: "Omnichannel Retail Group",
    sector: "Retail",
    region: "North America",
    duration: "3-year partnership",
    scaleNote: "1,400 stores · 22M SKUs",
    summary:
      "Moved demand planning off stale weekly extracts onto a real-time lakehouse, letting merchandising teams react to shifts within the same trading day.",
    workstreams: [
      {
        title: "Lakehouse foundation",
        detail:
          "Modern Databricks platform consolidating POS, inventory, e-commerce, and supplier data into a governed silver/gold layer.",
      },
      {
        title: "ML demand forecasting",
        detail:
          "Hierarchical models retrained nightly with promotion and weather features, serving 1,400 stores at SKU level.",
      },
      {
        title: "Merch & supply integration",
        detail:
          "Pushed forecasts into existing replenishment and allocation systems via event-driven APIs.",
      },
      {
        title: "MLOps & observability",
        detail:
          "Model registry, drift monitoring, and shadow scoring before every production promotion.",
      },
    ],
    stack: ["Databricks", "AWS", "Snowflake", "MLflow", "Airflow"],
  },
  {
    id: "04",
    logo: patner4,
    codename: "Integrated Health Network",
    sector: "Healthcare",
    region: "North America",
    duration: "5-year partnership",
    scaleNote: "47 hospitals · 28k clinicians",
    summary:
      "Rebuilt the digital delivery model around platform engineering and product squads so clinical features could ship continuously instead of quarterly.",
    workstreams: [
      {
        title: "Internal developer platform",
        detail:
          "Self-service templates for compliant services, CI/CD, and golden paths reduced new-service time from weeks to hours.",
      },
      {
        title: "HIPAA-compliant pipelines",
        detail:
          "Policy-as-code gates for PHI handling, secrets, and image provenance embedded into every deploy.",
      },
      {
        title: "Product-aligned squads",
        detail:
          "Stood up four cross-functional squads around portal, scheduling, billing, and telehealth journeys.",
      },
      {
        title: "Observability & SRE",
        detail:
          "Unified logging, SLOs, and on-call runbooks across 80+ services running on Kubernetes.",
      },
    ],
    stack: ["GitHub Actions", "Kubernetes", "Terraform", "Datadog", "Backstage"],
  },
  {
    id: "05",
    logo: patner5,
    codename: "Global Logistics Operator",
    sector: "Logistics",
    region: "EMEA + APAC",
    duration: "7-year partnership",
    scaleNote: "14 hubs · 38 countries",
    summary:
      "Replaced 14 hub-specific WMS instances with one SAP TM + EWM template and a control-tower view that finally gave operations a single source of truth.",
    workstreams: [
      {
        title: "SAP TM & EWM template",
        detail:
          "Single global template rolled out to 14 distribution hubs in 11-week waves with localized variants.",
      },
      {
        title: "Control-tower dashboard",
        detail:
          "Real-time visibility into shipments, exceptions, and SLAs across road, rail, and ocean modes.",
      },
      {
        title: "Carrier & customs integration",
        detail:
          "Connected 80+ carriers and customs brokers via standardized EDI and event-driven APIs.",
      },
      {
        title: "Run & evolve",
        detail:
          "Steady-state managed services with quarterly release trains for new country rollouts.",
      },
    ],
    stack: ["SAP TM", "SAP EWM", "GCP", "BigQuery", "MuleSoft"],
  },
  {
    id: "06",
    logo: patner6,
    codename: "National Utility Provider",
    sector: "Energy",
    region: "Middle East",
    duration: "4-year partnership",
    scaleNote: "11M meter endpoints",
    summary:
      "Migrated an oversized, license-heavy on-prem estate to a right-sized hyperscaler footprint with FinOps guardrails that kept consumption honest after go-live.",
    workstreams: [
      {
        title: "Migration factory",
        detail:
          "Wave-based migration of 380+ applications with replatform and refactor patterns chosen per workload.",
      },
      {
        title: "FinOps operating model",
        detail:
          "Tagging standards, budgets, anomaly alerts, and a chargeback model adopted by every business unit.",
      },
      {
        title: "Reserved-capacity strategy",
        detail:
          "Blended Savings Plans and reserved instances negotiated against a 3-year demand curve.",
      },
      {
        title: "Cloud managed services",
        detail:
          "Day-2 operations covering patching, backup, DR drills, and continuous right-sizing.",
      },
    ],
    stack: ["AWS", "Terraform", "CloudHealth", "RHEL", "Ansible"],
  },
  {
    id: "07",
    logo: patner7,
    codename: "National Telecom Carrier",
    sector: "Telecom",
    region: "South Asia",
    duration: "3-year partnership",
    scaleNote: "180M subscribers",
    summary:
      "Unified siloed CRM, billing, and network data into a real-time Customer 360 lakehouse with GenAI-assisted next-best-action for retention teams.",
    workstreams: [
      {
        title: "Streaming ingestion",
        detail:
          "Kafka-based pipelines capturing CRM, billing, network usage, and care interactions in near real time.",
      },
      {
        title: "Customer 360 lakehouse",
        detail:
          "Unified profile schema for 180M subscribers with sub-2-second query latency for downstream apps.",
      },
      {
        title: "GenAI next-best-action",
        detail:
          "Retrieval-grounded recommendations surfaced inside agent desktops and self-care channels.",
      },
      {
        title: "Trust & governance",
        detail:
          "Data contracts, lineage, and consent enforcement aligned to national telecom regulations.",
      },
    ],
    stack: ["Apache Kafka", "Databricks", "Azure", "OpenAI", "dbt"],
  },
  {
    id: "08",
    logo: patner8,
    codename: "Federal Government Agency",
    sector: "Public Sector",
    region: "North America",
    duration: "5-year partnership",
    scaleNote: "FedRAMP Moderate",
    summary:
      "Delivered a FedRAMP Moderate landing zone and zero-trust foundation so the agency could finally modernize public-facing services on compliant cloud.",
    workstreams: [
      {
        title: "Secure landing zone",
        detail:
          "Reference architecture with hardened baselines, network segmentation, and automated guardrails.",
      },
      {
        title: "Zero-trust networking",
        detail:
          "Identity-aware proxy, micro-segmentation, and conditional access across workforce and workloads.",
      },
      {
        title: "Continuous compliance",
        detail:
          "Control evidence collected automatically and mapped to NIST 800-53 for ATO renewals.",
      },
      {
        title: "Workload onboarding",
        detail:
          "Paved-road templates that cut average app-onboarding time from 4 months to 6 weeks.",
      },
    ],
    stack: ["Azure Gov", "Sentinel", "Zscaler", "Terraform", "Vault"],
  },
  {
    id: "09",
    logo: patner9,
    codename: "Specialty Pharma Manufacturer",
    sector: "Pharma",
    region: "EMEA · Switzerland",
    duration: "4-year partnership",
    scaleNote: "GxP-validated · 7 sites",
    summary:
      "Converted an aging ECC instance into a GxP-validated SAP S/4HANA platform with serialization, unlocking two new product-line launches end-to-end in nine months.",
    workstreams: [
      {
        title: "Brownfield S/4HANA conversion",
        detail:
          "Selective data transition with pre-conversion clean-up, custom code remediation, and dual-track testing.",
      },
      {
        title: "Track-and-trace serialization",
        detail:
          "Implemented EU FMD and DSCSA compliant serialization across 7 manufacturing and packaging sites.",
      },
      {
        title: "GxP validation",
        detail:
          "Computer system validation aligned to GAMP 5, with risk-based test packs reviewed by QA.",
      },
      {
        title: "Hypercare & QA partnership",
        detail:
          "Embedded QA and basis team during the first two release cycles to keep validation evidence current.",
      },
    ],
    stack: ["SAP S/4HANA", "SAP ATTP", "SAP Fiori", "Solution Manager"],
  },
];

const stats = [
  { value: "50+", label: "Enterprise Clients" },
  { value: "15+", label: "Countries Served" },
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
];

const sectors: Sector[] = [
  "All",
  "Manufacturing",
  "BFSI",
  "Retail",
  "Healthcare",
  "Logistics",
  "Energy",
  "Telecom",
  "Public Sector",
  "Pharma",
];

const FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif";

/* ---------- Component ---------- */
const ClientsShowcase: React.FC = () => {
  const [filter, setFilter] = useState<Sector>("All");

  const visible = useMemo(
    () => (filter === "All" ? cases : cases.filter((c) => c.sector === filter)),
    [filter],
  );

  return (
    <section
      style={{
        position: "relative",
        background: "#F8FAFC",
        paddingTop: 88,
        paddingBottom: 104,
        overflow: "hidden",
        fontFamily: FONT_STACK,
        color: "#111827",
      }}
    >
      {/* soft red glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -160,
          right: -140,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(185,28,28,0.10), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -180,
          left: -120,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(17,24,39,0.06), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* ===== Header ===== */}
        <div style={{ marginBottom: 40 }}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 12px",
              borderRadius: 999,
              background: "rgba(185,28,28,0.08)",
              border: "1px solid rgba(185,28,28,0.18)",
              color: "#B91C1C",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#B91C1C",
              }}
            />
            Selected Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{
              fontSize: "clamp(2rem, 4.2vw, 3.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.08,
              margin: 0,
              maxWidth: 820,
            }}
          >
            What we{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{ color: "#B91C1C" }}>delivered</span>
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: -4,
                  height: 3,
                  borderRadius: 2,
                  background:
                    "linear-gradient(90deg, #B91C1C, #EF4444, transparent)",
                  opacity: 0.7,
                }}
              />
            </span>{" "}
            for global enterprises
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              marginTop: 18,
              maxWidth: 720,
              fontSize: "1.04rem",
              lineHeight: 1.65,
              color: "#4B5563",
            }}
          >
            Nine engagements from across SAP, cloud, data, and cybersecurity —
            each one a record of the work Maitsys actually shipped, not the
            logo we put on a slide.
          </motion.p>
        </div>

        {/* ===== Stats strip (modern, no stamp shadow) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            background: "#fff",
            border: "1px solid rgba(17,24,39,0.08)",
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 40,
            boxShadow:
              "0 1px 2px rgba(17,24,39,0.04), 0 14px 32px -18px rgba(17,24,39,0.18)",
          }}
        >
          {stats.map((s, idx) => (
            <div
              key={s.label}
              style={{
                padding: "24px 22px",
                borderRight:
                  idx < stats.length - 1
                    ? "1px solid rgba(17,24,39,0.08)"
                    : "none",
                position: "relative",
              }}
            >
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  top: 18,
                  left: 22,
                  width: 18,
                  height: 2,
                  background: "#B91C1C",
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  marginTop: 14,
                  fontSize: "clamp(1.6rem, 2.4vw, 2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#6B7280",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ===== Filter chips ===== */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          {sectors.map((s) => {
            const active = filter === s;
            return (
              <button
                key={s}
                onClick={() => setFilter(s)}
                style={{
                  padding: "8px 14px",
                  fontSize: 12.5,
                  fontWeight: 600,
                  fontFamily: FONT_STACK,
                  border: active
                    ? "1px solid #B91C1C"
                    : "1px solid rgba(17,24,39,0.12)",
                  background: active ? "#B91C1C" : "#fff",
                  color: active ? "#fff" : "#374151",
                  cursor: "pointer",
                  borderRadius: 999,
                  transition: "all 0.2s ease",
                  boxShadow: active
                    ? "0 6px 16px -8px rgba(185,28,28,0.5)"
                    : "0 1px 2px rgba(17,24,39,0.04)",
                }}
              >
                {s}
              </button>
            );
          })}
          <span
            style={{
              marginLeft: "auto",
              fontSize: 12,
              fontWeight: 600,
              color: "#6B7280",
            }}
          >
            {visible.length} {visible.length === 1 ? "engagement" : "engagements"}
          </span>
        </div>

        {/* ===== Cases ===== */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {visible.map((c, i) => (
            <CaseCard key={c.id} data={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Card ---------- */
const CaseCard: React.FC<{ data: Case; index: number }> = ({ data, index }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.25) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        background: "#fff",
        borderRadius: 18,
        border: "1px solid rgba(17,24,39,0.07)",
        boxShadow: hover
          ? "0 2px 4px rgba(17,24,39,0.05), 0 24px 48px -24px rgba(17,24,39,0.22)"
          : "0 1px 2px rgba(17,24,39,0.04), 0 14px 32px -20px rgba(17,24,39,0.14)",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        transition:
          "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
        overflow: "hidden",
      }}
    >
      {/* Left accent rail */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: hover ? 5 : 3,
          background: "linear-gradient(180deg, #B91C1C, #EF4444)",
          transition: "width 0.3s ease",
        }}
      />

      {/* ===== Header strip ===== */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          padding: "26px 36px 22px 40px",
          borderBottom: "1px solid rgba(17,24,39,0.06)",
          flexWrap: "wrap",
        }}
      >
        {/* Case badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 11px",
            borderRadius: 999,
            background: "rgba(185,28,28,0.08)",
            border: "1px solid rgba(185,28,28,0.18)",
            color: "#B91C1C",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            flexShrink: 0,
          }}
        >
          Case {data.id}
        </div>

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 52,
            flexShrink: 0,
          }}
        >
          <img
            src={data.logo}
            alt={`${data.codename} logo`}
            width={140}
            height={52}
            style={{
              maxWidth: 140,
              maxHeight: 52,
              width: "auto",
              height: "auto",
              objectFit: "contain",
              filter: hover ? "grayscale(0%)" : "grayscale(100%)",
              opacity: hover ? 1 : 0.78,
              transition: "filter 0.35s ease, opacity 0.35s ease",
            }}
          />
        </div>

        {/* Title block */}
        <div style={{ flex: "1 1 280px", minWidth: 220 }}>
          <h3
            style={{
              margin: 0,
              fontSize: "clamp(1.15rem, 1.5vw, 1.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.015em",
              lineHeight: 1.25,
            }}
          >
            {data.codename}
          </h3>
          <div
            style={{
              marginTop: 6,
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              fontSize: 12.5,
              color: "#6B7280",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#B91C1C", fontWeight: 600 }}>
              {data.sector}
            </span>
            <span style={{ color: "#D1D5DB" }}>·</span>
            <span>{data.region}</span>
            <span style={{ color: "#D1D5DB" }}>·</span>
            <span>{data.duration}</span>
          </div>
        </div>

        {/* Scale meta */}
        <div
          style={{
            textAlign: "right",
            flexShrink: 0,
            paddingLeft: 12,
            borderLeft: "1px solid rgba(17,24,39,0.08)",
            paddingRight: 4,
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#9CA3AF",
              marginBottom: 4,
            }}
          >
            Scale
          </div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#111827",
              maxWidth: 200,
              lineHeight: 1.4,
            }}
          >
            {data.scaleNote}
          </div>
        </div>
      </div>

      {/* ===== Body ===== */}
      <div style={{ padding: "28px 36px 32px 40px" }}>
        {/* Summary */}
        <p
          style={{
            margin: 0,
            fontSize: "1rem",
            lineHeight: 1.65,
            color: "#374151",
            maxWidth: 880,
          }}
        >
          {data.summary}
        </p>

        {/* What we delivered */}
        <div style={{ marginTop: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 18,
            }}
          >
            <span
              style={{
                width: 18,
                height: 2,
                background: "#B91C1C",
                borderRadius: 2,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#6B7280",
              }}
            >
              What we delivered
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {data.workstreams.map((w, idx) => (
              <div
                key={w.title}
                style={{
                  position: "relative",
                  padding: "16px 18px 16px 18px",
                  background: "#F9FAFB",
                  border: "1px solid rgba(17,24,39,0.06)",
                  borderRadius: 12,
                  transition: "background 0.25s ease, border-color 0.25s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(135deg, #B91C1C, #EF4444)",
                      color: "#fff",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      flexShrink: 0,
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#111827",
                      letterSpacing: "-0.005em",
                      lineHeight: 1.35,
                    }}
                  >
                    {w.title}
                  </h4>
                </div>
                <p
                  style={{
                    margin: 0,
                    marginLeft: 32,
                    fontSize: 13,
                    lineHeight: 1.55,
                    color: "#4B5563",
                  }}
                >
                  {w.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div
          style={{
            marginTop: 26,
            paddingTop: 20,
            borderTop: "1px solid rgba(17,24,39,0.06)",
            display: "flex",
            alignItems: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#9CA3AF",
            }}
          >
            Stack
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {data.stack.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "5px 11px",
                  color: "#374151",
                  background: "#fff",
                  border: "1px solid rgba(17,24,39,0.12)",
                  borderRadius: 999,
                  letterSpacing: "0.01em",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ClientsShowcase;
