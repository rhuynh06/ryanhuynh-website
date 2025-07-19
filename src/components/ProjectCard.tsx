import { useState } from "react";
import { cn } from "../lib/utils";

interface TechLogo {
  name?: string;
  url: string;
}

export interface ProjectCardProps {
  name: string;
  role: string;
  desc: string;
  techStack: TechLogo[];
  websiteLink: string;
  imageUrl: string;
  githubUrl: string;
}

export function ProjectCard({
  name,
  role,
  desc,
  techStack,
  websiteLink,
  imageUrl,
  githubUrl,
}: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false);

  const invertLogos = new Set([
    "Flask",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "LiveKit",
    "Next.js",
    "Socket.io",
  ]);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-80 h-80 perspective cursor-pointer"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden
          bg-white dark:bg-gray-900
          border border-blue-100 dark:border-green-600
          rounded-2xl shadow-xl p-4 overflow-hidden
          transition-colors duration-300"
        >
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center h-[60%] mb-2">
              <img
                src={imageUrl}
                alt={name}
                className="w-auto h-full object-cover rounded-xl shadow-md"
              />
            </div>
          </a>

          <h3
            className="text-lg font-bold
              text-blue-700 dark:text-green-400
              hover:underline truncate text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </h3>

          <h2 className="text-sm font-medium
            text-gray-700 dark:text-green-300
            text-center"
          >
            {role}
          </h2>

          <div className="flex justify-center gap-3 mt-3 flex-wrap">
            {techStack.map((logo, i) => (
              <img
                key={i}
                src={logo.url}
                alt={logo.name}
                title={logo.name}
                className={cn(
                  "w-6 h-6 hover:scale-110 transition-transform",
                  logo.name && invertLogos.has(logo.name) ? "dark:invert" : ""
                )}
              />
            ))}
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full backface-hidden rotate-y-180
            bg-gradient-to-br from-blue-100 via-white to-pink-100
            dark:from-green-900 dark:via-black dark:to-green-800
            border border-blue-100 dark:border-green-600
            rounded-2xl shadow-xl p-4 flex items-center justify-center text-center
            transition-colors duration-300"
        >
          <p className="text-sm
            text-blue-900 dark:text-green-400
            font-medium"
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
