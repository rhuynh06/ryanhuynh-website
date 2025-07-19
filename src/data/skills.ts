type Level = "green" | "yellow" | "gray";

export const languages: { name: string; level: Level }[] = [
  { name: "Python", level: "green" },
  { name: "C++", level: "green" },
  { name: "JavaScript", level: "green" },
  { name: "TypeScript", level: "green" },
  { name: "HTML/CSS", level: "green" },
  { name: "English (Fluent)", level: "green" },
  { name: "Vietnamese (Fluent)", level: "green" },
  { name: "SQL", level: "yellow" },
  { name: "PHP", level: "yellow" },
  { name: "Java", level: "yellow" }
];

export const frameworks: { name: string; level: Level }[] = [
  { name: "Flask", level: "green" },
  { name: "Tailwind CSS", level: "green" },
  { name: "Next.js", level: "green" },
  { name: "React", level: "green" },
  { name: "Node.js", level: "yellow" },
  { name: "Express", level: "yellow" },
  { name: "FastAPI", level: "yellow" },
  { name: "Django", level: "gray" },
  { name: "PyTorch", level: "gray" },
  { name: "TensorFlow", level: "gray" },
  { name: "NumPy", level: "gray" },
  { name: "Scikit-Learn", level: "gray" }
];

export const tools: { name: string; level: Level }[] = [
  { name: "GitHub", level: "green" },
  { name: "MySQL", level: "green" },
  { name: "VSCode", level: "green" },
  { name: "Supabase", level: "green" },
  { name: "Clerk Auth", level: "green" },
  { name: "Docker", level: "yellow" },
  { name: "Amplify", level: "yellow" },
  { name: "SQLAlchemy", level: "yellow" },
  { name: "Prisma", level: "yellow" },
  { name: "Bedrock", level: "yellow" },
  { name: "Postgres", level: "yellow" },
  { name: "Polly", level: "gray" },
  { name: "MongoDB", level: "gray" },
  { name: "Arduino", level: "gray" }
];
