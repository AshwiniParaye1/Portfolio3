// app/components/ArticleItem.jsx
"use client";

import Link from "next/link";
import React from "react";

const ArticleItem = React.memo(({ title, url }) => (
  <li className="mb-3">
    {" "}
    {/* mb for spacing between list items, bullet point is native to li */}
    <div
      className="py-1 px-2 -mx-2 relative" // Inner div for animated border
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 dark:text-gray-200 font-medium text-base
                   link-underline focus:outline-none focus:ring-2
                   focus:ring-blue-500 rounded-sm" // Font size
        aria-label={`Read article: ${title}`}
      >
        {title}
      </Link>
    </div>
  </li>
));

export default ArticleItem;
