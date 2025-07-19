import type { Level } from "../lib/types";

interface TagProps {
  name: string;
  level: Level;
  code?: string;
  url?: string;
}

const levelClasses: Record<string, string> = {
  green: "bg-green-100 border border-green-400 text-green-800",
  yellow: "bg-yellow-100 border border-yellow-400 text-yellow-800",
  gray: "bg-gray-100 border border-gray-400 text-gray-800",
  blue: "bg-blue-100 border border-blue-400 text-blue-800",
  red: "bg-red-100 border border-red-400 text-red-800",
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