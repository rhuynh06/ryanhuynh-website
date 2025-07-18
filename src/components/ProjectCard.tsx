import { useState } from "react";

interface TechLogo {
  name?: string;
  url: string;
}

export interface ProjectCardProps {
  name: string;
  role: string;
  desc: string;
  techStack: TechLogo[];
  imageUrl: string;
}

export function ProjectCard({
  name,
  role,
  desc,
  techStack,
  imageUrl,
}: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-80 h-60 perspective cursor-pointer"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white border rounded-lg shadow-md p-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-28 object-cover rounded-md mb-2"
          />
          <h3 className="text-lg font-semibold">{name}</h3>
          <h2 className="text-sm font-medium">{role}</h2>
          <div className="flex justify-center gap-2 mt-2">
            {techStack.map((logo, i) => (
              <img
                key={i}
                src={logo.url}
                alt={logo.name}
                title={logo.name}
                className="w-6 h-6"
              />
            ))}
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-100 border rounded-lg shadow-md p-4 flex items-center justify-center">
          <p className="text-sm text-gray-800">{desc}</p>
        </div>
      </div>
    </div>
  );
}