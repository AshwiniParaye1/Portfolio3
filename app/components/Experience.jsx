//component/Experience.jsx

import React from "react";

const Experience = () => {
  return (
    <div>
      <h1 className="text-xl  mb-2 text-gray-700">Experience</h1>
      <li className="pl-2 text-gray-700">
        <span>Fullstack Developer | @ProjectBoard</span>
        <p className="pl-5 text-gray-700">June 2023 - May 2024 | Toronto, CA</p>
        <p className="pl-5 text-gray-500 text-justify">
          As a fullstack developer in ProjectBoard I developed applications
          using Vue.js and Golang, created REST APIs, implemented state
          management with Vuex and worked with the databases. I also
          collaborated on project management with Monday.com and followed best
          GitHub practices to ensure high-quality code through testing,
          debugging and optimization.
        </p>
      </li>
      <li className="pl-2 pt-2 text-gray-700">
        <span>Software Engineer | @Infosys</span>
        <p className="pl-5 text-gray-700">June 2021 - Nov 2022 | Pune, IN</p>
        <p className="pl-5 text-gray-500 text-justify">
          As a software engineer in Infosys I developed frontend applications
          using React, focusing on creating responsive and user-friendly
          interfaces. Contributed to the development of dynamic dashboards,
          enhancing data visualization and user engagement. Utilized Redux for
          state management to ensure seamless data flow across the application.
          Translated Figma designs into fully responsive and interactive user
          interfaces.
        </p>
      </li>
    </div>
  );
};

export default Experience;
