import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const handleresume = () => {
    window.open(
      'https://drive.google.com/file/d/10FKRW31z_eaqmikUs_LDffx814lhngGW/view',
      '_blank'
    );
  };
  return (
    <div className="md:h-full">
      <div className="flex justify-center items-center md:flex-col space-x-4 md:space-x-0 md:space-y-4 md:py-4">
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: '#78CC6C',
          }}
          to="/about"
        >
          About
        </NavLink>
        <hr />
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: '#78CC6C',
          }}
          to="/projects"
        >
          Works
        </NavLink>
        <hr className="text-blue-400" />
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: '#78CC6C',
          }}
          to="/contact"
        >
          Contact
        </NavLink>
        <hr />
        <button
          onClick={handleresume}
          className="px-4 py-2 rounded-full text-white bg-gradient-to-r from-green-400 to-green-800 hover:from-yellow-200 hover:to-yellow-500"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default NavBar;
