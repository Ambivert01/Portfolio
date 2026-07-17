export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  summary: string;
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    org: "Neuro Pragya Private Limited",
    role: "AI & Full Stack Developer",
    period: "Jun 2026 — Present",
    summary:
      "Building AI-driven full-stack products end-to-end — designing system architecture, integrating LLM pipelines, and developing production-ready features across the entire stack.",
    current: true,
  },
  {
    org: "RailMind",
    role: "Founding Engineer",
    period: "2025 — Present",
    summary:
      "Architected and audited a full-stack AI platform across 6 systematic review phases (architecture, code quality, E2E workflow, API, database, production readiness), taking the system from prototype to ~9.7/10 production readiness.",
    current: true,
  },
  {
    org: "ZHAGRAM Technologies",
    role: "Web Development Intern",
    period: "Dec 2025 — Feb 2026",
    summary:
      "Developed and shipped web features for client projects, working across frontend and backend layers. Contributed to responsive UI builds, API integrations, and code quality improvements.",
  },
];
