"use client";

import Link from "next/link";
import React from "react";

const Projects = () => {
  const initialProjects = [
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
      <h1 className="text-xl mb-2 text-gray-700">Projects</h1>
      <ul className="list-disc pl-5">
        {initialProjects.map((project, index) => (
          <li key={index} className="pl-2 mb-4 text-gray-700 text-justify">
            <div className="font-medium text-lg">{project.title}</div>
            <div className="pl-2 text-blue-500">
              {project.liveLink && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="hover:text-blue-700 underline"
                >
                  Live
                </Link>
              )}
              {project.liveLink && project.codeLink && " | "}
              {project.codeLink && (
                <Link
                  href={project.codeLink}
                  target="_blank"
                  className="hover:text-blue-700 underline"
                >
                  Source Code
                </Link>
              )}
            </div>
            <div className="pl-2 text-gray-500 mt-1">{project.description}</div>
          </li>
        ))}
      </ul>

      <div className="pl-2 mt-3">
        <Link
          href="/projects"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          See More Projects
        </Link>
      </div>

      <p className="mt-4 pl-7 text-gray-500 text-justify">
        I actively build products like games and browser extensions, while also
        working on projects such as e-commerce platforms and AI-driven tools.
      </p>
    </div>
  );
};

export default Projects;
