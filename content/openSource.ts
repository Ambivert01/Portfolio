export type OSSContribution = {
  repo: string;
  role: "Maintainer" | "Contributor";
  description: string;
  stars: string;
  link: string;
  year?: string;
};

export const openSource: OSSContribution[] = [
  { repo: "[org/repo]", role: "Contributor", description: "[What you contributed — feature, fix, docs.]", stars: "[X.Xk]", link: "#" },
];
