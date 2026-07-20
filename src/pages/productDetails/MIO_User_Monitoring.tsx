import React from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import {
  Activity,
  MessageSquare,
  Bell,
  TrendingUp,
  Database,
  Server,
  Cpu,
  AlertTriangle,
  Layers,
  ArrowRight,
  ArrowLeft,
  Shield,
  Zap,
  BarChart2,
} from "lucide-react";
import Seo from "../../components/SEO";
import JsonLd from "../../components/JsonLd";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import QuickViewUi from "../../components/ui/CountUp/QuickViewUi";
import sapPartnerLogo from "../../assets/image/logo/sap_Partnerr.png";

/* ─── CountUp ─────────────────────────────────────────────────── */
const CountUp: React.FC<{
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}> = ({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.8,
  className,
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const display = useTransform(
    mv,
    (v) =>
      `${prefix}${v.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`,
  );
  React.useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, { duration, ease: [0.16, 1, 0.3, 1] });
    return c.stop;
  }, [inView, to, duration, mv]);
  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
};

/* ─── Data ─────────────────────────────────────────────────────── */
const features = [
  {
    id: "unified",
    no: "01",
    tag: "Visibility",
    icon: Layers,
    title: "Unified SAP & HANA Monitoring",
    short: "Every layer of your SAP landscape in one real-time command center.",
    body: "Application servers, HANA nodes, background jobs, memory pools, and host metrics all stream into a single timeline. Drill from system → instance → process in seconds — no ABAP, no SQL.",
    quote: "One dashboard. Every layer. Zero blind spots.",
    bullets: [
      "SAP ECC, S/4HANA, BTP, HANA DB",
      "Application + infrastructure layer",
      "Drill-down in under 3 clicks",
    ],
    accent: "#b91c1c",
    preview: <PreviewUnified />,
  },
  {
    id: "chat",
    no: "02",
    tag: "Intelligence",
    icon: MessageSquare,
    title: "AI Conversational Assistant",
    short: "Ask in plain English. Get SAP-grade answers in seconds.",
    body: "No more SM50, ST05, or DB02. Type 'Which background jobs failed in the last 4 hours?' and get a chart-backed answer instantly. MIO understands SAP terminology natively.",
    quote: "Ask in plain English. Get SAP-grade answers instantly.",
    bullets: [
      "Natural-language query engine",
      "SAP-aware terminology",
      "Chart-backed responses",
    ],
    accent: "#c2410c",
    preview: <PreviewChat />,
  },
  {
    id: "alerts",
    no: "03",
    tag: "Detection",
    icon: Bell,
    title: "Smart Anomaly Detection",
    short: "Catches what static thresholds miss — before users notice.",
    body: "MIO learns hour-of-day, day-of-week, and batch-window baselines. A job taking 45 min instead of 8? Flagged at minute 12. HANA delta merges stacking? Caught before saturation.",
    quote: "Catches what static thresholds miss — every time.",
    bullets: [
      "Historical baseline learning",
      "Pattern-aware anomaly scoring",
      "Low-noise, high-signal alerts",
    ],
    accent: "#b45309",
    preview: <PreviewAlerts />,
  },
  {
    id: "realtime",
    no: "04",
    tag: "Monitoring",
    icon: Activity,
    title: "Real-Time Performance KPIs",
    short: "30-second refresh across CPU, memory, disk, jobs, and users.",
    body: "Work process utilization, dialog response times, HANA row/column store memory, host disk saturation — all live. Your ops team acts on current state, never stale snapshots.",
    quote: "30-second refresh. Always current. Always actionable.",
    bullets: [
      "CPU, memory, disk — all layers",
      "HANA row/column store health",
      "Background jobs + user activity",
    ],
    accent: "#15803d",
    preview: <PreviewRealtime />,
  },
  {
    id: "forecast",
    no: "05",
    tag: "Forecasting",
    icon: TrendingUp,
    title: "Predictive Root Cause Analysis",
    short: "Know the issue weeks before your users do.",
    body: "MIO extrapolates HANA table growth and performance degradation weeks ahead. When incidents occur, it correlates events across layers and surfaces a root-cause hypothesis with evidence.",
    quote: "Know the issue before your users do.",
    bullets: [
      "Table & tablespace growth forecasts",
      "Cross-layer event correlation",
      "Root-cause with evidence",
    ],
    accent: "#1d4ed8",
    preview: <PreviewForecast />,
  },
  {
    id: "transport",
    no: "06",
    tag: "Management",
    icon: ArrowRight,
    title: "Seamless Transport Management",
    short: "Gain complete control over your SAP landscape transport.",
    body: "Track pending imports, monitor successful and failed transports, and view detailed activity logs across your entire import route. Ensure smooth and error-free deployments.",
    quote: "Ensure smooth and error-free deployments.",
    bullets: [
      "Track pending and failed imports",
      "View detailed transport logs",
      "Monitor across entire import route",
    ],
    accent: "#0284c7",
    preview: <PreviewTransport />,
  },
  {
    id: "security",
    no: "07",
    tag: "Security",
    icon: Shield,
    title: "Proactive Security Notes Tracking",
    short: "Stay ahead of vulnerabilities with integrated SAP Security Notes management.",
    body: "Track note implementation status, prioritize CVSS scores, and ensure your SAP environment is always secure and compliant.",
    quote: "Ensure your SAP environment is always secure and compliant.",
    bullets: [
      "Track implementation status",
      "Prioritize by CVSS scores",
      "Maintain continuous compliance",
    ],
    accent: "#4f46e5",
    preview: <PreviewSecurityNotes />,
  },
];

const stats = [
  { value: 68, suffix: "%", label: "Faster detection" },
  { value: 60, suffix: "%", label: "Less manual work" },
  { value: 3, suffix: "d", label: "Deploy time" },
  { value: 100, suffix: "%", label: "SAP coverage" },
];

const sapModules = [
  { name: "SAP ECC", icon: Database },
  { name: "S/4HANA", icon: Server },
  { name: "HANA DB", icon: Layers },
  { name: "SAP BTP", icon: Activity },
  { name: "SAP BW", icon: BarChart2 },
  { name: "SAP GRC", icon: Shield },
  { name: "SuccessFactors", icon: TrendingUp },
  { name: "SAP CRM", icon: MessageSquare },
];

/* ─── Mini Preview UIs ─────────────────────────────────────────── */
function PreviewUnified() {
  const bars = [
    { label: "App Servers", val: "12/12", pct: 100, ok: true },
    { label: "HANA Nodes", val: "4/4", pct: 100, ok: true },
    { label: "BG Jobs", val: "247/251", pct: 98, ok: false },
    { label: "Dialog WP", val: "89%", pct: 89, ok: false },
  ];
  return (
    <div className="overflow-hidden text-xs bg-white rounded-xl border border-slate-200">
      <div className="flex gap-2 items-center px-3 py-2 border-b bg-slate-50 border-slate-200">
        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        <span className="font-medium text-slate-700">Landscape Overview</span>
        <span className="ml-auto text-slate-600 font-mono text-[10px]">
          PRD · 16 systems
        </span>
      </div>
      <div className="grid grid-cols-4 gap-px border-b bg-slate-100 border-slate-200">
        {[
          { l: "Systems", v: "16", c: "text-slate-900" },
          { l: "Alerts", v: "3", c: "text-amber-700" },
          { l: "Uptime", v: "99.8%", c: "text-emerald-700" },
          { l: "Incidents", v: "0", c: "text-slate-600" },
        ].map((k) => (
          <div key={k.l} className="px-2 py-2 bg-white">
            <div className="text-slate-600 text-[9px] tracking-wider">
              {k.l}
            </div>
            <div className={`font-bold text-sm mt-0.5 ${k.c}`}>{k.v}</div>
          </div>
        ))}
      </div>
      <div className="p-3 space-y-2">
        {bars.map((b) => (
          <div key={b.label} className="flex gap-2 items-center">
            <span className="text-slate-600 text-[10px] w-20 shrink-0">
              {b.label}
            </span>
            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${b.ok ? "bg-emerald-500" : "bg-amber-400"}`}
                style={{ width: `${b.pct}%` }}
              />
            </div>
            <span
              className={`text-[10px] font-mono font-semibold w-12 text-right ${b.ok ? "text-emerald-700" : "text-amber-700"}`}
            >
              {b.val}
            </span>
          </div>
        ))}
        <div className="grid grid-cols-3 gap-1 pt-1">
          {["SAP ECC", "S/4HANA", "HANA DB", "BTP", "App Srv", "Infra"].map(
            (s) => (
              <div
                key={s}
                className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5"
              >
                <span className="w-1 h-1 bg-emerald-500 rounded-full shrink-0" />
                <span className="text-[9px] text-slate-600 truncate">{s}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function PreviewChat() {
  const msgs = [
    { u: true, t: "Which BG jobs failed in last 4 hours?" },
    {
      u: false,
      t: "4 failed in PRD. Top: RSBTCDEL2 timed out at 14:32 (8m avg → 47m). Likely cause: TBTCO lock contention.",
    },
    { u: true, t: "Show HANA memory trend 30 days" },
    {
      u: false,
      t: "Column store: 12.4 GB → 18.1 GB (+46%). Row store hits 90% in ~18 days. Recommend archiving ACDOCA.",
    },
  ];
  return (
    <div className="overflow-hidden text-xs bg-white rounded-xl border border-slate-200">
      <div className="flex gap-2 items-center px-3 py-2 bg-gradient-to-r from-red-50 to-orange-50 border-b border-slate-100">
        <div className="flex justify-center items-center w-5 h-5 bg-red-600 rounded-full">
          <MessageSquare className="w-3 h-3 text-white" />
        </div>
        <span className="text-slate-700 font-semibold text-[11px]">
          MIO Assistant
        </span>
        <span className="ml-auto text-[9px] bg-red-100 text-red-700 font-bold px-1.5 py-0.5 rounded-full">
          AI
        </span>
      </div>
      <div className="p-3 space-y-2">
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.u ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] text-[10px] leading-relaxed rounded-lg px-2.5 py-1.5 ${m.u ? "bg-red-600 text-white" : "bg-slate-100 text-slate-700"}`}
            >
              {!m.u && (
                <div className="text-[8px] font-bold text-red-700 uppercase mb-0.5">
                  MIO
                </div>
              )}
              {m.t}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 items-center px-3 py-2 border-t border-slate-100">
        <div className="flex-1 bg-slate-50 border border-slate-200 rounded px-2 py-1 text-[10px] text-slate-600">
          Ask anything about your SAP…
        </div>
        <button
          className="flex justify-center items-center w-6 h-6 bg-red-600 rounded"
          aria-label="Send message"
        >
          <ArrowRight className="w-3 h-3 text-white" />
        </button>
      </div>
    </div>
  );
}

function PreviewAlerts() {
  const alerts = [
    {
      sys: "PRD · Dialog WP",
      msg: "Response +380% above baseline",
      t: "6m",
      z: "z=5.1",
      sev: "red",
    },
    {
      sys: "PRD · HANA",
      msg: "Delta merge queue spike",
      t: "31m",
      z: "z=3.2",
      sev: "amber",
    },
    {
      sys: "QAS · Background",
      msg: "RSBTCDEL2 runtime +487%",
      t: "2h",
      z: "z=2.8",
      sev: "amber",
    },
    {
      sys: "DEV · Tablespace",
      msg: "PSAP HANA 2× predicted growth",
      t: "4h",
      z: "z=2.1",
      sev: "slate",
    },
  ];
  const sev = {
    red: "border-red-500 bg-red-50",
    amber: "border-amber-400 bg-amber-50",
    slate: "border-slate-300 bg-slate-50",
  };
  const dot = {
    red: "bg-red-500",
    amber: "bg-amber-400",
    slate: "bg-slate-400",
  };
  const txt = {
    red: "text-red-700",
    amber: "text-amber-700",
    slate: "text-slate-600",
  };
  return (
    <div className="overflow-hidden text-xs bg-white rounded-xl border border-slate-200">
      <div className="flex gap-2 items-center px-3 py-2 border-b bg-slate-50 border-slate-200">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span className="font-medium text-slate-700">Anomaly Detection</span>
        <span className="ml-auto text-[10px] text-slate-600 font-mono">
          Live
        </span>
      </div>
      <div className="p-2 space-y-1.5">
        {alerts.map((a) => (
          <div
            key={a.msg}
            className={`border-l-2 ${sev[a.sev as keyof typeof sev]} rounded-r px-2.5 py-1.5`}
          >
            <div className="flex items-center gap-1.5">
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot[a.sev as keyof typeof dot]}`}
              />
              <span className="text-slate-600 font-mono text-[9px]">
                {a.sys}
              </span>
              <span
                className={`ml-auto font-mono text-[9px] ${txt[a.sev as keyof typeof txt]}`}
              >
                {a.z}
              </span>
              <span className="text-slate-600 text-[9px]">{a.t}</span>
            </div>
            <div className="text-slate-700 text-[10px] font-medium mt-0.5 pl-3">
              {a.msg}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PreviewRealtime() {
  const pts = [42, 48, 51, 47, 62, 58, 71, 68, 74, 79, 83, 88];
  const w = 100,
    h = 32;
  const max = Math.max(...pts);
  const step = w / (pts.length - 1);
  const path = pts
    .map((v, i) => `${i === 0 ? "M" : "L"}${i * step},${h - (v / max) * h}`)
    .join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;
  return (
    <div className="overflow-hidden text-xs bg-white rounded-xl border border-slate-200">
      <div className="flex gap-2 items-center px-3 py-2 border-b bg-slate-50 border-slate-200">
        <Activity className="w-3 h-3 text-red-700" />
        <span className="font-medium text-slate-700">Real-Time KPIs</span>
        <span className="ml-auto text-[10px] text-slate-600">30s</span>
      </div>
      <div className="grid grid-cols-3 gap-px border-b bg-slate-100 border-slate-200">
        {[
          { l: "CPU", v: "88%", c: "text-amber-700" },
          { l: "HANA Mem", v: "74%", c: "text-emerald-700" },
          { l: "Disk", v: "61%", c: "text-emerald-700" },
        ].map((k) => (
          <div key={k.l} className="bg-white px-2 py-1.5">
            <div className="text-slate-600 text-[9px]">{k.l}</div>
            <div className={`font-bold text-sm ${k.c}`}>{k.v}</div>
          </div>
        ))}
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-slate-600 text-[10px]">
            Dialog Response (ms)
          </span>
          <span className="text-red-700 text-[10px] font-bold">↑ 88ms</span>
        </div>
        <svg
          viewBox={`0 0 ${w} ${h + 2}`}
          className="w-full"
          style={{ height: 44 }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="rtGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b91c1c" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#b91c1c" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#rtGrad)" />
          <path
            d={path}
            fill="none"
            stroke="#b91c1c"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
        <div className="grid grid-cols-3 gap-1 mt-2">
          {[
            { l: "Users", v: "142", ok: true },
            { l: "BG Jobs", v: "251", ok: true },
            { l: "WP Free", v: "11%", ok: false },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-slate-50 border border-slate-100 rounded px-1.5 py-1 text-center"
            >
              <div className="text-[8px] text-slate-600">{s.l}</div>
              <div
                className={`text-[11px] font-bold ${s.ok ? "text-emerald-700" : "text-amber-700"}`}
              >
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewForecast() {
  const data = [22, 24, 25, 27, 29, 31, 33, 35, 38, 41, 45, 49];
  const fcast = [49, 52, 57, 63, 69, 76];
  const all = [...data, ...fcast];
  const w = 100,
    h = 36,
    max = Math.max(...all);
  const step = w / (all.length - 1);
  const hPath = data
    .map((v, i) => `${i === 0 ? "M" : "L"}${i * step},${h - (v / max) * h}`)
    .join(" ");
  const fPath = [...data.slice(-1), ...fcast]
    .map(
      (v, i) =>
        `${i === 0 ? "M" : "L"}${(data.length - 1 + i) * step},${h - (v / max) * h}`,
    )
    .join(" ");
  const fArea = `${fPath} L${(all.length - 1) * step},${h} L${(data.length - 1) * step},${h} Z`;
  return (
    <div className="overflow-hidden text-xs bg-white rounded-xl border border-slate-200">
      <div className="flex gap-2 items-center px-3 py-2 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-slate-100">
        <TrendingUp className="w-3.5 h-3.5 text-orange-700" />
        <span className="text-slate-700 font-semibold text-[11px]">
          Predictive Insights
        </span>
        <span className="ml-auto text-[9px] text-slate-600 font-mono">
          6-month
        </span>
      </div>
      <div className="p-3">
        <div className="flex gap-3 text-[10px] mb-2">
          <span className="flex gap-1 items-center text-slate-600">
            <span className="w-3 h-0.5 bg-red-500 inline-block" /> Historical
          </span>
          <span className="flex gap-1 items-center text-slate-600">
            <span className="w-3 h-0.5 border-t border-dashed border-orange-400 inline-block" />{" "}
            Forecast
          </span>
          <span className="ml-auto font-bold text-orange-700">+76%</span>
        </div>
        <svg
          viewBox={`0 0 ${w} ${h + 2}`}
          className="w-full"
          style={{ height: 52 }}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="fcGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={fArea} fill="url(#fcGrad)" />
          <path d={hPath} fill="none" stroke="#b91c1c" strokeWidth="1" />
          <path
            d={fPath}
            fill="none"
            stroke="#fb923c"
            strokeWidth="1"
            strokeDasharray="2,1.5"
          />
          <line
            x1={(data.length - 1) * step}
            y1="0"
            x2={(data.length - 1) * step}
            y2={h}
            stroke="#cbd5e1"
            strokeWidth="0.4"
            strokeDasharray="2,2"
          />
        </svg>
        <div className="mt-2 space-y-1">
          {[
            { label: "HANA Tablespace hits 90%", when: "~18 days", red: true },
            {
              label: "Dialog WP saturation risk",
              when: "~34 days",
              red: false,
            },
            { label: "ACDOCA archiving needed", when: "~50 days", red: false },
          ].map((r) => (
            <div key={r.label} className="flex items-center gap-1.5">
              <AlertTriangle
                className={`w-3 h-3 shrink-0 ${r.red ? "text-red-700" : "text-amber-700"}`}
              />
              <span className="text-slate-600 flex-1 text-[10px]">
                {r.label}
              </span>
              <span
                className={`text-[10px] font-bold ${r.red ? "text-red-700" : "text-amber-700"}`}
              >
                {r.when}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewTransport() {
  return (
    <div className="flex overflow-hidden flex-col h-full font-sans text-xs bg-white rounded-xl border border-slate-200">
      {/* Header */}
      <div className="flex justify-between items-center px-3 py-2.5 border-b bg-white border-slate-200 shrink-0">
        <div className="flex flex-col">
          <span className="font-bold text-slate-800 text-[11px] leading-tight">Transport Management</span>
          <span className="text-[8px] text-slate-500">Landscape Intelligence</span>
        </div>
        <div className="flex items-center gap-1.5">
           <div className="bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 text-[8px] text-slate-600 font-medium flex items-center gap-1">
             Destination: GRC <span className="text-[6px]">▼</span>
           </div>
        </div>
      </div>

      {/* Top Status Bar */}
      <div className="flex justify-between items-center px-3 py-1.5 bg-slate-50 border-b border-slate-100 shrink-0 text-[8px]">
        <div className="flex gap-2 items-center">
          <span className="flex gap-1 items-center font-bold text-emerald-600">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> STMS Connected
          </span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-500">Last Sync: 13:05:00</span>
        </div>
        <div className="border border-slate-200 bg-white rounded px-1.5 py-0.5 text-slate-600 cursor-default shadow-sm font-semibold">
          ↻ Refresh
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex gap-1.5 p-2 bg-slate-50 border-b border-slate-100 overflow-x-auto scrollbar-hide shrink-0">
        {[
          { l: "Pending", v: "22", c: "text-amber-600", bc: "border-amber-200", fill: "bg-amber-500" },
          { l: "Imported", v: "24", c: "text-emerald-600", bc: "border-emerald-200", fill: "bg-emerald-500" },
          { l: "In Progress", v: "40", c: "text-blue-500", bc: "border-blue-200", fill: "bg-blue-500" },
        ].map((s) => (
          <div key={s.l} className="flex flex-col bg-white border border-slate-200 rounded px-2 py-1.5 min-w-[65px] flex-1 shadow-sm">
             <div className="flex justify-between items-start mb-0.5">
               <div className={`w-3 h-3 rounded-full border ${s.bc} flex items-center justify-center shrink-0`}>
                 <div className={`w-1 h-1 rounded-full ${s.fill}`}></div>
               </div>
               <span className="text-[11px] font-bold text-slate-800 leading-none">{s.v}</span>
             </div>
             <span className={`text-[7px] font-semibold ${s.c} truncate`}>{s.l}</span>
          </div>
        ))}
      </div>

      {/* Table Area */}
      <div className="flex flex-col flex-1 p-2 bg-white">
        {/* Search bar mock */}
        <div className="flex gap-2 mb-2">
          <div className="flex-1 border border-slate-200 rounded-full px-2.5 py-1 text-[8px] text-slate-400 flex items-center min-w-0">
            <span className="mr-1 shrink-0">⌕</span>
            <span className="truncate">Search By TR Number, Description...</span>
          </div>
        </div>

        {/* Header row */}
        <div className="flex text-[7px] font-semibold text-slate-400 border-b border-slate-100 pb-1 mb-1 px-1">
          <div className="w-[45px]">TR Number</div>
          <div className="flex-1 px-1">Description</div>
          <div className="w-[40px] text-center">Route</div>
          <div className="w-[50px] text-right">Status</div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-1">
          {[
            { id: "TRK-90018", title: "Configuration Update for Core...", route: "DEV → QAS", stat: "Modifiable", statC: "text-amber-600 border-amber-200 bg-amber-50" },
            { id: "TRK-90017", title: "Schema Changes in Financials...", route: "DEV → QAS", stat: "Released", statC: "text-blue-600 border-blue-200 bg-blue-50" },
            { id: "TRK-90016", title: "Background Job Scheduling Fix...", route: "QAS → PRD", stat: "Imported", statC: "text-emerald-600 border-emerald-200 bg-emerald-50" },
          ].map((r) => (
             <div key={r.id} className="flex items-center text-[8px] px-1 py-1.5 hover:bg-slate-50 rounded-md transition-colors group">
               <div className="w-[45px] font-bold text-red-600 tracking-tight">{r.id}</div>
               <div className="flex-1 flex flex-col min-w-0 px-1 gap-0.5">
                 <span className="font-medium truncate text-slate-700" title={r.title}>{r.title}</span>
                 <span className="text-[6px] text-blue-500 font-medium truncate">Workbench Request</span>
               </div>
               <div className="w-[40px] font-bold text-slate-600 text-center truncate bg-slate-50 border border-slate-200 rounded py-0.5 px-1 leading-none">{r.route}</div>
               <div className="w-[50px] flex justify-end shrink-0">
                  <span className={`text-[6px] font-bold px-1 py-0.5 rounded border ${r.statC} truncate leading-tight`}>
                    {r.stat}
                  </span>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewSecurityNotes() {
  return (
    <div className="flex overflow-hidden flex-col h-full font-sans text-xs bg-white rounded-xl border border-slate-200">
      {/* Header */}
      <div className="flex justify-between items-center px-3 py-2.5 border-b bg-white border-slate-200 shrink-0">
        <div className="flex flex-col">
          <span className="font-bold text-slate-800 text-[11px] leading-tight">Security Notes</span>
          <span className="text-[8px] text-slate-500">Tracking & Management</span>
        </div>
        <div className="flex items-center gap-1.5">
           <div className="bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 text-[8px] text-slate-600 font-medium flex items-center gap-1">
             Destination: GRC <span className="text-[6px]">▼</span>
           </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex gap-1.5 p-2 bg-slate-50 border-b border-slate-100 overflow-x-auto scrollbar-hide shrink-0">
        {[
          { l: "Total Notes", v: "26", c: "text-blue-600", bc: "border-blue-200", fill: "bg-blue-600" },
          { l: "Can Implement", v: "14", c: "text-amber-600", bc: "border-amber-200", fill: "bg-amber-500" },
          { l: "Cannot Implement", v: "11", c: "text-red-500", bc: "border-red-200", fill: "bg-red-500" },
        ].map((s) => (
          <div key={s.l} className="flex flex-col bg-white border border-slate-200 rounded px-2 py-1.5 min-w-[70px] flex-1 shadow-sm">
             <div className="flex justify-between items-start mb-0.5">
               <div className={`w-3 h-3 rounded-full border ${s.bc} flex items-center justify-center shrink-0`}>
                 <div className={`w-1 h-1 rounded-full ${s.fill}`}></div>
               </div>
               <span className="text-[11px] font-bold text-slate-800 leading-none">{s.v}</span>
             </div>
             <span className={`text-[7px] font-semibold ${s.c} truncate`}>{s.l}</span>
          </div>
        ))}
      </div>

      {/* Table Area */}
      <div className="flex flex-col flex-1 p-2 bg-white">
        {/* Search bar mock */}
        <div className="flex gap-2 mb-2">
          <div className="flex-1 border border-slate-200 rounded-full px-2.5 py-1 text-[8px] text-slate-400 flex items-center min-w-0">
            <span className="mr-1 shrink-0">⌕</span>
            <span className="truncate">Search by note number, title...</span>
          </div>
          <div className="border border-red-200 bg-red-50 text-red-600 rounded-full px-2.5 py-1 text-[8px] font-semibold flex items-center shrink-0 shadow-sm cursor-default">
            <span className="mr-1">↑</span> Upload
          </div>
        </div>

        {/* Header row */}
        <div className="flex text-[7px] font-semibold text-slate-400 border-b border-slate-100 pb-1 mb-1 px-1">
          <div className="w-10">Note</div>
          <div className="flex-1 px-2">Title & Priority</div>
          <div className="w-8 text-center">CVSS</div>
          <div className="w-[68px] text-right">Status</div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-1">
          {[
            { id: "3731908", title: "[CVE-GENERIC] Missing Auth Check...", cvss: "7.1", stat: "Can be implemented", statC: "text-amber-600 border-amber-200 bg-amber-50", p: "High Priority", pc: "text-amber-600 border-amber-200" },
            { id: "3719397", title: "[CVE-GENERIC] Code Injection Vuln...", cvss: "6.1", stat: "Cannot be implemented", statC: "text-red-500 border-red-200 bg-red-50", p: "Correction", pc: "text-blue-500 border-blue-200" },
            { id: "3703813", title: "[CVE-GENERIC] Remote Execution...", cvss: "9.8", stat: "Can be implemented", statC: "text-amber-600 border-amber-200 bg-amber-50", p: "Critical", pc: "text-red-600 border-red-200" },
          ].map((r) => (
             <div key={r.id} className="flex items-center text-[8px] px-1 py-1.5 hover:bg-slate-50 rounded-md transition-colors group">
               <div className="w-10 font-bold tracking-tight text-red-600">{r.id}</div>
               <div className="flex-1 flex flex-col min-w-0 px-2 gap-0.5">
                 <span className="font-medium truncate text-slate-700" title={r.title}>{r.title}</span>
                 <span className={`text-[6px] px-1 py-px rounded border inline-block w-fit ${r.pc} bg-white`}>{r.p}</span>
               </div>
               <div className="w-8 font-bold text-center text-slate-700">{r.cvss}</div>
               <div className="w-[68px] flex justify-end shrink-0">
                  <span className={`text-[6px] font-bold px-1 py-0.5 rounded border ${r.statC} truncate leading-tight`}>
                    {r.stat}
                  </span>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Feature Section — Stacked cards with left number rail ──── */
const FeaturesSection: React.FC = () => (
  <section className="py-8 bg-slate-50 sm:py-9">
    <div className="px-4 mx-auto max-w-8xl sm:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-10"
      >
        <div className="flex gap-3 items-center mb-4">
          <div className="w-8 h-px bg-red-500" />
          <span className="text-red-700 text-[11px] font-bold tracking-[0.2em]">
            Capability Catalog
          </span>
        </div>
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-slate-900">
          Seven pillars of
          <br />
          <span className="text-red-700">SAP intelligence.</span>
        </h2>
      </motion.div>

      {/* Feature list */}
      <div className="space-y-0">
        {features.map((f, idx) => {
          const Icon = f.icon;
          const isLast = idx === features.length - 1;
          return (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <div
                className={`border-t border-slate-200 ${isLast ? "border-b" : ""}`}
              >
                <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                  {/* Left: copy */}
                  <div className="py-6 border-b sm:py-8 lg:py-10 lg:pr-10 lg:border-b-0 lg:border-r border-slate-200">
                    <div className="flex gap-4 items-start mb-6">
                      {/* Number rail */}
                      <div className="flex flex-col items-center shrink-0 pt-0.5">
                        <span className="text-[11px] font-mono font-bold text-slate-600">
                          {f.no}
                        </span>
                        {!isLast && (
                          <div
                            className="flex-1 mt-2 w-px bg-slate-200"
                            style={{ minHeight: 20 }}
                          />
                        )}
                      </div>
                      {/* Tag + title */}
                      <div className="flex-1">
                        <div className="flex gap-2 items-center mb-2">
                          <div
                            className="flex justify-center items-center w-6 h-6 rounded"
                            style={{ backgroundColor: `${f.accent}15` }}
                          >
                            <Icon
                              className="w-3.5 h-3.5"
                              style={{ color: f.accent }}
                            />
                          </div>
                          <span
                            className="text-[10px] font-bold tracking-widest"
                            style={{ color: f.accent }}
                          >
                            {f.tag}
                          </span>
                        </div>
                        <h3 className="mb-3 text-lg font-bold leading-snug sm:text-xl text-slate-900">
                          {f.title}
                        </h3>
                        <p className="mb-4 text-sm leading-relaxed text-slate-600">
                          {f.body}
                        </p>
                        <blockquote
                          className="pl-3 mb-5 text-sm italic font-medium border-l-2 text-slate-600"
                          style={{ borderColor: f.accent }}
                        >
                          "{f.quote}"
                        </blockquote>
                        <ul className="space-y-1.5">
                          {f.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex gap-2 items-center text-sm text-slate-600"
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                              >
                                <path
                                  d="M2 6l3 3 5-5"
                                  stroke={f.accent}
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right: preview */}
                  <div className="flex items-center py-6 sm:py-8 lg:py-10 lg:pl-10">
                    <div className="w-full">
                      {/* Browser bar */}
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-t-xl border border-slate-200 border-b-0">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-red-400 rounded-full" />
                          <span className="w-2 h-2 bg-amber-400 rounded-full" />
                          <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                        </div>
                        <div className="flex-1 bg-white rounded px-2 py-0.5 border border-slate-200">
                          <span className="text-[9px] text-slate-600 font-mono">
                            mio.maitsys.com/{f.id}
                          </span>
                        </div>
                        <span
                          className="text-[9px] font-mono font-bold"
                          style={{ color: f.accent }}
                        >
                          Live
                        </span>
                      </div>
                      <div className="overflow-hidden rounded-b-xl border border-t-0 shadow-sm border-slate-200">
                        {f.preview}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ─── Why Choose ────────────────────────────────────────────────── */
const WHY = [
  {
    no: "01",
    title: "Deploy in 3 Days",
    desc: "Pre-built SAP connectors. No ABAP. No agents. Start monitoring your landscape within days.",
    stat: "3d",
    lbl: "Avg deploy",
  },
  {
    no: "02",
    title: "65% Less Manual Work",
    desc: "AI automation eliminates log-scraping, transaction monitoring, and scheduled reporting.",
    stat: "65%",
    lbl: "Less overhead",
  },
  {
    no: "03",
    title: "Full SAP Coverage",
    desc: "ECC, S/4HANA, BTP, HANA DB — one platform, every system, no custom coding.",
    stat: "100%",
    lbl: "SAP coverage",
  },
  {
    no: "04",
    title: "No SQL or ABAP",
    desc: "Ask in plain English. MIO translates intent into precise system queries instantly.",
    stat: "<1h",
    lbl: "First insight",
  },
  {
    no: "05",
    title: "Proactive, Not Reactive",
    desc: "Predictive models warn you weeks before issues surface in production.",
    stat: "18d",
    lbl: "Earlier warning",
  },
  {
    no: "06",
    title: "Proven Enterprise ROI",
    desc: "73% faster incident detection. Positive ROI within 6 months, measured in your own console.",
    stat: "6mo",
    lbl: "ROI timeline",
  },
];

/* ─── Main Page ─────────────────────────────────────────────────── */
const MIO_User_Monitoring: React.FC = () => {
  const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <>
      <Seo
        title="MIO — AI-Powered SAP & HANA Operations Platform | Maitsys"
        description="MIO (Maitsys Intelli Ops) delivers real-time SAP & HANA monitoring, AI conversational insights, smart anomaly detection, and predictive root-cause analysis from a single unified dashboard."
        keywords={[
          "SAP monitoring platform",
          "HANA performance monitoring",
          "AI SAP operations",
          "SAP anomaly detection",
          "SAP predictive analytics",
          "HANA health monitoring",
          "SAP real-time dashboard",
          "enterprise SAP operations",
        ]}
        url="/products/mio-user-monitoring"
        siteName="Maitsys"
        type="website"
        preloadImage={false}
        imageAlt="MIO — Maitsys Intelli Ops"
      />
      <JsonLd
        schema={{
          "@type": "SoftwareApplication",
          name: "MIO — AI-Powered SAP & HANA Operations Platform | Maitsys",
          description: "MIO (Maitsys Intelli Ops) delivers real-time SAP & HANA monitoring, AI conversational insights, smart anomaly detection, and predictive root-cause analysis from a single unified dashboard.",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web-based",
          publisher: { "@type": "Organization", name: "Maitsys", url: "https://www.maitsys.com" },
          url: "https://www.maitsys.com/products/mio-user-monitoring",
        }}
      />
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "MIO — AI-Powered SAP & HANA Operations Platform", path: "/products/mio-user-monitoring" }]} />

      <main id="main-content">
        {/* ── HERO ── */}
        <section className="overflow-hidden relative bg-white">
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #000 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Red glow */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(239,68,68,0.07) 0%, transparent 70%)",
            }}
          />

          <div className="relative px-4 pt-6 pb-8 mx-auto max-w-8xl sm:px-6 sm:pb-6">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {/* Nav row */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: EASE },
                  },
                }}
                className="flex justify-between items-center mb-4"
              >
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-red-700 transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                  Back
                </Link>

                <a
                  href="https://mio.maitsys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <img
                    src={sapPartnerLogo}
                    alt="SAP Partner"
                    title="SAP Partner"
                    width={150}
                    height={56}
                    className="object-contain w-auto h-10 sm:h-14"
                    loading="eager"
                  />
                </a>
              </motion.div>

              {/* Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: EASE },
                  },
                }}
                className="inline-flex items-center gap-2 border border-red-200 bg-red-50 rounded-full px-3 py-1.5 mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-700 text-[11px] font-semibold tracking-wide">
                  Maitsys IntelliOps
                </span>
              </motion.div>

              <div className="grid gap-8 items-center lg:grid-cols-2 lg:gap-16">
                {/* Left copy */}
                <div>
                  <motion.h1
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: EASE },
                      },
                    }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-5"
                  >
                    SAP operations,
                    <br />
                    <span className="text-red-700">intelligently</span>
                    <br />
                    automated.
                  </motion.h1>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.55, ease: EASE },
                      },
                    }}
                    className="mb-8 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
                  >
                    MIO monitors every layer of your SAP landscape in real time,
                    detects anomalies before they escalate, and answers
                    operations questions in plain English — from a single
                    dashboard.
                  </motion.p>

                  {/* Stats row */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: EASE },
                      },
                    }}
                    className="grid grid-cols-2 gap-3 mb-8 sm:grid-cols-4"
                  >
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="px-3 py-3 bg-white rounded-lg border shadow-sm border-slate-200"
                      >
                        <div className="text-xl font-bold sm:text-2xl text-slate-900">
                          <CountUp to={s.value} suffix={s.suffix} />
                        </div>
                        <div className="text-[10px] text-slate-600 mt-0.5 tracking-wide">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: EASE },
                      },
                    }}
                    className="flex flex-wrap gap-3"
                  >
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-lg shadow-red-900/30"
                    >
                      Schedule Demo <ArrowRight className="w-4 h-4" />
                    </Link>
                    {/* <Link
                      to="/contact-us"
                      className="inline-flex items-center gap-2 border border-slate-300 hover:border-red-400 text-slate-600 hover:text-red-700 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                    >
                      Talk to Us
                    </Link> */}
                  </motion.div>
                </div>

                {/* Right: hero dashboard */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                  className="relative"
                >
                  <div className="overflow-hidden bg-white rounded-2xl border shadow-xl border-slate-200 shadow-slate-200/60">
                    {/* Dashboard chrome */}
                    <div className="flex gap-3 items-center px-4 py-3 border-b bg-slate-50 border-slate-200">
                      <div className="flex justify-center items-center w-6 h-6 bg-gradient-to-br from-red-600 to-orange-500 rounded-md shrink-0">
                        <Zap className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-800 leading-tight">
                          MIO · Operations Center
                        </div>
                        <div className="text-[9px] text-slate-600 font-mono">
                          mio.maitsys / PRD
                        </div>
                      </div>
                      <div className="ml-auto flex items-center gap-1.5 text-[10px] text-emerald-700 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
                        Live
                      </div>
                    </div>

                    {/* KPI strip */}
                    <div className="grid grid-cols-4 gap-px border-b bg-slate-100 border-slate-200">
                      {[
                        { l: "Systems", v: "16", up: true },
                        { l: "Alerts", v: "3", up: false },
                        { l: "Uptime", v: "99.8%", up: true },
                        { l: "Jobs OK", v: "247", up: true },
                      ].map((k) => (
                        <div key={k.l} className="bg-white px-3 py-2.5">
                          <div className="text-[9px] text-slate-600 tracking-wider">
                            {k.l}
                          </div>
                          <div
                            className={`font-bold text-base mt-0.5 ${k.up ? "text-slate-900" : "text-amber-700"}`}
                          >
                            {k.v}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Sparklines */}
                    <div className="p-4 space-y-3">
                      {[
                        {
                          label: "CPU",
                          pts: [45, 52, 48, 61, 58, 72, 69, 78, 74, 82, 88, 85],
                          c: "#b91c1c",
                        },
                        {
                          label: "HANA Mem",
                          pts: [60, 62, 61, 63, 65, 64, 67, 69, 71, 73, 74, 74],
                          c: "#15803d",
                        },
                        {
                          label: "Dialog RT",
                          pts: [38, 42, 39, 55, 50, 68, 62, 74, 71, 80, 83, 88],
                          c: "#c2410c",
                        },
                      ].map((s) => {
                        const w2 = 100,
                          h2 = 18,
                          max2 = Math.max(...s.pts);
                        const step2 = w2 / (s.pts.length - 1);
                        const p = s.pts
                          .map(
                            (v, i) =>
                              `${i === 0 ? "M" : "L"}${i * step2},${h2 - (v / max2) * h2}`,
                          )
                          .join(" ");
                        return (
                          <div
                            key={s.label}
                            className="flex gap-3 items-center"
                          >
                            <span className="text-[10px] text-slate-600 w-16 shrink-0">
                              {s.label}
                            </span>
                            <svg
                              viewBox={`0 0 ${w2} ${h2 + 2}`}
                              className="flex-1"
                              style={{ height: 24 }}
                              preserveAspectRatio="none"
                            >
                              <path
                                d={p}
                                fill="none"
                                stroke={s.c}
                                strokeWidth="1.2"
                                strokeLinejoin="round"
                              />
                              <circle
                                cx={(s.pts.length - 1) * step2}
                                cy={h2 - (s.pts[s.pts.length - 1] / max2) * h2}
                                r="1.5"
                                fill={s.c}
                              />
                            </svg>
                            <span
                              className="text-[11px] font-mono font-bold w-8 text-right"
                              style={{ color: s.c }}
                            >
                              {s.pts[s.pts.length - 1]}%
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Alert feed */}
                    <div className="border-t border-slate-100 px-4 py-3 space-y-1.5">
                      <div className="text-[10px] text-slate-600 tracking-wider mb-2">
                        Recent Alerts
                      </div>
                      {[
                        {
                          dot: "bg-red-500",
                          msg: "PRD Dialog WP: Response +380% above baseline",
                          t: "6m",
                        },
                        {
                          dot: "bg-amber-400",
                          msg: "PRD HANA: Delta merge queue spike (z=3.2)",
                          t: "31m",
                        },
                        {
                          dot: "bg-slate-300",
                          msg: "QAS Background: RSBTCDEL2 runtime +487%",
                          t: "2h",
                        },
                      ].map((a) => (
                        <div
                          key={a.msg}
                          className="flex items-center gap-2 text-[10px]"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`}
                          />
                          <span className="flex-1 truncate text-slate-600">
                            {a.msg}
                          </span>
                          <span className="font-mono text-slate-600 shrink-0">
                            {a.t}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="hidden absolute -right-3 -bottom-3 gap-2 items-center px-3 py-2 bg-white rounded-xl border shadow-lg sm:flex border-slate-200">
                    <div className="flex justify-center items-center w-7 h-7 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg">
                      <Cpu className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-600 tracking-wider">
                        Detected
                      </div>
                      <div className="text-sm font-bold leading-none text-slate-900">
                        3 anomalies
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <FeaturesSection />

        {/* ── WHY CHOOSE ── */}
        <section className="py-6 bg-white sm:py-8">
          <div className="px-4 mx-auto max-w-8xl sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 sm:mb-12"
            >
              <div className="flex gap-3 items-center mb-3">
                <div className="w-8 h-px bg-red-500" />
                <span className="text-red-700 text-[11px] font-bold tracking-[0.2em]">
                  Why MIO
                </span>
              </div>
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl text-slate-900">
                Built for SAP teams.
                <br />
                <span className="text-red-700">Proven in production.</span>
              </h2>
            </motion.div>

            <div className="grid overflow-hidden gap-px rounded-2xl border sm:grid-cols-2 lg:grid-cols-3 bg-slate-200 border-slate-200">
              {WHY.map((w, i) => (
                <motion.div
                  key={w.no}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                  className="px-5 py-6 bg-white transition-colors hover:bg-red-50/50 group"
                >
                  <div className="flex gap-3 items-start">
                    <span className="text-2xl font-bold leading-none transition-colors select-none text-slate-500 group-hover:text-red-600 shrink-0">
                      {w.no}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                        {w.title}
                      </h3>
                      <p className="mb-3 text-xs leading-relaxed text-slate-600">
                        {w.desc}
                      </p>
                      <div className="flex items-baseline gap-1.5 pt-2 border-t border-slate-100">
                        <span className="text-xl font-bold text-red-700">
                          {w.stat}
                        </span>
                        <span className="text-[10px] text-slate-600">
                          {w.lbl}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SAP MODULES ── */}
        <section className="py-8 border-t bg-slate-50 sm:py-10 border-slate-200">
          <div className="px-4 mx-auto max-w-8xl sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center"
            >
              <h2 className="text-xl font-bold sm:text-2xl text-slate-900">
                Works with your{" "}
                <span className="text-red-700">entire SAP stack</span>
              </h2>
              <p className="text-slate-600 text-sm mt-1.5">
                Native integration — no custom development required.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
              className="grid grid-cols-4 gap-3 sm:grid-cols-8"
            >
              {sapModules.map((m) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.name}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      show: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.4 },
                      },
                    }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-center gap-1.5 hover:border-red-300 hover:shadow-sm transition-all cursor-default"
                  >
                    <Icon className="w-5 h-5 text-red-700" />
                    <span className="text-[10px] font-semibold text-slate-600 text-center leading-tight">
                      {m.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <QuickViewUi
          title="Ready to Transform Your SAP Operations?"
          description="Join leading enterprises using MIO to achieve complete SAP & HANA visibility with AI-powered intelligence."
          linkName="Get Started"
          url="/contact-us"
          title_className="text-2xl sm:text-3xl lg:text-4xl text-red-700 font-bold text-center leading-tight"
        />
      </main>
    </>
  );
};

export default MIO_User_Monitoring;
