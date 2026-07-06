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
  status: "active" | "shipped" | "beta" | "archived";
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
    status: "beta",
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
    slug: "pairspace",
    name: "PairSpace",
    status: "beta",
    oneLiner: "Digital intimacy infrastructure for distributed relationships — a private, two-person space built around the dyad, not the broadcast.",
    problem: "Most communication technology is built for broadcast or transaction. Neither maps onto the actual problem of sustaining one continuous relationship between two specific people over distance and time.",
    stack: ["React 18", "Vite 5", "Tailwind CSS", "Framer Motion", "Node.js 20", "Express 4", "Socket.IO", "MongoDB", "Mongoose", "JWT", "WebRTC", "node-cron", "Multer", "Sharp", "Jest"],
    metrics: [
      { label: "Features", value: "18" },
      { label: "Realtime namespaces", value: "6" },
      { label: "Tests", value: "124" },
      { label: "Theoretical frameworks", value: "8" },
    ],
    github: "https://github.com/Ambivert01/PAIR-SPACE",
    liveUrl: "https://pairspace-web.onrender.com/",
    pdfUrl: "/PairSpace/PairSpace.pdf",
    featured: true,
    docs: {
      problemStatement:
        "Most communication technology is built for one of two purposes: broadcast (one-to-many, optimized for reach) or transaction (task-to-completion, optimized for efficiency). Neither maps onto the actual problem of sustaining one continuous, asymmetric-in-stakes relationship between two specific people over distance and time. When two people used to share a room, an enormous amount of relational work happened automatically — a glance, a shared silence, noticing someone's bad day from their posture. Remove the room, and all of that work either has to be replaced by something else, or it simply stops happening. WhatsApp, Instagram, Zoom, and calendar tools all fail not because they're poorly engineered, but because they were built for a different unit — the individual, the audience, the call, the task — and a relationship is none of those things.",
      existingProblems: [
        "Temporal Asynchrony: Two people in different timezones have a shrinking window for live interaction. The coordination cost of finding that window is a real, recurring tax paid hundreds of times over the life of a relationship.",
        "Experiential Co-absence: Partners cannot share an experience simultaneously — a meal, a film, a walk. Remove simultaneity and you remove the raw material that 'remember when' stories are made from.",
        "Affective Opacity: A distant partner has almost no ambient information about how the other is actually feeling. A co-located partner gets this for free, dozens of times a day, through tone and posture.",
        "Ritual Erosion: Distance and tool fragmentation make small repeated gestures — a goodnight call, a Sunday routine — more effortful to start and therefore easier to quietly let lapse.",
        "Narrative Discontinuity: Without a shared repository, the 'story' of a relationship scatters across camera rolls, chat histories, and fading memory. Nobody assembles it into anything coherent.",
        "Context Collapse: On platforms where many audiences coexist, people flatten their self-presentation to suit the most conservative viewer — suppressing exactly the unguarded, vulnerable content close relationships are built on.",
        "No Reciprocity Enforcement: Disclosure that is asymmetric or forced tends to backfire. No existing tool encodes reciprocity at the protocol level — it relies entirely on goodwill.",
      ],
      whyThisProject:
        "PairSpace is built around a single, narrow unit of design: the dyad — exactly two people who have agreed to share a digital space. The underlying data model gives a relationship exactly two member fields, not a members array — meaning two-person exclusivity is a structural guarantee, not a policy. Every feature traces back to a specific, named structural deficit of distance and a specific theoretical mechanism for addressing it: Attachment Theory, Social Presence Theory, Social Penetration Theory, Context Collapse, Gottman's Rituals of Connection, Ambient Intimacy, Narrative Identity, and Equity Theory. The coherence across all features — not any single one — is what a general-purpose messaging app cannot structurally provide.",
      objectives: [
        "Eliminate context collapse by making the dyad the structural unit — no audience, no third member possible at the data model level.",
        "Address temporal asynchrony with a live Timezone Bridge showing dual clocks, awake/asleep heuristics, and a computed golden availability window.",
        "Restore experiential co-presence with join-gated synchronized Watch Together — playback disabled until both partners are present.",
        "Solve affective opacity with a Daily Mood Check-In (one emoji + note, daily reset) and a sub-conversational Heartbeat Tap.",
        "Scaffold relationship rituals with habit streaks and a Planner that remembers and maintains rhythm.",
        "Automate narrative curation with AI Story generation at meaningful milestones so couples don't have to assemble their own history.",
        "Encode reciprocal disclosure at the protocol level via Journal visibility rules — a partner's entry is literally unreadable until the other contributes in return.",
        "Preserve institutional memory of the relationship in a purpose-built Memory Timeline with PIN-locked individual entries.",
      ],
      solution:
        "PairSpace deploys a layered channel architecture — asynchronous chat (lean) → mood signal (emotionally targeted) → synchronized activity (rich, simultaneous) → live call (richest) — coordinated by a real-time WebSocket layer and a peer-to-peer WebRTC call stack. The Journal's visible_after_response rule encodes Social Penetration Theory directly as an access-control permission. The Heartbeat Tap uses a deliberate 30-second cooldown as a scarcity mechanic — a gesture sent without limit stops meaning 'I'm thinking of you' and starts meaning 'this button is satisfying to press.' Time Capsules support mutual-unlock conditions requiring both partners to actively confirm readiness, encoding the idea that some thresholds in a relationship should be crossed together, not unilaterally.",
      features: [
        "Private Chat — real-time messaging with reactions, replies, edit/delete, typing indicators, read receipts, media, and voice notes.",
        "Voice & Video Calls — WebRTC peer-to-peer with mute, camera toggle, screen share, auto-timeout, and call history.",
        "Memory Timeline — shared photo/video/milestone timeline with PIN locking, reactions, comments, and AI emotion tagging.",
        "Watch Together — synchronized video/audio with live position sync — partner joins at the exact right second.",
        "Thinking of You (Heartbeat Tap) — one-tap pulse that appears on partner's screen instantly, no words needed.",
        "Daily Mood — both partners share a daily emoji mood visible on each other's dashboard.",
        "Timezone Bridge — both local times, awake/sleeping status, golden overlap hours, and distance apart.",
        "Digital Gifts — surprise gifts with countdown timers (precise hours/minutes), reveal animations, and reaction mechanics.",
        "Time Capsules — lock messages and media until a future date, mutual unlock, or anniversary.",
        "Journal — shared journal with visibility rules: write for each other, or reveal only after they respond.",
        "Planner — habits with streak tracking, events, goals, recurring reminders, and relationship calendar.",
        "Games — 8 turn-based couple games: Truth or Dare, Word Association, Trivia, and more.",
        "AI Insights — weekly relationship pattern analysis: message frequency, emotional diversity, activity consistency.",
        "AI Story — milestone-triggered narrative stories: '100 messages together,' '1 year anniversary.'",
        "Smart Notifications — anniversary reminders with 1-day early heads-up, real-time delivery, scheduled system.",
        "Privacy Controls — PIN-lock memories, session management, data export, incognito mode.",
        "Personalization — custom themes, wallpapers, relationship name, font, and mood settings.",
        "Offline Sync — messages queued in IndexedDB, delivered automatically on reconnect with deduplication.",
      ],
      userRoles: [
        { role: "Partner A (Initiator)", description: "Sends the invite, sees pending state until accepted. Equal authority over all shared content — no 'owner' privileges." },
        { role: "Partner B (Joiner)", description: "Accepts invite to activate the space. Fully symmetrical permissions — neither partner holds admin power over the other's account or data." },
      ],
      useCases: [
        {
          id: "UC-01",
          title: "Timezone-Aware Communication",
          who: "Long-distance couple in different timezones",
          trigger: "One partner wants to reach out but doesn't know if the other is awake.",
          steps: [
            "Open Timezone Bridge — see both local times and awake/asleep heuristic at a glance.",
            "Check the computed golden window for likely mutual availability.",
            "Send a Heartbeat Tap if outside the window — zero-content, no obligation to reply.",
            "Schedule a call for the next golden window.",
          ],
          before: "Timezone arithmetic in your head, risk of waking the other person.",
          after: "One screen answers 'can I reach them now?' without any calculation.",
        },
        {
          id: "UC-02",
          title: "Synchronized Watch Together",
          who: "Couple separated by distance wanting to share a film",
          trigger: "Both partners free at the same time, want to watch something together.",
          steps: [
            "One partner starts a Watch Together session and shares the link/title.",
            "Playback controls are disabled until both are present — join-gated.",
            "Second partner joins; system asks active device for live position and hands it to joiner.",
            "Both watch in sync with drift correction above threshold only.",
          ],
          before: "'Press play on 3' over text — always slightly out of sync, no shared reactions.",
          after: "Genuine simultaneity — the same frame at the same moment.",
        },
        {
          id: "UC-03",
          title: "Reciprocal Journal Entry",
          who: "Partner wanting to share something vulnerable",
          trigger: "One partner writes a sensitive journal entry and sets it to response-gated.",
          steps: [
            "Partner A writes entry, sets visibility to 'visible after response'.",
            "Partner B sees that an entry exists but cannot read it.",
            "Partner B writes their own reflection in return.",
            "Both entries unlock simultaneously — neither read the other's first.",
          ],
          before: "One-sided emotional exposure with no structural guarantee of reciprocity.",
          after: "Reciprocity encoded at the protocol level — not relying on goodwill.",
        },
        {
          id: "UC-04",
          title: "Anticipatory Gift",
          who: "Partner wanting to mark a meaningful upcoming date",
          trigger: "Exam, anniversary, or difficult day approaching for the other partner.",
          steps: [
            "Create a voice-message gift, set to unlock on the morning of the event.",
            "Countdown becomes a small daily touchpoint in the days leading up.",
            "Gift unlocks at the scheduled time — sender gets no 'opened yet' signal.",
          ],
          before: "A text on the day — no anticipation, no buildup.",
          after: "The countdown itself is part of the gift.",
        },
        {
          id: "UC-05",
          title: "Offline Message Resilience",
          who: "Partner with unreliable connectivity",
          trigger: "Sending a message while entering a tunnel or low-signal area.",
          steps: [
            "Message queued in IndexedDB with client-generated temp ID.",
            "UI shows soft 'Queued' indicator — no silent failure, no generic error.",
            "On reconnect, message sends automatically with deduplication.",
          ],
          before: "Message fails silently or shows a generic error — partner has to retry manually.",
          after: "Seamless delivery on reconnect, no duplicate sends.",
        },
      ],
      workflow: [
        "Partner A creates account and sends invite to Partner B's email.",
        "Partner B accepts — relationship moves from pending → active, shared space unlocks.",
        "Both partners see the same Timezone Bridge, presence status, and mood check-in on the dashboard.",
        "Real-time events (messages, taps, calls) flow over WebSocket layer with optimistic UI updates.",
        "Calls connect peer-to-peer via WebRTC — content never transits a central server.",
        "Offline actions queue in IndexedDB, reconcile with server on reconnect with deduplication.",
        "Journal entries with response-gated visibility are locked at the data layer until reciprocity condition is met.",
        "Time Capsule mutual-unlock requires both partners to independently confirm before content is revealed.",
        "Habit streaks calculated by date-adjacency per local midnight — timezone-aware, not a shared cutoff.",
        "AI Story generation triggers at meaningful message-count and anniversary thresholds automatically.",
        "Relationship end archives history (read-only) — active connection stops, memories and messages preserved.",
      ],
      businessFlow: [
        "Two people agree to share a space → one sends invite, one accepts → dyad activated.",
        "Daily ambient layer: mood check-in, heartbeat taps, presence status — sub-conversational, no obligation.",
        "Synchronous layer: calls and Watch Together — highest richness, highest friction, used when both are available.",
        "Asynchronous layer: chat, journal, gifts, capsules — persistent, accumulates over time.",
        "Ritual layer: habit streaks and planner — system remembers and maintains rhythm so partners don't have to.",
        "Memory layer: timeline auto-curates shared history — raw material assembled into a legible story.",
        "Insight layer: AI Story generates narrative artifacts at milestones — relationship's own history handed back to them.",
      ],
      beforeVsAfter: [
        { aspect: "Timezone coordination", before: "Mental arithmetic every time, risk of waking partner", after: "One screen: dual clocks, heuristic, golden window" },
        { aspect: "Shared experience", before: "'Press play on 3' — always slightly off", after: "Join-gated sync with live position handoff" },
        { aspect: "Emotional state visibility", before: "Only if someone explicitly says something", after: "Daily mood check-in + ambient heartbeat tap" },
        { aspect: "Vulnerable disclosure", before: "One-sided, relies entirely on goodwill", after: "Response-gated journal — reciprocity at protocol level" },
        { aspect: "Relationship history", before: "Scattered across camera rolls and chat scrolls", after: "Purpose-built Memory Timeline, auto-curated AI Story" },
        { aspect: "Ritual maintenance", before: "Rituals lapse quietly under distance and fragmentation", after: "Habit streaks with streak logic and gentle reminders" },
        { aspect: "Audience anxiety", before: "Context collapse on any multi-audience platform", after: "Structurally absent — two-member data model, no third path" },
        { aspect: "Offline resilience", before: "Silent failure or generic error, manual retry", after: "IndexedDB queue, auto-send on reconnect, no duplicates" },
      ],
      screenshots: [
        { url: "/PairSpace/PairSpace1.png" },
        { url: "/PairSpace/PairSpace2.png" },
        { url: "/PairSpace/PairSpace3.png" },
        { url: "/PairSpace/PairSpace4.png" },
        { url: "/PairSpace/PairSpace6.png" },
        { url: "/PairSpace/PairSpace7.png" },
        { url: "/PairSpace/PairSpace8.png" },
        { url: "/PairSpace/PairSpace9.png" },
        { url: "/PairSpace/PairSpace10.png" },
        { url: "/PairSpace/PairSpace11.png" },
        { url: "/PairSpace/PairSpace12.png" },
      ],
      futureScope: [
        "Mobile app (React Native) with offline sync for low-connectivity environments.",
        "True generative AI Story using a language model rather than rule-based templating.",
        "Granular per-type notification preferences — different thresholds for every couple.",
        "Grace periods and streak protections for habit streaks — reduce guilt from honest misses.",
        "Time Travel UI — step backward through relationship state at any historical point.",
        "Expanded relationship types — best friends, family pairs — with non-romantic visual language.",
        "Multi-region high-availability deployment for national-scale reliability.",
        "Object store integration (MinIO) for long-horizon voice/video capsule storage.",
      ],
      limitations: [
        "WebRTC peer-to-peer calls require both clients to support the protocol — fallback for restrictive networks not yet implemented.",
        "Watch Together sync is best-effort on platforms that restrict programmatic seeking — not guaranteed flawless on every video source.",
        "AI Story is rule-based templating, not a generative language model — interpretive intelligence is limited to pattern matching.",
        "Awake/asleep heuristic in Timezone Bridge is probabilistic — a night-shift worker will be flagged incorrectly.",
        "Habit streak logic uses local midnight per user — edge cases at extreme timezone offsets require careful handling.",
        "Presence and mood signals that enable ambient intimacy are structurally the same data that could enable monitoring in an unhealthy relationship — mitigated by hidden status and symmetrical authority, but not fully resolved.",
        "Forgotten PIN on a locked memory has no clean recovery path — easy recovery weakens security, no recovery risks permanent content loss.",
      ],
      conclusion:
        "The central claim of PairSpace is narrower than it might first appear: relationships benefit from infrastructure — not novelty features bolted onto a chat app, but a coherent design philosophy where every feature traces back to a specific, named structural deficit of distance and a specific theoretical mechanism for addressing it. No single feature is remarkable on its own. A heartbeat button is a button. A mood emoji is an emoji. What makes PairSpace structurally different is the coherence across all of them — every one justified by the same underlying theory of what distance actually does to a relationship — which is the thing a general-purpose messaging app, social network, or video-calling tool cannot provide, because none of them were ever built around the dyad as the unit of design in the first place.",
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
