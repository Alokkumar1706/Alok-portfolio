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

        <h2
          className="
          text-5xl
          font-bold
          text-center
          mb-16"
        >
          Projects
        </h2>

        <div
  className="
  grid
  md:grid-cols-3
  gap-6"
>
          {projects.map(
            (project, index) => (
              <ProjectCard
              key={index}
              {...project}
              onClick={() =>
                setSelectedProject(project)
              }
            />
            )
          )}
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