export type Talk = {
  title: string;
  event: string;
  year: string;
  type: "talk" | "workshop" | "panel";
  link: string;
};

export const talks: Talk[] = [
  { title: "[Talk Title]", event: "[Conference / Meetup]", year: "[Year]", type: "talk", link: "#" },
];
