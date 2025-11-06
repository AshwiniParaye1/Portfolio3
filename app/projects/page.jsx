// app/projects/page.jsx
"use client";

import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import ThemeToggle from "../components/ThemeToggle";
import ProjectItem from "../components/ProjectItem";

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
                 px-8 md:px-16 lg:px-24 xl:px-48 py-10 sm:py-12 md:py-16 gap-8
                 min-h-screen max-w-screen-xl mx-auto" // Adjusted padding and max-width
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-gray-800 dark:text-gray-200 hover:opacity-70
                       transition-opacity duration-200 focus:outline-none
                       focus:ring-2 focus:ring-blue-500 rounded-sm"
            aria-label="Go back to home page"
          >
            <MdArrowBackIosNew size={20} />
          </Link>
          <h1 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
            Projects
          </h1>
        </div>
        <ThemeToggle />
      </div>

      <section aria-labelledby="more-projects-heading">
        <h2 id="more-projects-heading" className="sr-only">
          More Projects
        </h2>
        <ul className="list-none pl-0">
          {moreProjects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </ul>
      </section>

      <div className="text-gray-700 dark:text-gray-300 text-justify mt-auto text-base">
        <p>
          Want to see more projects? Check out{" "}
          <Link
            href="https://github.com/AshwiniParaye1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 font-medium
                     link-underline focus:outline-none focus:ring-2
                     focus:ring-blue-500 rounded-sm"
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
