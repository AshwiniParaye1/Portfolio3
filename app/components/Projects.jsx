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
    <section id="projects" aria-labelledby="projects-heading" className="mb-4">
      {" "}
      {/* Smallest margin */}
      <h2
        id="projects-heading"
        className="text-lg sm:text-xl font-semibold mb-2 text-black dark:text-white hover-underline-animation hover-green" // Heading size, margin
      >
        Projects
      </h2>
      <ul className="list-disc pl-4">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </ul>
      <div className="mt-2">
        {" "}
        {/* Minimized top margin */}
        {/* <Link
          href="/projects"
          className="text-gray-800 dark:text-gray-200 font-medium text-base
                     link-underline focus:outline-none focus:ring-2
                     focus:ring-blue-500 rounded-sm" // Link text size
          aria-label="See all projects"
        >
          See More Projects
        </Link> */}
      </div>
      <p className="mt-3 text-gray-700 dark:text-gray-300 text-justify leading-relaxed text-base">
        I actively build products including <b>Web Apps, </b> <b>Games</b> and{" "}
        <b>Browser Extensions</b>, while also working on projects such as{" "}
        <b>E-Commerce Platforms</b> and <b>AI-Driven Tools</b>. Feel free to
        explore more on my{" "}
        <Link
          href="https://github.com/AshwiniParaye1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 font-medium text-base
                     link-underline focus:outline-none focus:ring-2
                     focus:ring-blue-500 rounded-sm" // Link text size
          aria-label="Ashwini Paraye's GitHub profile"
        >
          GitHub!
        </Link>
      </p>
    </section>
  );
};

export default Projects;
