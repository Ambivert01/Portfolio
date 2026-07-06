export type UseCase = {
  id: string;
  title: string;
  who: string;
  trigger: string;
  steps?: string[];
  before?: string;
  after?: string;
};

export type ProjectDoc = {
  // 1. Problem Statement — why this project exists
  problemStatement?: string;
  // 2. Existing Problems — bullet list of pain points
  existingProblems?: string[];
  // 3. Why This Project — motivation / differentiation
  whyThisProject?: string;
  // 4. Objectives — goals of the project
  objectives?: string[];
  // 5. Solution — how it solves the problem
  solution?: string;
  // 6. Complete Features (detailed)
  features?: string[];
  // 7. User Roles
  userRoles?: { role: string; description: string }[];
  // 8. Use Cases
  useCases?: UseCase[];
  // 9. Workflow — step-by-step flow
  workflow?: string[];
  // 10. Business Flow — business logic / process
  businessFlow?: string[];
  // 11. Before vs After
  beforeVsAfter?: { aspect: string; before: string; after: string }[];
  // 12. Screenshots — image URLs
  screenshots?: { url: string; caption?: string }[];
  // 13. Future Scope
  futureScope?: string[];
  // 14. Limitations
  limitations?: string[];
  // 15. Conclusion
  conclusion?: string;
};

export type Project = {
  slug: string;
  name: string;
  status: "active" | "shipped" | "archived";
  oneLiner: string;
  problem: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  github?: string;
  liveUrl?: string;
  pdfUrl?: string;
  videoUrl?: string;
  heroImage?: string;
  gallery?: string[];
  featured: boolean;
  docs?: ProjectDoc;
};

export const projects: Project[] = [
  {
    slug: "railmind",
    name: "RailMind",
    status: "active",
    oneLiner: "AI-Powered Cognitive Maintenance Platform for Railway Infrastructure — signal risk, asset health, and maintenance ops unified in one system.",
    problem: "Railway infrastructure teams operate on siloed, reactive tooling — asset state, signal risk, and maintenance history live in disconnected systems, so failures get diagnosed after the fact instead of predicted before it.",
    stack: ["Next.js 14", "NestJS 10", "LangGraph", "PostgreSQL", "Neo4j", "Qdrant", "Redis", "Turborepo", "GPT-4o-mini", "Mapbox GL", "Prisma", "WebSockets"],
    metrics: [
      { label: "Production readiness", value: "9.7 / 10" },
      { label: "API routes audited", value: "58" },
      { label: "Files in final build", value: "232" },
      { label: "Audit phases", value: "6" },
    ],
    github: "https://github.com/Ambivert01/RAIL-MIND",
    liveUrl: "https://railmind-web.onrender.com",
    pdfUrl: "/RailMind/RailMind.pdf",
    featured: true,
    docs: {
      problemStatement:
        "Indian Railways operates 68,000+ km of track, 6,000+ stations, and 12,000+ signalling systems. Signal failures are the #1 cause of operational disruption — contributing to 23% of all train delays. On busy corridors, a signal failure occurs every 72 hours, triggering cascading delays affecting 15–40 trains. Despite the scale, maintenance is entirely reactive: engineers respond only after failures occur. A typical investigation takes 4–8 hours — manual log searches, paper SOPs, phone calls to senior engineers — and the same failure returns months later because root causes are never captured and lessons are never stored.",
      existingProblems: [
        "Tribal Knowledge Loss: 3 senior engineers hold the entire failure history of a zone. When they retire, 20+ years of pattern knowledge leaves with them — estimated ₹2–5 crore institutional loss per departure.",
        "No Pattern Detection: A signal fails 5 times for the identical systemic reason across different shifts. Nobody connects the dots because there is no system that does.",
        "Reactive Maintenance: Assets are fixed after failure, not before. Emergency repairs cost 3–5× more than scheduled maintenance.",
        "Siloed Data: Incidents in SCADA, maintenance history in Excel, procedures in paper binders, live context in WhatsApp groups — completely disconnected.",
        "No Risk Propagation: When Signal S11 fails due to a batch component defect, nearby identical assets are never flagged for inspection.",
        "Investigation Bottleneck: Resolution time depends entirely on which engineer is on call and what they personally remember.",
        "No Semantic Search: 'Moisture infiltration' and 'water ingress' are the same problem — but keyword-based systems treat them as unrelated.",
      ],
      whyThisProject:
        "Every existing tool solves one piece of the problem in isolation — SCADA gives real-time alerts but no history, CMMS logs work orders but detects no patterns, spreadsheets store data but make it unsearchable. No system synthesizes all three layers simultaneously. RailMind was built to be that unified cognitive layer: combining transactional precision (PostgreSQL), topological relationship mapping (Neo4j), and semantic meaning search (Qdrant) — orchestrated by a 7-agent LangGraph pipeline that delivers a complete, explainable engineering recommendation in under 60 seconds.",
      objectives: [
        "Replace 4–8 hour manual investigations with a 60-second AI pipeline.",
        "Eliminate tribal knowledge loss by automatically capturing every resolved incident as institutional memory.",
        "Enable predictive maintenance by detecting failure patterns before assets degrade.",
        "Propagate risk across connected assets when a failure is detected.",
        "Provide explainable, auditable AI recommendations — not black-box outputs.",
        "Support 6 user roles with strict server-side access control.",
        "Build a system that scales from a 50-asset pilot to 12,000+ national signals without architectural changes.",
      ],
      solution:
        "RailMind deploys three specialized data stores coordinated by a multi-agent orchestration layer. When a signal anomaly is detected, a 7-agent LangGraph pipeline executes in 60 seconds: the Incident Agent searches 100+ historical records semantically, the Knowledge Agent extracts relevant SOPs from vector memory, the Risk Agent computes a 5-factor risk score and propagates risk to adjacent assets via Neo4j graph traversal, the Engineer Agent maps root causes to corrective actions, the Planner Agent auto-generates a work order if risk exceeds threshold, and the Learning Agent vectorizes the resolution for future reference. The Decision Service synthesizes all outputs into a 7-layer explainable recommendation with a full audit trail.",
      features: [
        "Digital Twin Map — Mapbox GL viewport with 50 assets, dynamic risk coloration (GREEN→YELLOW→ORANGE→RED), layer toggles, 30s live polling, graceful offline fallback to grid layout.",
        "Asset Intelligence Profile — 5-tab deep-dive: Overview (health, risk score, install date), Incidents (full chronological log), Maintenance (work order history), Recommendations (approve/reject/complete), Graph (topological neighbors).",
        "Knowledge Graph Explorer — ReactFlow interface, dynamic node expansion, deterministic jitter-free layout, quick-load focal points (S11, INC-044, Rivergate Station), air-gapped 9-node demo fallback.",
        "Risk Intelligence Center — Network KPI cards, 50-asset heatmap grid, 7-day historical escalation chart, 30-day predictive forecast, parallel batch recalculation engine (10 assets/batch).",
        "Topological Risk Propagation — Neo4j PART_OF traversal: +20 risk to immediate neighbors, +12 to secondary, +6 to tertiary when an asset degrades.",
        "Incident Management System — Full lifecycle (OPEN→INVESTIGATING→RESOLVED→ARCHIVED), agent thought timeline, clustering engine for similar incidents, automated learning hooks on close.",
        "Memory Search (Semantic Hybrid RAG) — Unified queries across 6 Qdrant collections, graph-enriched retrieval, mock embedding fallback with visible warning banner.",
        "Recommendations Engine — Auto-generated by pipeline, strict state machine (PENDING→APPROVED→IN_PROGRESS→COMPLETED/REJECTED), confirmation modals for destructive actions.",
        "Maintenance Planner — Risk-prioritized queue, 7 work order types enforced, auto-provisioning when risk score ≥ 31 (CRITICAL = same-day, HIGH = 7-day deadline).",
        "Real-Time WebSocket Broadcasts — Sub-second push notifications to all connected clients on incident create/update/close.",
        "7-Layer Decision Service — Evidence scoring (0–100), context synthesis, primary recommendation selection, priority determination, confidence formula C = (0.45·E) + (0.30·K) + (0.25·R), conflict resolution, 6-step explainability chain.",
        "Role-Based Access Control — 6 roles (ADMINISTRATOR, ENGINEER, MAINTENANCE_MANAGER, SAFETY_OFFICER, OPERATOR, TRAINING_OFFICER), JWT + RolesGuard enforced server-side on every route.",
        "Redis Cache Layer — 60-second TTL on all agent pipeline responses, instant cache-hit returns.",
        "Full Audit Trail — Every AI decision logged with agent run trace, confidence inputs, source citations, and approving user identity.",
      ],
      userRoles: [
        { role: "ADMINISTRATOR", description: "Absolute access to all data. Execute raw Neo4j Cypher queries, modify user accounts, adjust agent models, full incident and work order override capability." },
        { role: "ENGINEER", description: "Full data access. Create, modify, and close incidents. Generate work orders, approve AI recommendations, trigger LangGraph pipelines, request memory re-indexing." },
        { role: "MAINTENANCE_MANAGER", description: "Full data access. Read-only on incidents. Full creation, modification, and bulk approval of work orders. Adjust technician assignments and cost variables." },
        { role: "SAFETY_OFFICER", description: "Full data access. Read-only on incidents and maintenance queues. Force zone-wide risk recalculations and export compliance logs." },
        { role: "OPERATOR", description: "Full data access. Create new incident tickets (read-only elsewhere). Submit queries and view network map updates." },
        { role: "TRAINING_OFFICER", description: "Full data access. Read-only on incidents and maintenance. Manage training documentation inputs and extract lesson histories." },
      ],
      useCases: [
        {
          id: "UC-01",
          title: "Signal Failure Investigation",
          who: "Depot Field Engineer / Control Room Operator",
          trigger: "Operational telemetry registers an intermittent signal drop on Signal S11.",
          steps: [
            "User loads Signal S11 Asset Intelligence Profile and clicks 'Ask RailMind'.",
            "LangGraph pipeline executes — Incident Agent finds 5 related historical tickets over 18 months.",
            "Risk Agent flags 87/100 CRITICAL score, correlates with wet weather windows.",
            "Knowledge Agent extracts SOP-007 (Relay Replacement Procedure).",
            "Engineer Agent outputs action plan: replace relay assembly, inspect housing seal.",
            "Planner Agent auto-generates work order with same-day deadline.",
            "Learning Agent vectorizes investigation for future reference.",
          ],
          before: "4–8 hours manual log search, phone calls, paper SOPs.",
          after: "60-second automated diagnostic with full citation trail.",
        },
        {
          id: "UC-02",
          title: "Pre-Monsoon Risk Assessment",
          who: "Safety Officer / Maintenance Director",
          trigger: "Preparing infrastructure ahead of seasonal monsoon weather.",
          steps: [
            "Safety Officer opens Risk Intelligence Center heatmap.",
            "Filters network by HIGH and CRITICAL — 8 vulnerable assets highlighted.",
            "System shows statistical correlation with historical rain-driven water ingress events.",
            "Officer bulk-approves preventive inspection entries.",
            "Planner Agent auto-outputs 8 scheduled work orders with 30-day deadline.",
          ],
          before: "Reactive — failures discovered during monsoon season.",
          after: "Predictive — 8 assets inspected and secured before season starts.",
        },
        {
          id: "UC-03",
          title: "Systemic Root Cause Pattern Discovery",
          who: "Senior Signal Engineer",
          trigger: "Monthly infrastructure performance audit.",
          steps: [
            "Engineer queries Knowledge Graph Explorer for 'relay corrosion'.",
            "Neo4j reveals cluster of 12 incidents across 8 signaling points.",
            "All affected assets share age >10 years and coastal location.",
            "Engineer creates inspection rule for all coastal relays >10 years old.",
            "System auto-recalculates and raises risk priority of 15 additional assets.",
          ],
          before: "No system connects dots across incidents from different shifts.",
          after: "Network-wide intelligence from isolated incident entries.",
        },
        {
          id: "UC-04",
          title: "Junior Engineer Onboarding",
          who: "Newly Assigned Trainee Field Technician",
          trigger: "Assigned to unfamiliar sector with legacy infrastructure.",
          steps: [
            "New hire opens Asset Intelligence Profile for Signal S22.",
            "System surfaces 2 years of local faults, component overrides, regional failure modes.",
            "Technician queries Memory Search: 'coastal relay breakdown procedures'.",
            "Receives 8 structured lessons learned + links to current maintenance specs.",
          ],
          before: "6-month field shadowing dependent on senior engineer availability.",
          after: "Day 1 access to complete institutional knowledge base.",
        },
        {
          id: "UC-05",
          title: "Incident Triage During Severe Disruption",
          who: "Control Room Supervisor",
          trigger: "Lightning storm knocks out 3 primary signaling installations simultaneously.",
          steps: [
            "Dashboard flashes 3 open CRITICAL incident tickets instantly.",
            "Risk Heatmap flags 12 adjacent assets orange via topological propagation.",
            "Supervisor uses pipeline's prioritized breakdown to route repair crews.",
            "Pre-generated work orders dispatched to highest cascade-risk assets first.",
          ],
          before: "Sub-optimal resource allocation under crisis pressure.",
          after: "Data-driven crew routing in seconds during high-pressure emergencies.",
        },
        {
          id: "UC-06",
          title: "Post-Incident Automated Knowledge Capture",
          who: "System (Automated) / Closing Field Technician",
          trigger: "Ticket status changed from INVESTIGATING to RESOLVED.",
          steps: [
            "Technician enters resolution steps and root cause (contact corrosion).",
            "LearningAgent.onIncidentClosed() fires automatically.",
            "Text converted to vector embeddings, saved to Qdrant lessons collection.",
            "PostgreSQL LessonLearned row created. Audit registry entry logged.",
          ],
          before: "Lessons lost in email threads and WhatsApp groups within weeks.",
          after: "Zero knowledge loss — every resolution becomes searchable institutional memory.",
        },
        {
          id: "UC-07",
          title: "Fleet-Wide Risk Propagation",
          who: "Automated Risk Engine",
          trigger: "Asset risk score crosses into CRITICAL zone.",
          steps: [
            "Risk Agent traverses Neo4j PART_OF and CONNECTED_TO paths.",
            "Locates S12 and S13 in same physical interlocking house, same batch code.",
            "Applies +20 risk bump to both units automatically.",
            "Browser alerts and email flags dispatched to safety dispatchers.",
          ],
          before: "Adjacent assets never inspected after a related failure.",
          after: "Cascade vulnerability detection without manual engineering review.",
        },
        {
          id: "UC-08",
          title: "Regulatory Compliance Auditing",
          who: "Railway Safety Board Inspector / Regional Audit Team",
          trigger: "Annual statutory safety verification or post-incident regulatory review.",
          steps: [
            "Safety Officer opens Audit Logs panel, filters by Incident resource over 12 months.",
            "System exports complete unmodifiable decision trace for every AI investigation.",
            "Each record lists confidence inputs, vector-matched source documents, and approving user identities.",
          ],
          before: "Gut-feel risk assessment with no verifiable documentation trail.",
          after: "Explainable, auditable records that fully meet Railway Safety Board standards.",
        },
      ],
      workflow: [
        "Signal anomaly detected via telemetry or operator input.",
        "AgentsService checks Redis cache (60s TTL) — cache hit returns instantly.",
        "Cache miss: ExecutiveAgent instantiates LangGraph state machine.",
        "load_asset — fetches telemetry and metadata from PostgreSQL.",
        "incident_agent — hybrid PostgreSQL + Qdrant semantic search across historical tickets.",
        "knowledge_agent — extracts SOP paragraphs from Qdrant, appends Neo4j structural context.",
        "risk_agent — computes 5-factor risk score, traverses Neo4j graph, propagates risk to neighbors.",
        "engineer_agent — maps root causes to specific corrective actions from validated SOPs.",
        "planner_agent — auto-provisions work order if risk score ≥ 31.",
        "learning_agent — packages resolution context for vector storage.",
        "DecisionService executes 7-layer synthesis: evidence scoring → context merge → recommendation selection → priority → confidence formula → conflict resolution → explainability chain.",
        "GPT-4o-mini generates structured natural language response with citations and work order.",
        "Response cached in Redis. WebSocket broadcasts workflow:completed to all clients.",
      ],
      businessFlow: [
        "Asset degrades or anomaly detected → Incident ticket auto-created or operator-logged.",
        "AI pipeline investigates → Risk score computed, pattern matched, SOP retrieved.",
        "Recommendation generated → Engineer reviews, approves, or rejects via dashboard.",
        "Work order created → Maintenance team assigned, deadline set by urgency level.",
        "Field technician executes repair → Resolution logged with root cause.",
        "Incident closed → LearningAgent vectorizes resolution into institutional memory.",
        "Next similar failure → System finds this resolution in 60 seconds instead of 4–8 hours.",
        "Scale: 100 incidents = local correlations. 10,000 incidents = unmatchable knowledge repository.",
      ],
      beforeVsAfter: [
        { aspect: "Investigation Time", before: "4–8 hours (manual logs, phone calls, paper SOPs)", after: "Under 60 seconds (automated AI pipeline)" },
        { aspect: "Pattern Detection", before: "Manual, rarely achieved across shifts", after: "Automatic via graph-vector correlation" },
        { aspect: "Risk Assessment", before: "Subjective gut feel, localized", after: "5-factor deterministic formula + Neo4j propagation" },
        { aspect: "Lesson Capture", before: "Informal — lost in emails and WhatsApp", after: "Automated vectorization on every incident close" },
        { aspect: "New Engineer Onboarding", before: "6 months field shadowing", after: "Day 1 access to full historical memory" },
        { aspect: "Maintenance Model", before: "Strictly reactive (fix after failure)", after: "Fully predictive (ranked by failure probability)" },
        { aspect: "Cost Per Failure", before: "₹5L–₹48L direct + cascade costs", after: "Prevented: ₹0 | Mitigated: ₹1L–₹2L" },
        { aspect: "Compliance Audit", before: "No verifiable documentation trail", after: "7-layer explainable audit trail per investigation" },
      ],
      screenshots: [
        { url: "/RailMind/RailMind1.png", caption: "Dashboard Overview" },
        { url: "/RailMind/RailMind2.png", caption: "Asset Intelligence Profile" },
        { url: "/RailMind/RailMind3.png", caption: "Knowledge Graph Explorer" },
        { url: "/RailMind/RailMind4.png", caption: "Risk Intelligence Center" },
        { url: "/RailMind/RailMind5.png", caption: "Incident Management" },
        { url: "/RailMind/RailMind6.png", caption: "Memory Search" },
        { url: "/RailMind/RailMind7.png", caption: "Maintenance Planner" },
        { url: "/RailMind/RailMind8.png", caption: "Digital Twin Map" },
      ],
      futureScope: [
        "Parallel Agent Execution — run Incident and Knowledge agents simultaneously to cut pipeline time.",
        "Time Travel UI — step backward through network risk states during historical incidents.",
        "Mobile Engineering App — React Native app with offline sync for remote track sectors.",
        "Direct SCADA Pipeline Ingestion — auto-open incident tickets from live telemetry streams.",
        "Predictive Supply Procurement — auto-order parts 6 months ahead of predicted failures.",
        "Cross-Zone Pattern Sharing — failure playbooks from one zone auto-update all other zones.",
        "Advanced Management Console — full visual control over user accounts, roles, graph rules.",
        "Object Store Connectors — attach inspection photos and field manuals to tickets via MinIO.",
        "Self-hosted LLM — switch to on-premises Llama 3 for fully air-gapped deployments.",
        "National Scale — all 12,000+ signals, multi-zone knowledge sharing, Railway Safety Board compliance dashboard.",
      ],
      limitations: [
        "OpenAI API dependency — semantic search degrades to hash-similarity model if API key is unavailable (usingMockEmbeddings warning shown in UI).",
        "60-second pipeline timeout — complex multi-layer queries that exceed the window return a pre-formatted fallback response.",
        "Synthetic data — current 50-asset pilot uses generated engineering histories mirroring real faults; live SCADA ingestion requires external integration.",
        "No native SCADA connectors — legacy hardware integration requires external teams to configure REST/WebSocket ingestion endpoints.",
        "English-only semantic search — regional railway terminology is mapped, but native Hindi querying is on the roadmap.",
        "Single-region deployment — pilot is not multi-zone HA; national scale requires Kubernetes cluster upgrade.",
      ],
      conclusion:
        "RailMind is a unified cognitive intelligence layer that sits on top of existing infrastructure investments, transforming disconnected operational data into clear, actionable insights. Its compounding architecture means the system grows more valuable with every closed ticket: 100 incidents establishes local correlations, 10,000 incidents creates an unmatchable institutional knowledge repository accessible to any engineer on day one. By combining relational precision (PostgreSQL), topological graph modeling (Neo4j), and semantic vector matching (Qdrant) inside a reliable 7-agent LangGraph pipeline, RailMind eliminates fragmented human memory and black-box AI. For Indian Railways, this is a clear, verifiable path toward zero signal failures, optimized maintenance budgets, and permanent institutional knowledge retention across national infrastructure.",
    },
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
    github: "#",
    liveUrl: "#",
    featured: true,
    docs: {
      overview: "[What this project does and why it was built.]",
      architecture: "[High-level system design — components and how data flows.]",
      features: ["[Feature one.]", "[Feature two.]"],
      lessonsLearned: ["[Lesson one.]", "[Lesson two.]"],
      roadmap: ["[Next milestone.]"],
    },
  },
  {
    slug: "project-3",
    name: "[Project Three]",
    status: "shipped",
    oneLiner: "[One-line description — what it does, for whom.]",
    problem: "[Constraint or problem that made this worth building.]",
    stack: ["[Stack A]", "[Stack B]"],
    metrics: [{ label: "[Metric A]", value: "[Value]" }],
    github: "#",
    featured: true,
    docs: {
      overview: "[What this project does and why it was built.]",
      features: ["[Feature one.]"],
      roadmap: ["[Next milestone.]"],
    },
  },
  {
    slug: "project-4",
    name: "[Project Four]",
    status: "archived",
    oneLiner: "[One-line description — what it does, for whom.]",
    problem: "[Constraint or problem that made this worth building.]",
    stack: ["[Stack A]", "[Stack B]", "[Stack C]"],
    metrics: [{ label: "[Metric A]", value: "[Value]" }],
    github: "#",
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
    liveUrl: "#",
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
    github: "#",
    featured: false,
  },
];
