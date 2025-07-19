interface TagProps {
  name: string;
  colorClass: string;
  code?: string;
  url?: string;
}

export function Tag({ name, colorClass, code, url }: TagProps) {
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