// app/components/ProjectItem.jsx
"use client";

import Link from "next/link";
import React from "react";

const ProjectItem = React.memo(({ title, liveLink, codeLink, description }) => (
  <li
    className="mb-6 py-2 px-3 -mx-3 relative animated-border-hover" // Reduced padding and negative margin
  >
    <h3 className="font-semibold text-base sm:text-lg text-black dark:text-white">
      {title}
    </h3>{" "}
    {/* Reduced font size */}
    <div
      className="text-gray-800 dark:text-gray-200 flex flex-wrap gap-x-3 gap-y-1
                 mt-0.5 text-sm" // Reduced top margin, reduced font size
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
    <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed text-sm">
      {description}
    </p>{" "}
    {/* Reduced font size, top margin */}
  </li>
));

export default ProjectItem;
