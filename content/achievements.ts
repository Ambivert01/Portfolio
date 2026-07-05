export type Achievement = {
  title: string;
  org: string;
  year: string;
  description: string;
};

export const achievements: Achievement[] = [
  { title: "[Award / Recognition One]", org: "[Organization]", year: "[Year]", description: "[Why it mattered.]" },
  { title: "[Hackathon / Competition]", org: "[Organization]", year: "[Year]", description: "[Placement, scale, what you built.]" },
  { title: "[Scholarship / Patent]", org: "[Organization]", year: "[Year]", description: "[One line detail.]" },
];

export const now = {
  building: "AidFlow, Disaster Management & Transparency System",
  learning: "IELTS",
  reading: "[Currently reading]",
  updatedAt: "2026-07",
};
