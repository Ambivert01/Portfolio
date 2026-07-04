export type CodingProfile = {
  platform: string;
  handle: string;
  stat: string;
  url: string;
};

export const codingProfiles: CodingProfile[] = [
  { platform: "GitHub", handle: "@yourhandle", stat: "[X repos · Y contributions/yr]", url: "https://github.com/yourhandle" },
  { platform: "LeetCode", handle: "@yourhandle", stat: "[X problems solved]", url: "#" },
  { platform: "Codeforces", handle: "@yourhandle", stat: "[Rating]", url: "#" },
  { platform: "CodeChef", handle: "@yourhandle", stat: "[Rating]", url: "#" },
  { platform: "HackerRank", handle: "@yourhandle", stat: "[Badges]", url: "#" },
  { platform: "Kaggle", handle: "@yourhandle", stat: "[Tier / rank]", url: "#" },
];
