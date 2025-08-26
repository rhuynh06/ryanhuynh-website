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
  { name: "Java", level: "yellow" },
  { name: "Bash", level: "yellow" },
  { name: "Spanish (Elementary)", level: "gray" }
];

export const frameworks: { name: string; level: Level }[] = [
  { name: "Flask", level: "green" },
  { name: "FastAPI", level: "green" },
  { name: "Tailwind CSS", level: "green" },
  { name: "Next.js", level: "green" },
  { name: "React", level: "green" },
  { name: "Node.js", level: "yellow" },
  { name: "Express", level: "yellow" },
  { name: "NumPy", level: "yellow" },
  { name: "Pandas", level: "yellow" },
  { name: "Seaborn", level: "yellow" },
  { name: "Scikit-Learn", level: "yellow" },
  { name: "Matplotlib", level: "yellow" },
  { name: "Django", level: "gray" },
  { name: "PyTorch", level: "gray" },
  { name: "TensorFlow", level: "gray" },
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
  { name: "Polly", level: "yellow" },
  { name: "Playwright", level: "gray"},
  { name: "MongoDB", level: "gray" },
  { name: "Arduino", level: "gray" }
];

export const other = [
  { name: "Roblox" },
  { name: "Volleyball" },
  { name: "Soccer" },
  { name: "Swim" },
];

export const skillImages: Record<string, string> = {
  // Languages
  "Python": "/tech/python.svg",
  "C++": "/tech/cpp.svg",
  "JavaScript": "/tech/js.svg",
  "TypeScript": "/tech/ts.svg",
  "HTML/CSS": "/tech/html.svg",
  "SQL": "/tech/sql.svg",
  "PHP": "/tech/php.svg",
  "Java": "/tech/java.svg",
  "Bash": "/tech/bash.svg",

  // Frameworks & Libraries
  "Flask": "/tech/flask.svg",
  "FastAPI": "/tech/fastapi.svg",
  "Tailwind CSS": "/tech/tailwind.svg",
  "Next.js": "/tech/nextjs.svg",
  "React": "/tech/react.svg",
  "Node.js": "/tech/node.svg",
  "Express": "/tech/express.svg",
  "NumPy": "/tech/numpy.svg",
  "Pandas": "/tech/pandas.svg",
  "Seaborn": "/tech/seaborn.svg",
  "Scikit-Learn": "/tech/scikit-learn.svg",
  "Matplotlib": "/tech/matplotlib.svg",
  "Django": "/tech/django.svg",
  "PyTorch": "/tech/pytorch.svg",
  "TensorFlow": "/tech/tensorflow.svg",

  // Tools & Services
  "GitHub": "/tech/github.svg",
  "MySQL": "/tech/mysql.svg",
  "VSCode": "/tech/vscode.svg",
  "Supabase": "/tech/supabase.svg",
  "Clerk Auth": "/tech/iam.svg",
  "Docker": "/tech/docker.svg",
  "Amplify": "/tech/amplify.svg",
  "SQLAlchemy": "/tech/sqlalchemy.svg",
  "Prisma": "/tech/prisma.svg",
  "Bedrock": "/tech/bedrock.svg",
  "Postgres": "/tech/postgresql.svg",
  "Polly": "/tech/polly.svg",
  "Playwright": "/tech/playwright.svg",
  "MongoDB": "/tech/mongodb.svg",
  "Arduino": "/tech/platformio.svg",

  // Languages - Spoken
  "English (Fluent)": "/tech/english.png",
  "Vietnamese (Fluent)": "/tech/vietnamese.png",
  "Spanish (Elementary)": "/tech/spanish.jpg",

  // Other
  "Roblox": "/tech/roblox.png",
  "Volleyball": "/tech/volleyball.png",
  "Soccer": "/tech/soccer.png",
  "Swim": "/tech/swim.png"
};
