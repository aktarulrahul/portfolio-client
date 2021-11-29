import React from 'react';
import me from '../../../images/me.JPG';

const PersonalInfo = () => {
  return (
    <div className="rounded shadow-lg overflow-hidden md:h-full">
      <img style={{ objectFit: 'cover' }} src={me} alt="" />
      <h1 className="text-center text-2xl mt-3">Md. Aktarul Islam</h1>
      <p className="text-center text-green-600 text-xl mb-1">Developer</p>
      <p className="text-center  mb-3">contact@aktarulislam.com</p>
      <div className="my-3 text-center">
        <i className="fab fa-linkedin text-3xl text-green-500 mx-2 "></i>
        <i className="fab fa-git-square text-3xl text-green-500 mx-2 "></i>
        <i className="fab fa-stack-overflow text-3xl text-green-500 mx-2 "></i>
      </div>
    </div>
  );
};

export default PersonalInfo;
