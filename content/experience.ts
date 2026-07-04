export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  summary: string;
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    org: "RailMind",
    role: "Founding Engineer",
    period: "2025 — Present",
    summary:
      "Architected and audited a full-stack AI platform across 6 systematic review phases (architecture, code quality, E2E workflow, API, database, production readiness), taking the system from prototype to ~9.7/10 production readiness.",
    current: true,
  },
  { org: "[Company / Program]", role: "[Role]", period: "[Year — Year]", summary: "[Scope, impact, what you owned.]" },
  { org: "[Company / Program]", role: "[Role]", period: "[Year — Year]", summary: "[Scope, impact, what you owned.]" },
];
