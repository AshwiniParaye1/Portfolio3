import Link from "next/link";
import React from "react";
import ArticleItem from "./ArticleItem";

const Articles = () => {
  const articles = React.useMemo(
    () => [
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
    ],
    []
  );

  return (
    <section id="articles" aria-labelledby="articles-heading" className="mb-4">
      {" "}
      {/* Smallest margin */}
      <h2
        id="articles-heading"
        className="text-lg sm:text-xl font-semibold mb-2 text-black dark:text-white hover-underline-animation hover-orange" // Heading size, margin
      >
        Articles
      </h2>
      <ul className="list-disc pl-4">
        {" "}
        {/* list-disc and pl-4 */}
        {articles.map((article) => (
          <ArticleItem key={article.url} {...article} />
        ))}
      </ul>
      <p className="mt-2 text-gray-700 dark:text-gray-300 text-justify leading-relaxed text-base">
        {" "}
        {/* Paragraph size, margin */}
        Check out more of my articles on{" "}
        <Link
          href="https://medium.com/@ashwini-paraye"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 font-medium text-base
                     link-underline focus:outline-none focus:ring-2
                     focus:ring-blue-500 rounded-sm" // Link text size
          aria-label="Ashwini Paraye's Medium profile"
        >
          Medium
        </Link>{" "}
        to dive deeper into my work and insights!
      </p>
    </section>
  );
};

export default Articles;
