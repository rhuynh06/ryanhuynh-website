interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  status: string;
  color: string;
  link: string;
}

export function CertificateCard({
    title,
    issuer,
    date,
    icon,
    status,
    color,
    link,
}: CertificateCardProps) {
  const glow = status === 'completed' ? `shadow-[0_0_20px_${color}]` : `shadow-[0_0_15px_#ff6b6b]`;

  return (
     <div
      className={`w-72 p-5 rounded-xl bg-zinc-900 text-left border border-zinc-700 transition-all duration-300 ${glow}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-full bg-${color}-600`}>
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-lg text-white hover:underline hover:text-blue-400 transition-colors"
        >
          {title}
        </a>
      </div>
      <p className="text-sm text-gray-400">{issuer}</p>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  );
};
