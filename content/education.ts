export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  score?: string;
  notes?: string;
};

export const education: EducationItem[] = [
  {
    institution: "[University Name]",
    degree: "[Degree, Major]",
    period: "[Year — Year]",
    score: "[CGPA / GPA]",
    notes: "[Relevant coursework, thesis, honors.]",
  },
  {
    institution: "[School Name]",
    degree: "[Grade / Board]",
    period: "[Year — Year]",
    score: "[Score %]",
  },
];

export const testScores = [
  { test: "[GRE / IELTS / TOEFL / SAT]", score: "[Score]", year: "[Year]" },
];
