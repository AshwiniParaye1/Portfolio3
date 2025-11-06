// app/components/ArticleItem.jsx
"use client"; // If it uses any client-side hooks or features

import Link from "next/link";
import React from "react";

const ArticleItem = React.memo(({ title, url }) => (
  <li className="mb-1 text-gray-600 dark:text-gray-300">
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-400 hover:underline
                 transition-colors duration-200"
      aria-label={`Read article: ${title}`}
    >
      {title}
    </Link>
  </li>
));

export default ArticleItem;
