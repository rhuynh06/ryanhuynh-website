import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { languages, frameworks, tools, other, skillImages } from "../data/skills";

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SkillsModal({ isOpen, onClose }: SkillsModalProps) {
  // Combine skills for display (you could group by category if desired)
  const allSkills = [...languages, ...frameworks, ...tools, ...other];

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

        <Dialog.Content
          className="fixed top-1/2 left-1/2 w-[1152px] h-[768px] -translate-x-1/2 -translate-y-1/2 bg-no-repeat bg-center bg-cover rounded-lg shadow-lg overflow-hidden"
          style={{ backgroundImage: "url('/tech/main.png')" }}
        >
          {/* Scrollable Skills Panel */}
          <div
            className="absolute top-[120px] right-[105px] w-[480px] h-[580px] overflow-y-auto p-4 text-black"
            style={{ fontFamily: '"Press Start 2P", cursive', scrollbarWidth: 'none' }}
          >
            <ul className="grid grid-cols-3 gap-6 px-0 mx-0">
              {allSkills.map((skill) => {
                const imgSrc = skillImages[skill.name] || "/tech/default.svg";
                return (
                  <li key={skill.name} className="flex flex-col items-center text-center">
                    <img
                      src={imgSrc}
                      alt={skill.name}
                      className="w-12 h-12 mb-2 object-contain"
                    />
                    <span className="text-sm">{skill.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Close Button */}
          <Dialog.Close
            className="absolute top-3 right-3 p-1 cursor-pointer"
            aria-label="Close"
          >
            <X />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
