import './App.css';
import ContactPanel from './components/ContactPanel';
import { ExperienceCard } from './components/ExperienceCard';
import { LiveTyping } from './components/LiveTyping';
import { ProjectCard } from './components/ProjectCard';
import { Tag } from './components/Tag';
import { relatedCoursework } from './data/courseWork';
import { experiences } from './data/experiences';
import { projects } from './data/projects';
import { languages, frameworks, tools } from "./data/skills";

function App() {
  const introPhrases = [ // fix phrases (add highlights, italics, underline to emphasize certain words)
    "looking to connect",
    "passtionate about building tools to help others",
    "actively seeking internships as well as any other opportunity that'll provide me with more practical experience",
    "loves learning from others",
    "passionate about building tools to ease daily life",
    "appreciates any chance to grow through hands-on experience.",
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-0">

      {/* Header */}
      <section className="min-h-screen flex items-center p-6 top-0 z-30 max-w-6xl mx-auto">
        <div className="basis-3/4 flex flex-col space-y-4 max-w-full">
          <div className="space-y-2 text-left max-w-3/5 break-words">
            <h3 className="text-lg font-light">hi! i am</h3>
            <h1 className="text-4xl font-bold leading-tight">Ryan Huynh</h1>
            <h2 className="text-xl font-medium max-w-full">
              I am a programmer who <LiveTyping phrases={introPhrases} />
            </h2>
          </div>

          <nav className="flex flex-wrap gap-4 mt-4">
            <a
              href="#info"
              className="btn px-4 py-2 rounded-4xl bg-primary text-white hover:bg-primary-dark transition"
            >
              About Me
            </a>
            <a
              href="#experience"
              className="btn px-4 py-2 rounded-4xl bg-primary text-white hover:bg-primary-dark transition"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="btn px-4 py-2 rounded-4xl bg-primary text-white hover:bg-primary-dark transition"
            >
              Projects
            </a>
            <a
              href="#certificates"
              className="btn px-4 py-2 rounded-4xl bg-primary text-white hover:bg-primary-dark transition"
            >
              Certificates
            </a>
          </nav>
        </div>

        <div className="basis-1/4 flex justify-center">
          <img
            src="pfp.png"
            alt="Ryan's profile photo"
            className="w-auto h-64 rounded-full border-4 border-primary"
          />
        </div>
      </section>

      {/* Info */}
      <section
        id="info"
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 mb-4"
      >

        <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl text-left">
          
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold mb-4 underline">about me</h3>
            <p>
              I'm an undergraduate student interested in artificial intelligence, machine learning,
              and how technology can help solve real-world problems.
            </p>
            <p>
              I'm currently learning by building projects, exploring different tools in the AI ecosystem,
              and trying to understand how things work under the hood.
            </p>
            <p>
              I'm looking for internship opportunities, mentorship, and chances to collaborate with others
              who are curious and motivated.
            </p>
          </div>

          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold underline">skills & technologies</h3>

            <div>
              <p className="font-semibold mb-2">Languages</p>
              <div className="flex flex-wrap">
                {languages.map(({ name, level }, i) => (
                  <Tag key={i} name={name} colorClass={level} />
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Frameworks / Libraries</p>
              <div className="flex flex-wrap">
                {frameworks.map(({ name, level }) => (
                  <div
                    key={name}
                    className={`py-1 px-3 rounded-xl m-1 flex items-center h-8 text-sm font-semibold
                      ${level === "green" ? "bg-green-100 border border-green-400 text-green-800" :
                        level === "yellow" ? "bg-yellow-100 border border-yellow-400 text-yellow-800" :
                        "bg-gray-100 border border-gray-400 text-gray-800"}`}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Tools</p>
              <div className="flex flex-wrap">
                {tools.map(({ name, level }) => (
                  <div
                    key={name}
                    className={`py-1 px-3 rounded-xl m-1 flex items-center h-8 text-sm font-semibold
                      ${level === "green" ? "bg-green-100 border border-green-400 text-green-800" :
                        level === "yellow" ? "bg-yellow-100 border border-yellow-400 text-yellow-800" :
                        "bg-gray-100 border border-gray-400 text-gray-800"}`}
                  >
                    {name}
                  </div>
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
        <h2 className="text-2xl font-bold underline mb-4">experience</h2>
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl mx-auto px-4">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-4">Related Coursework</h3>
        <div className="flex flex-wrap justify-center max-w-5xl">
          {relatedCoursework.map(({ title, code }) => (
            <div
              key={code}
              className="py-1 px-3 m-1 rounded-xl bg-blue-50 border border-blue-300 text-blue-800 text-sm font-medium"
            >
              {title} · {code}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center text-center p-8 mb-4"
      >
        <h2 className="text-2xl font-bold underline mb-6">projects</h2>
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
        <h2 className="text-2xl font-bold underline mb-4">certificates</h2>
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
