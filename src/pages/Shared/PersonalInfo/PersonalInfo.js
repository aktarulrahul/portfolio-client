import React from 'react';
import me from '../../../images/me.JPG';
import Typewriter from 'typewriter-effect';

const PersonalInfo = () => {
  return (
    <div className="rounded shadow-lg overflow-hidden md:h-full p-1">
      <img
        style={{
          objectFit: 'cover',
          borderRadius: '50%',
          height: '320px',
        }}
        src={me}
        alt=""
      />

      <h1 className="text-center text-2xl mt-3">Md. Aktarul Islam</h1>
      <p className="text-center text-xl mb-1">
        <Typewriter
          options={{
            strings: ['React Developer', 'Frontend Developer', 'MERN Stack'],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
      <p className="text-center mb-3">contact@aktarulislam.com</p>
      <div className="my-3 text-center text-3xl">
        <a href="https://www.linkedin.com/in/aktarul-islam/">
          <i className="fab fa-linkedin  mx-2 "></i>
        </a>
        <a href="https://www.github.com/aktarulrahul">
          <i className="fab fa-git-square  mx-2 "></i>
        </a>
        <a href="https://stackexchange.com/users/20668841/md-aktarul-islam">
          <i className="fab fa-stack-overflow  mx-2 "></i>
        </a>
        <br />
        <button
          onClick={() => {
            window.open(
              'https://drive.google.com/file/d/10FKRW31z_eaqmikUs_LDffx814lhngGW/view',
              '_blank'
            );
          }}
          className="p-1 rounded-full text-2xl text-green-500 bg-white my-3 w-2/3 mx-auto md:block hidden"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
