import React from "react";
import Project from "./Projects.jsx";
import projects from "../data/ProjectData.jsx"; // or .jsx if you're using that

const ProjectGallery = () => {
  return (
    <div className="project-gallery">
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          techStack={project.techStack}
          screenshot={project.screenshot}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default ProjectGallery;
