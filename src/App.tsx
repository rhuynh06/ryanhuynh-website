import './App.css';
import { ProjectCard } from './components/ProjectCard';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { projects } from './data/projects';

function App() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold">Ryan's Portfolio</h1>
      </header>

      {/* Bio */}
      <section className="text-center space-y-4">
        <img src="pfp.png" alt="Ryan's profile photo" className="w-auto h-32 rounded-full mx-auto border-4 border-primary" />
        <p className="text-lg max-w-2xl mx-auto">
          I'm a full-stack developer passionate about building impactful, AI-powered applications. I love turning ideas into fast, user-friendly tools.
        </p>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-4">Experience</h2>
        <p className="text-center text-muted-foreground">Coming soon...</p>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-4">Get in Touch</h2>
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
            <img src="src/assets/contact/gmail.svg" alt="Gmail Icon" className="w-6 h-auto"/>
              <a href="mailto:ryanhuynh200604@gmail.com" className="text-sm hover:text-primary">
                ryanhuynh200604@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <img src="src/assets/contact/github.svg" alt="Github Icon" className="w-6 h-6"/>
              <a href="https://github.com/rhuynh06" target="_blank" className="text-sm hover:text-primary">
                @rhuynh06
              </a>
            </div>
            <div className="flex items-center gap-3">
              <img src="src/assets/contact/linkedin.svg" alt="LinkedIn Icon" className="w-6 h-6"/>
              <a href="https://www.linkedin.com/in/ryan-huynh-937916248/" target="_blank" className="text-sm hover:text-primary">
                LinkedIn
              </a>
            </div>
            <div className="pt-4">
              <Button variant="outline" className="w-full" asChild>
                <a href="mailto:ryanhuynh200604@gmail.com">Email Me</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default App;
