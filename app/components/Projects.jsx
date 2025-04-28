// app/components/Projects.jsx
"use client";

import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, liveLink, codeLink, description }) => (
  <li className="pl-2 mb-4 text-black dark:text-white text-justify">
    <div className="font-medium text-lg">{title}</div>
    <div className="pl-2 text-blue-600 dark:text-blue-400">
      {liveLink && (
        <Link href={liveLink} target="_blank" className="hover:underline">
          Live
        </Link>
      )}
      {liveLink && codeLink && " | "}
      {codeLink && (
        <Link href={codeLink} target="_blank" className="hover:underline">
          Source Code
        </Link>
      )}
    </div>
    <div className="pl-2 text-gray-600 dark:text-gray-300 mt-1">
      {description}
    </div>
  </li>
);

const Projects = () => {
  const projects = [
    {
      title: "Cloud Drive",
      liveLink: "https://icloud-drive.vercel.app/sign-in/",
      codeLink: "https://github.com/AshwiniParaye1/CloudDrive",
      description:
        "A cloud storage web app to upload, manage, and share files securely.",
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
  ];

  return (
    <div>
      <h1 className="text-xl mb-2 text-black dark:text-white">Projects</h1>
      <ul className="list-disc pl-5">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </ul>

      <div className="pl-2 mt-3">
        <Link
          href="/projects"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          See More Projects
        </Link>
      </div>

      <p className="mt-4 pl-7 text-gray-600 dark:text-gray-300 text-justify">
        I actively build products like games and browser extensions, while also
        working on projects such as e-commerce platforms and AI-driven tools.
      </p>
    </div>
  );
};

export default Projects;
