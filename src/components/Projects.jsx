import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="font-montserrat py-26 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-4xl font-semibold mb-16">Projects</h2>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
