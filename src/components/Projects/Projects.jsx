import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] =
  useState(null);
  return (
    <section
      id="projects"
      className="py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

       <h2 className="text-5xl font-bold text-center">
  MY PROJECTS
</h2>

<p className="text-xl text-gray-400 text-center mt-4">
  Featured Work & Recent Projects
</p>

        <div
  className="
grid
lg:grid-cols-3
md:grid-cols-2
gap-8"
>
          {projects.map((project) => (
  <ProjectCard
    key={project.id}
    project={project}
    onClick={() => {console.log(project);setSelectedProject(project)}}
  />
))}
        </div>
        <ProjectModal
  project={selectedProject}
  onClose={() =>
    setSelectedProject(null)
  }
/>

      </div>
    </section>
  );
};

export default Projects;