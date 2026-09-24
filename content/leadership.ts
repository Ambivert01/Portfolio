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
    period: "2024 — Present",
    type: "leadership",
    description: "Led teams across 10+ hackathons at national level and beyond. Drove problem framing, architecture decisions, and final presentations while fostering open collaboration — ensuring every team member's ideas were heard, tasks were owned, and we moved fast as one unit.",
  },
  {
    org: "Technical Event Cell — Parul University",
    role: "Associated Member",
    period: "2024 — 2025",
    type: "community",
    description: "Connected with the Technical Event Cell at Parul University, which regularly shared hackathon and competition opportunities. Actively participated in those events, shared ideas with peers, and stayed engaged with the broader tech community on campus.",
  },
];
