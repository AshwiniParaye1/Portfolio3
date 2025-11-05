// app/components/Projects.jsx
"use client";

import Link from "next/link";
import React from "react";

const ProjectItem = React.memo(({ title, liveLink, codeLink, description }) => (
  <li className="mb-4 text-black dark:text-white text-justify">
    <h3 className="font-medium text-lg">{title}</h3>
    <div className="text-blue-600 dark:text-blue-400 flex flex-wrap gap-x-2">
      {liveLink && (
        <Link
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-colors duration-200"
          aria-label={`View live demo of ${title}`}
        >
          Live
        </Link>
      )}
      {liveLink && codeLink && (
        <span className="text-gray-500 dark:text-gray-400">|</span>
      )}
      {codeLink && (
        <Link
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-colors duration-200"
          aria-label={`View source code for ${title}`}
        >
          Source Code
        </Link>
      )}
    </div>
    <p className="text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
      {description}
    </p>
  </li>
));

const Projects = () => {
  const projects = React.useMemo(
    () => [
      {
        title: "CSV Chatbot",
        liveLink: "https://csv-chatbot-33xk.vercel.app/",
        codeLink: "https://github.com/AshwiniParaye1/CSV-Chatbot",
        description:
          "A CSV chatbot that lets users ask questions and get answers from CSV files.",
      },
      {
        title: "Github Readme Generator",
        liveLink: "https://readme-generator1.vercel.app/",
        codeLink: "https://github.com/AshwiniParaye1/Github-Readme-Generator",
        description: "Create professional readme in seconds",
      },
      {
        title: "Bloom",
        liveLink: "https://www.bloomwithin.site/",
        codeLink: "https://github.com/AshwiniParaye1/Bloom",
        description: "Your personalized productivity buddy",
      },
    ],
    []
  );

  return (
    <section aria-labelledby="projects-heading">
      <h1
        id="projects-heading"
        className="text-xl mb-2 text-black dark:text-white"
      >
        Projects
      </h1>
      <ul className="list-disc pl-4">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </ul>

      <div className="mt-3">
        <Link
          href="/projects"
          className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
          aria-label="See all projects"
        >
          See More Projects
        </Link>
      </div>

      <p className="mt-4 text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
        I actively build products like games and browser extensions, while also
        working on projects such as e-commerce platforms and AI-driven tools.
      </p>
    </section>
  );
};

export default Projects;
