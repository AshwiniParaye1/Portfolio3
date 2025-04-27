// app/projects/page.jsx

"use client";

import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const ProjectsPage = () => {
  const moreProjects = [
    {
      title: "Github Issue Tracker",
      liveLink: "https://issue-trackerr1.vercel.app/",
      codeLink: "https://github.com/AshwiniParaye1/Issue-Tracker",
      description:
        "GitHub Issue Explorer that fetches and analyzes up to 1000 recent issues from any repository, providing detailed insights like status counts, weekly metrics, and closure rates.",
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
      description: "A classic fast-paced arcade game built with JavaScript.",
    },
    {
      title: "Webpage Summarizer",
      codeLink: "https://github.com/AshwiniParaye1/AI-Summarizer",
      description:
        "A classic and fun game built using JavaScript, where you need to whack the moles as they pop up, scoring points for every successful hit!",
    },
    {
      title: "Snapshotz",
      codeLink: "https://github.com/AshwiniParaye1/SnapShotz",
      description:
        "Simple and efficient chrome extension for instant webpage screenshot",
    },
  ];

  return (
    <div className="bg-white flex flex-col xl:pl-80 xl:pr-80 lg:pl-60 lg:pr-60 md:pl-48 md:pr-48 sm:pl-36 sm:pr-36 h-full p-16 gap-10 overflow-hidden">
      <div className="flex items-center gap-3 pl-2">
        <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
          <MdArrowBackIosNew />
        </Link>
        <h1 className="text-xl text-gray-700">Projects</h1>
      </div>

      <section>
        <ul className="list-disc pl-5">
          {moreProjects.map((project, index) => (
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
              <div className="pl-2 text-gray-500 mt-1">
                {project.description}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="pl-7 text-gray-500 text-justify">
        <p>
          Want to see more projects? Check out {""}
          <Link
            href="https://github.com/AshwiniParaye1"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            GitHub!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;
