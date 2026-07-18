export type Course = {
  name: string;
  instructor: string;
  platform: string;
  status: "completed" | "ongoing";
};

export const courses: Course[] = [
  // ── Chai aur Code — Hitesh Choudhary ─────────────────────────────────────
  {
    name: "Backend Development Series",
    instructor: "Hitesh Choudhary",
    platform: "Chai aur Code (YouTube)",
    status: "completed",
  },
  {
    name: "React Series",
    instructor: "Hitesh Choudhary",
    platform: "Chai aur Code (YouTube)",
    status: "completed",
  },
  {
    name: "JavaScript Series",
    instructor: "Hitesh Choudhary",
    platform: "Chai aur Code (YouTube)",
    status: "completed",
  },
  {
    name: "Git & GitHub",
    instructor: "Hitesh Choudhary",
    platform: "Chai aur Code (YouTube)",
    status: "completed",
  },

  // ── DSA ───────────────────────────────────────────────────────────────────
  {
    name: "DSA Sheet (A to Z)",
    instructor: "Striver (Raj Vikramaditya)",
    platform: "YouTube",
    status: "ongoing",
  },
  {
    name: "DSA Playlist",
    instructor: "Apna College",
    platform: "YouTube",
    status: "completed",
  },

  // ── C++ ───────────────────────────────────────────────────────────────────
  {
    name: "C++ Full Course (30 hrs)",
    instructor: "freeCodeCamp",
    platform: "freeCodeCamp (YouTube)",
    status: "completed",
  },

  // ── Web Fundamentals ──────────────────────────────────────────────────────
  {
    name: "HTML & CSS Full Course",
    instructor: "CodeWithHarry",
    platform: "YouTube",
    status: "completed",
  },

  // ── Databases ─────────────────────────────────────────────────────────────
  {
    name: "MongoDB Complete Course",
    instructor: "Prashant Singh",
    platform: "YouTube",
    status: "completed",
  },
  {
    name: "SQL Full Course",
    instructor: "Prashant Singh",
    platform: "YouTube",
    status: "completed",
  },

  // ── DevOps ────────────────────────────────────────────────────────────────
  {
    name: "Jenkins & Docker",
    instructor: "Prashant Singh",
    platform: "YouTube",
    status: "completed",
  },
  {
    name: "Zero to Hero Linux Series",
    instructor: "Prashant Singh",
    platform: "YouTube",
    status: "ongoing",
  },

  // ── System Design ─────────────────────────────────────────────────────────
  {
    name: "System Design",
    instructor: "Gaurav Sen",
    platform: "YouTube",
    status: "ongoing",
  },

  // ── CS Fundamentals ───────────────────────────────────────────────────────
  {
    name: "CS Fundamentals (OS, DBMS, CN, OOP)",
    instructor: "Gate Smashers",
    platform: "YouTube",
    status: "completed",
  },
  {
    name: "CS Core Subjects",
    instructor: "Physics Wallah",
    platform: "Physics Wallah",
    status: "completed",
  },
];
