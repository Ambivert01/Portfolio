export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  score?: string;
  notes?: string;
};

export const education: EducationItem[] = [
  {
    institution: "Parul University",
    degree: "Bachelor of Technology in Computer Science Engineering",
    period: "2023 - Current",
    score: "8.23 CGPA",
    notes: "Currently Focusing on software development, artificial intelligence, and system design.Engaged in various projects that enhance practical skills and contribute to innovative solutions.",
  },
  {
    institution: "Sanskruti Higher Secondary School",
    degree: "12th / GSEB",
    period: "2022 - 2023",
    score: "58 %",
  },
  {
    institution: "Gokuldham International School",
    degree: "10th / GSEB",
    period: "2020 - 2021",
    score: " 86 %",
  },
];

export type TestScore = {
  test: string;
  score: string;
  year: string;
};

export const testScores: TestScore[] = [
  // { test: "[GRE / IELTS / TOEFL / SAT]", score: "[Score]", year: "[Year]" },
];
