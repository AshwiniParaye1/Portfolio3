"use client";

import Link from "next/link";
import React from "react";

const ProjectItem = React.memo(({ title, liveLink, codeLink, description }) => (
  <li className="mb-4">
    {" "}
    <div className="py-1.5 px-2 -mx-2 relative animated-border-hover hover-green">
      <h3 className="font-semibold text-sm sm:text-base text-black dark:text-white">
        {title}
      </h3>{" "}
      <div
        className="text-gray-800 dark:text-gray-200 flex flex-wrap gap-x-2
                   gap-y-0.5 mt-0.5 text-sm"
      >
        {liveLink && (
          <Link
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium link-underline focus:outline-none focus:ring-2
                       focus:ring-blue-500 rounded-sm"
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
            className="font-medium link-underline focus:outline-none focus:ring-2
                       focus:ring-blue-500 rounded-sm"
            aria-label={`View source code for ${title}`}
          >
            Source Code
          </Link>
        )}
      </div>
      <p className="text-gray-700 dark:text-gray-300 mt-1.5 leading-relaxed text-base">
        {description}
      </p>{" "}
    </div>
  </li>
));

export default ProjectItem;
