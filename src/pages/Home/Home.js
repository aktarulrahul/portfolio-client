import React from 'react';
import './Home.css';
import { Switch, Route } from 'react-router-dom';
import Projects from '../Projects/Projects';
import NavBar from '../Shared/NavBar/NavBar';
import PersonalInfo from '../Shared/PersonalInfo/PersonalInfo';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-3 grid-cols-1 ">
        <div className="sticky top-0 ">
          <div className="md:grid grid-cols-3">
            {/* NavBar start */}
            <div className="md:h-screen">
              <div className="bg-white md:h-screen">
                <NavBar />
              </div>
            </div>
            {/* NavBar End */}
            {/* Perosnal Info Start */}
            <div className="col-span-2 overflow-hidden md:block hidden ">
              <div className="bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white md:h-screen">
                <PersonalInfo />
              </div>
            </div>
            {/* Perosnal Info End */}
          </div>
        </div>
        {/* Content Start */}
        <div className="col-span-2 md:h-screen ">
          <div className="rounded shadow-lg md:h-full overflow-auto p-1  bg-white">
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </div>
        {/* Content End */}
      </div>
    </div>
  );
};

export default Home;
