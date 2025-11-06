// app/components/ProjectItem.jsx
"use client";

import Link from "next/link";
import React from "react";

const ProjectItem = React.memo(({ title, liveLink, codeLink, description }) => (
  <li
    // Added padding and negative margin to make room for the border
    className="mb-6 py-4 px-4 -mx-4 relative animated-border-hover"
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
