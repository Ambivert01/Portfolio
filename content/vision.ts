export type VisionItem = {
  title: string;
  status: "idea" | "building" | "shipped";
  description: string;
};

export const visionBoard: VisionItem[] = [
  {
    title: "Autonomous Moment-Capture Drone",
    status: "idea",
    description: "A self-flying camera that senses the right moments — laughter, movement, emotion — and captures them autonomously. Because the best moments happen before you reach for your phone.",
  },
  {
    title: "Innovation-Led Tech Company",
    status: "building",
    description: "Building toward founding or leading a tech company that works on critical, unsolved problems — not just SaaS clones. The kind of work that compounds and matters.",
  },
  {
    title: "Full-Spectrum Engineer",
    status: "building",
    description: "Mastering the entire stack — AI/ML, systems design, DevOps, DSA, and product thinking. Not to be average at everything, but to be dangerous at the intersection of all of it.",
  },
];
