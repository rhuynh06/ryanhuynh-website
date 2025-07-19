import { useState } from "react";

export interface ExperienceCardProps {
  name: string;
  position: string;
  desc: string;
  dates: string;
  imageUrl: string;
}

export function ExperienceCard({
  name,
  position,
  desc,
  dates,
  imageUrl,
}: ExperienceCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-80 h-60 perspective cursor-pointer"
    >
      <div
        className={`relative w-auto h-[70%] transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white border rounded-lg shadow-md p-4 flex flex-row items-center">
          {/* Logo on the left */}
          <img
            src={imageUrl}
            alt={`${name} logo`}
            className="w-20 h-auto object-cover"
          />

          {/* Text content on the right */}
          <div className="flex flex-col w-3/5 ml-2">
            <h2 className="text-lg font-semibold">{name}</h2>
            <h3 className="text-sm text-gray-600">{position}</h3>
            <p className="text-xs text-gray-500 mt-auto">{dates}</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-100 border rounded-lg shadow-md p-4 flex items-center justify-center">
          <p className="text-sm text-gray-800 text-center">{desc}</p>
        </div>
      </div>
    </div>
  );
}
