// app/components/ProjectItem.jsx
"use client";

import Link from "next/link";
import React from "react";

const ProjectItem = React.memo(({ title, liveLink, codeLink, description }) => (
  <li
    className="mb-6 p-4 -mx-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800
               transition-colors duration-200"
  >
    <h3 className="font-semibold text-lg sm:text-xl text-black dark:text-white">
      {title}
    </h3>
    <div
      className="text-gray-800 dark:text-gray-200 flex flex-wrap gap-x-3 gap-y-1
                 mt-1"
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
    <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed text-base">
      {description}
    </p>
  </li>
));

export default ProjectItem;
