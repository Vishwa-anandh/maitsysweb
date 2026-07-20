import React from "react";
import { motion, type Variants } from "framer-motion";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: "1",
    title: "SAP BTP Developer",
    department: "SAP Solutions",
    type: "Full-time",
    location: "Boston / Remote",
    description:
      "Develop cutting-edge Business Technology Platform solutions that drive digital transformation for global enterprises.",
    requirements: [],
    responsibilities: [],
    skills: ["SAP BTP", "CAP Model", "Node.js", "Fiori", "OData"],
  },
  {
    id: "2",
    title: "SAP BTP Administrator",
    department: "SAP Solutions",
    type: "Full-time",
    location: "Boston / Hybrid",
    description:
      "Manage and optimize SAP BTP environments and cloud deployments for enterprise-scale operations.",
    requirements: [],
    responsibilities: [],
    skills: ["SAP BTP", "Cloud Admin", "Security", "Monitoring"],
  },
  {
    id: "3",
    title: "Front End Web Developer",
    department: "Web Development",
    type: "Full-time",
    location: "Remote",
    description:
      "Create modern, responsive UIs with React, TypeScript, and Tailwind CSS for enterprise-grade web applications.",
    requirements: [],
    responsibilities: [],
    skills: ["React", "TypeScript", "Tailwind", "REST API"],
  },
  {
    id: "5",
    title: "Back End Web Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    description:
      "Own server-side logic, API development, and database architecture for high-traffic platforms.",
    requirements: [],
    responsibilities: [],
    skills: ["Node.js", "Express", "REST", "PostgreSQL"],
  },
  {
    id: "6",
    title: "AI Solution Architect",
    department: "Artificial Intelligence",
    type: "Full-time",
    location: "Boston / Remote",
    description:
      "Lead design and implementation of enterprise AI and ML solutions across diverse industry verticals.",
    requirements: [],
    responsibilities: [],
    skills: ["AI/ML", "Python", "TensorFlow", "NLP"],
  },
  {
    id: "7",
    title: "Cloud Solution Architect",
    department: "Cloud Engineering",
    type: "Full-time",
    location: "Boston / Hybrid",
    description:
      "Design secure, scalable cloud architectures across AWS, Azure, and GCP for enterprise clients.",
    requirements: [],
    responsibilities: [],
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
  },
];

const deptColors: Record<string, string> = {
  "SAP Solutions": "bg-blue-50 text-blue-700 border-blue-100",
  "Web Development": "bg-emerald-50 text-emerald-700 border-emerald-100",
  Engineering: "bg-violet-50 text-violet-700 border-violet-100",
  "Artificial Intelligence": "bg-amber-50 text-amber-700 border-amber-100",
  "Cloud Engineering": "bg-cyan-50 text-cyan-700 border-cyan-100",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const CurrentOpenings: React.FC = () => {
  return (
    <section className="relative pt-10 pb-4 md:pt-12 md:pb-6 w-full bg-slate-50">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-slate-200" />

      <div className="px-6 mx-auto max-w-8xl sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex gap-3 items-center mb-3">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-xs font-semibold tracking-[0.18em] text-red-600">
              Open Roles
            </span>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold md:text-4xl text-slate-900">
              Current Openings
            </h2>
            <p className="max-w-sm text-sm text-slate-500">
              {jobPositions.length} positions across technology and innovation
            </p>
          </div>
        </motion.div>

        {/* Job Cards */}
        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {jobPositions.map((job) => (
            <motion.div
              key={job.id}
              variants={cardVariants}
              className="flex overflow-hidden relative flex-col p-7 bg-white rounded-2xl border transition-all duration-300 group border-slate-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/5"
            >
              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 group-hover:w-full transition-all duration-500 ease-out" />

              {/* Top meta row */}
              <div className="flex justify-between items-center mb-5">
                <span
                  className={`text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded-full border ${
                    deptColors[job.department] ??
                    "bg-slate-50 text-slate-600 border-slate-100"
                  }`}
                >
                  {job.department}
                </span>
                <span className="text-xs font-medium text-slate-600">
                  {job.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-1.5 group-hover:text-red-600 transition-colors duration-200">
                {job.title}
              </h3>

              {/* Location */}
              <div className="flex items-center gap-1.5 mb-4">
                <svg
                  className="w-3.5 h-3.5 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-xs font-medium text-slate-600">
                  {job.location}
                </span>
              </div>

              {/* Description */}
              <p className="flex-1 mb-6 text-sm leading-relaxed text-slate-500">
                {job.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Apply CTA */}
              <a
                href="#apply-now"
                className="flex justify-between items-center px-5 py-3 w-full text-sm font-semibold text-white rounded-xl transition-colors duration-300 bg-slate-900 group-hover:bg-red-600"
              >
                <span>Apply Now</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 justify-between items-center px-8 py-7 mt-8 bg-white rounded-2xl border sm:flex-row border-slate-100"
        >
          <div>
            <p className="mb-1 text-lg font-bold text-slate-900">
              Don't see the right fit?
            </p>
            <p className="text-sm text-slate-500">
              We're always growing. Follow us on LinkedIn for the latest
              opportunities.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/company/maitsys/jobs/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2.5 bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            View All on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentOpenings;
