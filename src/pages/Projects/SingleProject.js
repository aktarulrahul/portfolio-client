import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleProject = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  // const [selectedProject, setSelectedProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch('/portfolio.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      });
  }, []);

  const selectedProject = projects.find((project) => project.key === id);
  // setSelectedProject(detailsProject);

  if (isLoading) {
    return <p>Loading</p>;
  }

  const {
    name,
    img,
    link,
    githubClient,
    githubServer,
    description,
    technology,
  } = selectedProject;
  return (
    <div className="mb-5 rounded-lg overflow-hidden shadow-lg mx-1">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-4 ">
        <div class="h-full overflow-hidden transition duration-500 ease-in-out transform hover:scale-105">
          <img src={img} style={{ objectFit: 'fill' }} alt="" />
        </div>
        <div class="px-2">
          <h2 className="text-2xl font-bold my-3 ">{name}</h2>
          <div className="my-2">
            <button
              onClick={() => {
                window.open(link, '_blank');
              }}
              className="block px-4 py-2 mb-1 rounded-full text-white bg-green-400  hover:bg-green-600 transition duration-500 ease-in-out transform hover:scale-105"
            >
              Live Link
            </button>
            <button
              onClick={() => {
                window.open(githubClient, '_blank');
              }}
              className="block px-4 py-2 mb-1 rounded-full text-white bg-green-400  hover:bg-green-600 transition duration-500 ease-in-out transform hover:scale-105"
            >
              <i className="fab fa-github"></i> Client
            </button>
            {githubServer && (
              <button
                onClick={() => {
                  window.open(githubServer, '_blank');
                }}
                className="block px-4 py-2 mb-1 rounded-full text-white bg-green-400  hover:bg-green-600 transition duration-500 ease-in-out transform hover:scale-105"
              >
                <i className="fab fa-github"></i> Server
              </button>
            )}
          </div>
          <p>{description}</p>
          <p className="my-3">Technology Used</p>
          <div className="my-3">
            {technology.map((tech) => (
              <p
                className="mr-2 px-1 py-2 my-2 rounded-lg border shadow-lg"
                key={tech}
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
