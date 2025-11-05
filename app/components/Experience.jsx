// app/components/Experience.jsx
import React from "react";

const ExperienceItem = React.memo(({ title, period, description }) => (
  <li className="mb-4 text-black dark:text-white">
    <h3 className="font-medium text-lg">{title}</h3>
    <p className="text-black dark:text-white font-light text-sm">{period}</p>
    <p className="text-gray-600 dark:text-gray-300 text-justify mt-1 leading-relaxed">
      {description}
    </p>
  </li>
));

const Experience = () => {
  const experiences = React.useMemo(
    () => [
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
    ],
    []
  );

  return (
    <section aria-labelledby="experience-heading">
      <h1
        id="experience-heading"
        className="text-xl mb-2 text-black dark:text-white"
      >
        Experience
      </h1>
      <ul className="list-disc pl-4">
        {experiences.map((job) => (
          <ExperienceItem key={job.title} {...job} />
        ))}
      </ul>
    </section>
  );
};

export default Experience;
