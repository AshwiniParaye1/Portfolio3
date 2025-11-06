// app/components/ArticleItem.jsx
// app/components/ArticleItem.jsx
"use client";

import Link from "next/link";
import React from "react";

const ArticleItem = React.memo(({ title, url }) => (
  <li className="mb-2 text-gray-700 dark:text-gray-300 transition-colors duration-200">
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 dark:text-gray-200 font-medium
                 link-underline focus:outline-none focus:ring-2
                 focus:ring-blue-500 rounded-sm"
      aria-label={`Read article: ${title}`}
    >
      {title}
    </Link>
  </li>
));

export default ArticleItem;
