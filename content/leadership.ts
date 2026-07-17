export type LeadershipItem = {
  org: string;
  role: string;
  period: string;
  type: "leadership" | "mentorship" | "volunteering" | "community";
  description: string;
};

export const leadership: LeadershipItem[] = [
  {
    org: "Google Developer Student Club (GDSC) — Parul University",
    role: "Member",
    period: "2024 — 2025",
    type: "community",
    description: "Active member of the Google Developer Student Club at Parul University. Participated in technical sessions, workshops, and developer community events organized under the Google DSC program.",
  },
  {
    org: "Hackathon Teams — Multiple National-Level Competitions",
    role: "Team Lead",
    period: "2025 — Present",
    type: "leadership",
    description: "Led teams across multiple national hackathons including Hacksagon 2026, East India Blockchain Summit 2.0, ET GEN-AI Hackathon, and MSME Idea Hackathon 5.0. Responsible for team direction, problem framing, solution architecture, and final presentation.",
  },
  {
    org: "Technical Event Cell — Parul University",
    role: "Associated Member",
    period: "2023 — Present",
    type: "volunteering",
    description: "Associated with the Technical Event Cell at Parul University, contributing to the organization and execution of technical events, competitions, and workshops on campus.",
  },
];
