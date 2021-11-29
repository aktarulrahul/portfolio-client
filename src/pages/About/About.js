import React from 'react';
import PersonalInfo from '../Shared/PersonalInfo/PersonalInfo';

const About = () => {
  return (
    <div>
      {/* Perosnal Info Start */}
      <div className="overflow-hidden p-2 block md:hidden">
        <PersonalInfo />
      </div>
      {/* Perosnal Info End */}
    </div>
  );
};

export default About;
