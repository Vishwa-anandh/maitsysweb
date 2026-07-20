import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  AlertTriangle,
  RefreshCw,
  Search,
} from "lucide-react";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import QuickViewUi from "../../components/ui/CountUp/QuickViewUi";
import sapPartnerLogo from "../../assets/image/logo/sap_Partnerr.png";
import SAP from "../../assets/image/logo/sap-cloud.png";
import ServiceNow from "../../assets/image/logo/service-now.png";
import jira from "../../assets/image/logo/Jira.png";
import slack from "../../assets/image/logo/Slack.png";
import microsoftTeams from "../../assets/image/logo/MicrosoftTeams.png";
import salesforce from "../../assets/image/logo/Salesforce.png";

const SAP_STORE_URL =
  "https://www.sap.com/products/erp/partners/maitsys-inc-strawberry-idoc.html";
const YOUTUBE_URL = "https://www.youtube.com/embed/e6ML6LTegbA";
// const DEMO_URL = "https://strawberry.maitsys.com/";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ── 5 Key Features ─────────────────────────────────────────── */
type Feature = {
  no: number;
  category: string;
  title: string;
  lead: string;
  detail: string;
  pullquote: string;
  bullets: string[];
  preview: string;
};

const features: Feature[] = [
  {
    no: 1,
    category: "Monitoring",
    title: "Real-Time IDoc Monitoring",
    lead: "A centralized command center giving complete live visibility into every inbound and outbound IDoc flowing through your SAP landscape.",
    detail:
      "Monitor IDoc volumes, processing trends, and system health across all connected SAP systems from one unified dashboard. Track status transitions in real time — from Created to Posted — and catch bottlenecks before they escalate into business disruptions. Works seamlessly with SAP ECC and S/4HANA with no custom ABAP or modifications required.",
    pullquote: "Complete IDoc visibility — across every system, every second.",
    bullets: [
      "Live inbound & outbound IDoc feeds",
      "Multi-system SAP landscape support",
      "Volume trends & health scorecards",
    ],
    preview: "monitoring",
  },
  {
    no: 2,
    category: "Intelligence",
    title: "Intelligent Error Detection & Analysis",
    lead: "Stop hunting through WE02 and BD87. Strawberry automatically surfaces failed IDocs with business-friendly error descriptions and root cause analysis.",
    detail:
      "Our engine parses SAP status codes and translates them into plain-language diagnostics your team can act on immediately. Group errors by type, partner function, or message type. Drill from aggregate failure counts to individual IDoc details in two clicks. Root cause analysis cuts mean-time-to-resolution by up to 70%.",
    pullquote: "From cryptic SAP errors to actionable insights — instantly.",
    bullets: [
      "Auto-classification of error patterns",
      "Business-friendly error descriptions",
      "Root cause drill-down in 2 clicks",
    ],
    preview: "error-detection",
  },
  {
    no: 3,
    category: "Operations",
    title: "One-Click IDoc Reprocessing",
    lead: "Reprocess failed IDocs directly from the dashboard — individually or in bulk — without opening SAP GUI or writing ABAP.",
    detail:
      "Validation checks run automatically before resubmission to prevent re-failure. Bulk reprocessing handles hundreds of IDocs simultaneously with a single action. Every reprocess event is logged with user, timestamp, and outcome — creating a complete audit trail that satisfies SOX and internal controls requirements.",
    pullquote: "Bulk reprocess 500 IDocs in one click — fully audited.",
    bullets: [
      "Bulk reprocessing with pre-validation",
      "No SAP GUI or ABAP access required",
      "Full reprocess audit trail",
    ],
    preview: "reprocessing",
  },
  {
    no: 4,
    category: "Search",
    title: "Advanced Search & Filtering",
    lead: "Find any IDoc in seconds. Search by IDoc number, message type, partner, status, user, date range, and system — simultaneously.",
    detail:
      "Multi-dimensional filtering lets support teams slice through millions of IDocs to locate the exact transaction causing an issue. Saved search presets eliminate repetitive query setup for common investigations. Quick-access lookups link directly to business documents, reducing investigation time from hours to minutes.",
    pullquote: "Find the needle. Not the haystack.",
    bullets: [
      "12+ simultaneous filter dimensions",
      "Saved search presets",
      "Direct business document linkage",
    ],
    preview: "search",
  },
  {
    no: 5,
    category: "Analytics",
    title: "Analytics, Reporting & Alerts",
    lead: "Executive dashboards show success vs. failure trends, processing performance, and SLA conformance — all exportable for audit and compliance.",
    detail:
      "Schedule automated email alerts for critical failure thresholds so your team responds before business partners call. Performance trend charts reveal peak processing windows and degradation patterns. Compliance reports generate automatically for audit cycles. Power BI and Excel exports keep downstream stakeholders aligned without manual effort.",
    pullquote: "Proactive alerts. Zero surprise failures.",
    bullets: [
      "Email & threshold-based alert engine",
      "Success/failure trend analytics",
      "Exportable compliance reports",
    ],
    preview: "analytics",
  },
];

/* ── Mini UI Preview Components ─────────────────────────────── */
const PreviewMonitoring: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full text-sm rounded-xl bg-slate-900">
    <div className="flex gap-2 items-center px-4 py-3 border-b border-slate-800">
      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shrink-0" />
      <span className="flex-1 min-w-0 font-semibold truncate text-slate-200">Live IDoc Feed</span>
      <span className="ml-auto text-xs text-slate-400 shrink-0">2,847 today</span>
    </div>
    <div className="grid grid-cols-2 gap-2 p-3 border-b sm:grid-cols-4 border-slate-800">
      {[
        {
          label: "Success",
          value: "2,847",
          color: "text-emerald-400",
          bg: "bg-emerald-900/40",
        },
        {
          label: "Failed",
          value: "23",
          color: "text-red-400",
          bg: "bg-red-900/40",
        },
        {
          label: "Processing",
          value: "156",
          color: "text-amber-400",
          bg: "bg-amber-900/40",
        },
        {
          label: "Inbound",
          value: "1,924",
          color: "text-blue-400",
          bg: "bg-blue-900/40",
        },
      ].map((s) => (
        <div key={s.label} className={`${s.bg} rounded-lg p-2 text-center`}>
          <div className={`text-base font-bold font-mono ${s.color}`}>
            {s.value}
          </div>
          <div className="text-[9px] text-slate-500 mt-0.5">{s.label}</div>
        </div>
      ))}
    </div>
    <div className="flex-1 flex flex-col gap-1.5 p-3 overflow-hidden">
      {[
        {
          id: "0000001234",
          type: "ORDERS05",
          dir: "IN",
          status: "posted",
          partner: "VENDOR001",
        },
        {
          id: "0000001235",
          type: "DESADV01",
          dir: "OUT",
          status: "posted",
          partner: "CUST_DE",
        },
        {
          id: "0000001236",
          type: "INVOIC02",
          dir: "IN",
          status: "error",
          partner: "VENDOR001",
        },
        {
          id: "0000001237",
          type: "ORDERS05",
          dir: "OUT",
          status: "processing",
          partner: "CUST_US",
        },
        {
          id: "0000001238",
          type: "SHPMNT05",
          dir: "IN",
          status: "posted",
          partner: "3PL_LOG",
        },
      ].map((row, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.07 }}
          className="flex gap-1.5 sm:gap-2 items-center px-2 sm:px-3 py-2 rounded-lg bg-slate-800/50"
        >
          <span className="text-slate-500 font-mono text-[9px] w-16 sm:w-20 shrink-0 truncate">
            {row.id}
          </span>
          <span className="text-blue-300 font-mono text-[9px] sm:text-[10px] w-14 sm:w-20 shrink-0 truncate">
            {row.type}
          </span>
          <span
            className={`text-[9px] px-1.5 py-0.5 rounded font-semibold shrink-0 ${row.dir === "IN" ? "bg-blue-900 text-blue-300" : "bg-purple-900 text-purple-300"}`}
          >
            {row.dir}
          </span>
          <span className="text-slate-500 text-[9px] flex-1 truncate min-w-0">
            {row.partner}
          </span>
          <span
            className={`text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
              row.status === "posted"
                ? "bg-emerald-900 text-emerald-400"
                : row.status === "error"
                  ? "bg-red-900 text-red-400"
                  : "bg-amber-900 text-amber-400"
            }`}
          >
            {row.status}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

const PreviewErrorDetection: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
    <div className="flex gap-2 items-center px-4 py-3 border-b border-slate-100 bg-slate-50">
      <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
      <span className="flex-1 min-w-0 text-sm font-semibold truncate text-slate-700">
        Error Analysis
      </span>
      <span className="ml-auto text-xs font-semibold text-red-500 shrink-0">
        23 active
      </span>
    </div>
    <div className="flex flex-col flex-1 gap-3 p-4">
      <div className="p-4 bg-red-50 rounded-xl border border-red-200">
        <div className="flex gap-3 items-start">
          <div className="mt-1 w-2 h-2 bg-red-500 rounded-full animate-pulse shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="mb-1 text-sm font-bold text-red-700 truncate">
              INVOIC02 · Partner VENDOR001
            </div>
            <div className="px-2 py-1 mb-2 font-mono text-xs text-red-600 break-words bg-red-100 rounded">
              Status 51: Application document not posted
            </div>
            <div className="bg-white rounded-lg border border-red-100 p-2.5 text-xs text-slate-600">
              <span className="font-semibold text-green-700">Root cause:</span>{" "}
              Duplicate invoice number detected. Invoice #INV-2024-8821 already
              exists for this vendor in system PRD.
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {[
          { label: "Errors Today", val: "23", color: "text-red-600" },
          { label: "Auto-Resolved", val: "18", color: "text-emerald-600" },
          { label: "Pending Action", val: "5", color: "text-amber-600" },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-slate-50 rounded-lg p-2.5 text-center border border-slate-100"
          >
            <div className={`text-xl font-bold font-mono ${s.color}`}>
              {s.val}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { type: "ORDERS05", count: 8, pct: 35, color: "bg-red-500" },
          { type: "INVOIC02", count: 7, pct: 30, color: "bg-orange-500" },
          { type: "DESADV01", count: 5, pct: 22, color: "bg-amber-500" },
        ].map((r) => (
          <div key={r.type} className="flex gap-3 items-center text-xs">
            <span className="w-20 font-mono text-slate-600">{r.type}</span>
            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${r.color} rounded-full`}
                style={{ width: `${r.pct}%` }}
              />
            </div>
            <span className="w-4 text-right text-slate-500">{r.count}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PreviewReprocessing: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
    <div className="flex gap-2 items-center px-4 py-3 border-b border-slate-100 bg-slate-50">
      <RefreshCw className="w-4 h-4 text-red-600 shrink-0" />
      <span className="flex-1 min-w-0 text-sm font-semibold truncate text-slate-700">
        Bulk Reprocess
      </span>
      <span className="ml-auto bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
        47 selected
      </span>
    </div>
    <div className="flex flex-col flex-1 gap-3 p-4">
      <div className="p-3 space-y-2 text-xs rounded-xl border bg-slate-50 border-slate-200">
        <div className="flex gap-2 justify-between text-slate-600">
          <span className="shrink-0">Message Types</span>
          <span className="min-w-0 font-semibold truncate">ORDERS05, DESADV01</span>
        </div>
        <div className="flex gap-2 justify-between text-slate-600">
          <span className="shrink-0">Partner</span>
          <span className="min-w-0 font-semibold truncate">VENDOR001</span>
        </div>
        <div className="flex gap-2 justify-between text-slate-600">
          <span className="shrink-0">Pre-validation</span>
          <span className="min-w-0 font-semibold text-emerald-600 truncate">47/47 passed ✓</span>
        </div>
      </div>
      <button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2.5 rounded-xl transition-colors">
        Reprocess 47 IDocs
      </button>
      <div className="space-y-1.5">
        {[
          {
            range: "IDoc #1201–1220",
            status: "success",
            label: "20 posted successfully",
          },
          { range: "IDoc #1221–1240", status: "running", label: "Processing…" },
          { range: "IDoc #1241–1247", status: "queued", label: "Queued" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex gap-2 justify-between items-center px-3 py-2 rounded-lg border bg-slate-50 border-slate-100"
          >
            <span className="min-w-0 font-mono text-xs truncate text-slate-500">
              {item.range}
            </span>
            <span
              className={`text-xs font-semibold shrink-0 ${
                item.status === "success"
                  ? "text-emerald-600"
                  : item.status === "running"
                    ? "text-amber-600"
                    : "text-slate-400"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PreviewSearch: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
    <div className="flex gap-2 items-center px-4 py-3 border-b border-slate-100 bg-slate-50">
      <Search className="w-4 h-4 text-red-600 shrink-0" />
      <span className="flex-1 min-w-0 text-sm font-semibold truncate text-slate-700">
        Advanced Search
      </span>
    </div>
    <div className="flex flex-col flex-1 gap-3 p-4">
      <div className="grid grid-cols-2 gap-2">
        {[
          ["Message Type", "ORDERS05"],
          ["Status", "Error"],
          ["Partner", "VENDOR001"],
          ["Direction", "Inbound"],
          ["Date Range", "Today"],
          ["System", "PRD"],
        ].map(([k, v], i) => (
          <div
            key={i}
            className="flex flex-col px-3 py-2 min-w-0 rounded-lg border bg-slate-50 border-slate-200"
          >
            <div className="text-[9px] text-slate-400 tracking-wide truncate">
              {k}
            </div>
            <div className="text-xs font-semibold text-slate-800 font-mono mt-0.5 truncate">
              {v}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center px-3 py-2 text-xs rounded-lg text-slate-500 bg-slate-50">
        <span>Results found:</span>
        <span className="font-mono font-bold text-slate-900">143 IDocs</span>
        <span className="text-slate-400">in 0.02s</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {[
          {
            id: "0000001236",
            type: "ORDERS05",
            partner: "VENDOR001",
            status: "error",
          },
          {
            id: "0000001189",
            type: "ORDERS05",
            partner: "VENDOR001",
            status: "error",
          },
          {
            id: "0000001172",
            type: "ORDERS05",
            partner: "VENDOR001",
            status: "error",
          },
        ].map((row, i) => (
          <div
            key={i}
            className="flex gap-1.5 sm:gap-2 items-center px-2 sm:px-3 py-2 bg-red-50 rounded-lg border border-red-100"
          >
            <span className="text-slate-500 font-mono text-[10px] shrink-0 truncate max-w-[50px] sm:max-w-none">
              #{row.id}
            </span>
            <span className="text-blue-600 font-mono text-[10px] shrink-0 truncate max-w-[50px] sm:max-w-none">
              {row.type}
            </span>
            <span className="text-slate-500 text-[10px] flex-1 truncate min-w-0">
              {row.partner}
            </span>
            <span className="text-red-600 text-[10px] font-bold shrink-0">● Error</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PreviewAnalytics: React.FC = () => {
  const bars = [65, 80, 72, 90, 85, 95, 98];
  const max = Math.max(...bars);
  return (
    <div className="flex overflow-hidden flex-col h-full rounded-xl ring-1 bg-slate-950 ring-slate-800">
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-800 bg-slate-900/70">
        <div className="flex flex-1 gap-2 items-center min-w-0 truncate">
          <div className="flex justify-center items-center w-5 h-5 bg-red-600 rounded-md shrink-0">
            <span className="text-white text-[8px] font-black">S</span>
          </div>
          <span className="flex-1 min-w-0 text-xs font-semibold truncate text-slate-200">
            Strawberry Analytics
          </span>
        </div>
        <div className="ml-auto flex items-center gap-1 text-[9px] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-emerald-400">LIVE</span>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-2 border-b border-slate-800">
        {[
          {
            label: "Total IDocs",
            value: "3,026",
            delta: "+5%",
            color: "text-blue-400",
          },
          {
            label: "Success Rate",
            value: "99.2%",
            delta: "+0.4%",
            color: "text-emerald-400",
          },
          {
            label: "Failures",
            value: "23",
            delta: "-8",
            color: "text-red-400",
          },
          {
            label: "Alerts Sent",
            value: "3",
            delta: "today",
            color: "text-amber-400",
          },
        ].map((k) => (
          <div
            key={k.label}
            className="flex flex-col px-2 py-2 min-w-0 rounded-md border bg-slate-900 border-slate-800"
          >
            <div className="text-slate-500 text-[8px] tracking-wider truncate">
              {k.label}
            </div>
            <div className="flex items-end gap-1 mt-0.5">
              <div className="text-sm font-bold leading-none text-white truncate">
                {k.value}
              </div>
              <div className={`text-[8px] font-semibold shrink-0 ${k.color}`}>
                {k.delta}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid flex-1 grid-cols-1 gap-2 p-2 sm:grid-cols-3">
        <div className="flex flex-col p-3 rounded-lg border sm:col-span-2 bg-slate-900 border-slate-800">
          <div className="flex gap-2 items-center mb-2">
            <span className="w-1 h-3 bg-red-500 rounded-full" />
            <span className="text-slate-300 text-[11px] font-semibold">
              7-Day Success Rate
            </span>
            <span className="ml-auto text-emerald-400 text-[9px] font-bold">
              +12%
            </span>
          </div>
          <div className="flex flex-1 gap-1 items-end">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                style={{ height: `${(h / max) * 100}%` }}
                className="flex-1 bg-gradient-to-t from-red-700 to-red-400 rounded-t origin-bottom min-h-[4px]"
              />
            ))}
          </div>
          <div className="flex justify-between text-[8px] text-slate-600 mt-1 font-mono">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 p-3 rounded-lg border bg-slate-900 border-slate-800">
          <div className="flex gap-1 items-center mb-1">
            <span className="w-1 h-3 bg-amber-400 rounded-full" />
            <span className="text-slate-300 text-[11px] font-semibold">
              By Type
            </span>
          </div>
          {[
            { type: "ORDERS05", pct: 42, color: "bg-red-500" },
            { type: "INVOIC02", pct: 30, color: "bg-orange-500" },
            { type: "DESADV01", pct: 18, color: "bg-amber-500" },
            { type: "Others", pct: 10, color: "bg-slate-500" },
          ].map((r) => (
            <div key={r.type} className="flex items-center gap-1.5 text-[8px]">
              <span className="w-14 truncate text-slate-500">{r.type}</span>
              <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full ${r.color} rounded-full`}
                  style={{ width: `${r.pct}%` }}
                />
              </div>
              <span className="w-7 text-right text-slate-400">{r.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 px-4 py-1.5 border-t border-slate-800 bg-slate-900/70 text-[8.5px] text-slate-500">
        <span className="flex gap-1 items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live · synced 2s ago
        </span>
        <span className="ml-auto">Powered by Maitsys Strawberry</span>
      </div>
    </div>
  );
};

const previewMap: Record<string, React.FC> = {
  monitoring: PreviewMonitoring,
  "error-detection": PreviewErrorDetection,
  reprocessing: PreviewReprocessing,
  search: PreviewSearch,
  analytics: PreviewAnalytics,
};

/* ── Steps ───────────────────────────────────────────────────── */
const steps = [
  {
    no: "01",
    title: "Connect to SAP",
    desc: "Strawberry connects to your SAP ECC or S/4HANA landscape via standard OData APIs and WebDispatcher — no ABAP modifications, no custom code.",
  },
  {
    no: "02",
    title: "Monitor in Real-Time",
    desc: "Live dashboard streams inbound and outbound IDoc status. Failures are automatically detected, classified, and surfaced with root cause analysis.",
  },
  {
    no: "03",
    title: "Reprocess & Resolve",
    desc: "Reprocess failed IDocs individually or in bulk with one click. Pre-validation ensures clean resubmission with full audit trail.",
  },
  {
    no: "04",
    title: "Report & Alert",
    desc: "Automated alerts notify your team before partners escalate. Compliance reports export on schedule for audit and performance reviews.",
  },
];

/* ── Stats ───────────────────────────────────────────────────── */
const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "< 2s", label: "Alert Latency" },
  { value: "10x", label: "Faster Resolution" },
  { value: "Zero", label: "Custom ABAP" },
];

/* ── Integration tools ───────────────────────────────────────── */
const integrationTools = [
  { name: "ServiceNow", logo: ServiceNow },
  { name: "Jira", logo: jira },
  { name: "Slack", logo: slack },
  { name: "Microsoft Teams", logo: microsoftTeams },
  { name: "Salesforce", logo: salesforce },
  { name: "SAP CPI", logo: SAP },
];

/* ════════════════════════════════════════════════════════════ */
const Sap_Idoc_Monitoring: React.FC = () => {
  return (
    <>
      <Seo
        title="SAP IDoc Monitoring & Intelligence Platform | Strawberry by Maitsys"
        description="Monitor SAP IDoc flows in real time with intelligent alerts, one-click reprocessing, advanced analytics, and full visibility to prevent failures."
        keywords={[
          "SAP IDoc monitoring",
          "real time SAP IDoc monitoring",
          "SAP integration monitoring platform",
          "SAP IDoc alert system",
          "SAP IDoc reprocessing",
          "Strawberry SAP IDoc",
          "SAP IDoc Control Center",
          "enterprise SAP monitoring",
        ]}
        url="/products/sap-idoc-monitoring"
        siteName="Maitsys"
        imageAlt="Strawberry — SAP IDoc Control Center by Maitsys"
      />
      <JsonLd
        schema={{
          "@type": "SoftwareApplication",
          name: "SAP IDoc Monitoring & Intelligence Platform | Strawberry by Maitsys",
          description: "Monitor SAP IDoc flows in real time with intelligent alerts, one-click reprocessing, advanced analytics, and full visibility to prevent failures.",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web-based",
          publisher: { "@type": "Organization", name: "Maitsys", url: "https://www.maitsys.com" },
          url: "https://www.maitsys.com/products/sap-idoc-monitoring",
        }}
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "SAP IDoc Monitoring & Intelligence Platform", path: "/products/sap-idoc-monitoring" }]} />

      <main id="main-content" className="bg-white">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="overflow-hidden relative bg-white">
          {/* Subtle red gradient top */}
          <div
            className="absolute inset-x-0 top-0 h-64 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(220,38,38,0.07) 0%, transparent 70%)",
            }}
          />

          <div className="px-4 pt-6 pb-0 mx-auto max-w-8xl sm:px-8">
            {/* Nav row */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex justify-between items-center mb-8"
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                Back
              </Link>

              <a
                href={SAP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src={sapPartnerLogo}
                  alt="SAP Partner"
                  title="SAP Partner"
                  width={140}
                  height={56}
                  className="object-contain w-auto h-10 sm:h-14"
                  loading="eager"
                />
              </a>
            </motion.div>

            {/* Hero content grid */}
            <div className="grid gap-12 items-center pb-8 lg:grid-cols-2">
              {/* Left */}
              <motion.div variants={stagger} initial="hidden" animate="show">
                {/* Badge */}
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-6"
                >
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide text-red-700">
                    Strawberry IDoc Control Center
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-tight"
                >
                  SAP IDoc
                  <br />
                  <span className="text-red-600">Monitoring &</span>
                  <br />
                  Intelligence
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
                >
                  Monitor, analyze, troubleshoot, and reprocess SAP IDocs from a
                  single intuitive dashboard — significantly reducing
                  integration downtime and support effort.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col flex-wrap gap-3 mt-8 xs:flex-row"
                >
                  {/* 
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex gap-2 justify-center items-center px-6 py-3 text-sm font-semibold text-white bg-red-600 rounded-xl shadow-sm transition-colors hover:bg-red-700 shadow-red-200"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    See the product in action
                  </a>
                  */}
                  <Link
                    to="/contact-us"
                    className="inline-flex gap-2 justify-center items-center px-6 py-3 text-sm font-semibold rounded-xl border transition-colors border-slate-300 text-slate-700 hover:border-red-300 hover:text-red-600"
                  >
                    Request Pricing
                  </Link>
                  <a
                    href={SAP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 border border-[#0070F2] text-[#0070F2] font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                  >
                    SAP Store
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                  variants={fadeUp}
                  className="grid grid-cols-2 gap-4 mt-10 sm:grid-cols-4"
                >
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="pl-3 border-l-2 border-red-100"
                    >
                      <div className="text-xl font-bold text-slate-900">
                        {s.value}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right — YouTube embed */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="relative"
              >
                <div className="overflow-hidden relative rounded-2xl border shadow-2xl shadow-slate-200 border-slate-100 aspect-video">
                  <iframe
                    src={`${YOUTUBE_URL}?rel=0&modestbranding=1`}
                    title="Strawberry IDoc Control Center Demo"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 5 KEY FEATURES — Editorial spread ────────────────── */}
        <section className="overflow-hidden relative pt-10 pb-12 bg-white sm:pt-16 sm:pb-16">
          {/* Atmospheric background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 10%, rgba(220,38,38,0.06) 0%, transparent 45%), radial-gradient(circle at 85% 90%, rgba(220,38,38,0.05) 0%, transparent 45%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <div className="relative px-4 mx-auto max-w-8xl sm:px-8">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="mb-16 sm:mb-24"
            >
              <div className="flex gap-3 items-center mb-6">
                <div className="w-12 h-px bg-red-600" />
                <span className="text-red-600 text-[11px] font-bold tracking-[0.25em]">
                  The Feature Catalog
                </span>
              </div>
              <div className="grid gap-8 items-end lg:grid-cols-12">
                <h2 className="lg:col-span-7 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
                  Five reasons enterprises
                  <br />
                  trust Strawberry to manage
                  <br />
                  <span className="text-red-600">SAP IDoc flows.</span>
                </h2>
                <p className="text-base leading-relaxed lg:col-span-5 text-slate-500 sm:text-lg lg:pb-3">
                  A deeper look at the capabilities engineered into the
                  Strawberry IDoc Control Center — each one shaped by real
                  integration failures, real support tickets, and real SAP basis
                  teams running mission-critical landscapes.
                </p>
              </div>
            </motion.div>

            {/* Editorial feature spreads */}
            <div className="flex flex-col gap-16 sm:gap-24">
              {features.map((f, idx) => {
                const Preview = previewMap[f.preview];
                const isEven = idx % 2 === 0;
                return (
                  <motion.article
                    key={f.no}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                    className="relative"
                  >
                    <div className="grid gap-10 items-center lg:grid-cols-12 lg:gap-16">
                      {/* Text side */}
                      <div
                        className={`lg:col-span-5 min-w-0 ${isEven ? "":"lg:order-2"}`}
                      >
                        {/* Eyebrow */}
                        <div className="flex gap-4 items-center mb-7">
                          <span className="font-mono text-[11px] tracking-[0.2em] text-slate-400 font-semibold">
                            {f.category} ·{" "}
                            {String(f.no).padStart(2, "0")} / 05
                          </span>
                          <div className="flex-1 h-px bg-gradient-to-r to-transparent from-slate-200" />
                        </div>

                        <h3 className="text-3xl sm:text-[2.25rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
                          {f.title}
                        </h3>

                        {/* Lead */}
                        <p className="text-slate-700 text-lg leading-[1.7] mb-5 font-medium">
                          {f.lead}
                        </p>

                        {/* Detail */}
                        <p className="text-slate-500 text-[0.95rem] leading-[1.75] mb-7">
                          {f.detail}
                        </p>

                        {/* Pullquote */}
                        <div className="py-1 pl-5 mb-7 border-l-2 border-red-600">
                          <p className="text-base font-semibold leading-snug text-slate-900">
                            "{f.pullquote}"
                          </p>
                        </div>

                        {/* Bullets */}
                        <ul className="space-y-2.5">
                          {f.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex gap-3 items-start text-sm text-slate-600"
                            >
                              <svg
                                className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Spacer */}
                      <div className="hidden lg:block lg:col-span-1" />

                      {/* Visual side */}
                      <div
                        className={`lg:col-span-6 min-w-0 ${isEven ? "":"lg:order-1"}`}
                      >
                        <div className="relative group">
                          {/* Decorative offset frame */}
                          <div
                            className={`absolute inset-0 rounded-2xl border border-red-100 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 ${
                              isEven
                                ? "translate-x-4 translate-y-4"
                                : "-translate-x-4 translate-y-4"
                            }`}
                          />
                          {/* Main card */}
                          <div className="overflow-hidden relative bg-gradient-to-br to-white rounded-2xl border shadow-2xl from-slate-50 border-slate-200 shadow-slate-200/60">
                            {/* Window chrome */}
                            <div className="flex gap-2 items-center px-4 py-3 border-b backdrop-blur border-slate-100 bg-white/80">
                              <div className="flex gap-1.5 shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                              </div>
                              <div className="ml-3 px-3 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] text-slate-400 font-mono truncate min-w-0 flex-1">
                                strawberry.maitsys.com
                              </div>
                              <div className="ml-auto text-[10px] text-slate-300 font-mono shrink-0">
                                LIVE
                              </div>
                            </div>
                            {/* Preview */}
                            <div
                              className="p-5 sm:p-6 bg-slate-50/50"
                              style={{ minHeight: "340px" }}
                            >
                              <Preview />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS STEPS ─────────────────────────────────────── */}
        <section className="py-8 bg-slate-950 sm:py-10">
          <div className="px-4 mx-auto max-w-8xl sm:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeUp} className="mb-8 text-center">
                <p className="mb-3 text-xs font-semibold tracking-widest text-red-500">
                  How It Works
                </p>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  From Connection to Control
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-slate-400">
                  A streamlined 4-step setup that delivers complete IDoc
                  visibility in hours, not weeks.
                </p>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, idx) => (
                  <motion.div
                    key={step.no}
                    variants={fadeUp}
                    className="relative group"
                  >
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-[calc(100%-1rem)] w-8 h-px bg-slate-700 z-10" />
                    )}
                    <div className="p-6 h-full rounded-2xl border transition-colors duration-300 bg-slate-900 border-slate-800 hover:border-red-900">
                      <div className="mb-4 text-4xl font-bold leading-none text-white">
                        {step.no}
                      </div>
                      <div className="w-8 h-0.5 bg-red-600 mb-4" />
                      <h3 className="mb-2 text-base font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TECH CAPABILITIES ─────────────────────────────────── */}
        <section className="py-8 bg-white border-t sm:py-10 border-slate-100">
          <div className="px-4 mx-auto max-w-8xl sm:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeUp} className="mb-8 text-center">
                <p className="mb-3 text-xs font-semibold tracking-widest text-red-700">
                  Infrastructure
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  Built on Enterprise Technologies
                </h2>
                <p className="mt-3 text-slate-500">
                  No ABAP. No modifications. Just standard SAP connectivity.
                </p>
                <div className="flex gap-4 justify-center items-center mt-4 text-xs text-slate-600">
                  <Link
                    to="/products/sap-idoc-monitoring/privacy-policy"
                    className="underline transition-colors hover:text-red-700 underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                  <span className="text-slate-400">|</span>
                  <Link
                    to="/products/sap-idoc-monitoring/TermsAndConditions"
                    className="underline transition-colors hover:text-red-700 underline-offset-2"
                  >
                    Terms and Conditions
                  </Link>
                </div>
              </motion.div>

              <div className="grid gap-5 mb-16 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: "🔗",
                    title: "SAP ECC & S/4HANA",
                    desc: "Full compatibility with both landscapes",
                    bg: "bg-blue-50 border-blue-100",
                  },
                  {
                    icon: "📡",
                    title: "OData APIs",
                    desc: "Standard-based, secure connectivity",
                    bg: "bg-emerald-50 border-emerald-100",
                  },
                  {
                    icon: "🛡️",
                    title: "WebDispatcher",
                    desc: "SAP-approved secure gateway",
                    bg: "bg-red-50 border-red-100",
                  },
                  {
                    icon: "☁️",
                    title: "Cloud Foundry",
                    desc: "SAP BTP scalability and reliability",
                    bg: "bg-violet-50 border-violet-100",
                  },
                  {
                    icon: "⚡",
                    title: "Node.js & React",
                    desc: "Modern, responsive full-stack",
                    bg: "bg-amber-50 border-amber-100",
                  },
                  {
                    icon: "🔀",
                    title: "Hybrid Ready",
                    desc: "Cloud, on-premise, or hybrid",
                    bg: "bg-teal-50 border-teal-100",
                  },
                ].map((c) => (
                  <motion.div
                    key={c.title}
                    variants={fadeUp}
                    className={`rounded-2xl border ${c.bg} p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="mb-3 text-3xl">{c.icon}</div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-700">{c.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Integrations */}
              <motion.div variants={fadeUp} className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-slate-900">
                  Integrate with Your Tools
                </h3>
                <p className="text-sm text-slate-500">
                  Connect Strawberry with your existing workflow, ticketing, and
                  collaboration platforms
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                className="grid grid-cols-3 gap-4 md:grid-cols-6"
              >
                {integrationTools.map((tool, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex flex-col justify-center items-center p-3 bg-white rounded-2xl border shadow-sm transition-all duration-300 border-slate-100 hover:shadow-xl hover:border-red-100 aspect-square"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      title={tool.name}
                      width={140}
                      height={48}
                      className="object-contain w-auto h-12"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <QuickViewUi
          title="Ready to Transform Your IDoc Monitoring?"
          description="Join leading enterprises using Strawberry to achieve complete SAP integration visibility."
          linkName="Connect with Us"
          url="/contact-us"
          title_className="text-3xl text-red-600 lg:text-5xl font-bold text-center leading-tight lg:leading-[1.15]"
        />
      </main>
    </>
  );
};

export default Sap_Idoc_Monitoring;
