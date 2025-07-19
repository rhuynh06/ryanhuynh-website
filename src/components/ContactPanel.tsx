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
      className="ml-auto px-4 py-2 transition hover:opacity-80"
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
    <aside
      className={`
        fixed
        bottom-0 left-0 right-0 top-auto translate-y-0
        w-full h-14 flex flex-row justify-center space-x-6 px-4 py-2 z-50

        sm:bottom-0 sm:left-0 sm:right-0 sm:top-auto sm:translate-y-0
        sm:w-full sm:h-14 sm:flex-row sm:justify-center sm:space-x-6 sm:px-4 sm:py-2

        md:bottom-0 md:left-0 md:right-0 md:top-auto md:translate-y-0
        md:w-full md:h-14 md:flex-row md:justify-center md:space-x-6 md:px-4 md:py-2

        lg:fixed lg:left-1 lg:top-1/2 lg:-translate-y-1/2
        lg:w-14 lg:h-auto lg:flex-col lg:items-center lg:space-y-6 lg:py-4
        lg:space-x-0 lg:px-0 lg:bg-transparent lg:shadow-none
      `}
    >
      <a
        href="mailto:ryanhuynh200604@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <img
          src="/contact/gmail.svg"
          alt="Gmail"
          className="w-10 transition transform hover:-translate-y-1 hover:opacity-80 duration-200"
        />
      </a>
      <a
        href="https://github.com/rhuynh06"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <img
          src={dark ? "/contact/github_dark.png" : "/contact/github_light.svg"}
          alt="GitHub"
          className="w-8 transition transform hover:-translate-y-1 hover:opacity-80 duration-200"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ryan-huynh-937916248/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <img
          src="/contact/linkedin.svg"
          alt="LinkedIn"
          className="w-8 transition transform hover:-translate-y-1 hover:opacity-80 duration-200"
        />
      </a>
      <div className="hidden lg:flex">
        <ThemeToggle />
      </div>
    </aside>
  );
}
