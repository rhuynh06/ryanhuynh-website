import { useEffect, useState } from 'react';
import './App.css';

import ContactPanel from './components/ContactPanel';
import { ExperienceCard } from './components/ExperienceCard';
import { LiveTyping } from './components/LiveTyping';
import { ProjectCard } from './components/ProjectCard';
import { CertificateCard, type CertificateData } from './components/CertificateCard';
import { Tag } from './components/Tag';
import { relatedCoursework } from './data/coursework';
import { experiences } from './data/experiences';
import { projects } from './data/projects';
import { certifications } from './data/certifications';
import { languages, frameworks, tools } from "./data/skills";
import { StatsModal } from './components/StatsModal';
import { LoadingScreen } from './components/LoadingScreen';
import SkillsModal from './components/SkillsModal';

function App() {
  const [loading, setLoading] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [openProjectModalIndex, setOpenProjectModalIndex] = useState<number | null>(null);
  const [openCertificateModalIndex, setOpenCertificateModalIndex] = useState<number | null>(null);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

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
    { href: "#certificates", label: "Certificates" },
  ];

  function sortCertificates(certificates: CertificateData[]) {
    return [...certificates].sort((a, b) => {
      // 1. Status: completed first
      if (a.status !== b.status) return a.status === "completed" ? -1 : 1;

      // 2. Date: newest first
      const dateA = parseCertificateDate(a.date);
      const dateB = parseCertificateDate(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }

  function parseCertificateDate(dateStr: string): Date {
    if (!dateStr || dateStr.trim().toLowerCase() === "n/a") return new Date(0);

    const [month, year] = dateStr.trim().split(/\s+/);
    if (!month || !year) return new Date(0);

    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    const parsed = new Date(`${capitalizedMonth} 1, ${year}`);
    return isNaN(parsed.getTime()) ? new Date(0) : parsed;
  }

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 900);
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
  <div className="site-shell">

      {/* Header */}
      <section className="hero-section" data-aos="fade-up">
        <div className="hero-copy">
          <p className="eyebrow">Computer science · intelligent systems</p>
          <h1>Ryan Huynh</h1>
          <h2>
            I am a programmer who is <LiveTyping phrases={introPhrases} />
          </h2>
          <p className="hero-summary">I build thoughtful software at the intersection of AI, full-stack development, and everyday utility.</p>

          <nav className="hero-nav" aria-label="Primary navigation">
            {navLinks.map(({ href, label }, index) => (
              <a key={href} href={href} className={index === 0 ? "nav-link nav-link-primary" : "nav-link"}>
                {label}
              </a>
            ))}
          </nav>
          <ContactPanel />
        </div>

        <div className="hero-portrait-wrap">
         <button
            onClick={() => setShowStats(true)}
            className="hero-portrait-button"
            aria-label="Show stats"
          >
            <img
              src="/pfp.png"
              alt="Ryan's profile photo"
              className="hero-portrait"
            />
          </button>
          <span className="portrait-note">currently building<br />and learning in public</span>
        </div>
      </section>

      {/* Info */}
      <section
        id="about"
        className="content-section about-section"
      >
        <div className="section-heading">
          <p className="eyebrow">01 / the person behind the projects</p>
          <h2>About me</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <div className="prose-copy">
              <p>
                Hey, I'm a Computer Science undergraduate at <strong>UC Irvine</strong> specializing in Intelligent Systems. 
                I'm currently diving deep into <strong>Express</strong>, <strong>PyTorch</strong>, <strong>Playwright</strong>, <strong>Scikit-Learn</strong>, 
                while building AI-powered apps that aim to make everyday life just a bit easier.
              </p>
              <br />
              <p>
                I'm passionate about turning ideas into polished products blending creativity with practical problem-solving. 
                I love exploring the intersection of AI and full-stack development, and often find myself experimenting with tools like <strong>React</strong> and <strong>Flask</strong>.
              </p>
              <br />
              <p>
                Outside of coding, I'm a former tri-athlete in water polo, wrestling, and swim, experiences that shaped my discipline and teamwork.
                These days, I recharge by spending time with family, getting outdoors, and exploring new places whenever I can.
              </p>
              <br />
              <p>
                Whether it's through open source, internships, or side projects, I'm always seeking new ways to learn and grow. 
                If you're building something cool or just want to chat tech, feel free to reach out!
              </p>
            </div>
          </div>

          <div className="skills-panel">
          <button
            onClick={() => setIsSkillsModalOpen(true)}
            className="panel-heading"
          >
            Skills & technologies <span>+</span>
          </button>
          <SkillsModal isOpen={isSkillsModalOpen} onClose={() => setIsSkillsModalOpen(false)} />
            <div className="skill-group">
              <p>Languages</p>
              <div className="tag-list">
                {languages.map((language, i) => (
                  <Tag key={i} {...language} />
                ))}
              </div>
            </div>

            <div className="skill-group">
              <p>Frameworks & libraries</p>
              <div className="tag-list">
                {frameworks.map((framework, i) => (
                  <Tag key={i} {...framework} />
                ))}
              </div>
            </div>

            <div className="skill-group">
              <p>Tools & services</p>
              <div className="tag-list">
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
        className="content-section"
      >
        <div className="section-heading">
          <p className="eyebrow">02 / where I have been</p>
          <h2>Experience</h2>
        </div>
        <div className="card-grid experience-grid">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>

        <p className="subsection-label">Related coursework</p>
        <div className="tag-list centered-tags">
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
        className="content-section"
      >
        <div className="section-heading">
          <p className="eyebrow">03 / selected work</p>
          <h2>Projects</h2>
        </div>
        <div className="card-grid project-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              isModalOpen={openProjectModalIndex === index}
              openModal={() => setOpenProjectModalIndex(index)}
              closeModal={() => setOpenProjectModalIndex(null)}
            />
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section
        id="certificates"
        className="content-section"
      >
        <div className="section-heading">
          <p className="eyebrow">04 / things I have completed</p>
          <h2>Certifications</h2>
        </div>
        <div className="card-grid certificate-grid">
          {sortCertificates(certifications).map((cert, index) => (
            <CertificateCard
              key={cert.title}
              {...cert}
              isModalOpen={openCertificateModalIndex === index}
              openModal={() => setOpenCertificateModalIndex(index)}
              closeModal={() => setOpenCertificateModalIndex(null)}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      {/* Conditionally render the StatsModal */}
      {showStats && <StatsModal onClose={() => setShowStats(false)} />}

      {/* Footer */}
      <footer className="site-footer">
        © {new Date().getFullYear()} Ryan Huynh. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
