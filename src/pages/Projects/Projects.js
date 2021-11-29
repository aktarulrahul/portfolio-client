import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import Lottie from 'react-lottie';
import contact from '../../animation/projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contact,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  useEffect(() => {
    fetch('/portfolio.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="">
      <div className="md:flex justify-around items-center md:block hidden">
        <h2 className="text-6xl font-bold text-green-500 uppercase">
          Previous <br />
          Work
        </h2>
        <Lottie options={defaultOptions} height={'350px'} width={'330px'} />
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
