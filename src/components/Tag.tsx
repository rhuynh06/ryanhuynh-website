import type { Level } from "../lib/types";

interface TagProps {
  name: string;
  level: Level;
  code?: string;
  url?: string;
}

const levelClasses: Record<string, string> = {
  green: "bg-green-100 border border-green-400 text-green-800 dark:bg-transparent dark:text-green-400 dark:border-green-500 dark:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]",
  yellow: "bg-yellow-100 border border-yellow-400 text-yellow-800 dark:bg-transparent dark:text-yellow-300 dark:border-yellow-400 dark:drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]",
  gray: "bg-gray-100 border border-gray-400 text-gray-800 dark:bg-transparent dark:text-gray-300 dark:border-gray-500 dark:drop-shadow-[0_0_6px_rgba(209,213,219,0.6)]",
  blue: "bg-blue-100 border border-blue-400 text-blue-800 dark:bg-transparent dark:text-blue-400 dark:border-blue-500 dark:drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]",
  red: "bg-red-100 border border-red-400 text-red-800 dark:bg-transparent dark:text-red-400 dark:border-red-500 dark:drop-shadow-[0_0_6px_rgba(248,113,113,0.8)]",
};

export function Tag({ name, level, code, url }: TagProps) {
  const colorClass = levelClasses[level] || "";

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`py-1 px-3 rounded-xl m-1 flex items-center h-8 text-sm font-semibold ${colorClass} hover:opacity-80 transition`}
        title={code ? `${code}: ${name}` : name}
      >
        {code ? `${code} · ${name}` : name}
      </a>
    );
  }
  return (
    <div
      className={`py-1 px-3 rounded-xl m-1 flex items-center h-8 text-sm font-semibold ${colorClass} hover:opacity-80 transition`}
      title={name}
    >
      {name}
    </div>
  );
}