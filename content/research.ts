export type Publication = {
  title: string;
  venue: string;
  year: string;
  role: string;
  summary: string;
  link?: string;
  status: "published" | "ongoing" | "submitted";
};

export const publications: Publication[] = [
  {
    title: "AI Research — Neuro Pragya Private Limited",
    venue: "Industry Research",
    year: "2026",
    role: "AI & Full Stack Developer",
    summary:
      "Ongoing applied research as part of the AI & Full Stack Developer role at Neuro Pragya Private Limited. Work spans LLM integration, system architecture, and intelligent product development.",
    status: "ongoing",
  },
  {
    title: "RailMind — AI Platform Research",
    venue: "Product Research",
    year: "2025",
    role: "Founding Engineer",
    summary:
      "Research underlying the RailMind AI platform — covering multi-phase architecture review, production readiness evaluation, and full-stack AI system design for infrastructure-critical domains.",
    status: "ongoing",
  },
  {
    title: "AidFlow — Disaster Management & Transparency System",
    venue: "Project Research",
    year: "2025",
    role: "Lead Engineer",
    summary:
      "Ongoing research into disaster response coordination, real-time resource allocation, and transparency mechanisms for government-backed relief systems.",
    status: "ongoing",
  },
  {
    title: "GigShield — Platform Research",
    venue: "Project Research",
    year: "2025",
    role: "Lead Engineer",
    summary:
      "Ongoing research into gig economy worker protection, smart contract-based escrow systems, and dispute resolution mechanisms for freelance platforms.",
    status: "ongoing",
  },
];
