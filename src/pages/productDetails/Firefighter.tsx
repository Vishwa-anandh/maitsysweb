import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, FileCheck, Bell } from "lucide-react";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import QuickViewUi from "../../components/ui/CountUp/QuickViewUi";
import sapPartnerLogo from "../../assets/image/logo/sap_Partnerr.png";

const SAP_PARTNER_URL =
  "https://www.sap.com/products/financial-management/partners/maitsys-inc-maitsys-access-guardian.html";
const YOUTUBE_URL = "https://www.youtube.com/embed/YRwk2pFq9Kk";
// const DEMO_URL = "https://mesh.maitsys.com/signup";

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

/* ── 10 Key Highlights ────────────────────────────────────────── */
type Highlight = {
  no: number;
  category: string;
  title: string;
  lead: string;
  detail: string;
  pullquote: string;
  bullets: string[];
  preview: string;
};

const highlights: Highlight[] = [
  {
    no: 1,
    category: "Intelligence",
    title: "AI Powered Chatbot Assistant",
    lead: "A conversational copilot trained on your SAP firefighter activity, available around the clock to surface answers without leaving the request flow.",
    detail:
      "Ask in plain language — 'How many high-risk sessions this week?', 'Who approved REQ#2045?', 'Show technical requests in TRAINING module' — and receive grounded answers pulled live from your audit data, approval records, and policy controls. The chatbot reduces L1 support tickets, eliminates context-switching, and helps every approver, requester, and auditor self-serve.",
    pullquote: "24/7 access guidance — no learning curve, no manuals.",
    bullets: [
      "Natural-language SAP audit queries",
      "Grounded in your tenant data",
      "Suggests next-best actions",
    ],
    preview: "ai-chat",
  },
  {
    no: 2,
    category: "Intelligence",
    title: "AI Audit Summary & Risk Scoring",
    lead: "Stop reading raw audit logs line by line. Our engine condenses thousands of SAP events into a single executive-grade summary with risk scoring per session.",
    detail:
      "Each firefighter session is parsed for table reads, critical transactions, RFC executions, and behavioral anomalies. The AI generates a contextual narrative, computes a 0–100 risk score across five weighted dimensions, and highlights recommendations — review-required, validate-justification, or monitor-future. Audit sign-off drops from days to minutes.",
    pullquote: "82/100 risk score — flagged in seconds, not days.",
    bullets: [
      "Per-session AI risk score",
      "Five-dimensional behavior analysis",
      "Auto-generated audit narrative",
    ],
    preview: "audit-summary",
  },
  {
    no: 3,
    category: "Workflow",
    title: "Consolidated Email Approvals",
    lead: "Approvers receive one digest — not twenty fragmented requests. One click approves, rejects, or escalates straight from the inbox without opening a portal.",
    detail:
      "Email-bound action links carry signed, time-limited tokens so decisions are auditable, tamper-proof, and SOX-compliant. Bulk-approve identical requests, drill into risk context inline, and pass everything through the existing Outlook / Gmail / Teams flow your business already uses. Approval lag drops from hours to minutes.",
    pullquote: "One inbox, one click — zero portal logins.",
    bullets: [
      "Signed action links — fully audited",
      "Bulk approve / reject patterns",
      "Works with Outlook, Gmail, Teams",
    ],
    preview: "email-approval",
  },
  
    {
    no: 4,
    category: "Request",
    title: "Structured Requests",
    lead: "One request, all the context an approver needs",
    detail:
      "Requesting access means naming the target system and module, the exact time window needed, the firefighter ID, and a business justification — no vague tickets, no follow-up emails asking \"why do you need this?\"",
    pullquote: "Zero vague tickets. Full context every time.",
    bullets: [
      "Target system + module selection",
      "Defined access window (start and end time)",
      "Firefighter ID tied to identity",
      "Optional incident reference for traceability",
      "Business justification required before submission",
    ],
    preview: "structured-request",
  },
  {
    no: 5,
    category: "Workflow",
    title: "Approval Workflow",
    lead: "Requests move. Risk doesn't get missed.",
    detail:
      "Every request follows the same path: Submitted → Reviewed at L1 → Granted Access → Signed Off. Approvers see pending requests at a glance, with AI risk assessment surfaced alongside each one — so higher-risk requests get the scrutiny they deserve.",
    pullquote: "Higher-risk requests get the scrutiny they deserve.",
    bullets: [
      "Submitted → L1 Approval → Access → Sign-Off visualization",
      "Pending, Approved, and Rejected views",
      "AI-assisted risk flagging on every request",
      "Full audit trail from request to sign-off",
    ],
    preview: "workflow",
  },
  {
    no: 6,
    category: "Operations",
    title: "Real-Time Access Monitoring",
    lead: "See every active firefighter session as it happens — who, where, what they are touching, and how risky their activity has become in this moment.",
    detail:
      "A live dashboard streams session telemetry directly from SAP STAD, SM20, and CDHDR. Threshold-based alerts fire instantly on suspicious patterns: privilege escalation, off-hours access, dormant-table reads. Operations teams can intervene mid-session, freeze access, or escalate to L2 before damage propagates.",
    pullquote: "Watch high-risk activity unfold — and stop it mid-action.",
    bullets: [
      "Live session telemetry",
      "Threshold-based instant alerts",
      "Mid-session intervention controls",
    ],
    preview: "monitoring",
  },
  {
    no: 7,
    category: "Compliance",
    title: "Complete Audit Trail & Logging",
    lead: "Every request, approval, credential delivery, session event, and revocation is immutably logged and queryable for years — purpose-built for SOX, GDPR, and SOC 2 audits.",
    detail:
      "Logs are tamper-evident (hash-chained), exportable to SIEM, retained per your regulatory profile, and indexed across 12+ fields including user, system, module, transaction code, and risk band. Auditors get read-only access with their own AI Copilot that explains anomalies on demand — replacing weeks of spreadsheet reconciliation.",
    pullquote: "85,000+ events indexed — searchable in milliseconds.",
    bullets: [
      "Hash-chained, tamper-evident logs",
      "SIEM-ready exports",
      "Auditor-mode AI Copilot",
    ],
    preview: "audit-trail",
  },
  {
    no: 8,
    category: "Governance",
    title: "Compliance & Risk Control Engine",
    lead: "Configure once, enforce continuously. SOD violations, SOX-flagged transactions, and high-risk patterns are blocked or flagged automatically based on your policy.",
    detail:
      "Out-of-the-box rule packs cover SOX 404, GDPR Article 32, ISO 27001, and PCI DSS. Custom rule builder lets governance teams encode segregation-of-duties matrices, transaction blacklists, and time-of-day windows. Every blocked or flagged event ties back to a named rule and a named policy owner — no orphan controls.",
    pullquote: "SOX-ready out of the box. Custom rules in minutes.",
    bullets: [
      "Pre-built SOX / GDPR / ISO packs",
      "Visual SOD matrix builder",
      "Named policy ownership",
    ],
    preview: "compliance",
  },
  {
    no: 9,
    category: "Security",
    title: "Temporary & Time-Bound Access",
    lead: "Standing privileges are the largest insider-threat surface in SAP. Every firefighter grant carries a hard expiry — no manual cleanup, no forgotten access.",
    detail:
      "Define windows down to the minute, scoped per request: 09:00–17:00 single-day, 4-hour incident response, weekend change-freeze override. Credentials are auto-revoked at expiry, the user is notified, and the session is closed. Extensions require fresh approval — preserving the audit chain end-to-end.",
    pullquote: "Zero standing privileges. Zero cleanup tickets.",
    bullets: [
      "Minute-precision access windows",
      "Auto-revocation at expiry",
      "Extension requires re-approval",
    ],
    preview: "time-bound",
  },
  {
    no: 10,
    category: "Workflow",
    title: "Automated Notifications & Escalations",
    lead: "No request stalls because someone is on PTO. Smart escalation walks the chain until action is taken, on the SLA your governance team defined.",
    detail:
      "Configurable SLAs per request risk-band trigger escalations after timeout: L1 → L2 → policy owner → CISO. Multi-channel delivery (email, SMS, Teams, Slack, push) ensures critical requests never miss attention. Every escalation is logged so auditors see exactly where time was spent — and where it was lost.",
    pullquote: "Configurable SLAs. Zero stalled requests.",
    bullets: [
      "Tiered escalation chains",
      "Email / SMS / Teams / Slack delivery",
      "SLA dwell-time analytics",
    ],
    preview: "notifications",
  },
  {
    no: 11,
    category: "Analytics",
    title: "Dashboards & Reporting Insights",
    lead: "Executive-grade visibility into firefighter program health — adoption, approval velocity, SLA conformance, top requesters, and month-over-month trends.",
    detail:
      "Pre-built boards for security leads, audit committees, and SAP basis teams. Drill from the org-level KPI down to a single transaction in two clicks. Schedule PDF / Excel exports to land in stakeholder inboxes every Monday. Public APIs feed downstream BI tools — Power BI, Tableau, Looker — without re-engineering.",
    pullquote: "Board-ready KPIs. One source of truth.",
    bullets: [
      "Role-tailored dashboards",
      "Scheduled export delivery",
      "Power BI / Tableau / Looker APIs",
    ],
    preview: "dashboard",
  },
];

/* ── Mini UI preview components ──────────────────────────────── */
const PreviewAiChat: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full text-sm rounded-xl bg-[#f8f9fa] border border-slate-200 shadow-sm relative font-sans">
    {/* Header */}
    <div className="flex justify-between items-center px-4 py-3 bg-[#cc0000] text-white shrink-0 rounded-t-xl">
      <div className="flex gap-3 items-center">
        <div className="flex justify-center items-center w-9 h-9 bg-white/20 rounded-lg border border-white/30 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none mb-1">
            <span className="font-bold text-sm tracking-wide">Al Copilot</span>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-[9px] font-bold tracking-widest text-emerald-400 uppercase">Online</span>
          </div>
          <span className="text-[11px] text-white/90 leading-none">Provided by Maitsys</span>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex justify-center items-center w-8 h-8 bg-black/10 hover:bg-black/20 transition-colors rounded-lg cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        </div>
        <div className="flex justify-center items-center w-8 h-8 bg-black/10 hover:bg-black/20 transition-colors rounded-lg cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
        </div>
      </div>
    </div>

    {/* Message Area */}
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl rounded-tl-sm border border-slate-200 shadow-sm p-4 max-w-[95%]">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex justify-center items-center w-6 h-6 rounded-full border border-red-200 bg-red-50 text-red-500 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
          </div>
          <span className="text-[11px] font-bold text-slate-500 tracking-wide">AI COPILOT</span>
          <span className="text-[10px] text-slate-400 font-medium">just now</span>
        </div>
        <div className="text-slate-700 text-[13px] leading-relaxed font-medium">
          Hi, I'm your Maitsys AI assistant. I can help with Firefighter access management and Role Radar security analysis. What would you like to do?
        </div>
      </div>
    </div>

    {/* Bottom Actions & Input */}
    <div className="p-3 bg-white border-t border-slate-100 flex flex-col gap-3 shrink-0">
      {/* Quick Actions */}
      <div className="flex flex-wrap gap-2">
        <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-500 text-xs font-semibold hover:bg-red-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          Create a new request
        </button>
        <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-500 text-xs font-semibold hover:bg-red-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
          Show my requests
        </button>
        <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-500 text-xs font-semibold hover:bg-red-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
          Show available systems
        </button>
        <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-500 text-xs font-semibold hover:bg-red-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          Help
        </button>
      </div>
      {/* Input */}
      <div className="flex gap-2 items-center">
        <div className="flex-1 bg-[#f4f5f7] border border-red-200 rounded-full px-4 py-2.5 flex items-center shadow-inner">
          <span className="text-slate-500 text-sm font-medium">Which users are most at risk?</span>
          <span className="ml-[1px] w-[1.5px] h-4 bg-slate-600 animate-pulse" />
        </div>
        <button className="flex justify-center items-center w-[42px] h-[42px] rounded-full bg-[#ec8385] text-white shrink-0 shadow-sm hover:bg-red-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        </button>
      </div>
    </div>
  </div>
);

const PreviewAuditSummary: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
    <div className="flex gap-2 items-center px-4 py-3 border-b border-slate-100 bg-slate-50">
      <FileCheck className="w-4 h-4 text-red-600" />
      <span className="text-sm font-semibold text-slate-700">AI Summary</span>
      <span className="ml-auto text-xs text-slate-400">10:16 AM</span>
    </div>
    <div className="flex flex-col flex-1 gap-3 p-4">
      <p className="text-sm leading-relaxed text-slate-600">
        This request involved multiple reads on sensitive tables and execution
        of critical transactions. Potential risk of data extraction detected.
      </p>
      <div className="text-sm font-semibold text-slate-800">Key Insights</div>
      {[
        "User accessed 3 critical SAP transactions",
        "2 sensitive tables were queried",
        "Activity performed outside normal pattern",
        "Risk score is higher than org threshold",
      ].map((i) => (
        <div key={i} className="flex gap-2 items-start text-xs text-slate-500">
          <span className="text-red-500 mt-0.5 flex-shrink-0">•</span>
          {i}
        </div>
      ))}
    </div>
  </div>
);

const PreviewEmailApproval: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
    <div className="flex gap-2 items-center px-4 py-2 border-b bg-slate-50 border-slate-100">
      <div className="w-2 h-2 bg-red-500 rounded-full" />
      <div className="w-2 h-2 bg-amber-400 rounded-full" />
      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
      <span className="ml-2 text-xs text-slate-400">system@maitsys.com</span>
    </div>
    <div className="flex flex-col flex-1 gap-3 p-4">
      <div className="text-sm font-bold text-slate-900">
        Access Request #REQ2024 – Pending Approval
      </div>
      <div className="text-xs leading-relaxed text-slate-500">
        John Doe has requested firefighter access for the{" "}
        <span className="font-semibold text-slate-700">MSQ</span> system with
        module{" "}
        <span className="font-semibold text-slate-700">TRAINING (TR)</span>.
        Please review and approve or reject.
      </div>
      <div className="p-3 space-y-1 text-xs rounded-lg bg-slate-50 text-slate-600">
        <div>
          <span className="font-semibold">Request ID:</span> #REQ202405210045
        </div>
        <div>
          <span className="font-semibold">Access Window:</span> 09:00 AM – 05:00
          PM
        </div>
        <div>
          <span className="font-semibold">Risk Level:</span>{" "}
          <span className="font-semibold text-amber-600">Medium</span>
        </div>
      </div>
      <div className="flex gap-3 mt-auto">
        <button className="flex-1 py-2 text-xs font-semibold text-white bg-emerald-600 rounded-lg">
          ✓ Approve
        </button>
        <button className="flex-1 py-2 text-xs font-semibold text-red-600 bg-red-50 rounded-lg border border-red-200">
          ✗ Reject
        </button>
      </div>
    </div>
  </div>
);

const PreviewMobile: React.FC = () => (
  <div className="flex gap-4 justify-center items-center py-2 h-full sm:gap-10">
    {/* Phone 1 — lock screen with push notification */}
    <div className="relative shrink-0">
      <div className="w-[135px] xs:w-[150px] sm:w-[180px] aspect-[9/19] bg-slate-900 rounded-[2.2rem] p-1.5 shadow-2xl shadow-slate-300/60 ring-1 ring-slate-800/40 rotate-[-6deg] origin-bottom">
        {/* Screen */}
        <div className="relative w-full h-full rounded-[1.7rem] overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-black">
          {/* Notch */}
          <div className="absolute top-1 left-1/2 z-20 w-16 h-4 bg-black rounded-full -translate-x-1/2" />
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 pt-1.5 text-white text-[9px] font-semibold relative z-10">
            <span>9:41</span>
            <span className="flex items-center gap-0.5">
              <span>•••</span>
              <span>⌃</span>
              <span className="relative w-4 h-2 rounded-sm border border-white">
                <span className="absolute inset-0.5 bg-white rounded-[1px]" />
              </span>
            </span>
          </div>
          {/* Lock screen time */}
          <div className="mt-6 text-center text-white">
            <div className="text-[10px] opacity-70 font-medium">
              Tuesday, May 21
            </div>
            <div className="text-3xl font-light tracking-tight leading-none mt-0.5">
              9:41
            </div>
          </div>
          {/* Notification */}
          <div className="absolute left-2 right-2 top-[38%] backdrop-blur-md bg-white/15 border border-white/20 rounded-2xl p-2.5 text-white shadow-lg">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="flex justify-center items-center w-4 h-4 bg-red-600 rounded-md">
                <span className="text-white text-[7px] font-black">M</span>
              </div>
              <span className="text-[9px] font-semibold opacity-90">
                MAITSYS
              </span>
              <span className="ml-auto text-[8px] opacity-60">now</span>
            </div>
            <div className="text-[10px] font-semibold leading-tight">
              High-risk access request
            </div>
            <div className="text-[9px] opacity-80 leading-snug mt-0.5">
              John.Doe · MSQ · TRAINING needs Tier-1 approval
            </div>
            <div className="flex gap-1 mt-2">
              <div className="flex-1 bg-emerald-500/90 rounded-md text-center py-1 text-[9px] font-bold">
                Approve
              </div>
              <div className="flex-1 bg-white/15 rounded-md text-center py-1 text-[9px] font-bold">
                Open
              </div>
            </div>
          </div>
          {/* Face ID hint */}
          <div className="absolute bottom-3 left-0 right-0 text-center text-white/60 text-[8px]">
            ⤴ Swipe up · Face ID
          </div>
        </div>
      </div>
    </div>

    {/* Phone 2 — in-app approval detail */}
    <div className="relative shrink-0">
      <div className="w-[135px] xs:w-[150px] sm:w-[180px] aspect-[9/19] bg-slate-900 rounded-[2.2rem] p-1.5 shadow-2xl shadow-slate-300/60 ring-1 ring-slate-800/40 rotate-[6deg] origin-bottom">
        <div className="relative w-full h-full rounded-[1.7rem] overflow-hidden bg-white flex flex-col">
          {/* Notch */}
          <div className="absolute top-1 left-1/2 z-20 w-16 h-4 bg-black rounded-full -translate-x-1/2" />
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 pt-1.5 text-slate-900 text-[9px] font-semibold">
            <span>9:42</span>
            <span className="opacity-60">●●●</span>
          </div>
          {/* App header */}
          <div className="px-3 pt-3 pb-2 border-b border-slate-100 flex items-center gap-1.5">
            <span className="text-slate-500 text-[10px]">←</span>
            <span className="text-[10px] font-bold text-slate-900">
              Request Detail
            </span>
            <div className="ml-auto w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-[9px]">
              ⋯
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 p-2.5 flex flex-col gap-2 overflow-hidden">
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white text-[10px] font-bold">
                JD
              </div>
              <div className="leading-tight">
                <div className="text-[10px] font-bold text-slate-900">
                  John Doe
                </div>
                <div className="text-[8px] text-slate-500">
                  john.doe@maitsys
                </div>
              </div>
              <span className="ml-auto text-[7px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">
                HIGH
              </span>
            </div>
            <div className="bg-slate-50 rounded-lg p-2 text-[9px] space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400">System</span>
                <span className="font-semibold text-slate-700">MSQ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Module</span>
                <span className="font-semibold text-slate-700">TRAINING</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Window</span>
                <span className="font-semibold text-slate-700">4h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Risk score</span>
                <span className="font-bold text-red-600">82/100</span>
              </div>
            </div>
            <div className="text-[8px] text-slate-500 leading-snug">
              "Emergency: training environment data refresh required before
              EOD."
            </div>
          </div>
          {/* Action bar */}
          <div className="p-2 border-t border-slate-100 flex flex-col gap-1.5">
            <button className="w-full bg-emerald-600 text-white rounded-lg text-[10px] py-2 font-bold flex items-center justify-center gap-1">
              <span>✓</span> Approve with Face ID
            </button>
            <div className="flex gap-1.5">
              <button className="flex-1 bg-slate-100 text-slate-700 rounded-lg text-[9px] py-1.5 font-semibold">
                Reject
              </button>
              <button className="flex-1 bg-slate-100 text-slate-700 rounded-lg text-[9px] py-1.5 font-semibold">
                Escalate
              </button>
            </div>
          </div>
          {/* Home indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-slate-900 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

const PreviewMonitoring: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full text-sm rounded-xl bg-slate-900">
    <div className="flex gap-2 items-center px-4 py-3 border-b border-slate-800">
      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
      <span className="font-semibold text-slate-200">Live Sessions</span>
      <span className="ml-auto text-xs text-slate-400">3 active</span>
    </div>
    <div className="flex flex-col flex-1 gap-2 p-3">
      {[
        {
          user: "John.Doe",
          sys: "MSQ",
          module: "Training",
          risk: "High Risk",
          riskColor: "bg-red-900 text-red-400",
          time: "2h 14m",
        },
        {
          user: "Jane.Manager",
          sys: "YOGA",
          module: "MM",
          risk: "Low Risk",
          riskColor: "bg-emerald-900 text-emerald-400",
          time: "0h 43m",
        },
        {
          user: "R.Kumar",
          sys: "STAD",
          module: "SD",
          risk: "Med Risk",
          riskColor: "bg-amber-900 text-amber-400",
          time: "1h 05m",
        },
      ].map((s) => (
        <div
          key={s.user}
          className="flex items-center justify-between bg-slate-800 rounded-lg px-3 py-2.5 gap-3"
        >
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold truncate text-slate-200">
              {s.user}
            </div>
            <div className="text-slate-500 text-[10px]">
              {s.sys} · {s.module}
            </div>
          </div>
          <div className="text-slate-500 text-[10px]">{s.time}</div>
          <span
            className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${s.riskColor}`}
          >
            {s.risk}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const PreviewAuditTrail: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
    <div className="flex gap-3 items-center px-4 py-3 border-b border-slate-100 bg-slate-50">
      <span className="text-sm font-semibold text-slate-700">Audit Logs</span>
      <span className="ml-auto text-xs text-slate-400">85,246 results</span>
    </div>
    <div className="flex overflow-auto flex-col flex-1 divide-y divide-slate-50">
      {[
        {
          time: "03:15:21",
          user: "Paul Jackson",
          action: "Accessed ABAP Editor (SE38)",
          risk: "High",
          sys: "SM20",
        },
        {
          time: "03:14:48",
          user: "Paul Jackson",
          action: "Executed RFC",
          risk: "High",
          sys: "STAD",
        },
        {
          time: "03:13:55",
          user: "Alice Morgan",
          action: "Changed Role TRN_SAP_POWER",
          risk: "Medium",
          sys: "SM20",
        },
        {
          time: "03:13:10",
          user: "Robert Johnson",
          action: "Accessed SESSION_MANAGER",
          risk: "High",
          sys: "SM20",
        },
      ].map((l) => (
        <div
          key={l.time}
          className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50"
        >
          <span className="text-slate-400 text-[10px] w-14 flex-shrink-0">
            {l.time}
          </span>
          <span className="flex-1 text-xs truncate text-slate-600">
            {l.action}
          </span>
          <span
            className={`text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${l.risk === "High" ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"}`}
          >
            {l.risk}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const PreviewCompliance: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
    <div className="px-4 py-3 text-sm font-semibold border-b border-slate-100 bg-slate-50 text-slate-700">
      AI Risk Assessment
    </div>
    <div className="flex flex-col flex-1 gap-4 p-4">
      <div className="flex gap-6 items-center">
        <div className="relative flex-shrink-0 w-20 h-20">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="3.5"
            />
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#DC2626"
              strokeWidth="3.5"
              strokeDasharray="62 88"
              strokeLinecap="round"
            />
          </svg>
          <div className="flex absolute inset-0 flex-col justify-center items-center">
            <span className="text-xl font-bold leading-none text-slate-900">
              82
            </span>
            <span className="text-[10px] text-red-500 font-semibold">/100</span>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          {[
            ["Data Access", "High", 85],
            ["Critical Transactions", "High", 80],
            ["Frequency", "Medium", 60],
            ["User Behavior", "High", 85],
          ].map(([k, r, v]) => (
            <div key={String(k)} className="flex gap-2 items-center text-xs">
              <span className="flex-1 text-slate-600">{k}</span>
              <span
                className={`font-semibold ${r === "High" ? "text-red-500" : "text-amber-500"}`}
              >
                {r}
              </span>
              <span className="w-8 text-right text-slate-400">{v}/100</span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-3 py-2 text-xs font-semibold text-red-700 bg-red-50 rounded-lg border border-red-100">
        ⚠ High Risk — Review required before sign-off
      </div>
    </div>
  </div>
);

const PreviewTimeBound: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
    <div className="px-4 py-3 text-sm font-semibold border-b border-slate-100 bg-slate-50 text-slate-700">
      Access Window Control
    </div>
    <div className="flex flex-col flex-1 gap-4 p-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl border bg-slate-50 border-slate-100">
          <div className="text-slate-400 text-[10px] font-semibold tracking-wider mb-1">
            From
          </div>
          <div className="text-base font-bold text-slate-900">09:00 AM</div>
          <div className="text-xs text-slate-500">May 21, 2024</div>
        </div>
        <div className="p-3 bg-red-50 rounded-xl border border-red-100">
          <div className="text-slate-400 text-[10px] font-semibold tracking-wider mb-1">
            To
          </div>
          <div className="text-base font-bold text-red-600">05:00 PM</div>
          <div className="text-xs text-slate-500">May 21, 2024</div>
        </div>
      </div>
      <div className="px-4 py-3 bg-amber-50 rounded-xl border border-amber-200">
        <div className="text-sm font-semibold text-amber-800">
          ⏱ Auto-expires in 4h 32m
        </div>
        <div className="text-amber-600 text-xs mt-0.5">
          Credentials will be revoked automatically
        </div>
      </div>
      <div className="px-3 py-2 text-xs rounded-lg bg-slate-50 text-slate-500">
        No manual revocation needed. SOX compliant access lifecycle.
      </div>
    </div>
  </div>
);

const PreviewNotifications: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
    <div className="flex gap-2 items-center px-4 py-3 border-b border-slate-100 bg-slate-50">
      <Bell className="w-4 h-4 text-red-600" />
      <span className="text-sm font-semibold text-slate-700">
        Notifications & Escalations
      </span>
    </div>
    <div className="flex overflow-auto flex-col flex-1 divide-y divide-slate-50">
      {[
        {
          msg: "New access request pending approval",
          sub: "REQ#045 · MSQ · John.Doe",
          time: "2m ago",
          dot: "bg-red-500",
          urgent: true,
        },
        {
          msg: "L1 approved — Escalated to L2",
          sub: "REQ#044 · YOGA · Jane.M",
          time: "15m ago",
          dot: "bg-amber-500",
          urgent: false,
        },
        {
          msg: "Session expired — STAD · R.Kumar",
          sub: "Access auto-revoked after 8h window",
          time: "1h ago",
          dot: "bg-emerald-500",
          urgent: false,
        },
        {
          msg: "Approval completed successfully",
          sub: "REQ#043 · MM · Alice.Morgan",
          time: "3h ago",
          dot: "bg-blue-500",
          urgent: false,
        },
      ].map((n) => (
        <div
          key={n.msg}
          className={`flex items-start gap-3 px-4 py-3 ${n.urgent ? "bg-red-50" : ""}`}
        >
          <span
            className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.dot}`}
          />
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium truncate text-slate-800">
              {n.msg}
            </div>
            <div className="text-slate-400 text-[10px] truncate">{n.sub}</div>
          </div>
          <span className="text-slate-400 text-[10px] whitespace-nowrap">
            {n.time}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const PreviewDashboard: React.FC = () => {
  const areaPoints = [22, 28, 35, 31, 44, 52, 48, 60, 72, 68, 80, 92];
  const max = Math.max(...areaPoints);
  const w = 100;
  const h = 40;
  const step = w / (areaPoints.length - 1);
  const path = areaPoints
    .map((v, i) => `${i === 0 ? "M" : "L"}${i * step},${h - (v / max) * h}`)
    .join(" ");
  const areaPath = `${path} L${w},${h} L0,${h} Z`;

  const leaders = [
    { name: "Sasi Clinton", reqs: 98, pct: 21, color: "bg-red-500" },
    { name: "Aswathi M", reqs: 72, pct: 15, color: "bg-orange-500" },
    { name: "Yogalakshmi", reqs: 64, pct: 14, color: "bg-amber-500" },
    { name: "Ramanan", reqs: 52, pct: 11, color: "bg-lime-500" },
    { name: "Paul Jackson", reqs: 35, pct: 7, color: "bg-emerald-500" },
  ];

  return (
    <div className="flex overflow-hidden flex-col h-full text-sm rounded-xl ring-1 bg-slate-950 ring-slate-800">
      {/* Top chrome */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-800 bg-slate-900/70 backdrop-blur">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center w-5 h-5 bg-red-600 rounded-md">
            <span className="text-white text-[8px] font-black">M</span>
          </div>
          <span className="text-xs font-semibold text-slate-200">
            Maitsys Access Governance
          </span>
        </div>
        <div className="ml-auto flex items-center gap-1 text-[10px]">
          {["Overview", "Analytics", "Security", "Growth"].map((t, i) => (
            <span
              key={t}
              className={`px-2 py-1 rounded ${
                i === 3
                  ? "bg-red-600 text-white font-semibold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 pl-2 border-l border-slate-800">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white text-[8px] font-bold">
            A
          </div>
          <div className="leading-tight">
            <div className="text-slate-200 text-[9px] font-semibold">
              Aadhira
            </div>
            <div className="text-slate-500 text-[7px]">Admin</div>
          </div>
        </div>
      </div>

      {/* KPI strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-2 border-b border-slate-800">
        {[
          {
            label: "Total Users",
            value: "24",
            delta: "+2",
            color: "text-blue-400",
          },
          {
            label: "Active",
            value: "22",
            delta: "92%",
            color: "text-emerald-400",
          },
          {
            label: "Adoption",
            value: "92%",
            delta: "+8pp",
            color: "text-emerald-400",
          },
          {
            label: "Open Reqs",
            value: "38",
            delta: "-12",
            color: "text-red-400",
          },
        ].map((k) => (
          <div
            key={k.label}
            className="bg-slate-900 rounded-md px-2.5 py-2 border border-slate-800"
          >
            <div className="text-slate-500 text-[9px] tracking-wider">
              {k.label}
            </div>
            <div className="flex items-end gap-1.5 mt-0.5">
              <div className="text-base font-bold leading-none text-white">
                {k.value}
              </div>
              <div className={`text-[9px] font-semibold ${k.color}`}>
                {k.delta}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Body grid */}
      <div className="grid overflow-hidden flex-1 grid-cols-3 gap-2 p-2">
        {/* User Adoption + sparkline */}
        <div className="flex flex-col col-span-2 p-3 rounded-lg border bg-slate-900 border-slate-800">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1 h-3 bg-emerald-400 rounded-full" />
            <span className="text-slate-300 text-[11px] font-semibold">
              User Growth (12 mo)
            </span>
            <span className="ml-auto text-emerald-400 text-[9px] font-bold">
              +92% YoY
            </span>
          </div>
          <svg
            viewBox={`0 0 ${w} ${h + 4}`}
            className="flex-1 w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="ffArea" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="rgb(16,185,129)"
                  stopOpacity="0.45"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(16,185,129)"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#ffArea)" />
            <path
              d={path}
              fill="none"
              stroke="rgb(16,185,129)"
              strokeWidth="0.8"
              strokeLinejoin="round"
            />
            {areaPoints.map((v, i) => (
              <circle
                key={i + "index"}
                cx={i * step}
                cy={h - (v / max) * h}
                r={i === areaPoints.length - 1 ? 1.2 : 0.5}
                fill={i === areaPoints.length - 1 ? "white" : "rgb(16,185,129)"}
              />
            ))}
          </svg>
          <div className="flex justify-between text-[7px] text-slate-600 mt-0.5 px-0.5">
            {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map(
              (m, i) => (
                <span key={i + "index"}>{m}</span>
              ),
            )}
          </div>
        </div>

        {/* Risk Distribution donut */}
        <div className="flex flex-col p-3 rounded-lg border bg-slate-900 border-slate-800">
          <div className="flex gap-2 items-center mb-2">
            <span className="w-1 h-3 bg-red-500 rounded-full" />
            <span className="text-slate-300 text-[11px] font-semibold">
              Risk Mix
            </span>
          </div>
          <div className="flex flex-1 gap-2 items-center">
            <div className="relative flex-shrink-0 w-12 h-12">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="rgb(30,41,59)"
                  strokeWidth="5"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="rgb(239,68,68)"
                  strokeWidth="5"
                  strokeDasharray="32 88"
                  strokeLinecap="butt"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="rgb(245,158,11)"
                  strokeWidth="5"
                  strokeDasharray="22 88"
                  strokeDashoffset="-32"
                  strokeLinecap="butt"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="rgb(16,185,129)"
                  strokeWidth="5"
                  strokeDasharray="34 88"
                  strokeDashoffset="-54"
                  strokeLinecap="butt"
                />
              </svg>
              <div className="flex absolute inset-0 flex-col justify-center items-center pt-[2px] pl-[1px]">
                <span className="text-white font-bold text-[11px] leading-none">
                  88
                </span>
                <span className="text-slate-500 text-[6px] mt-[1px]">
                  total
                </span>
              </div>
            </div>
            <div className="flex-1 space-y-1 text-[9px]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-red-500" />
                <span className="flex-1 text-slate-400">High</span>
                <span className="font-semibold text-slate-200">28</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-amber-500" />
                <span className="flex-1 text-slate-400">Medium</span>
                <span className="font-semibold text-slate-200">19</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500" />
                <span className="flex-1 text-slate-400">Low</span>
                <span className="font-semibold text-slate-200">41</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top 5 Leaderboard */}
        <div className="flex flex-col col-span-2 p-3 rounded-lg border bg-slate-900 border-slate-800">
          <div className="flex gap-2 items-center mb-2">
            <span className="w-1 h-3 bg-amber-400 rounded-full" />
            <span className="text-slate-300 text-[11px] font-semibold">
              Top 5 Requesters
            </span>
            <span className="ml-auto text-slate-500 text-[8px]">last 30d</span>
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            {leaders.map((l, i) => (
              <div key={l.name} className="flex items-center gap-2 text-[9px]">
                <span className="w-3 font-mono text-right text-slate-500">
                  {i + 1}
                </span>
                <span className="w-16 truncate text-slate-300">{l.name}</span>
                <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${l.color} rounded-full`}
                    style={{ width: `${l.pct * 4}%` }}
                  />
                </div>
                <span className="w-8 font-semibold text-right text-slate-400">
                  {l.reqs}
                </span>
                <span className="w-7 text-right text-slate-500">{l.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Month over Month deltas */}
        <div className="flex flex-col p-3 rounded-lg border bg-slate-900 border-slate-800">
          <div className="flex gap-2 items-center mb-2">
            <span className="w-1 h-3 bg-blue-400 rounded-full" />
            <span className="text-slate-300 text-[11px] font-semibold">
              MoM
            </span>
            <span className="ml-auto text-slate-500 text-[8px]">Apr→May</span>
          </div>
          <div className="flex flex-col flex-1 gap-1 justify-between">
            {[
              { k: "Requests", v: "127→52", d: "-59%", c: "text-red-400" },
              { k: "Approvals", v: "108→41", d: "-62%", c: "text-red-400" },
              { k: "Rejections", v: "2→6", d: "+200%", c: "text-red-400" },
              { k: "Avg Time", v: "4m→31m", d: "+675%", c: "text-amber-400" },
            ].map((r) => (
              <div key={r.k} className="flex items-center gap-1 text-[8.5px]">
                <span className="flex-1 truncate text-slate-500">{r.k}</span>
                <span className="font-mono text-slate-400">{r.v}</span>
                <span className={`font-bold ${r.c} w-12 text-right`}>
                  {r.d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer status */}
      <div className="flex items-center gap-3 px-4 py-1.5 border-t border-slate-800 bg-slate-900/70 text-[8.5px] text-slate-500">
        <span className="flex gap-1 items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {"Live · synced 2s ago"}
        </span>
        <span className="ml-auto">Powered by Maitsys</span>
      </div>
    </div>
  );
};



const PreviewWorkflow: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full font-sans rounded-xl border bg-slate-50 border-slate-100">
    {/* Top Nav (Mini) */}
    <div className="flex flex-col gap-3 p-3 pb-0 bg-white border-b border-slate-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="flex justify-center items-center w-5 h-5 text-red-600 bg-red-50 rounded border border-red-100 shrink-0">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="font-bold text-slate-800 text-[11px] truncate">Request Queue</span>
        </div>
        <div className="flex items-center px-2 ml-2 w-20 h-5 rounded border sm:w-24 bg-slate-50 border-slate-200 shrink-0">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-slate-400"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span className="text-[7px] text-slate-400 truncate">Search...</span>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex gap-4 text-[9px] font-semibold border-b border-slate-100 overflow-x-auto scrollbar-hide">
        <span className="text-slate-900 border-b-2 border-red-600 pb-1.5 relative top-[1px] shrink-0">Pending (2)</span>
        <span className="text-slate-400 pb-1.5 shrink-0">Approved</span>
        <span className="text-slate-400 pb-1.5 shrink-0">Sign-Off</span>
      </div>
    </div>

    {/* Request List Container */}
    <div className="flex overflow-y-auto overflow-x-hidden flex-col flex-1 gap-3 p-3 bg-slate-50/50">
      
      {/* Request Card 1 (Pending L1) */}
      <div className="bg-white border-l-[3px] border-l-red-400 border border-slate-200 rounded-lg p-2.5 flex flex-col shadow-sm">
        <div className="flex gap-2 justify-between items-start mb-3">
          <div className="flex gap-2 items-center min-w-0">
            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[9px] font-bold shrink-0">JD</div>
            <div className="flex flex-col min-w-0 leading-tight">
              <span className="text-[10px] font-bold text-slate-900 truncate">Financial Systems Access</span>
              <span className="text-[8px] text-slate-500 mt-0.5 truncate">ID: REQ-001 • System: PRD</span>
            </div>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-red-50 text-red-600 border border-red-200 shrink-0">
            Action Required
          </span>
        </div>
        
        {/* Stepper */}
        <div className="overflow-x-auto pt-2 mt-auto border-t border-slate-100 scrollbar-hide">
          <div className="flex items-center justify-between px-1 sm:px-2 relative mt-1 min-w-[200px]">
            {/* Lines */}
            <div className="absolute top-2 left-6 right-6 h-[1px] bg-slate-200 z-0"></div>
            <div className="absolute top-2 left-6 w-1/3 h-[1px] bg-red-500 z-0"></div>

            {/* Step 1: Submitted */}
            <div className="flex flex-col items-center gap-1.5 z-10 shrink-0">
              <div className="w-[18px] h-[18px] rounded-full bg-red-500 text-white flex items-center justify-center shadow-[0_0_0_2px_#fff]">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-[6.5px] font-bold text-red-600">Submitted</span>
            </div>

            {/* Step 2: L1 */}
            <div className="flex flex-col items-center gap-1.5 z-10 shrink-0">
              <div className="w-[18px] h-[18px] rounded-full bg-red-400 text-white flex items-center justify-center shadow-[0_0_0_2px_#fff]">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <span className="text-[6.5px] font-bold text-red-500">L1 Approval</span>
            </div>

            {/* Step 3: Access */}
            <div className="flex flex-col items-center gap-1.5 z-10 opacity-60 shrink-0">
              <div className="w-[18px] h-[18px] rounded-full bg-slate-100 border border-slate-300 text-slate-400 flex items-center justify-center shadow-[0_0_0_2px_#fff]">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <span className="text-[6.5px] font-semibold text-slate-500">Access</span>
            </div>

            {/* Step 4: Sign-Off */}
            <div className="flex flex-col items-center gap-1.5 z-10 opacity-60 shrink-0">
              <div className="w-[18px] h-[18px] rounded-full bg-slate-100 border border-slate-300 text-slate-400 flex items-center justify-center shadow-[0_0_0_2px_#fff]">
                <FileCheck className="w-2.5 h-2.5" />
              </div>
              <span className="text-[6.5px] font-semibold text-slate-500">Sign-Off</span>
            </div>
          </div>
        </div>
      </div>

      {/* Request Card 2 (In Access Phase) */}
      <div className="bg-white border-l-[3px] border-l-red-500 border border-slate-200 rounded-lg p-2.5 flex flex-col shadow-sm">
        <div className="flex gap-2 justify-between items-start mb-3">
          <div className="flex gap-2 items-center min-w-0">
            <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-[9px] font-bold shrink-0">AS</div>
            <div className="flex flex-col min-w-0 leading-tight">
              <span className="text-[10px] font-bold text-slate-900 truncate">HR Module Support</span>
              <span className="text-[8px] text-slate-500 mt-0.5 truncate">ID: REQ-002 • System: QA</span>
            </div>
          </div>
          <span className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-slate-100 text-slate-500 border border-slate-200 shrink-0">
            In Progress
          </span>
        </div>
        
        {/* Stepper */}
        <div className="overflow-x-auto pt-2 mt-auto border-t border-slate-100 scrollbar-hide">
          <div className="flex items-center justify-between px-1 sm:px-2 relative mt-1 min-w-[200px]">
            <div className="absolute top-2 left-6 right-6 h-[1px] bg-slate-200 z-0"></div>
            <div className="absolute top-2 left-6 w-[66%] h-[1px] bg-red-500 z-0"></div>

            <div className="flex flex-col items-center gap-1.5 z-10 shrink-0">
              <div className="w-[18px] h-[18px] rounded-full bg-red-500 text-white flex items-center justify-center shadow-[0_0_0_2px_#fff]">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-[6.5px] font-bold text-red-600">Submitted</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 z-10 shrink-0">
              <div className="w-[18px] h-[18px] rounded-full bg-red-500 text-white flex items-center justify-center shadow-[0_0_0_2px_#fff]">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-[6.5px] font-bold text-red-600">L1 Approval</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 z-10 shrink-0">
              <div className="w-[18px] h-[18px] rounded-full bg-red-400 text-white flex items-center justify-center shadow-[0_0_0_2px_#fff]">
                 <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <span className="text-[6.5px] font-bold text-red-500">Access</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 z-10 opacity-60 shrink-0">
              <div className="w-[18px] h-[18px] rounded-full bg-slate-100 border border-slate-300 text-slate-400 flex items-center justify-center shadow-[0_0_0_2px_#fff]">
                <FileCheck className="w-2.5 h-2.5" />
              </div>
              <span className="text-[6.5px] font-semibold text-slate-500">Sign-Off</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
);

const PreviewStructuredRequest: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full font-sans rounded-xl border bg-slate-50 border-slate-100">
    {/* Top Header */}
    <div className="bg-white border-b border-slate-200 p-3 flex flex-col gap-0.5 shrink-0">
      <span className="font-bold text-slate-800 text-[11px] truncate">New Request</span>
      <span className="text-[7px] text-slate-400 truncate">Submit access request for approval</span>
    </div>

    <div className="flex overflow-y-auto flex-col flex-1 gap-2 p-2 sm:flex-row bg-slate-50">
      
      {/* Left Column (Forms) */}
      <div className="flex flex-col flex-1 gap-2 min-w-0">
        
        {/* Access System Section */}
        <div className="bg-white border border-slate-200 rounded p-2 flex flex-col gap-1.5 shadow-sm">
          <div className="flex items-center gap-1 mb-0.5">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 shrink-0"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            <span className="text-[8px] font-bold text-slate-700 truncate">Access System</span>
          </div>
          <div className="flex gap-1.5">
            <div className="flex-1 flex flex-col gap-0.5 min-w-0">
              <span className="text-[6px] font-semibold text-slate-500 truncate">Target System *</span>
              <div className="bg-slate-50 border border-slate-100 rounded text-[7px] p-1 text-slate-400 flex justify-between items-center min-w-0">
                <span className="truncate">Select System...</span>
                <span className="text-[5px] shrink-0 ml-1">▼</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-0.5 min-w-0">
              <span className="text-[6px] font-semibold text-slate-500 truncate">Module *</span>
              <div className="bg-slate-50 border border-slate-100 rounded text-[7px] p-1 text-slate-400 flex justify-between items-center min-w-0">
                <span className="truncate">Select Module...</span>
                <span className="text-[5px] shrink-0 ml-1">▼</span>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5">
            <div className="flex-1 bg-slate-50 border border-slate-100 rounded text-[6.5px] p-1 text-slate-600 flex items-center gap-1 min-w-0">
              <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 shrink-0"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span className="truncate">Start Time...</span>
            </div>
            <div className="flex-1 bg-slate-50 border border-slate-100 rounded text-[6.5px] p-1 text-slate-600 flex items-center gap-1 min-w-0">
              <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 shrink-0"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span className="truncate">End Time...</span>
            </div>
          </div>
        </div>

        {/* Identity & Justification Section */}
        <div className="bg-white border border-slate-200 rounded p-2 flex flex-col gap-1.5 shadow-sm mb-1">
          <div className="flex items-center gap-1 mb-0.5">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 shrink-0"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span className="text-[8px] font-bold text-slate-700 truncate">Identity & Justification</span>
          </div>
          <div className="flex gap-1.5">
            <div className="flex-1 flex flex-col gap-0.5 min-w-0">
              <span className="text-[6px] font-semibold text-slate-500 truncate">Firefighter ID *</span>
              <div className="bg-slate-50 border border-slate-100 rounded text-[7px] p-1 text-slate-400 flex justify-between items-center min-w-0">
                <span className="truncate">Select ID...</span>
                <span className="text-[5px] shrink-0 ml-1">▼</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-0.5 min-w-0">
              <span className="text-[6px] font-semibold text-slate-500 truncate">Incident Reference</span>
              <div className="bg-slate-50 border border-slate-100 rounded text-[7px] p-1 text-slate-400 truncate">
                e.g. INC-12345
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5 min-w-0">
            <span className="text-[6px] font-semibold text-slate-500 flex justify-between">
              <span className="truncate">Business Justification</span>
              <span className="ml-1 text-slate-300 shrink-0">0/500</span>
            </span>
            <div className="bg-slate-50 border border-slate-100 rounded text-[7px] p-1.5 h-[34px] text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap">
              Explain why this access is required...
            </div>
          </div>
        </div>

      </div>

      {/* Right Column (Summary) */}
      <div className="flex flex-col gap-2 sm:w-32 shrink-0">
        <div className="bg-white border border-slate-200 rounded p-2 shadow-sm flex flex-col h-full min-h-[140px]">
          <span className="text-[7.5px] font-bold text-slate-700 border-b border-slate-100 pb-1 mb-1.5 truncate">Request Summary</span>
          
          <div className="flex flex-col gap-1.5 text-[6px] font-semibold text-slate-500">
            <div className="flex justify-between border-b border-slate-50 pb-0.5"><span className="pr-1 truncate">System</span> <span className="text-slate-300 shrink-0">—</span></div>
            <div className="flex justify-between border-b border-slate-50 pb-0.5"><span className="pr-1 truncate">Module</span> <span className="text-slate-300 shrink-0">—</span></div>
            <div className="flex justify-between border-b border-slate-50 pb-0.5"><span className="pr-1 truncate">FF ID</span> <span className="text-slate-300 shrink-0">—</span></div>
            <div className="flex justify-between border-b border-slate-50 pb-0.5"><span className="pr-1 truncate">Incident</span> <span className="text-slate-300 shrink-0">—</span></div>
          </div>

          <div className="mt-auto flex flex-col gap-1.5 pt-2">
             <button className="bg-red-400 text-white rounded text-[8px] font-bold py-1.5 px-1 text-center shadow-sm w-full truncate">
                → Submit Request
             </button>
             <span className="text-[5px] text-center text-slate-400 truncate">Routed to L1 → L2</span>
          </div>
        </div>
      </div>

    </div>
  </div>
);

const previewMap: Record<string, React.FC> = {
  "ai-chat": PreviewAiChat,
  "audit-summary": PreviewAuditSummary,
  "email-approval": PreviewEmailApproval,
  mobile: PreviewMobile,
  monitoring: PreviewMonitoring,
  "audit-trail": PreviewAuditTrail,
  compliance: PreviewCompliance,
  "time-bound": PreviewTimeBound,
  notifications: PreviewNotifications,
  dashboard: PreviewDashboard,
  workflow: PreviewWorkflow,
  "structured-request": PreviewStructuredRequest,
};

/* ── Steps ───────────────────────────────────────────────────── */
const steps = [
  {
    no: "01",
    title: "User Submits Request",
    desc: "User submits an access request through the self-service portal with business justification and required details.",
  },
  {
    no: "02",
    title: "2-Level Approval",
    desc: "Request goes through automated multi-level approval workflow with email notifications and approval tracking.",
  },
  {
    no: "03",
    title: "Secure Credential Delivery",
    desc: "Approved users receive time-bound credentials securely without exposing passwords to administrators.",
  },
  {
    no: "04",
    title: "Audit & Monitor Activity",
    desc: "Monitor all remote sessions in real-time with complete audit trails and automatic compliance reporting.",
  },
];

/* ── Stats ───────────────────────────────────────────────────── */
const stats = [
  { value: "85,000+", label: "Audit Logs Processed" },
  { value: "92%", label: "Platform Adoption Rate" },
  { value: "10x", label: "Faster Approvals" },
  { value: "SOX", label: "Compliance Ready" },
];

/* ── Main Page ───────────────────────────────────────────────── */
const Firefighter: React.FC = () => {
  return (
    <>
      <Seo
        title="SAP Firefighter Access Control & Governance Platform"
        description="Automate SAP Firefighter access with approvals, secure credentials, and real-time audit monitoring to ensure compliance and eliminate manual risks."
        keywords={[
          "SAP Firefighter access control",
          "SAP firefighter governance solution",
          "SAP emergency access management",
          "SAP GRC firefighter monitoring",
          "SAP access compliance tools",
          "SAP privileged access control",
          "SAP audit trail monitoring",
          "enterprise SAP security governance",
        ]}
        url="/products/firefighter"
        siteName="Maitsys"
        type="website"
        imageAlt="Maitsys SAP Firefighter Access Control & Governance Platform"
        preloadImage={false}
      />
      <JsonLd
        schema={{
          "@type": "SoftwareApplication",
          name: "SAP Firefighter Access Control & Governance Platform",
          description: "Automate SAP Firefighter access with approvals, secure credentials, and real-time audit monitoring to ensure compliance and eliminate manual risks.",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web-based",
          publisher: { "@type": "Organization", name: "Maitsys", url: "https://www.maitsys.com" },
          url: "https://www.maitsys.com/products/firefighter",
        }}
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "SAP Firefighter Access Control & Governance Platform", path: "/products/firefighter" }]} />

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

              <div className="flex gap-3 items-center">
                <a
                  href={SAP_PARTNER_URL}
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
              </div>
            </motion.div>

            {/* Hero content grid */}
            <div className="grid gap-12 items-center pb-8 lg:grid-cols-2">
              {/* Left */}
              <motion.div variants={stagger} initial="hidden" animate="show">
                {/* Badge */}
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-4"
                >
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide text-red-700">
                    SAP Certified Solution{" "}
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.1] tracking-tight"
                >
                  SAP Firefighter
                  <br />
                  <span className="text-red-600">Access Control</span>
                  <br />
                  Made Simple
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
                >
                  Automate emergency access requests, approvals, audit
                  monitoring, and compliance reporting for SAP S/4HANA and SAP
                  ERP environments with AI-powered governance controls.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col flex-wrap gap-3 mt-8 xs:flex-row"
                >
                  {/* <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex gap-2 justify-center items-center px-6 py-3 text-sm font-semibold text-white bg-red-600 rounded-xl shadow-sm transition-colors hover:bg-red-700 shadow-red-200"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    See the product in action
                  </a> */}
                  <Link
                    to="/contact-us"
                    className="inline-flex gap-2 justify-center items-center px-6 py-3 text-sm font-semibold rounded-xl border transition-colors border-slate-300 text-slate-700 hover:border-red-300 hover:text-red-600"
                  >
                    Request Pricing
                  </Link>
                  <a
                    href={SAP_PARTNER_URL}
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

              {/* Right — YouTube + product screenshot mosaic */}
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
                {/* YouTube embed */}
                <div className="overflow-hidden relative rounded-2xl border shadow-2xl shadow-slate-200 border-slate-100 aspect-video">
                  <iframe
                    src={`${YOUTUBE_URL}?rel=0&modestbranding=1`}
                    title="Maitsys SAP FireFighter Solution Demo"
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

        {/* ── 10 KEY HIGHLIGHTS — Editorial spread ────────────────── */}
        <section className="overflow-hidden relative pt-8 pb-12 bg-white sm:pt-12 sm:pb-16">
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
              className="mb-12 sm:mb-16"
            >
              <div className="flex gap-3 items-center mb-6">
                <div className="w-12 h-px bg-red-600" />
                <span className="text-red-600 text-[11px] font-bold tracking-[0.25em]">
                  The Feature Catalog
                </span>
              </div>
              <div className="grid gap-8 items-end lg:grid-cols-12">
                <h2 className="lg:col-span-7 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
                  Eleven reasons enterprises
                  <br />
                  trust Maitsys to govern
                  <br />
                  <span className="text-red-600">SAP Firefighter access.</span>
                </h2>
                <p className="text-base leading-relaxed lg:col-span-5 text-slate-500 sm:text-lg lg:pb-3">
                  A deeper look at the capabilities engineered into the Maitsys
                  Access Guardian — each one shaped by real audits, real
                  incidents, and real SAP security teams running
                  mission-critical S/4HANA environments.
                </p>
              </div>
            </motion.div>

            {/* Editorial feature spreads */}
            <div className="flex flex-col gap-12 sm:gap-16">
              {highlights.map((h, idx) => {
                const Preview = previewMap[h.preview];
                const isEven = idx % 2 === 0;
                return (
                  <motion.article
                    key={h.no}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                    className="relative"
                  >
                    {/* Asymmetric grid — text 5 cols, gap 1, visual 6 cols */}
                    <div
                      className={`grid gap-10 items-center lg:grid-cols-12 lg:gap-16`}
                    >
                      {/* Text side */}
                      <div
                        className={`lg:col-span-5 ${isEven ? "":"lg:order-2"}`}
                      >
                        {/* Eyebrow */}
                        <div className="flex gap-4 items-center mb-7">
                          <span className="font-mono text-[11px] tracking-[0.2em] text-slate-400 font-semibold">
                            {h.category} · {String(h.no).padStart(2, "0")} / {highlights.length}
                          </span>
                          <div className="flex-1 h-px bg-gradient-to-r to-transparent from-slate-200" />
                        </div>

                        <h3 className="text-3xl sm:text-[2.25rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
                          {h.title}
                        </h3>

                        {/* Lead paragraph */}
                        <p className="text-slate-700 text-lg leading-[1.7] mb-5 font-medium">
                          {h.lead}
                        </p>

                        {/* Detail paragraph */}
                        <p className="text-slate-500 text-[0.95rem] leading-[1.75] mb-7">
                          {h.detail}
                        </p>

                        {/* Pullquote */}
                        <div className="py-1 pl-5 mb-7 border-l-2 border-red-600">
                          <p className="text-base font-semibold leading-snug text-slate-900">
                            "{h.pullquote}"
                          </p>
                        </div>

                        {/* Bullets */}
                        <ul className="space-y-2.5">
                          {h.bullets.map((b) => (
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
                        className={`lg:col-span-6 ${isEven ? "":"lg:order-1"}`}
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
                              <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                              </div>
                              <div className="ml-3 px-3 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] text-slate-400 font-mono">
                                maitsys.com
                              </div>
                              <div className="ml-auto text-[10px] text-slate-300 font-mono">
                                Live
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
        {/* ── PROCESS STEPS ──────────────────────────────────────── */}
        <section className="py-12 bg-slate-950 sm:py-16">
          <div className="px-4 mx-auto max-w-8xl sm:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center">
                <p className="mb-3 text-xs font-semibold tracking-widest text-red-500">
                  How It Works
                </p>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  From Request to Resolution
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-slate-400">
                  A streamlined 4-step process ensuring every access request is
                  properly authorized, delivered, and monitored.
                </p>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, idx) => (
                  <motion.div
                    key={step.no}
                    variants={fadeUp}
                    className="relative group"
                  >
                    {/* Connector line */}
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
        {/* ── TECH CAPABILITIES ───────────────────────────────────── */}
        <section className="py-12 bg-white border-t sm:py-16 border-slate-100">
          <div className="px-4 mx-auto max-w-8xl sm:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeUp} className="mb-12 text-center">
                <p className="mb-3 text-xs font-semibold tracking-widest text-red-700">
                  Infrastructure
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  Built with Modern Technology
                </h2>
                <p className="mt-3 text-slate-500">
                  Enterprise-grade infrastructure for security and reliability
                </p>
                <div className="flex gap-4 justify-center items-center mt-4 text-xs text-slate-600">
                  <Link
                    to="/products/firefighter/privacy-policy"
                    className="underline transition-colors hover:text-red-700 underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                  <span className="text-slate-400">|</span>
                  <Link
                    to="/products/firefighter/terms-and-conditions"
                    className="underline transition-colors hover:text-red-700 underline-offset-2"
                  >
                    Terms and Conditions
                  </Link>
                </div>
              </motion.div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: "☁️",
                    title: "Multi-Cloud",
                    desc: "Supports AWS, Azure, GCP",
                    bg: "bg-violet-50 border-violet-100",
                  },
                  {
                    icon: "🌐",
                    title: "SaaS-Based",
                    desc: "Zero infrastructure needed",
                    bg: "bg-emerald-50 border-emerald-100",
                  },
                  {
                    icon: "❤️",
                    title: "Health Framework",
                    desc: "Continuous monitoring",
                    bg: "bg-red-50 border-red-100",
                  },
                  {
                    icon: "🛡️",
                    title: "Enterprise Security",
                    desc: "SOC 2 & ISO 27001",
                    bg: "bg-amber-50 border-amber-100",
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
            </motion.div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <QuickViewUi
          title="Ready to Streamline Your SAP Firefighter Access?"
          description="Join leading enterprises using Maitsys to secure and monitor their SAP environments"
          linkName="Connect with Us"
          url="/contact-us"
          title_className="text-3xl text-red-600 lg:text-5xl font-bold text-center leading-tight lg:leading-[1.15]"
        />
      </main>
    </>
  );
};

export default Firefighter;
