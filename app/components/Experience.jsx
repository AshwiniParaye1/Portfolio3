// app/components/Experience.jsx
import React from "react";

const ExperienceItem = React.memo(({ title, period, description }) => (
  <li
    className="mb-6 py-2 px-3 -mx-3 relative animated-border-hover" // Reduced padding and negative margin
  >
    <h3 className="font-semibold text-base sm:text-lg text-black dark:text-white">
      {title}
    </h3>{" "}
    {/* Reduced font size */}
    <p className="text-gray-600 dark:text-gray-400 font-light text-xs mt-0.5">
      {period}
    </p>{" "}
    {/* Reduced font size */}
    <p className="text-gray-700 dark:text-gray-300 text-justify mt-2 leading-relaxed text-sm">
      {description}
    </p>{" "}
    {/* Reduced font size */}
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
    <section aria-labelledby="experience-heading" className="mb-6 md:mb-8">
      {" "}
      {/* Reduced bottom margin */}
      <h2
        id="experience-heading"
        className="text-lg sm:text-xl font-semibold mb-3 text-black dark:text-white" // Reduced font size, margin
      >
        Experience
      </h2>
      <ul className="list-none pl-0">
        {experiences.map((job) => (
          <ExperienceItem key={job.title} {...job} />
        ))}
      </ul>
    </section>
  );
};

export default Experience;
