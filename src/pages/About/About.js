import React from 'react';
import PersonalInfo from '../Shared/PersonalInfo/PersonalInfo';

const About = () => {
  return (
    <div className="m-4">
      {/* Perosnal Info Start */}
      <div className="overflow-hidden p-2 block md:hidden">
        <PersonalInfo />
      </div>
      {/* Perosnal Info End */}
      <div className="">
        <h2 className="text-xl">About me</h2>
        <p className="my-2">
          I am Md. Aktarul Islam, Developer from Dhaka, Bangladesh. I have rich
          experience in web site design and building and customization, also I
          am good at React JS.
        </p>
        <h2 className="text-xl my-2">Skills</h2>
        <p>
          <strong>Expertise:</strong> HTML, CSS, JavaScript ES6, React, Tailwind
          CSS, Firebase Authentication
        </p>
        <p>
          <strong>Comfortable:</strong> BootStrap, Python, Web Scraping,
          WordPress, React Native, Node JS, Express
        </p>{' '}
        <p>
          <strong>Familiar:</strong> Material UI, SASS, Next JS, Docker, Styled
          Component, Redux, TypeScript, AWS
        </p>{' '}
        <p>
          <strong>Tools:</strong> Github, VS-code, Chrome development tools,
          cPanel, Netlify, Heroku, Trello, Figma
        </p>
      </div>
    </div>
  );
};

export default About;
