import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('/portfolio.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center my-3 text-green-500">
        Previous Work
      </h2>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
