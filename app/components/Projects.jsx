// app/components/Projects.jsx
"use client";

import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";

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
    <section aria-labelledby="projects-heading" className="mb-8 md:mb-12">
      <h2
        id="projects-heading"
        className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white"
      >
        Projects
      </h2>
      <ul className="list-none pl-0">
        {" "}
        {/* Changed from list-disc to list-none */}
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </ul>

      <div className="mt-4">
        <Link
          href="/projects"
          className="text-gray-800 dark:text-gray-200 font-medium
                     link-underline focus:outline-none focus:ring-2
                     focus:ring-blue-500 rounded-sm"
          aria-label="See all projects"
        >
          See More Projects
        </Link>
      </div>

      <p className="mt-6 text-gray-700 dark:text-gray-300 text-justify leading-relaxed text-base">
        I actively build products like games and browser extensions, while also
        working on projects such as e-commerce platforms and AI-driven tools.
      </p>
    </section>
  );
};

export default Projects;
