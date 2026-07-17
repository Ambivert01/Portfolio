export type Article = {
  title: string;
  platform: "Personal" | "Medium" | "Dev.to";
  year: string;
  summary: string;
  link: string;
};

export const articles: Article[] = [
  // Add articles here when published
];
