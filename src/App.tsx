import './App.css'
import { ContactInfo } from './components/ContactInfo';
import { ProjectCard } from './components/ProjectCard'
import { projects } from './data/projects';

function App() {

  return (
    <div>
      <header>Ryan's Portfolio</header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <ContactInfo />
    </div>
  );
}

export default App
