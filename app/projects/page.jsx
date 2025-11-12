"use client";

import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import ThemeToggle from "../components/ThemeToggle";
import ProjectItem from "../components/ProjectItem";

// Import motion from framer-motion
import { motion } from "framer-motion";

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

  // Animation variants for the individual project items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Animation variants for the container (to orchestrate stagger children)
  const containerVariants = {
    hidden: { opacity: 1 }, // Container starts visible
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each child animates with a 0.1s delay after the previous
      },
    },
  };

  return (
    <div
      className="bg-white dark:bg-black text-black dark:text-white flex flex-col
                 px-16 md:px-16 lg:px-24 xl:px-52 py-16 sm:py-12 md:py-20 gap-4
                 min-h-screen max-w-screen-xl mx-auto" // Main padding and gap
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-gray-800 dark:text-gray-200 hover:opacity-70
                       transition-opacity duration-200 focus:outline-none
                       focus:ring-2 focus:ring-blue-500 rounded-sm"
            aria-label="Go back to home page"
          >
            <MdArrowBackIosNew size={18} />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
            Projects
          </h1>
        </div>
        <ThemeToggle />
      </div>

      <section aria-labelledby="more-projects-heading">
        <h2 id="more-projects-heading" className="sr-only">
          More Projects
        </h2>
        {/* Use motion.ul to wrap the project items and apply container variants */}
        <motion.ul
          className="list-disc pl-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of list is in view
        >
          {moreProjects.map((project) => (
            // Each ProjectItem will be a motion.li or wrapped in motion.div
            <motion.li key={project.title} variants={itemVariants}>
              <ProjectItem {...project} />
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <div className="text-gray-700 dark:text-gray-300 text-justify mt-auto text-base">
        <motion.p
          variants={itemVariants} // Reusing itemVariants for this paragraph
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Want to see more projects? Check out{" "}
          <Link
            href="https://github.com/AshwiniParaye1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 font-medium text-base
                     link-underline focus:outline-none focus:ring-2
                     focus:ring-blue-500 rounded-sm"
            aria-label="Ashwini Paraye's GitHub profile"
          >
            GitHub!
          </Link>
        </motion.p>
      </div>
    </div>
  );
};

export default ProjectsPage;
