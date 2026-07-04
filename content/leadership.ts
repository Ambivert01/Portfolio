export type LeadershipItem = {
  org: string;
  role: string;
  period: string;
  type: "leadership" | "mentorship" | "volunteering" | "community";
  description: string;
};

export const leadership: LeadershipItem[] = [
  { org: "[Organization / Club]", role: "[Role, e.g. President]", period: "[Year — Year]", type: "leadership", description: "[Scope and impact.]" },
  { org: "[Program]", role: "Mentor", period: "[Year — Year]", type: "mentorship", description: "[Who you mentored, on what.]" },
  { org: "[Community]", role: "Member", period: "[Year — Year]", type: "community", description: "[Contribution to the community.]" },
];
