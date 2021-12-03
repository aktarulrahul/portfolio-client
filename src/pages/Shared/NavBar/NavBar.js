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
      <div className="flex justify-center items-center md:flex-col space-x-4 md:space-x-0 md:space-y-4 py-4 text-center ">
        <div className="md:mb-2 md:p-3 md:rounded md:shadow-lg">
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: '#78CC6C',
            }}
            to="/about"
          >
            <p className="hidden md:block text-green-500">
              <i className="text-3xl fas fa-address-card "></i>
            </p>
            <p className="text-green-500">About</p>
          </NavLink>
        </div>

        <div className="md:mb-2 md:p-3 md:rounded md:shadow-lg">
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: '#78CC6C',
            }}
            to="/projects"
          >
            <p className="hidden md:block text-green-500">
              <i className="text-3xl fas fa-address-card "></i>
            </p>
            <p className="text-green-500">Works</p>
          </NavLink>
        </div>
        <div className="md:mb-2 md:p-3 md:rounded md:shadow-lg">
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: '#78CC6C',
            }}
            to="/blogs"
          >
            <p className="hidden md:block text-green-500">
              <i className="text-3xl fas fa-address-card "></i>
            </p>
            <p className="text-green-500">Blog</p>
          </NavLink>
        </div>
        <div className="md:mb-2 md:p-3 md:rounded md:shadow-lg">
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: '#78CC6C',
            }}
            to="/contact"
          >
            <p className="hidden md:block text-green-500">
              <i className="text-3xl fas fa-address-card "></i>
            </p>
            <p className="text-green-500">Contact</p>
          </NavLink>
        </div>
        <button
          onClick={handleresume}
          className="px-4 py-2 rounded-full text-white bg-green-400"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default NavBar;
