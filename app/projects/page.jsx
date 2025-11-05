// app/projects/page.jsx
"use client";

import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import ThemeToggle from "../components/ThemeToggle";

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

const ProjectsPage = () => {
  const moreProjects = React.useMemo(
    () => [
      {
        title: "Cloud Drive",
        liveLink: "https://icloud-drive.vercel.app/sign-in/",
        codeLink: "https://github.com/AshwiniParaye1/CloudDrive",
        description:
          "A cloud storage web app to upload, manage, and share files securely.",
      },
      {
        title: "Github Issue Tracker",
        liveLink: "https://issue-trackerr1.vercel.app/",
        codeLink: "https://github.com/AshwiniParaye1/Issue-Tracker",
        description:
          "GitHub Issue Explorer that fetches and analyzes up to 1000 recent " +
          "issues from any repository, providing detailed insights like status " +
          "counts, weekly metrics, and closure rates.",
      },
      {
        title: "Clip AI",
        liveLink: "https://clip-ai.vercel.app/",
        codeLink: "https://github.com/AshwiniParaye1/AI-Video-Generator",
        description:
          "An AI-powered tool to generate video clips from prompts automatically.",
      },
      {
        title: "Whack a Mole",
        liveLink: "https://1whackamole.netlify.app/",
        codeLink: "https://github.com/AshwiniParaye1/Whack-a-mole",
        description:
          "A classic fast-paced arcade game built with JavaScript, where you need to " +
          "whack the moles as they pop up, scoring points for every successful hit!",
      },
      {
        title: "Webpage Summarizer",
        codeLink: "https://github.com/AshwiniParaye1/AI-Summarizer",
        description:
          "An AI-powered tool to summarize web pages quickly and efficiently.",
      },
      {
        title: "Snapshotz",
        codeLink: "https://github.com/AshwiniParaye1/SnapShotz",
        description:
          "Simple and efficient chrome extension for instant webpage screenshot",
      },
    ],
    []
  );

  return (
    <div
      className="bg-white dark:bg-black text-black dark:text-white flex flex-col
                 xl:px-80 lg:px-60 md:px-48 sm:px-36 p-10 gap-3 min-h-screen"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
            aria-label="Go back to home page"
          >
            <MdArrowBackIosNew size={20} />
          </Link>
          <h1 className="text-xl text-black dark:text-white">Projects</h1>
        </div>
        <ThemeToggle />
      </div>

      <section aria-labelledby="more-projects-heading">
        <h2 id="more-projects-heading" className="sr-only">
          More Projects
        </h2>
        <ul className="list-disc pl-4">
          {moreProjects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </ul>
      </section>

      <div className="text-gray-600 dark:text-gray-300 text-justify mt-auto">
        <p>
          Want to see more projects? Check out{" "}
          <Link
            href="https://github.com/AshwiniParaye1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
            aria-label="Ashwini Paraye's GitHub profile"
          >
            GitHub!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;
