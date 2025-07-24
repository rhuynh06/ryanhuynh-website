import { useEffect, useState } from 'react';
import './App.css';

import ContactPanel from './components/ContactPanel';
import { ExperienceCard } from './components/ExperienceCard';
import { LiveTyping } from './components/LiveTyping';
import { ProjectCard } from './components/ProjectCard';
import { Tag } from './components/Tag';

import { relatedCoursework } from './data/coursework';
import { experiences } from './data/experiences';
import { projects } from './data/projects';
import { languages, frameworks, tools } from "./data/skills";
import { StatsModal } from './components/StatsModal';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [showStats, setShowStats] = useState(false);

  const introPhrases = [
    "currently deepening my skills in PyTorch, SQLAlchemy, and PostgreSQL.",
    "passionate about building tools that simplify and enhance daily life.",
    "actively seeking internships and real-world learning opportunities.",
    "driven by curiosity and a love for learning from others.",
    "excited about using AI and full-stack dev to solve meaningful problems.",
    "focused on gaining hands-on experience through building and shipping projects."
  ];

  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    // { href: "#certificates", label: "Certificates" },
  ];

  const navButtonClasses =
    "btn px-5 py-2 rounded-4xl transition relative overflow-hidden " +
    "bg-blue-500 text-white border border-blue-400 shadow-md " + 
    "hover:bg-blue-600 hover:shadow-lg " + 
    "dark:bg-[#0f380f] dark:text-[#a1ff0a] dark:border-[#56ff1b] dark:shadow-green-500 dark:hover:shadow-[0_0_20px_#a1ff0a] " +
    "btn-light dark:btn-dark";

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (showStats) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showStats]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
   <div className="max-w-6xl mx-auto space-y-0">

      {/* Header */}
      <section className="min-h-screen flex items-center p-6 lg:pl-[72px] max-w-6xl mx-auto" data-aos="fade-up">
        <div className="basis-2/4 flex flex-col space-y-4 max-w-[60%] text-left break-words">
          <h3 className="text-lg font-semibold">hi! i am</h3>
          <h1 className="text-3xl font-bold mb-6 decoration-2 dark:text-green-400 dark:drop-shadow-[0_0_10px_rgba(161,255,10,0.9)] transition-colors duration-300">Ryan Huynh</h1>
          <h2 className="text-xl font-medium max-w-full">
            I am a programmer who is <LiveTyping phrases={introPhrases} />
          </h2>

          <nav className="flex flex-wrap gap-4 mt-4">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className={navButtonClasses}>
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="basis-2/4 flex justify-center">
        {/* add when stats are worth showing */}
         {/* <button
            onClick={() => setShowStats(true)}
            className="p-0 bg-transparent border-none cursor-default"
            aria-label="Show stats"
          > */}
            <img
              src="/pfp.png"
              alt="Ryan's profile photo"
              className="w-auto h-auto rounded-full border-3 border-black dark:border-4 dark:border-green-400 dark:shadow-[0_0_10px_#56ff1b]"
            />
          {/* </button> */}
        </div>
      </section>

      {/* Info */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 mb-4"
      >
        <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl text-left">
          <div className="flex-1 space-y-6">
            <h3 
              className="text-3xl font-bold mb-6 underline decoration-2 underline-offset-4 dark:text-green-400 dark:drop-shadow-[0_0_10px_rgba(161,255,10,0.9)] transition-colors duration-300"
            >
              about me
            </h3>
            <div
              className="space-y-5 text-lg leading-relaxed0"
            >
              <p>
                Hey — I'm <strong>Ryan Huynh</strong>, a Computer Science undergraduate at <strong>UC Irvine</strong> specializing in Intelligent Systems. 
                I'm currently diving deep into <strong>PyTorch</strong>, <strong>PostgreSQL</strong>, <strong>SQLAlchemy</strong>, and <strong>Prisma ORM</strong>, 
                while building AI-powered apps that aim to make everyday life just a bit easier.
              </p>
              <p>
                I'm passionate about turning ideas into polished products — blending creativity with practical problem-solving. 
                I love exploring the intersection of AI and full-stack development, and often find myself experimenting with tools like <strong>React</strong>, <strong>Flask</strong>, and <strong>Tailwind CSS</strong>.
              </p>
              <p>
                Outside of coding, I'm a former tri-athlete in water polo, wrestling, and swim — experiences that shaped my discipline and teamwork.
                These days, I recharge by spending time with family, getting outdoors, and exploring new places whenever I can.
              </p>
              <p>
                Whether it's through open source, internships, or side projects, I'm always seeking new ways to learn and grow. 
                If you're building something cool or just want to chat tech, feel free to reach out!
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <h3
              className="text-3xl font-bold mb-6 underline decoration-2 underline-offset-4 dark:text-green-400 dark:drop-shadow-[0_0_10px_rgba(161,255,10,0.9)] transition-colors duration-300"
            >
              skills & technologies
            </h3>

            <div>
              <p className="font-semibold mb-3 text-lg dark:text-green-400 transition-colors duration-300">Languages</p>
              <div className="flex flex-wrap gap-3">
                {languages.map((language, i) => (
                  <Tag key={i} {...language} />
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-3 text-lg dark:text-green-400 transition-colors duration-300">Frameworks & Libraries</p>
              <div className="flex flex-wrap gap-3">
                {frameworks.map((framework, i) => (
                  <Tag key={i} {...framework} />
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-3 text-lg dark:text-green-400 transition-colors duration-300">Tools & Services</p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <Tag key={i} {...tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 mb-4"
      >
        <h2 className="text-3xl font-bold mb-6 underline decoration-2 underline-offset-4 dark:text-green-400 dark:drop-shadow-[0_0_10px_rgba(161,255,10,0.9)] transition-colors duration-300">
          experience
        </h2>
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl mx-auto px-4 pb-5">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>

        <p className="font-semibold mb-3 text-lg dark:text-green-400 transition-colors duration-300">Related Coursework</p>
        <div className="flex flex-wrap justify-center max-w-5xl gap-3">
          {relatedCoursework.map(({ title, code, link }, i) => (
            <Tag
              key={i}
              name={title}
              level='blue'
              code={code}
              url={link}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 mb-4"
      >
        <h2 className="text-3xl font-bold mb-6 underline decoration-2 underline-offset-4 dark:text-green-400 dark:drop-shadow-[0_0_10px_rgba(161,255,10,0.9)] transition-colors duration-300">
          projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full px-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Certificates */}
      {/* <section
        id="certificates"
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 mb-4"
      >
        <h2 className="text-3xl font-bold mb-6 underline decoration-2 underline-offset-4 dark:text-green-400 dark:drop-shadow-[0_0_10px_rgba(161,255,10,0.9)] transition-colors duration-300">
          certificates
        </h2>
        <p className="max-w-xl bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Coming soon...
        </p>
      </section> */}

      {/* Contact Section */}
      <ContactPanel />

      {/* Conditionally render the StatsModal */}
      {showStats && <StatsModal onClose={() => setShowStats(false)} />}


      {/* Footer */}
      <footer className="w-full text-center pt-10 pb-6 text-gray-500 dark:text-gray-400 select-none">
        © {new Date().getFullYear()} Ryan Huynh. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
