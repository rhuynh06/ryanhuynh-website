import { CertificatePreviewModal } from "./CertificateCardModal";

export interface CertificateData {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  status: "completed" | "in progress";
  link?: string;
  img: string;
}

export interface CertificateCardProps extends CertificateData {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const issuerGlowGradients: Record<string, string> = {
  AWS: "from-yellow-400 to-yellow-600",
  freeCodeCamp: "from-green-400 to-green-600",
  Kaggle: "from-purple-400 to-purple-600",
  Default: "from-gray-400 to-gray-600",
};

export function CertificateCard({
  title,
  issuer,
  date,
  icon,
  status,
  link,
  img,
  isModalOpen,
  openModal,
  closeModal,
}: CertificateCardProps) {
  const glowGradient = issuerGlowGradients[issuer] ?? issuerGlowGradients.Default;
  const displayDate = date && date.toLowerCase() !== "n/a" ? date : "";

  function renderIcon() {
    if (issuer === "AWS") {
      return (
        <>
          <img
            src="/certificates/icons/aws-light.svg"
            alt={`${issuer} logo light`}
            className="w-6 h-6 object-contain block dark:hidden"
          />
          <img
            src="/certificates/icons/aws-dark.svg"
            alt={`${issuer} logo dark`}
            className="w-6 h-6 object-contain hidden dark:block"
          />
        </>
      );
    } else if (issuer === "freeCodeCamp") {
      return (
        <>
          <img
            src="/certificates/icons/fcc-light.svg"
            alt={`${issuer} logo light`}
            className="w-6 h-6 object-contain block dark:hidden"
          />
          <img
            src="/certificates/icons/fcc-dark.svg"
            alt={`${issuer} logo dark`}
            className="w-6 h-6 object-contain hidden dark:block"
          />
        </>
      );
    } else {
      return <img src={icon} alt={`${issuer} logo`} className="w-6 h-6 object-contain" />;
    }
  }

  return (
    <>
      <div
        className="relative group w-[300px] h-[180px] rounded-lg cursor-pointer"
        onClick={() => link && openModal()}
      >
        {/* Glowing gradient background */}
        <div
          className={`absolute -inset-1 rounded-lg blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300
            bg-gradient-to-r ${glowGradient}
            dark:opacity-20 dark:group-hover:opacity-40`}
        />

        {/* Card content */}
        <div
          className="relative flex flex-col justify-between w-full h-full p-4 rounded-lg border border-black/10 dark:border-white/10
            bg-white/70 dark:bg-[#0a101f]/80 backdrop-blur-md
            transition-transform duration-300 transform group-hover:scale-[1.03]"
          title={title}
        >
          <div className="flex items-start gap-4 h-full">
            <div className="p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center w-12 h-12 flex-shrink-0">
              {renderIcon()}
            </div>

            <div className="flex flex-col justify-between flex-1 h-full">
              <span className="block font-semibold text-base text-left break-words whitespace-normal transition-colors duration-200">
                {title}
              </span>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-left">{issuer}</p>
                {status === "completed" && displayDate && (
                  <p className="mt-1 text-sm uppercase text-green-600 dark:text-green-400 text-left">
                    {displayDate}
                  </p>
                )}
                {status === "in progress" && (
                  <p className="mt-1 text-xs font-medium uppercase text-yellow-600 dark:text-yellow-400 text-left">
                    In Progress
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CertificatePreviewModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        link={link || ""}
        img={img}
      />

    </>
  );
}
