export type Project = {
  slug: string;
  name: string;
  status: "active" | "shipped" | "archived";
  oneLiner: string;
  problem: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  links: { label: string; href: string }[];
  featured: boolean;
  architecture?: string;
  lessonsLearned?: string[];
  roadmap?: string[];
  videoUrl?: string;
  heroImage?: string;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "railmind",
    name: "RailMind",
    status: "active",
    oneLiner:
      "Production-grade AI platform for railway infrastructure management — signal risk, asset health, and maintenance ops in one system.",
    problem:
      "Railway infrastructure teams operate on siloed, reactive tooling — asset state, signal risk, and maintenance history live in disconnected systems, so failures get diagnosed after the fact instead of predicted before it.",
    stack: ["Next.js 14", "NestJS 10", "LangGraph", "PostgreSQL", "Neo4j", "Qdrant", "Redis", "Turborepo"],
    metrics: [
      { label: "Production readiness", value: "9.7 / 10" },
      { label: "API routes audited", value: "58" },
      { label: "Files in final build", value: "232" },
      { label: "Audit phases", value: "6" },
    ],
    links: [
      { label: "System docs", href: "#" },
      { label: "Product brief", href: "#" },
    ],
    featured: true,
    architecture:
      "Turborepo monorepo — Next.js frontend, NestJS API, LangGraph agents orchestrating PostgreSQL (transactional), Neo4j (asset/signal graph relationships), Qdrant (semantic search over maintenance records), Redis (caching + job queues).",
    lessonsLearned: [
      "Neo4j integer IDs vs UUIDs must be reconciled at schema design, not patched later — broke graph edges across the system.",
      "Audit in sequential phases (architecture → code quality → E2E → API → DB → production) surfaces compounding issues single-pass reviews miss.",
      "LLM calls need retry with exponential backoff by default — silent failures under load are worse than slow responses.",
    ],
    roadmap: [
      "Live deployment with real signal telemetry feeds",
      "Expand Neo4j relationship types for junction-level risk modeling",
      "Public API for third-party rail ops integrations",
    ],
    videoUrl: "",
    heroImage: "",
    gallery: ["", "", ""],
  },
  {
    slug: "project-2",
    name: "[Project Two]",
    status: "shipped",
    oneLiner: "[One-line description — what it does, for whom.]",
    problem: "[Constraint or problem that made this worth building.]",
    stack: ["[Stack A]", "[Stack B]", "[Stack C]"],
    metrics: [
      { label: "[Metric A]", value: "[Value]" },
      { label: "[Metric B]", value: "[Value]" },
    ],
    links: [{ label: "Live", href: "#" }, { label: "GitHub", href: "#" }],
    featured: true,
    architecture: "[High-level system design — components and how data flows between them.]",
    lessonsLearned: ["[Lesson one.]", "[Lesson two.]"],
    roadmap: ["[Next milestone.]"],
  },
  {
    slug: "project-3",
    name: "[Project Three]",
    status: "shipped",
    oneLiner: "[One-line description — what it does, for whom.]",
    problem: "[Constraint or problem that made this worth building.]",
    stack: ["[Stack A]", "[Stack B]"],
    metrics: [{ label: "[Metric A]", value: "[Value]" }],
    links: [{ label: "GitHub", href: "#" }],
    featured: true,
    architecture: "[High-level system design.]",
    lessonsLearned: ["[Lesson.]"],
    roadmap: ["[Next milestone.]"],
  },
  {
    slug: "project-4",
    name: "[Project Four]",
    status: "archived",
    oneLiner: "[One-line description — what it does, for whom.]",
    problem: "[Constraint or problem that made this worth building.]",
    stack: ["[Stack A]", "[Stack B]", "[Stack C]"],
    metrics: [{ label: "[Metric A]", value: "[Value]" }],
    links: [{ label: "GitHub", href: "#" }],
    featured: false,
  },
  {
    slug: "project-5",
    name: "[Project Five]",
    status: "shipped",
    oneLiner: "[One-line description — what it does, for whom.]",
    problem: "[Constraint or problem that made this worth building.]",
    stack: ["[Stack A]"],
    metrics: [{ label: "[Metric A]", value: "[Value]" }],
    links: [{ label: "Live", href: "#" }],
    featured: false,
  },
  {
    slug: "project-6",
    name: "[Project Six]",
    status: "archived",
    oneLiner: "[One-line description — what it does, for whom.]",
    problem: "[Constraint or problem that made this worth building.]",
    stack: ["[Stack A]", "[Stack B]"],
    metrics: [{ label: "[Metric A]", value: "[Value]" }],
    links: [{ label: "GitHub", href: "#" }],
    featured: false,
  },
];
