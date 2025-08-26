import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  role: string;
  desc: string;
  imageUrl: string;
  websiteLink: string;
  githubUrl: string;
}

export function ProjectCardModal({
  isOpen,
  onClose,
  name,
  role,
  desc,
  imageUrl,
  websiteLink,
  githubUrl,
}: ProjectCardModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

        <Dialog.Content
          className="fixed top-1/2 left-1/2 max-h-[90vh] w-[90vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-lg
            bg-white p-6 shadow-lg
            dark:bg-gray-900 dark:shadow-green-900"
        >
          <Dialog.Title className="text-3xl text-center font-bold text-gray-900 dark:text-green-400">
            {name}
          </Dialog.Title>
          <Dialog.Description className="text-lg text-center text-gray-700 dark:text-green-300 mb-4">
            {role}
          </Dialog.Description>

          <div className="mb-4">
            <img
              src={imageUrl}
              alt={`${name} screenshot`}
              className="w-full object-contain max-h-80 mx-auto"
            />
          </div>

          <p className="text-gray-800 dark:text-green-200 mb-6 whitespace-pre-line">
            {desc}
          </p>

          <div className="flex items-center justify-center gap-6">
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition"
            >
              Live Site <FaExternalLinkAlt />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-green-500 px-4 py-2 text-green-500 hover:bg-green-600 hover:text-white transition"
            >
              <FaGithub /> GitHub
            </a>
          </div>

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
