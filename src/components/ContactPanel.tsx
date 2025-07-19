import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.theme === 'dark');

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-auto px-4 py-2 transition"
      aria-label="Toggle light and dark mode"
    >
      {dark ? <Moon /> : <Sun />}
    </button>
  );
}

export default function ContactPanel() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);

    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed left-1 top-1/2 -translate-y-1/2 w-14 flex flex-col items-center space-y-6 py-4 z-50">
      <a href="mailto:ryanhuynh200604@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
        <img
          src="src/assets/contact/gmail.svg"
          alt="Gmail"
          className="w-8 hover:opacity-70 transition"
        />
      </a>
      <a href="https://github.com/rhuynh06" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <img
          src={dark ? "src/assets/contact/github_dark.png" : "src/assets/contact/github_light.svg"}
          alt="GitHub"
          className="w-8 hover:opacity-70 transition"
        />
      </a>
      <a href="https://www.linkedin.com/in/ryan-huynh-937916248/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <img
          src="src/assets/contact/linkedin.svg"
          alt="LinkedIn"
          className="w-8 hover:opacity-70 transition"
        />
      </a>
      <ThemeToggle />
    </aside>
  );
}