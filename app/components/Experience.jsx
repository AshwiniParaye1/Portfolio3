import React from "react";

const ExperienceItem = React.memo(({ title, period, description }) => {
  const bulletPoints = description
    .split(
      /(?<=[.!?])\s+(?=[A-Z])|\s*(?<=[.!?])(?=\s*$)|(?<=[.!?])(?=\s*$)|\. (?=[A-Z]|\d)/
    )
    .map((point) => point.trim())
    .filter((point) => point.length > 0);

  return (
    <li className="mb-4">
      <div className="py-1.5 px-2 -mx-2 relative animated-border-hover hover-pink">
        <h3 className="font-semibold text-sm sm:text-base text-black dark:text-white">
          {title}
        </h3>{" "}
        <p className="text-gray-600 dark:text-gray-400 font-light text-sm mt-0.5">
          {period}
        </p>{" "}
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mt-1.5 leading-relaxed text-base">
          {bulletPoints.map((point, index) => (
            <li key={index} className="mb-1">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
});

const Experience = () => {
  const experiences = React.useMemo(
    () => [
      {
        title: "Software Engineer | @Freelance",
        period: "Dec 2024 – Present",
        description:
          "Developed an AI document chatbot for PDF, DOCX, CSV and text using LLMs, RAG, and vector embeddings. " +
          "Engineered full-stack solutions with Next.js, React, TypeScript, Tailwind, and Supabase. " +
          "Created responsive UI dashboards and landing pages from Figma designs for various clients. " +
          "Optimized state management, API integrations, and performance for scalable user experiences.",
      },
      {
        title: "Fullstack Developer | @ProjectBoard",
        period: "June 2023 - May 2024",
        description:
          "Built full-stack web features for a student STEM platform using React.js, Vue.js, JavaScript, and Golang. " +
          "Designed and integrated REST APIs and database schemas (MySQL, MongoDB) for core platform functionalities. " +
          "Converted Figma designs into responsive UI, implementing Vuex and Redux for state management in learning modules. " +
          "Ensured high-quality code through collaboration (Monday.com), GitHub workflows, debugging, and optimization.",
      },
      {
        title: "Software Engineer | @Infosys",
        period: "June 2021 - Nov 2022",
        description:
          "Developed responsive, user-friendly interfaces for insurance web applications using React and JavaScript. " +
          "Created dynamic policy and claims dashboards, enhancing data visualization and workflow efficiency. " +
          "Implemented Redux for robust state management across key insurance modules.",
      },
    ],
    []
  );

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mb-4 "
    >
      {" "}
      <h2
        id="experience-heading"
        className="text-lg sm:text-xl font-semibold mb-2 text-black dark:text-white hover-underline-animation hover-pink"
      >
        Experience
      </h2>
      <ul className="list-disc pl-4">
        {" "}
        {experiences.map((job) => (
          <ExperienceItem key={job.title} {...job} />
        ))}
      </ul>
    </section>
  );
};

export default Experience;
