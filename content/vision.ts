export type VisionItem = {
  title: string;
  status: "idea" | "building" | "shipped";
  description: string;
};

export const visionBoard: VisionItem[] = [
  { title: "[Product / Startup Idea]", status: "building", description: "[What it is and why it matters.]" },
  { title: "[Future Idea]", status: "idea", description: "[One line.]" },
];
