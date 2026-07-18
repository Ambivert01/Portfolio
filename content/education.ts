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
    period: "2023 - 2027",
    score: "8.23 CGPA",
    notes:
      "Currently focusing on software development, artificial intelligence, and system design. Engaged in various projects that enhance practical skills and contribute to innovative solutions.",
  },
  {
    institution: "Sanskruti Higher Secondary School",
    degree: "11th & 12th / GSEB",
    period: "2021 - 2023",
    score: "58%",
  },
  {
    institution: "Gokuldham International Campus",
    degree: "Sr. KG to 10th Standard",
    period: "2010 - 2021",
    score: "86%",
    notes: "Completed foundational schooling from Sr. KG through 10th standard. Active participant in Indian Talent National Olympiad — achieved state ranks and class toppers across Maths, Science, Cyber, and Drawing.",
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
