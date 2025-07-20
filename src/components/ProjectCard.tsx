import { useState } from "react";
import { cn } from "../lib/utils";
import { FaGithub } from "react-icons/fa";
import { ProjectCardModal } from "./ProjectCardModal";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../components/ui/tooltip";

interface TechLogo {
  name?: string;
  url: string;
}

interface Collaborator {
  name: string;
  affiliation: string;
}

export interface ProjectCardProps {
  name: string;
  role: string;
  desc: string;
  longDesc: string;
  techStack: TechLogo[];
  websiteLink: string;
  imageUrl: string;
  githubUrl: string;
  collaborators?: Collaborator[];
}

export function ProjectCard({
  name,
  role,
  desc,
  longDesc,
  techStack,
  websiteLink,
  imageUrl,
  githubUrl,
  collaborators,
}: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const invertLogos = new Set([
    "Flask",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "LiveKit",
    "Next.js",
    "Socket.io",
    "SQLAlchemy",
  ]);

  return (
    <>
      <div
        onClick={() => setFlipped(!flipped)}
        className="w-80 h-85 perspective cursor-pointer"
      >
        <div
          className={cn(
            "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
            flipped ? "rotate-y-180" : ""
          )}
        >
          {/* Front */}
          <div
            className="absolute w-full h-full backface-hidden
            bg-white dark:bg-gray-900
            border border-blue-100 dark:border-green-600
            rounded-2xl shadow-xl p-4 overflow-hidden
            transition-colors duration-300"
          >
            <div
              className="flex items-center justify-center h-[60%] mb-2"
            >
              <img
                src={imageUrl}
                alt={name}
                className="w-auto h-full object-cover rounded-xl shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalOpen(true);
                }}
              />
            </div>

            <h3
              className="text-lg font-bold text-blue-700 dark:text-green-400 hover:underline truncate text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </h3>

            <h2 className="text-sm font-medium text-gray-700 dark:text-green-300 text-center">
              {role}
            </h2>

            <div className="flex justify-center gap-3 mt-3 flex-wrap items-center">
              {/* GitHub Icon */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
                  >
                    <FaGithub size={18} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  Repo
                </TooltipContent>
              </Tooltip>

              {/* Tech Logos */}
              {techStack.map((logo, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <img
                      src={logo.url}
                      alt={logo.name || "Tech logo"}
                      className={cn(
                        "w-6 h-6 hover:scale-110 transition-transform cursor-pointer",
                        logo.name && invertLogos.has(logo.name)
                          ? "dark:invert"
                          : ""
                      )}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center" className="max-w-xs">
                    {logo.name || "Tech"}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Back */}
          <div
            className="absolute w-full h-full backface-hidden rotate-y-180
              bg-gradient-to-br from-blue-100 via-white to-pink-100
              dark:from-green-900 dark:via-black dark:to-green-800
              border border-blue-100 dark:border-green-600
              rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center text-center
              transition-colors duration-300"
          >
            <p className="text-sm text-blue-900 dark:text-green-400 font-medium mb-2">
              {desc}
            </p>
            
            {collaborators && collaborators.length > 0 && (
              <div className="mt-3 text-xs text-blue-700 dark:text-green-300">
                <p className="font-semibold mb-1">Collaborators:</p>
                <ul className="space-y-1">
                  {collaborators.map((c, i) => (
                    <li key={i}>
                      {c.name}
                      {c.affiliation && (
                        <span className="italic text-gray-600 dark:text-gray-400"> — {c.affiliation}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-xs mt-5 text-blue-800 dark:text-green-500 font-semibold">
              Click the image on the front to see more details
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectCardModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        name={name}
        role={role}
        desc={longDesc}
        imageUrl={imageUrl}
        websiteLink={websiteLink}
        githubUrl={githubUrl}
      />
    </>
  );
}