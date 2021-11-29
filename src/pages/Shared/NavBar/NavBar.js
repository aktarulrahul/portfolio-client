import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="md:h-full">
      <div className="flex justify-center items-center md:flex-col space-x-4 md:space-x-0 md:space-y-4">
        <NavLink to="/about">About</NavLink>
        <hr />
        <NavLink to="/projects">Works</NavLink>
        <hr />
        <NavLink to="/contact">Contact</NavLink>
        <hr />
      </div>
    </div>
  );
};

export default NavBar;
