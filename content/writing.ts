export type Article = {
  title: string;
  platform: "Personal" | "Medium" | "Dev.to";
  year: string;
  summary: string;
  link: string;
};

export const articles: Article[] = [
  { title: "[Article Title]", platform: "Personal", year: "[Year]", summary: "[One line on the argument or lesson.]", link: "#" },
  { title: "[Article Title]", platform: "Medium", year: "[Year]", summary: "[One line on the argument or lesson.]", link: "#" },
];
