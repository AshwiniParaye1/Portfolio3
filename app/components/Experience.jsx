// app/components/Experience.jsx
import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Fullstack Developer | @ProjectBoard",
      period: "June 2023 - May 2024 | Toronto, CA",
      description:
        "As a fullstack developer in ProjectBoard I developed applications " +
        "using Vue.js and Golang, created REST APIs, implemented state " +
        "management with Vuex and worked with the databases. I also " +
        "collaborated on project management with Monday.com and followed best " +
        "GitHub practices to ensure high-quality code through testing, " +
        "debugging and optimization.",
    },
    {
      title: "Software Engineer | @Infosys",
      period: "June 2021 - Nov 2022 | Pune, IN",
      description:
        "As a software engineer in Infosys I developed frontend applications " +
        "using React, focusing on creating responsive and user-friendly " +
        "interfaces. Contributed to the development of dynamic dashboards, " +
        "enhancing data visualization and user engagement. Utilized Redux for " +
        "state management to ensure seamless data flow across the application. " +
        "Translated Figma designs into fully responsive and interactive user " +
        "interfaces.",
    },
  ];

  return (
    <div>
      <h1 className="text-xl mb-2 text-black dark:text-white">Experience</h1>
      <ul className="list-disc pl-4">
        {experiences.map((job, index) => (
          <li
            key={index}
            className={`${index > 0 ? "mt-4" : ""} text-black dark:text-white`}
          >
            <span className="font-medium">{job.title}</span>
            <p className="text-black dark:text-white font-light">
              {job.period}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-justify mt-1">
              {job.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
