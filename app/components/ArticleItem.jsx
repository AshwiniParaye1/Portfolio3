// app/components/ArticleItem.jsx
"use client";

import Link from "next/link";
import React from "react";

const ArticleItem = React.memo(({ title, url }) => (
  <li
    className="mb-4 py-1 px-2 -mx-2 relative animated-border-hover" // Reduced margin and padding
  >
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 dark:text-gray-200 font-medium text-sm
                 link-underline focus:outline-none focus:ring-2
                 focus:ring-blue-500 rounded-sm" // Reduced font size
      aria-label={`Read article: ${title}`}
    >
      {title}
    </Link>
  </li>
));

export default ArticleItem;
