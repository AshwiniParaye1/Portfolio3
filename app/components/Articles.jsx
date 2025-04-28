// app/components/Articles.jsx
import Link from "next/link";
import React from "react";

const Articles = () => {
  const articles = [
    {
      title: "Boost Your Development Speed with Golang",
      url: "https://peerlist.io/ashwini_paraye/articles/boost-your-development-speed-with-golang",
    },
    {
      title: "How Golang Behaves Behind the Scenes",
      url: "https://blog.stackademic.com/step-by-step-breakdown-of-how-golang-behaves-behind-the-scenes-eba1d5582b55",
    },
    {
      title: "Understanding Browser Storage",
      url: "https://medium.com/stackademic/understanding-browser-storage-a9883d82f6ba",
    },
    {
      title: "Understanding the Basics of Next.js",
      url: "https://blog.stackademic.com/understanding-the-basics-of-next-js-for-beginners-b2e542c3e6e1",
    },
  ];

  return (
    <div>
      <h1 className="text-xl mb-2 text-black dark:text-white">Articles</h1>
      <ul className="list-disc pl-4">
        {articles.map((article, index) => (
          <li key={index} className="mb-1 text-gray-600 dark:text-gray-300">
            <span className="text-blue-600 dark:text-blue-400 hover:underline">
              <Link href={article.url} target="_blank">
                {article.title}
              </Link>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-justify">
        Check out more of my articles on{" "}
        <span className="text-blue-600 dark:text-blue-400 hover:underline">
          <Link href="https://medium.com/@ashwini-paraye" target="_blank">
            Medium
          </Link>
        </span>{" "}
        to dive deeper into my work and insights!
      </p>
    </div>
  );
};

export default Articles;
