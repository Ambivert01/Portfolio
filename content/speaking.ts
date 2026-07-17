export type Talk = {
  title: string;
  event: string;
  year: string;
  type: "talk" | "workshop" | "panel" | "anchoring";
  link: string;
};

export const speakingStyle = {
  headline: "Scripted anchoring with a mix of serious, comedy, and pure fun moments.",
  traits: [
    "Friendly on stage — makes the audience feel at home instantly",
    "Love listener — genuinely curious about people and their stories",
    "Mixes scripted structure with spontaneous energy",
    "Balances serious depth with humor and light moments",
    "Guru of knowledge — breaks down complex ideas simply",
  ],
  note: "Whether it's a technical talk, a college event, or an anchoring gig — the goal is always the same: make it memorable.",
};

export const talks: Talk[] = [
  // Add talks, workshops, anchoring events here as they happen
];
