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
    title: "Applied AI Research — Neuro Pragya Private Limited",
    venue: "Industry Research · Internship",
    year: "2026",
    role: "AI & Full Stack Developer",
    summary:
      "Ongoing applied research at Neuro Pragya Private Limited — a startup working at the intersection of AI and intelligent product development. Work spans LLM integration, system architecture design, and building production-grade AI-powered features.",
    status: "ongoing",
  },
  {
    title: "Multi-Agent LangGraph Architecture for Predictive Railway Signal Maintenance",
    venue: "Technical Report",
    year: "",
    role: "Author · Founding Engineer, RailMind",
    summary:
      "Documents the design and evaluation of a 7-agent LangGraph pipeline that reduces railway signal failure investigation time from 4–8 hours to under 60 seconds. Covers multi-database coordination (PostgreSQL + Neo4j + Qdrant), topological risk propagation, and a 7-layer explainable decision synthesis model.",
    link: "/RailMind/RailMind.pdf",
    status: "ongoing",
  },
  {
    title: "Programmable Humanitarian Finance: AI Verification and Blockchain Audit Trails for Disaster Relief",
    venue: "Technical Report",
    year: "",
    role: "Author · Lead Engineer, AidFlow AI",
    summary:
      "Examines the architecture of a policy-governed humanitarian execution platform combining multi-agent AI eligibility verification, programmable relief wallets with category-enforced spending, and Merkle-anchored blockchain audit trails. Proposes a zero-trust financial model where accountability is an intrinsic system property rather than an organizational practice.",
    link: "/AidFlow/AidFlow.pdf",
    status: "ongoing",
  },
  {
    title: "Parametric Income Protection for Gig Workers: Physics-Based Fraud Detection and Autonomous Claims Processing",
    venue: "Technical Report",
    year: "",
    role: "Author · Lead Engineer, GigShield",
    summary:
      "Presents a 7-layer fraud intelligence system combining GPS validation, device fingerprinting, behavioral biometrics, and Louvain network graph clustering for coordinated fraud ring detection. Introduces rain-adaptive scoring thresholds and a zero-touch parametric claims engine that settles payouts within 15 minutes of trigger verification.",
    link: "/GigShield/gig.pdf",
    status: "ongoing",
  },
];
