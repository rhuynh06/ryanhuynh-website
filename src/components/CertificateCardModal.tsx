import * as Dialog from "@radix-ui/react-dialog";

interface CertificatePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  link?: string;
  img: string;
}

export function CertificatePreviewModal({
  isOpen,
  onClose,
  title,
  link,
  img,
}: CertificatePreviewModalProps) {

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />

        <Dialog.Content
          className="fixed top-1/2 left-1/2 max-h-[90vh] w-[90vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-lg
            bg-white p-6 shadow-lg dark:bg-gray-900 dark:shadow-green-900 z-50"
        >
          <Dialog.Title className="text-2xl font-bold text-center text-gray-900 dark:text-green-400">
            {title}
          </Dialog.Title>

          <div className="mt-4 max-h-[70vh] overflow-auto">
              <img
                src={img}
                alt={title}
                className="w-full max-h-[70vh] object-contain mx-auto rounded"
              />
          </div>

          {!!link && (
            <p className="mt-4 text-center text-sm text-blue-600 dark:text-blue-400">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                View full certificate
              </a>
            </p>
          )}

          <Dialog.Close
            className="absolute top-3 right-3 p-1 cursor-pointer text-lg text-gray-600 dark:text-gray-300"
            aria-label="Close"
          >
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}