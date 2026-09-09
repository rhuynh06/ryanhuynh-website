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
      className="contact-icon-button"
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
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
    <aside className="contact-panel" aria-label="Contact and social links">
      <span className="contact-label">Elsewhere</span>
      <div className="contact-links">
      <a
        href="mailto:ryanhuynh200604@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        title="Email Ryan"
        className="contact-icon-button"
      >
        <img
          src="/contact/gmail.svg"
          alt="Gmail"
          className="contact-icon contact-icon-email"
        />
      </a>
      <a
        href="https://github.com/rhuynh06"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
        className="contact-icon-button"
      >
        <img
          src={dark ? "/contact/github_dark.png" : "/contact/github_light.svg"}
          alt="GitHub"
          className="contact-icon contact-icon-github"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/rhuynh06"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
        className="contact-icon-button"
      >
        <img
          src="/contact/linkedin.svg"
          alt="LinkedIn"
          className="contact-icon contact-icon-linkedin"
        />
      </a>
      <div className="contact-theme-toggle">
        <ThemeToggle />
      </div>
      </div>
    </aside>
  );
}
