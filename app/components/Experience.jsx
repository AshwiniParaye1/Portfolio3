// app/components/Experience.jsx
import React from "react";

const ExperienceItem = React.memo(({ title, period, description }) => (
  <li
    className="mb-6 p-4 -mx-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800
               transition-colors duration-200"
  >
    <h3 className="font-semibold text-lg sm:text-xl text-black dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 font-light text-sm mt-1">
      {period}
    </p>
    <p className="text-gray-700 dark:text-gray-300 text-justify mt-3 leading-relaxed text-base">
      {description}
    </p>
  </li>
));

const Experience = () => {
  const experiences = React.useMemo(
    () => [
      {
        title: "Software Engineer | @Freelance",
        period: "Dec 2024 - Present",
        description:
          "As a freelance developer, I built an AI-powered CSV chatbot using LLMs, " +
          "RAG, and vector embeddings. Developed full-stack features with Next.js, " +
          "React, TypeScript, Tailwind & Supabase. Created responsive UIs and " +
          "dashboards for multiple clients, turning Figma designs into clean, modern " +
          "interfaces. Handled state management, API integrations, and performance " +
          "optimization to deliver scalable solutions.",
      },
      {
        title: "Fullstack Developer | @ProjectBoard",
        period: "June 2023 - May 2024",
        description:
          "As a fullstack developer in ProjectBoard I developed applications using " +
          "Vue.js and Golang, created REST APIs, implemented state management with " +
          "Vuex and worked with the databases. I also collaborated on project " +
          "management with Monday.com and followed best GitHub practices to ensure " +
          "high-quality code through testing, debugging and optimization.",
      },
      {
        title: "Software Engineer | @Infosys",
        period: "June 2021 - Nov 2022",
        description:
          "As a software engineer in Infosys I developed frontend applications using " +
          "React, focusing on creating responsive and user-friendly interfaces. " +
          "Contributed to the development of dynamic dashboards, enhancing data " +
          "visualization and user engagement. Utilized Redux for state management " +
          "to ensure seamless data flow across the application. Translated Figma " +
          "designs into fully responsive and interactive user interfaces.",
      },
    ],
    []
  );

  return (
    <section aria-labelledby="experience-heading" className="mb-8 md:mb-12">
      <h2
        id="experience-heading"
        className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white"
      >
        Experience
      </h2>
      <ul className="list-none pl-0">
        {" "}
        {/* Changed from list-disc to list-none */}
        {experiences.map((job) => (
          <ExperienceItem key={job.title} {...job} />
        ))}
      </ul>
    </section>
  );
};

export default Experience;
