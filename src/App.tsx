import './App.css';
import ContactPanel from './components/ContactPanel';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  return (
    <div className="max-w-6xl mx-auto space-y-0">

      {/* Header */}
      <header className="text-center p-6 top-0 z-30">
        <h1 className="text-4xl font-bold">Ryan's Portfolio</h1>
        <nav className="flex justify-center gap-6 mt-4">
          <a
            href="#about"
            className="btn px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark transition"
          >
            About Me
          </a>
          <a
            href="#experience"
            className="btn px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark transition"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="btn px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark transition"
          >
            Projects
          </a>
          <a
            href="#certificates"
            className="btn px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark transition"
          >
            Certificates
          </a>
        </nav>
      </header>

      {/* Bio Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 mb-4"
      >
        <img
          src="pfp.png"
          alt="Ryan's profile photo"
          className="w-auto h-32 rounded-full border-4 border-primary mb-6"
        />
        <p className="text-lg max-w-2xl">
          I'm a full-stack developer passionate about building impactful, AI-powered
          applications. I love turning ideas into fast, user-friendly tools.
        </p>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <p className="text-muted-foreground max-w-xl">Coming soon...</p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full px-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section
        id="certificates"
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-4">Certificates</h2>
        <p className="text-muted-foreground max-w-xl">Coming soon...</p>
      </section>

      {/* Contact Section */}
      <ContactPanel />

      {/* Footer */}
      <footer className="w-full text-center pt-10">
        © {new Date().getFullYear()} Ryan Huynh. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
