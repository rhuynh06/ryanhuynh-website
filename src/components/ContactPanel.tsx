export default function ContactPanel() {
  return (
    <aside className="fixed left-1 top-1/2 -translate-y-1/2 w-14 flex flex-col items-center space-y-6 py-4 z-50">
      <a href="mailto:ryanhuynh200604@gmail.com" target="_blank" ria-label="Email">
        <img
          src="src/assets/contact/gmail.svg"
          alt="Gmail"
          className="w-8 hover:opacity-70 transition"
        />
      </a>
      <a href="https://github.com/rhuynh06" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <img
          src="src/assets/contact/github.svg"
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
    </aside>
  );
}
