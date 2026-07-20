import React from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

type CountUpProps = {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  formatter?: (v: number) => string;
  className?: string;
};

const CountUp: React.FC<CountUpProps> = ({
  to,
  duration = 1.6,
  prefix = "",
  suffix = "",
  decimals = 0,
  formatter,
  className,
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) =>
    formatter
      ? formatter(latest)
      : `${prefix}${latest.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}${suffix}`,
  );
  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, to, duration, mv]);
  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
};
import {
  ArrowLeft,
  Play,
  TrendingUp,
  Bell,
  Sparkles,
  FileText,
  MessageSquare,
  ShieldAlert,
  Trash2,
  Cloud,
  Lock,
  EyeOff,
  Database,
  Handshake,
  DollarSign,
  Server,
  TrendingDown,
  Activity,
} from "lucide-react";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import QuickViewUi from "../../components/ui/CountUp/QuickViewUi";

const DEMO_URL = "https://ccm.maitsys.com/invoice-demo";

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

/* ── 10 Key CCM Features ──────────────────────────────────────── */
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
    category: "Visibility",
    title: "Unified Cloud Cost Dashboard",
    lead: "A single pane of glass for Azure, AWS, and GCP — every dollar across every account, subscription, and project rolled up in real time.",
    detail:
      "Stop reconciling three different billing portals at month-end. CCM ingests native billing APIs, normalises currency, tags, and resource hierarchies, then surfaces blended trends, anomaly bands, and run-rate forecasts on one editorial dashboard. Drill from total spend → CSP → service → tag → resource in two clicks.",
    pullquote: "One pane. Three clouds. Zero spreadsheets.",
    bullets: [
      "Live Azure, AWS, GCP roll-up",
      "Tag-normalised drill-down",
      "Run-rate vs. budget bands",
    ],
    preview: "dashboard",
  },
  {
    no: 2,
    category: "Optimization",
    title: "Savings Center",
    lead: "A prioritised queue of every actionable saving opportunity in your environment — rightsizing, reservations, idle shutdowns, storage tiering — ranked by dollar impact.",
    detail:
      "Each opportunity is paired with a confidence score, projected monthly saving, implementation effort, and a one-click runbook. Approve, schedule, or ignore from inside the platform — no Terraform diffs to copy-paste. Track realised savings against forecast so finance can audit the FinOps program in numbers, not narrative.",
    pullquote: "$10,250 in pre-validated savings, waiting on a click.",
    bullets: [
      "Confidence-scored recommendations",
      "One-click runbook execution",
      "Realised vs. forecast tracking",
    ],
    preview: "savings",
  },
  {
    no: 3,
    category: "Detection",
    title: "Smart Alerts & Anomaly Detection",
    lead: "Models trained on your historical spend catch cost spikes the moment they form — not after the invoice lands.",
    detail:
      "Per-service baselines learn weekday/weekend, business-hours, and seasonal patterns. Deviations beyond a configurable z-score fire to Slack, Teams, email, or webhook with a chart, a likely-cause hypothesis, and the responsible resource owner pre-tagged. Catch a rogue test cluster at hour 2, not at $42,000.",
    pullquote: "Caught at hour 2 — not at the invoice.",
    bullets: [
      "Per-service learned baselines",
      "Multi-channel notification",
      "Cause hypothesis + owner tag",
    ],
    preview: "alerts",
  },
  {
    no: 4,
    category: "Intelligence",
    title: "AI Executive Summary",
    lead: "A board-ready paragraph generated weekly that explains what happened to spend — and why — in plain English.",
    detail:
      "No more screenshotting charts for the CFO deck. CCM's LLM layer compresses thousands of cost events into a narrated brief: top movers, what drove them, which optimisations landed, and where attention is needed next week. Editable, exportable to PDF, and signed with the data window it was generated from.",
    pullquote: "Your weekly cost story, written for you.",
    bullets: [
      "Narrated weekly brief",
      "Top-mover attribution",
      "Editable PDF export",
    ],
    preview: "executive-summary",
  },
  {
    no: 5,
    category: "Forecasting",
    title: "Cost Forecasting",
    lead: "Confidence-banded forecasts at the account, service, and tag level — so finance plans against ranges, not vibes.",
    detail:
      "An ensemble of seasonal-decomposition and gradient-boosted models projects 30, 60, and 90-day spend with P50/P80/P95 bands. Overlay planned releases, freeze windows, or reservation purchases to see their impact before commit. Export to FP&A in CSV or push directly into Anaplan / Workday Adaptive.",
    pullquote: "Plan against ranges. Not against vibes.",
    bullets: [
      "30 / 60 / 90-day projections",
      "P50 / P80 / P95 bands",
      "FP&A-ready exports",
    ],
    preview: "forecast",
  },
];

/* ── Mini UI preview components ──────────────────────────────── */

const PreviewDashboard: React.FC = () => {
  const points = [42, 38, 51, 48, 62, 58, 71, 68, 79, 74, 86, 92];
  const max = Math.max(...points);
  const w = 100;
  const h = 38;
  const step = w / (points.length - 1);
  const path = points
    .map((v, i) => `${i === 0 ? "M" : "L"}${i * step},${h - (v / max) * h}`)
    .join(" ");
  const areaPath = `${path} L${w},${h} L0,${h} Z`;
  return (
    <div className="flex overflow-hidden flex-col h-full text-sm rounded-xl ring-1 bg-slate-950 ring-red-900/40">
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-800 bg-slate-900/70">
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center w-5 h-5 bg-gradient-to-br from-red-500 to-red-700 rounded-md">
            <Cloud className="w-3 h-3 text-white" />
          </div>
          <span className="text-xs font-semibold text-slate-200">
            CCM · Spend Overview
          </span>
        </div>
        <div className="ml-auto flex items-center gap-1 text-[10px]">
          {["30d", "90d", "QTD", "YTD"].map((t, i) => (
            <span
              key={t}
              className={`px-2 py-1 rounded ${
                i === 1 ? "bg-red-600 text-white font-bold" : "text-slate-400"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 p-2 border-b border-slate-800">
        {[
          { l: "Total", v: "$842k", d: "+4.2%", c: "text-red-300" },
          { l: "Saved", v: "$10k", d: "+22%", c: "text-red-400" },
          { l: "Forecast", v: "$891k", d: "P80", c: "text-red-200" },
        ].map((k) => (
          <div
            key={k.l}
            className="bg-slate-900 rounded-md px-2.5 py-2 border border-slate-800"
          >
            <div className="text-slate-500 text-[9px] tracking-wider">
              {k.l}
            </div>
            <div className="flex items-end gap-1.5 mt-0.5">
              <div className="text-base font-bold leading-none text-white">
                {k.v}
              </div>
              <div className={`text-[9px] font-semibold ${k.c}`}>{k.d}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-1 p-3 min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2 text-[10px]">
          <span className="flex gap-1 items-center text-slate-400">
            <span className="w-2 h-2 bg-red-600 rounded-sm" /> Azure
          </span>
          <span className="flex gap-1 items-center text-slate-400">
            <span className="w-2 h-2 bg-red-400 rounded-sm" /> AWS
          </span>
          <span className="flex gap-1 items-center text-slate-400">
            <span className="w-2 h-2 bg-red-300 rounded-sm" /> GCP
          </span>
          <span className="ml-auto font-bold text-red-400">+12% MoM</span>
        </div>
        <svg
          viewBox={`0 0 ${w} ${h + 4}`}
          className="flex-1 w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="ccmArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(220,38,38)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(220,38,38)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#ccmArea)" />
          <path
            d={path}
            fill="none"
            stroke="rgb(220,38,38)"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
          {points.map((v, i) => (
            <circle
              key={i + "p"}
              cx={i * step}
              cy={h - (v / max) * h}
              r={i === points.length - 1 ? 1.2 : 0.4}
              fill={i === points.length - 1 ? "white" : "rgb(220,38,38)"}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

const PreviewSavings: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
    <div className="flex gap-2 items-center px-4 py-3 bg-gradient-to-r from-red-50 to-rose-50 border-b border-slate-100">
      <Sparkles className="w-4 h-4 text-red-600 shrink-0" />
      <span className="flex-1 min-w-0 text-sm font-semibold truncate text-slate-800">
        Savings Center
      </span>
      <span className="ml-auto text-xs font-bold text-red-600 shrink-0">
        $184,250 / mo
      </span>
    </div>
    <div className="overflow-auto flex-1 divide-y divide-slate-50">
      {[
        {
          t: "Rightsize 14 oversized EC2 m5.4xlarge → m5.xlarge",
          s: "$42,180",
          c: "High",
          cc: "bg-red-100 text-red-700",
          csp: "AWS",
        },
        {
          t: "Purchase 1-yr Azure Reserved VMs (D-series)",
          s: "$38,420",
          c: "High",
          cc: "bg-red-100 text-red-700",
          csp: "Azure",
        },
        {
          t: "Delete 184 unattached EBS volumes (90d+ idle)",
          s: "$22,940",
          c: "High",
          cc: "bg-red-100 text-red-700",
          csp: "AWS",
        },
        {
          t: "Tier 4.2 TB of cold storage → GCS Coldline",
          s: "$18,310",
          c: "Med",
          cc: "bg-rose-100 text-rose-700",
          csp: "GCP",
        },
      ].map((r) => (
        <div
          key={r.t}
          className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50"
        >
          <span className="text-[9px] font-bold w-9 text-center px-1 py-0.5 rounded bg-slate-100 text-slate-600">
            {r.csp}
          </span>
          <span className="text-slate-700 text-[11px] flex-1 truncate min-w-0">
            {r.t}
          </span>
          <span
            className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${r.cc}`}
          >
            {r.c}
          </span>
          <span className="w-16 text-xs font-bold text-right text-red-600">
            {r.s}
          </span>
        </div>
      ))}
    </div>
    <div className="px-4 py-2.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
      <span className="text-slate-500 text-[10px]">42 opportunities</span>
      <button className="bg-red-600 text-white rounded-md text-[10px] px-3 py-1 font-semibold">
        Approve top 4
      </button>
    </div>
  </div>
);

const PreviewAlerts: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full text-sm rounded-xl bg-slate-900">
    <div className="flex gap-2 items-center px-4 py-3 border-b border-slate-800">
      <Bell className="w-4 h-4 text-red-400" />
      <span className="font-semibold text-slate-200">Anomaly Detection</span>
      <span className="flex gap-1 items-center ml-auto text-xs text-red-400">
        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
        {"Live"}
      </span>
    </div>
    <div className="flex flex-col flex-1 gap-2 p-3">
      {[
        {
          svc: "AWS · EC2",
          msg: "Spend +312% above baseline",
          time: "12 min ago",
          z: "z=4.8",
          tone: "border-red-500 bg-red-500/5",
          dot: "bg-red-500",
        },
        {
          svc: "Azure · Storage",
          msg: "Egress spike — 2.4 TB",
          time: "1h 20m ago",
          z: "z=2.9",
          tone: "border-red-400 bg-red-400/5",
          dot: "bg-red-400",
        },
        {
          svc: "GCP · BigQuery",
          msg: "Query cost +84% (prj:analytics)",
          time: "3h ago",
          z: "z=2.1",
          tone: "border-red-400 bg-red-400/5",
          dot: "bg-red-400",
        },
      ].map((a) => (
        <div
          key={a.msg}
          className={`border-l-2 ${a.tone} rounded-r-lg p-2.5 flex items-start gap-2`}
        >
          <span
            className={`w-2 h-2 rounded-full mt-1 ${a.dot} animate-pulse`}
          />
          <div className="flex-1 min-w-0">
            <div className="flex gap-2 items-center">
              <span className="text-[9px] font-mono text-slate-400">
                {a.svc}
              </span>
              <span className="text-[9px] font-mono text-slate-500">{a.z}</span>
              <span className="ml-auto text-[9px] text-slate-500">
                {a.time}
              </span>
            </div>
            <div className="text-slate-200 text-xs font-semibold mt-0.5 truncate min-w-0">
              {a.msg}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const PreviewExecutiveSummary: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
    <div className="flex gap-2 items-center px-4 py-3 bg-gradient-to-r to-red-50 border-b border-slate-100 from-slate-50">
      <FileText className="w-4 h-4 text-red-600" />
      <span className="text-sm font-semibold text-slate-700">
        Weekly Executive Brief
      </span>
      <span className="ml-auto font-mono text-xs text-slate-400">
        Wk 21 · 2026
      </span>
    </div>
    <div className="flex flex-col flex-1 gap-3 p-4">
      <div className="text-[10px] font-bold tracking-wider text-red-600">
        Headline
      </div>
      <p className="text-sm leading-relaxed text-slate-700">
        Cloud spend ended the week at{" "}
        <span className="font-bold text-slate-900">$184,250</span>,{" "}
        <span className="font-bold text-red-600">4.2% under</span> pacing. Azure
        absorbed the largest movement (
        <span className="font-bold text-amber-600">{"+12%"}</span>)
        {" driven by a BigQuery workload migration; this is on-plan."}
      </p>
      <div className="text-[10px] font-bold tracking-wider text-red-600 mt-1">
        Top Movers
      </div>
      <ul className="text-slate-500 text-xs space-y-1.5">
        <li className="flex gap-2">
          <span className="text-red-500">▲</span> EC2 rightsizing landed — $42k
          realised
        </li>
        <li className="flex gap-2">
          <span className="text-amber-500">▲</span> Azure Storage egress +18% —
          investigate
        </li>
        <li className="flex gap-2">
          <span className="text-red-400">▼</span> GCP idle VMs cleaned — $11k
          saved
        </li>
      </ul>
      <div className="flex gap-2 mt-auto">
        <button className="flex-1 bg-slate-900 text-white text-[10px] py-2 rounded-md font-semibold">
          Export PDF
        </button>
        <button className="flex-1 border border-slate-200 text-slate-600 text-[10px] py-2 rounded-md font-semibold">
          Edit brief
        </button>
      </div>
    </div>
  </div>
);

const PreviewForecast: React.FC = () => {
  const w = 100;
  const h = 50;
  const actual = [42, 46, 50, 48, 55, 62, 58, 64];
  const forecast = [64, 68, 72, 76, 79, 82, 86, 90];
  const upper = forecast.map((v) => v + 8);
  const lower = forecast.map((v) => Math.max(v - 8, 0));
  const all = [...actual, ...forecast, ...upper];
  const max = Math.max(...all);
  const stepA = (w * 0.5) / (actual.length - 1);
  const stepF = (w * 0.5) / (forecast.length - 1);
  const actualPath = actual
    .map((v, i) => `${i === 0 ? "M" : "L"}${i * stepA},${h - (v / max) * h}`)
    .join(" ");
  const fStart = w * 0.5;
  const forecastPath = forecast
    .map(
      (v, i) =>
        `${i === 0 ? "M" : "L"}${fStart + i * stepF},${h - (v / max) * h}`,
    )
    .join(" ");
  const bandTop = upper
    .map(
      (v, i) =>
        `${i === 0 ? "M" : "L"}${fStart + i * stepF},${h - (v / max) * h}`,
    )
    .join(" ");
  const bandBot = lower
    .map(
      (_v, i) =>
        `L${fStart + (lower.length - 1 - i) * stepF},${h - (lower[lower.length - 1 - i] / max) * h}`,
    )
    .join(" ");
  const bandPath = `${bandTop} ${bandBot} Z`;

  return (
    <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
      <div className="flex gap-2 items-center px-4 py-3 border-b border-slate-100 bg-slate-50">
        <TrendingUp className="w-4 h-4 text-red-600" />
        <span className="text-sm font-semibold text-slate-700">
          90-Day Forecast
        </span>
        <span className="ml-auto text-[10px] text-slate-500 font-mono">
          P50 / P80 / P95
        </span>
      </div>
      <div className="flex flex-col flex-1 gap-3 p-4">
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { l: "30d", v: "$874k", c: "text-slate-900" },
            { l: "60d", v: "$921k", c: "text-red-600" },
            { l: "90d", v: "$968k", c: "text-red-800" },
          ].map((k) => (
            <div
              key={k.l}
              className="py-2 rounded-lg border bg-slate-50 border-slate-100"
            >
              <div className="text-[9px] text-slate-400 tracking-wider">
                {k.l}
              </div>
              <div className={`font-bold text-base ${k.c}`}>{k.v}</div>
            </div>
          ))}
        </div>
        <div className="relative flex-1">
          <svg
            viewBox={`0 0 ${w} ${h + 4}`}
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path d={bandPath} fill="rgb(220,38,38)" fillOpacity="0.18" />
            <path
              d={actualPath}
              fill="none"
              stroke="rgb(15,23,42)"
              strokeWidth="0.9"
            />
            <path
              d={forecastPath}
              fill="none"
              stroke="rgb(220,38,38)"
              strokeWidth="0.9"
              strokeDasharray="2 1.5"
            />
            <line
              x1={fStart}
              y1="0"
              x2={fStart}
              y2={h}
              stroke="rgb(203,213,225)"
              strokeWidth="0.3"
              strokeDasharray="1 1"
            />
          </svg>
          <span className="absolute top-0 left-2 text-[8px] font-mono text-slate-500">
            Actual
          </span>
          <span className="absolute top-0 right-2 text-[8px] font-mono text-red-600">
            Forecast
          </span>
        </div>
      </div>
    </div>
  );
};

const PreviewInvoice: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
    <div className="flex gap-2 items-center px-4 py-3 border-b border-slate-100 bg-slate-50">
      <FileText className="w-4 h-4 text-slate-600" />
      <span className="text-sm font-semibold text-slate-700">
        Invoice Reconciliation
      </span>
      <span className="ml-auto text-[10px] font-mono text-slate-400">
        Apr 2026
      </span>
    </div>
    <div className="flex flex-col flex-1 gap-3 p-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg border bg-slate-50 border-slate-100">
          <div className="text-[9px] tracking-wider text-slate-400 mb-1">
            Invoiced
          </div>
          <div className="text-lg font-bold text-slate-900">$842,108</div>
          <div className="text-[10px] text-slate-500 mt-0.5">
            4,218 line items
          </div>
        </div>
        <div className="p-3 bg-red-50 rounded-lg border border-red-100">
          <div className="text-[9px] tracking-wider text-red-600 mb-1">
            Matched
          </div>
          <div className="text-lg font-bold text-red-700">99.4%</div>
          <div className="text-[10px] text-red-600 mt-0.5">
            27 lines need review
          </div>
        </div>
      </div>
      <div className="p-3 text-xs bg-red-50 rounded-lg border border-red-200">
        <div className="flex items-center gap-2 font-bold text-red-800 text-[11px]">
          <ShieldAlert className="w-3.5 h-3.5" /> Variance flagged
        </div>
        <div className="text-red-700 text-[11px] mt-1 leading-relaxed">
          {`14 EC2 r5.2xlarge instances billed at on-demand — EA rate should apply.`}
          <span className="font-bold"> {"Δ +$3,420"}</span>
        </div>
      </div>
      <div className="p-3 text-xs bg-red-50 rounded-lg border border-red-200">
        <div className="font-bold text-red-800 text-[11px]">
          Credits recovered
        </div>
        <div className="text-red-700 text-[11px] mt-1">
          $4,180 in unused Azure credits queued for renewal
        </div>
      </div>
    </div>
  </div>
);

const PreviewChat: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full text-sm rounded-xl bg-slate-950">
    <div className="flex gap-2 items-center px-4 py-3 border-b border-slate-800">
      <div className="flex justify-center items-center w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded-full">
        <MessageSquare className="w-3 h-3 text-slate-950" />
      </div>
      <span className="font-semibold text-slate-200">CCM Copilot</span>
      <span className="ml-auto text-[10px] text-red-400 font-mono">
        ● grounded
      </span>
    </div>
    <div className="flex overflow-auto flex-col flex-1 gap-3 px-4 pt-3 pb-4">
      <div className="flex justify-end">
        <div className="bg-red-600 text-white px-3 py-2 rounded-2xl rounded-tr-none max-w-[80%] text-xs font-medium">
          Why did Azure spend jump on Tuesday?
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-slate-800 text-slate-200 px-3 py-2 rounded-2xl rounded-tl-none max-w-[85%] text-xs leading-relaxed">
          Azure spend rose <span className="font-bold text-red-400">+18%</span>{" "}
          on Apr 22 driven by{" "}
          <span className="font-mono text-red-300">
            sub: data-platform-prod
          </span>{" "}
          — a BigQuery → Synapse migration ran a 2.4 TB backfill.
          <div className="mt-1.5 text-[10px] text-slate-400 font-mono">
            Sources: billing[Apr22], tag:env=prod, 14 resources
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-red-600 text-white px-3 py-2 rounded-2xl rounded-tr-none max-w-[80%] text-xs font-medium">
          Show idle VMs in EU-West tagged team:platform
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-slate-800 text-slate-200 px-3 py-2 rounded-2xl rounded-tl-none max-w-[85%] text-xs leading-relaxed">
          Found <span className="font-bold text-red-400">9 idle VMs</span> · CPU
          &lt; 5% for 7d ·{" "}
          <span className="font-bold text-red-300">$3,820/mo</span> recoverable
        </div>
      </div>
    </div>
  </div>
);

const PreviewBudget: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
    <div className="flex gap-2 items-center px-4 py-3 border-b border-slate-100 bg-slate-50">
      <ShieldAlert className="w-4 h-4 text-red-600" />
      <span className="text-sm font-semibold text-slate-700">
        Budget Health
      </span>
      <span className="ml-auto text-[10px] text-slate-400 font-mono">
        Q2 2026
      </span>
    </div>
    <div className="flex flex-col flex-1 gap-3 p-4">
      {[
        {
          name: "team:platform",
          used: 82,
          budget: "$240k",
          spent: "$197k",
          tone: "from-red-400 to-red-600",
          status: "At risk",
          sc: "text-red-600 bg-red-50",
        },
        {
          name: "team:data",
          used: 96,
          budget: "$180k",
          spent: "$173k",
          tone: "from-red-600 to-red-800",
          status: "Critical",
          sc: "text-red-700 bg-red-100",
        },
        {
          name: "team:web",
          used: 54,
          budget: "$120k",
          spent: "$65k",
          tone: "from-red-300 to-red-400",
          status: "Healthy",
          sc: "text-red-500 bg-red-50",
        },
        {
          name: "env:staging",
          used: 38,
          budget: "$60k",
          spent: "$23k",
          tone: "from-red-200 to-red-300",
          status: "Healthy",
          sc: "text-red-400 bg-red-50",
        },
      ].map((b) => (
        <div key={b.name} className="space-y-1">
          <div className="flex gap-2 items-center text-xs">
            <span className="font-mono font-semibold text-slate-700">
              {b.name}
            </span>
            <span
              className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${b.sc}`}
            >
              {b.status}
            </span>
            <span className="ml-auto text-slate-500 font-mono text-[10px]">
              {b.spent} / {b.budget}
            </span>
          </div>
          <div className="overflow-hidden h-2 rounded-full bg-slate-100">
            <div
              className={`h-full bg-gradient-to-r ${b.tone} rounded-full`}
              style={{ width: `${b.used}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const PreviewWaste: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full bg-white rounded-xl border border-slate-100">
    <div className="flex gap-2 items-center px-4 py-3 bg-gradient-to-r from-red-50 to-amber-50 border-b border-slate-100">
      <Trash2 className="w-4 h-4 text-red-600" />
      <span className="text-sm font-semibold text-slate-700">
        Top Waste Resources
      </span>
      <span className="ml-auto text-xs font-bold text-red-600">$61,420/mo</span>
    </div>
    <div className="flex overflow-auto flex-col flex-1 divide-y divide-slate-50">
      {[
        {
          r: "i-0a4b8...c9d2",
          t: "EC2 m5.4xlarge",
          why: "CPU 1.2% · 18d",
          c: "$8,420",
          tag: "@s.morgan",
        },
        {
          r: "vol-91...a3f",
          t: "EBS · 4 TB · unattached",
          why: "Detached 47d",
          c: "$7,240",
          tag: "—",
        },
        {
          r: "ccm-prj-stg-db",
          t: "GCP Cloud SQL db-16",
          why: "0 conn · weekends",
          c: "$5,910",
          tag: "@data-eng",
        },
        {
          r: "ccm-snap-2024",
          t: "412 stale snapshots",
          why: ">180d old",
          c: "$4,180",
          tag: "—",
        },
        {
          r: "lb-pub-old",
          t: "ELB classic · 0 targets",
          why: "Zombie · 92d",
          c: "$2,140",
          tag: "@ops",
        },
      ].map((w) => (
        <div
          key={w.r}
          className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50"
        >
          <div className="flex-1 min-w-0">
            <div className="text-slate-800 text-[11px] font-semibold truncate">
              {w.t}
            </div>
            <div className="flex items-center gap-2 text-[9px] text-slate-400 font-mono">
              <span>{w.r}</span>
              <span>·</span>
              <span>{w.why}</span>
            </div>
          </div>
          <span className="text-[9px] text-slate-500 font-mono">{w.tag}</span>
          <span className="w-16 text-xs font-bold text-right text-red-600">
            {w.c}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const PreviewCsp: React.FC = () => (
  <div className="flex overflow-hidden flex-col h-full rounded-xl bg-slate-950">
    <div className="flex gap-2 items-center px-4 py-3 border-b border-slate-800">
      <span className="text-sm font-semibold text-slate-200">
        Commitment Coverage
      </span>
      <span className="ml-auto text-[10px] text-red-400 font-mono">
        eff. rate +18%
      </span>
    </div>
    <div className="flex flex-col flex-1 gap-3 p-4">
      {[
        {
          csp: "AWS",
          plan: "Compute Savings Plan · 1yr",
          cov: 78,
          util: 96,
          c: "from-red-500 to-red-700",
          sav: "$32k/mo",
        },
        {
          csp: "Azure",
          plan: "Reserved VM · D-series · 3yr",
          cov: 64,
          util: 92,
          c: "from-red-400 to-red-600",
          sav: "$28k/mo",
        },
        {
          csp: "GCP",
          plan: "CUD · N2 · 1yr",
          cov: 41,
          util: 88,
          c: "from-red-300 to-red-500",
          sav: "$14k/mo",
        },
      ].map((r) => (
        <div
          key={r.csp}
          className="p-3 rounded-lg border bg-slate-900 border-slate-800"
        >
          <div className="flex gap-2 items-center mb-2">
            <span
              className={`text-[9px] font-bold px-1.5 py-0.5 rounded bg-gradient-to-r ${r.c} text-slate-950`}
            >
              {r.csp}
            </span>
            <span className="text-slate-300 text-[11px] font-semibold truncate flex-1 min-w-0">
              {r.plan}
            </span>
            <span className="ml-auto text-red-400 text-[10px] font-bold">
              {r.sav}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[9px]">
            <div>
              <div className="flex items-center justify-between text-slate-500 mb-0.5">
                <span>Coverage</span>
                <span className="font-semibold text-slate-300">{r.cov}%</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${r.c} rounded-full`}
                  style={{ width: `${r.cov}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-slate-500 mb-0.5">
                <span>Utilisation</span>
                <span className="font-semibold text-slate-300">{r.util}%</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-400 rounded-full"
                  style={{ width: `${r.util}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <button className="py-2 mt-auto text-xs font-bold text-white bg-red-600 rounded-lg">
        Simulate next commit →
      </button>
    </div>
  </div>
);

const previewMap: Record<string, React.FC> = {
  dashboard: PreviewDashboard,
  savings: PreviewSavings,
  alerts: PreviewAlerts,
  "executive-summary": PreviewExecutiveSummary,
  forecast: PreviewForecast,
  invoice: PreviewInvoice,
  chat: PreviewChat,
  budget: PreviewBudget,
  waste: PreviewWaste,
  csp: PreviewCsp,
};

/* ── Process Steps ───────────────────────────────────────────── */
const steps = [
  {
    no: "01",
    title: "Connect Your Clouds",
    desc: "One-click read-only connection to Azure, AWS, and GCP. Historical spend ingested in minutes — no agents, no rewrites.",
  },
  {
    no: "02",
    title: "Discover & Baseline",
    desc: "CCM maps your hierarchy, normalises tags, and learns per-service baselines so anomalies and waste surface from day one.",
  },
  {
    no: "03",
    title: "Optimise & Forecast",
    desc: "Prioritised savings, confidence-banded forecasts, and AI-generated briefs feed FinOps, engineering, and finance in their own language.",
  },
  {
    no: "04",
    title: "Govern & Report",
    desc: "Budgets bite, commits get optimised, invoices reconcile. Realised savings flow to the CFO deck — automatically.",
  },
];

/* ── Stats ───────────────────────────────────────────────────── */
const stats = [
  { value: "60%", label: "Avg. Cloud Spend Reduction" },
  { value: "3", label: "CSPs Unified (Azure · AWS · GCP)" },
  { value: "24/7", label: "Anomaly Detection" },
  { value: "FinOps", label: "Foundation Aligned" },
];

/* ── Main Page ───────────────────────────────────────────────── */
const CloudCostOptimizer: React.FC = () => {
  return (
    <>
      <Seo
        title="Cloud Cost Optimization Platform for AWS, Azure & GCP"
        description="Optimize cloud costs across AWS, Azure, and GCP with real-time monitoring, AI-driven recommendations, forecasting, and automated savings insights."
        keywords={[
          "cloud cost optimization platform",
          "cloud cost optimizer software",
          "AWS Azure GCP cost management",
          "multi cloud cost monitoring tools",
          "FinOps cost optimization solutions",
          "cloud spend optimization platform",
          "AI powered cloud cost management",
          "enterprise cloud cost control",
        ]}
        url="/products/cloud-cost-optimizer"
        siteName="Maitsys"
        type="website"
        imageAlt="Maitsys Cloud Cost Optimization Platform"
        preloadImage={false}
      />
      <JsonLd
        schema={{
          "@type": "SoftwareApplication",
          name: "Cloud Cost Optimization Platform for AWS, Azure & GCP",
          description: "Optimize cloud costs across AWS, Azure, and GCP with real-time monitoring, AI-driven recommendations, forecasting, and automated savings insights.",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web-based",
          publisher: { "@type": "Organization", name: "Maitsys", url: "https://www.maitsys.com" },
          url: "https://www.maitsys.com/products/cloud-cost-optimizer",
        }}
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "Cloud Cost Optimization Platform for AWS, Azure & GCP", path: "/products/cloud-cost-optimizer" }]} />

      <main id="main-content" className="bg-white">
        {/* ── HERO ────────────────────────────────────────────── */}
        <section className="overflow-hidden relative bg-white">
          {/* Atmospheric red wash */}
          <div
            className="absolute inset-x-0 top-0 h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(220,38,38,0.10) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 0%, rgba(185,28,28,0.07) 0%, transparent 70%)",
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
              <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-slate-400">
                <span className="px-2 py-1 rounded border border-slate-200">
                  AZURE
                </span>
                <span className="px-2 py-1 rounded border border-slate-200">
                  AWS
                </span>
                <span className="px-2 py-1 rounded border border-slate-200">
                  GCP
                </span>
              </div>
            </motion.div>

            {/* Hero content grid */}
            <div className="grid gap-12 items-center pb-8 lg:grid-cols-2">
              <motion.div variants={stagger} initial="hidden" animate="show">
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mb-6"
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide text-red-700">
                    AI-Powered FinOps Platform
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.05] tracking-tight"
                >
                  Cut cloud spend.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-600 to-red-500">
                    Forecast it.
                  </span>
                  <br />
                  Govern it — across all three clouds.
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
                >
                  CCM is an enterprise-grade AI FinOps platform that monitors,
                  optimises, forecasts, and reduces cloud spending across
                  Microsoft Azure, AWS, and Google Cloud — with savings
                  recommendations, anomaly detection, and executive briefs in
                  one pane.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-col flex-wrap gap-3 mt-8 xs:flex-row"
                >
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex gap-2 justify-center items-center px-6 py-3 text-sm font-semibold text-white rounded-xl shadow-lg transition-colors bg-slate-900 hover:bg-slate-800 shadow-slate-900/10"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    See live demo
                  </a>
                  {/* <a
                    href={SIGNUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex gap-2 justify-center items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl transition-opacity hover:opacity-95"
                  >
                    Start free trial
                    <ArrowUpRight className="w-4 h-4" />
                  </a> */}
                  {/* <Link
                    to="/contact-us"
                    className="inline-flex gap-2 justify-center items-center px-6 py-3 text-sm font-semibold rounded-xl border transition-colors border-slate-300 text-slate-700 hover:border-cyan-300 hover:text-cyan-600"
                  >
                    Talk to FinOps team
                  </Link> */}
                  <Link
                    to="/contact-us"
                    className="inline-flex gap-2 justify-center items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-xl transition-opacity hover:opacity-95"
                  >
                    Talk to FinOps team
                  </Link>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="grid grid-cols-2 gap-4 mt-10 sm:grid-cols-4"
                >
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="pl-3 border-l-2 border-red-200"
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

              {/* Right — Live Dashboard mock + accent card */}
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
                <div className="overflow-hidden relative bg-white rounded-2xl border shadow-2xl shadow-red-200/30 border-slate-200">
                  {/* Dashboard top bar */}
                  <div className="flex justify-between items-center px-5 py-3 bg-gradient-to-r to-white border-b border-slate-100 from-slate-50">
                    <div className="flex items-center gap-2.5">
                      <div className="flex justify-center items-center w-7 h-7 bg-gradient-to-br from-red-600 to-red-400 rounded-lg">
                        <Cloud className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-900 leading-tight tracking-tight">
                          Cloud Cost Console
                        </div>
                        <div className="text-[9px] text-slate-600 leading-tight font-mono tracking-[0.14em] mt-0.5">
                          ccm.maitsys / live
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-[9px] font-semibold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full flex items-center gap-1 font-mono tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        {"Synced 30s"}
                      </span>
                      <Bell className="w-3.5 h-3.5 text-slate-400 animate-fadeindown" />
                    </div>
                  </div>

                  {/* KPI strip */}
                  <div className="grid grid-cols-1 gap-3 p-4 border-b sm:grid-cols-3 border-slate-100">
                    <div className="overflow-hidden relative p-3 bg-gradient-to-br to-white rounded-xl border border-slate-100 from-red-50/60">
                      <div className="absolute top-0 left-0 h-full w-0.5 bg-red-500" />
                      <div className="flex items-center justify-between mb-1.5">
                        <DollarSign className="w-3.5 h-3.5 text-red-600" />
                        <span className="text-[9px] font-bold text-red-700 flex items-center gap-0.5 font-mono">
                          <TrendingDown className="w-2.5 h-2.5" />
                          −18%
                        </span>
                      </div>
                      <div className="text-[9px] text-slate-500 font-semibold tracking-wider font-mono">
                        MTD Spend
                      </div>
                      <div className="text-base font-bold tracking-tight text-slate-900">
                        <CountUp to={1.42} decimals={2} prefix="$" suffix="M" />
                      </div>
                    </div>
                    <div className="overflow-hidden relative p-3 bg-gradient-to-br to-white rounded-xl border border-slate-100 from-red-50/40">
                      <div className="absolute top-0 left-0 h-full w-0.5 bg-red-400" />
                      <div className="flex items-center justify-between mb-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-red-500" />
                        <span className="text-[9px] font-bold text-red-700 font-mono">
                          +12 wins
                        </span>
                      </div>
                      <div className="text-[9px] text-slate-500 font-semibold tracking-wider font-mono">
                        Saved
                      </div>
                      <div className="text-base font-bold tracking-tight text-slate-900">
                        <CountUp to={10250} prefix="$" />
                      </div>
                    </div>
                    <div className="overflow-hidden relative p-3 bg-gradient-to-br to-white rounded-xl border border-slate-100 from-slate-50">
                      <div className="absolute top-0 left-0 h-full w-0.5 bg-slate-900" />
                      <div className="flex items-center justify-between mb-1.5">
                        <Server className="w-3.5 h-3.5 text-slate-700" />
                        <span className="text-[9px] font-bold text-slate-500 font-mono">
                          3 CSPs
                        </span>
                      </div>
                      <div className="text-[9px] text-slate-500 font-semibold tracking-wider font-mono">
                        Resources
                      </div>
                      <div className="text-base font-bold tracking-tight text-slate-900">
                        <CountUp to={12480} />
                      </div>
                    </div>
                  </div>

                  {/* Spend trend chart — stacked multi-cloud */}
                  <div className="px-4 pt-4 pb-3 border-b border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-slate-700" />
                          <span className="text-[11px] font-bold text-slate-900 tracking-tight">
                            Multi-cloud spend · 30d
                          </span>
                        </div>
                        <div className="text-[9px] text-rose-600 font-semibold font-mono mt-0.5 flex items-center gap-1">
                          <span className="w-1 h-1 bg-rose-500 rounded-full animate-pulse" />
                          {"2 anomalies detected"}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[9px] text-slate-500">
                        <span className="flex gap-1 items-center">
                          <span className="w-2 h-2 bg-red-600 rounded-sm" />
                          {"Azure"}
                        </span>
                        <span className="flex gap-1 items-center">
                          <span className="w-2 h-2 bg-red-400 rounded-sm" />
                          {"AWS"}
                        </span>
                        <span className="flex gap-1 items-center">
                          <span className="w-2 h-2 bg-red-300 rounded-sm" />
                          {"GCP"}
                        </span>
                      </div>
                    </div>
                    <svg
                      viewBox="0 0 320 90"
                      className="w-full h-24"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="azFill" x1="0" x2="0" y1="0" y2="1">
                          <stop
                            offset="0%"
                            stopColor="#dc2626"
                            stopOpacity="0.45"
                          />
                          <stop
                            offset="100%"
                            stopColor="#dc2626"
                            stopOpacity="0.02"
                          />
                        </linearGradient>
                        <linearGradient
                          id="awsFill"
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#f87171"
                            stopOpacity="0.4"
                          />
                          <stop
                            offset="100%"
                            stopColor="#f87171"
                            stopOpacity="0.02"
                          />
                        </linearGradient>
                        <linearGradient
                          id="gcpFill"
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#fca5a5"
                            stopOpacity="0.35"
                          />
                          <stop
                            offset="100%"
                            stopColor="#fca5a5"
                            stopOpacity="0.02"
                          />
                        </linearGradient>
                      </defs>
                      {[18, 45, 72].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          x2="320"
                          y1={y}
                          y2={y}
                          stroke="#e2e8f0"
                          strokeDasharray="2 4"
                        />
                      ))}
                      {/* GCP back layer */}
                      <path
                        d="M0,78 L32,74 L64,76 L96,68 L128,70 L160,62 L192,66 L224,56 L256,60 L288,50 L320,54 L320,90 L0,90 Z"
                        fill="url(#gcpFill)"
                        stroke="#fca5a5"
                        strokeWidth="1.2"
                      />
                      {/* AWS middle */}
                      <path
                        d="M0,62 L32,56 L64,60 L96,48 L128,52 L160,40 L192,44 L224,34 L256,38 L288,28 L320,32 L320,90 L0,90 Z"
                        fill="url(#awsFill)"
                        stroke="#f87171"
                        strokeWidth="1.4"
                      />
                      {/* Azure front */}
                      <path
                        d="M0,44 L32,40 L64,46 L96,32 L128,36 L160,24 L192,28 L224,18 L256,22 L288,14 L320,18 L320,90 L0,90 Z"
                        fill="url(#azFill)"
                        stroke="#dc2626"
                        strokeWidth="1.6"
                      />
                      {/* Anomaly marker */}
                      <circle cx="160" cy="24" r="3" fill="#f43f5e" />
                      <circle
                        cx="160"
                        cy="24"
                        r="6"
                        fill="none"
                        stroke="#f43f5e"
                        strokeOpacity="0.5"
                      >
                        <animate
                          attributeName="r"
                          from="3"
                          to="10"
                          dur="1.6s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="stroke-opacity"
                          from="0.6"
                          to="0"
                          dur="1.6s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </div>

                  {/* Optimisation feed + provider split */}
                  <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-5 sm:gap-3">
                    <div className="min-w-0 sm:col-span-3">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[11px] font-bold text-slate-900 tracking-tight">
                          Optimisation feed
                        </span>
                        <span className="text-[9px] text-slate-600 font-mono tracking-wider">
                          Live
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {[
                          {
                            t: "Rightsized 14 EC2 instances",
                            s: "−$8.4K/mo",
                            dot: "bg-red-500",
                            pos: false,
                          },
                          {
                            t: "Idle Azure SQL flagged",
                            s: "−$2.1K/mo",
                            dot: "bg-red-400",
                            pos: false,
                          },
                          {
                            t: "GCP egress spike · us-east1",
                            s: "+$1.7K",
                            dot: "bg-rose-600",
                            pos: true,
                          },
                          {
                            t: "Reserved instance match",
                            s: "−$3.2K/mo",
                            dot: "bg-red-500",
                            pos: false,
                          },
                        ].map((item) => (
                          <li
                            key={item.t}
                            className="flex items-center justify-between text-[10px] py-1 px-2 rounded-md hover:bg-slate-50 transition-colors min-w-0"
                          >
                            <span className="flex gap-2 items-center min-w-0 truncate text-slate-700">
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${item.dot} shrink-0`}
                              />
                              <span className="min-w-0 font-medium truncate">
                                {item.t}
                              </span>
                            </span>
                            <span
                              className={`font-mono font-bold shrink-0 ml-2 ${
                                item.pos ? "text-rose-600" : "text-red-600"
                              }`}
                            >
                              {item.s}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 sm:col-span-2 sm:mt-0">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[11px] font-bold text-slate-900 tracking-tight">
                          By CSP
                        </span>
                        <span className="text-[9px] text-slate-600 font-mono uppercase tracking-wider">
                          30d
                        </span>
                      </div>
                      <div className="space-y-2.5">
                        {[
                          {
                            name: "Azure",
                            pct: 48,
                            amt: "$680K",
                            color: "bg-red-600",
                          },
                          {
                            name: "AWS",
                            pct: 34,
                            amt: "$485K",
                            color: "bg-red-400",
                          },
                          {
                            name: "GCP",
                            pct: 18,
                            amt: "$255K",
                            color: "bg-red-300",
                          },
                        ].map((p) => (
                          <div key={p.name}>
                            <div className="flex items-center justify-between text-[10px] mb-1">
                              <span className="font-semibold text-slate-700">
                                {p.name}
                              </span>
                              <span className="font-mono text-slate-500">
                                {p.amt}
                              </span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                              <motion.div
                                className={`h-full ${p.color} rounded-full`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${p.pct}%` }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{
                                  duration: 1.4,
                                  ease: [0.22, 1, 0.36, 1] as const,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating savings card */}
                <div className="hidden absolute -bottom-4 -left-6 gap-3 items-center p-4 bg-white rounded-2xl border shadow-2xl animate-bounce shadow-slate-300/40 border-slate-100 sm:flex">
                  <div className="flex justify-center items-center w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-wider text-slate-600 font-semibold">
                      This month
                    </div>
                    <div className="text-lg font-bold leading-none text-slate-900">
                      <CountUp to={10250} prefix="$" /> saved
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── 10 KEY HIGHLIGHTS — Editorial spread ─────────────── */}
        <section className="overflow-hidden relative pt-8 pb-6 bg-white sm:pt-12 sm:pb-8">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.4]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 10%, rgba(220,38,38,0.07) 0%, transparent 45%), radial-gradient(circle at 85% 90%, rgba(185,28,28,0.06) 0%, transparent 45%)",
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
                  The Capability Catalog
                </span>
              </div>
              <div className="grid gap-8 items-end lg:grid-cols-12">
                <h2 className="lg:col-span-7 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05] tracking-tight">
                  Five reasons teams
                  <br />
                  trust Maitsys to run
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500">
                    multi-cloud cost intelligence.
                  </span>
                </h2>
                <p className="text-base leading-relaxed lg:col-span-5 text-slate-500 sm:text-lg lg:pb-3">
                  Each capability is shaped by real FinOps practitioners running
                  cost programs at scale across Azure, AWS, and GCP — not
                  another billing dashboard, but a working optimisation engine.
                </p>
              </div>
            </motion.div>

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
                    <div className="grid gap-10 items-center lg:grid-cols-12 lg:gap-16">
                      <div
                        className={`lg:col-span-5 min-w-0 ${isEven ? "":"lg:order-2"}`}
                      >
                        <div className="flex gap-4 items-center mb-7">
                          <span className="font-mono text-[11px] tracking-[0.2em] text-slate-400 font-semibold">
                            {h.category} ·{" "}
                            {String(h.no).padStart(2, "0")} / 05
                          </span>
                          <div className="flex-1 h-px bg-gradient-to-r to-transparent from-slate-200" />
                        </div>

                        <h3 className="text-3xl sm:text-[2.25rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-5">
                          {h.title}
                        </h3>

                        <p className="text-slate-700 text-lg leading-[1.7] mb-5 font-medium">
                          {h.lead}
                        </p>

                        <p className="text-slate-500 text-[0.95rem] leading-[1.75] mb-7">
                          {h.detail}
                        </p>

                        <div className="py-1 pl-5 mb-7 border-l-2 border-red-600">
                          <p className="text-base font-semibold leading-snug text-slate-900">
                            "{h.pullquote}"
                          </p>
                        </div>

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

                      <div className="hidden lg:block lg:col-span-1" />

                      <div
                        className={`lg:col-span-6 min-w-0 ${isEven ? "":"lg:order-1"}`}
                      >
                        <div className="relative group">
                          <div
                            className={`absolute inset-0 rounded-2xl border border-red-200 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 ${
                              isEven
                                ? "translate-x-4 translate-y-4"
                                : "-translate-x-4 translate-y-4"
                            }`}
                          />
                          <div className="overflow-hidden relative bg-gradient-to-br to-white rounded-2xl border shadow-2xl from-slate-50 border-slate-200 shadow-slate-200/60">
                            <div className="flex gap-2 items-center px-4 py-3 border-b backdrop-blur border-slate-100 bg-white/80">
                              <div className="flex gap-1.5 shrink-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                                <div className="w-2.5 h-2.5 rounded-full bg-red-200" />
                              </div>
                              <div className="ml-3 px-3 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] text-slate-400 font-mono truncate min-w-0 flex-1">
                                ccm.maitsys.com/{h.preview}
                              </div>
                              <div className="ml-auto text-[10px] text-red-600 font-mono font-bold shrink-0">
                                Live
                              </div>
                            </div>
                            <div
                              className="p-5 sm:p-6 bg-slate-50/50"
                              style={{ minHeight: "360px" }}
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

        {/* ── PARTNERSHIP GUARANTEE & PRIVACY PROMISE ─────────── */}
        <section className="overflow-hidden relative pt-4 pb-10 bg-white border-t sm:pt-6 sm:pb-16 border-slate-100">
          {/* Background grain + accent wash */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(0,0,0,1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(220,38,38,0.20) 0%, transparent 60%)",
            }}
          />

          <div className="relative px-4 mx-auto max-w-8xl sm:px-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="flex gap-3 items-center mb-8"
            >
              <div className="w-12 h-px bg-red-600" />
              <span className="text-red-600 text-[11px] font-bold tracking-[0.25em]">
                Partner Guarantee · Privacy Promise
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12">
              {/* LEFT — Giant 5.4% guarantee card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="relative lg:col-span-7"
              >
                <div className="overflow-hidden relative p-8 h-full rounded-3xl bg-slate-950 sm:p-12">
                  {/* Decorative grid */}
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "48px 48px",
                    }}
                  />
                  {/* Red glow */}
                  <div
                    className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-40"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(220,38,38,0.7) 0%, transparent 60%)",
                    }}
                  />
                  <div
                    className="absolute -right-10 -bottom-20 w-80 h-80 rounded-full opacity-30"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(185,28,28,0.6) 0%, transparent 60%)",
                    }}
                  />

                  <div className="relative">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-400/30 rounded-full px-3 py-1.5 mb-8">
                      <Handshake className="w-3.5 h-3.5 text-red-400" />
                      <span className="text-red-400 text-[10px] font-bold tracking-wider">
                        Partner with Maitsys
                      </span>
                    </div>

                    {/* Big numerical hero */}
                    <div className="flex gap-2 items-start mb-4">
                      <span className="pt-3 text-3xl font-light text-red-400">
                        −
                      </span>
                      <div className="font-bold leading-[0.85] tracking-tighter bg-gradient-to-br from-white via-red-200 to-red-400 bg-clip-text text-transparent text-[6rem] sm:text-[11rem] lg:text-[13rem]">
                        5.2
                      </div>
                      <span className="pt-4 text-4xl font-light text-red-300 sm:text-5xl sm:pt-6">
                        %
                      </span>
                    </div>

                    <p className="max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                      Average reduction on your cloud bill within{" "}
                      <span className="font-semibold text-white">
                        the first 90 days
                      </span>{" "}
                      of partnering with Maitsys — measured against your prior
                      run-rate, audited in your own console.
                    </p>

                    {/* Mini chart visualisation */}
                    <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-3 sm:gap-4">
                      <div className="pl-3 border-l-2 border-red-500/50">
                        <div className="text-[10px] tracking-wider text-slate-500 font-semibold">
                          Before
                        </div>
                        <div className="mt-1 text-2xl font-bold text-white">
                          $842k
                        </div>
                        <div className="text-slate-500 text-[10px] mt-0.5">
                          baseline / mo
                        </div>
                      </div>
                      <div className="pl-3 border-l-2 border-red-400/50">
                        <div className="text-[10px] tracking-wider text-red-400 font-semibold">
                          After
                        </div>
                        <div className="mt-1 text-2xl font-bold text-white">
                          $796k
                        </div>
                        <div className="text-red-400 text-[10px] mt-0.5">
                          −$45,468 / mo
                        </div>
                      </div>
                      <div className="pl-3 border-l-2 border-red-300/50">
                        <div className="text-[10px] tracking-wider text-slate-500 font-semibold">
                          Annualised
                        </div>
                        <div className="mt-1 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-400">
                          $545k
                        </div>
                        <div className="text-slate-500 text-[10px] mt-0.5">
                          recovered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT — Privacy promise stack */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="flex flex-col gap-6 lg:col-span-5"
              >
                {/* Main privacy card */}
                <div className="overflow-hidden relative p-8 bg-gradient-to-br from-white rounded-3xl border shadow-xl to-red-50/40 border-slate-200 shadow-red-100/40">
                  {/* Lock badge floating */}
                  <div className="flex absolute -top-6 -right-6 justify-center items-center w-24 h-24 bg-gradient-to-br from-red-900 to-red-700 rounded-full shadow-2xl shadow-red-900/30">
                    <Lock className="w-9 h-9 text-red-200" strokeWidth={1.5} />
                  </div>

                  <div className="inline-flex gap-2 items-center mb-5">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-red-700 text-[10px] font-bold tracking-wider">
                      Demo Privacy Promise
                    </span>
                  </div>

                  <h3 className="text-slate-900 text-2xl sm:text-[1.75rem] font-bold leading-tight tracking-tight mb-4 max-w-xs">
                    Your bill never leaves your account.
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    During the demo we{" "}
                    <span className="font-semibold text-slate-900">
                      do not store
                    </span>{" "}
                    your billing data and{" "}
                    <span className="font-semibold text-slate-900">
                      never expose
                    </span>{" "}
                    line-item details. Analysis runs in an ephemeral session —
                    when it ends, everything is wiped.
                  </p>

                  {/* Visual: terminal-style proof */}
                  <div className="mt-6 bg-slate-950 rounded-xl border border-slate-800 p-4 font-mono text-[11px] space-y-1.5 overflow-hidden">
                    <div className="flex gap-2 items-center pb-2 mb-2 border-b text-slate-500 border-slate-800/60">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-red-300" />
                      </div>
                      <span className="ml-1 text-[10px]">demo · session</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-red-400">✓</span>
                      <span className="text-slate-300">
                        ingest <span className="text-red-400">→</span> memory
                        only
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-red-400">✓</span>
                      <span className="text-slate-300">
                        encryption <span className="text-red-400">→</span>{" "}
                        AES‑256 in‑transit
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-red-400">✓</span>
                      <span className="text-slate-300">
                        retention <span className="text-red-400">→</span>{" "}
                        <span className="font-bold text-red-300">0 days</span>
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-red-400">✓</span>
                      <span className="text-slate-300">
                        line-items <span className="text-red-400">→</span>{" "}
                        <span className="text-red-200">masked</span>
                      </span>
                    </div>
                    <div className="flex gap-2 pt-1 mt-2 border-t border-slate-800/60">
                      <span className="text-slate-500">$</span>
                      <span className="text-red-300 animate-pulse">
                        session.end() → all_data.wipe()
                      </span>
                    </div>
                  </div>
                </div>

                {/* Three pill guarantees */}
                <div className="grid grid-cols-1 gap-3">
                  {[
                    {
                      icon: EyeOff,
                      title: "No line-item exposure",
                      desc: "Resource IDs and tags are hashed before any model sees them.",
                      tone: "from-red-50 to-white border-red-100 text-red-600",
                    },
                    {
                      icon: Database,
                      title: "Zero data retention",
                      desc: "Demo session is in-memory only. Nothing persists past disconnect.",
                      tone: "from-rose-50 to-white border-rose-100 text-red-600",
                    },
                    {
                      icon: ShieldAlert,
                      title: "Read-only on your console",
                      desc: "We only request billing-read scopes. No write, no resource access.",
                      tone: "from-slate-50 to-white border-slate-200 text-red-700",
                    },
                  ].map((p) => {
                    const Icon = p.icon;
                    return (
                      <div
                        key={p.title}
                        className={`group flex items-start gap-4 bg-gradient-to-br ${p.tone.split(" ").slice(0, 3).join(" ")} border rounded-2xl p-4 hover:-translate-y-0.5 transition-transform duration-300`}
                      >
                        <div
                          className={`w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 ${p.tone.split(" ").slice(-1)[0]}`}
                        >
                          <Icon className="w-4 h-4" strokeWidth={2} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold leading-tight text-slate-900">
                            {p.title}
                          </div>
                          <div className="text-slate-500 text-[12px] leading-snug mt-1">
                            {p.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Bottom marquee strip — auditor reassurance */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-4 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400"
            >
              {[
                "SOC 2 Type II",
                "ISO 27001",
                "GDPR Aligned",
                "Read-Only Scope",
                "AES-256 Encryption",
                "EU / US Residency"
              ].map((item, i, arr) => (
                <div key={item} className="flex items-center whitespace-nowrap">
                  <span>{item}</span>
                  {i < arr.length - 1 && (
                    <span className="ml-4 text-red-300 sm:ml-8">●</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PROCESS STEPS ──────────────────────────────────── */}
        <section className="overflow-hidden relative py-10 bg-slate-950 sm:py-12">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, rgba(220,38,38,0.18) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(185,28,28,0.12) 0%, transparent 50%)",
            }}
          />
          <div className="relative px-4 mx-auto max-w-8xl sm:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeUp} className="mb-8 text-center">
                <p className="mb-3 text-xs font-semibold tracking-widest text-red-400">
                  How It Works
                </p>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  From connection to compounding savings
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-slate-400">
                  Four steps from read-only connection to a fully-instrumented
                  FinOps program — typically live in under 48 hours.
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
                      <div className="hidden lg:block absolute top-8 left-[calc(100%-1rem)] w-8 h-px bg-gradient-to-r from-red-500 to-transparent z-10" />
                    )}
                    <div className="p-6 h-full rounded-2xl border transition-colors duration-300 bg-slate-900 border-slate-800 hover:border-red-700">
                      <div className="mb-4 text-4xl font-bold leading-none text-transparent bg-clip-text bg-gradient-to-br from-red-300 to-red-500">
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

        {/* ── TECH CAPABILITIES ────────────────────────────────── */}
        <section className="py-9 bg-white border-t sm:py-11 border-slate-100">
          <div className="px-4 mx-auto max-w-8xl sm:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeUp} className="mb-8 text-center">
                <p className="mb-3 text-xs font-semibold tracking-widest text-red-700">
                  Built For Scale
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  Enterprise-grade by design
                </h2>
                <p className="mt-3 text-slate-700">
                  Read-only by default. SOC 2 & ISO 27001. Multi-tenant
                  isolation. SSO + SCIM.
                </p>
              </motion.div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: "☁️",
                    title: "Multi-Cloud Native",
                    desc: "Azure · AWS · GCP — read-only APIs",
                    bg: "bg-red-50 border-red-100",
                  },
                  {
                    icon: "🤖",
                    title: "AI / ML Engine",
                    desc: "Anomaly + forecast + LLM brief",
                    bg: "bg-rose-50 border-rose-100",
                  },
                  {
                    icon: "🛡️",
                    title: "Enterprise Security",
                    desc: "SOC 2 · ISO 27001 · SSO · SCIM",
                    bg: "bg-red-50 border-red-100",
                  },
                  {
                    icon: "📊",
                    title: "FinOps Aligned",
                    desc: "Mapped to FinOps Foundation framework",
                    bg: "bg-red-50 border-red-100",
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

        {/* ── CTA ──────────────────────────────────────────────── */}
        <QuickViewUi
          title="Ready to compound your cloud savings?"
          description="Join FinOps teams using Maitsys CCM to cut spend across Azure, AWS, and GCP — with AI-driven recommendations, forecasts, and executive briefs."
          linkName="Connect with Us"
          url="/contact-us"
          title_className="text-3xl text-red-600 lg:text-5xl font-bold text-center leading-tight lg:leading-[1.15]"
        />
      </main>
    </>
  );
};

export default CloudCostOptimizer;
