import React from 'react';

const ProjectCard = ({ project }) => {
  const {
    name,
    img,
    link,
    githubClient,
    githubServer,
    description,
    technology,
  } = project;
  return (
    <div className="mb-5 border rounded shadow-lg mx-1">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
        <div class="h-96 overflow-hidden">
          <img src={img} style={{ objectFit: 'fill' }} alt="" />
        </div>
        <div class="px-2">
          <h2 className="text-2xl font-bold my-3 ">{name}</h2>
          <div className="my-2">
            <button
              onClick={() => {
                window.open(link, '_blank');
              }}
              className=" px-4 py-2 mr-1 rounded-full text-white bg-green-400  hover:bg-green-600"
            >
              Live Link
            </button>
            <button
              onClick={() => {
                window.open(githubClient, '_blank');
              }}
              className=" px-4 py-2 mr-1 rounded-full text-white bg-green-400  hover:bg-green-600"
            >
              GitHub Client
            </button>
            {githubServer && (
              <button
                onClick={() => {
                  window.open(githubServer, '_blank');
                }}
                className=" px-4 py-2 mr-1 rounded-full text-white bg-green-400  hover:bg-green-600"
              >
                GitHub Server
              </button>
            )}
          </div>
          <p>{description}</p>
          <ul>
            {technology.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
