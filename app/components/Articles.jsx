import Link from "next/link";
import React from "react";

const Articles = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-2">Articles</h1>
      <li className="pl-2">
        <span className="text-blue-500 hover:text-blue-700">
          <Link
            href="https://peerlist.io/ashwini_paraye/articles/boost-your-development-speed-with-golang"
            target="_blank"
          >
            Boost Your Development Speed with Golang
          </Link>
        </span>
      </li>
      <li className="pl-2">
        <span className="text-blue-500 hover:text-blue-700">
          <Link
            href="https://blog.stackademic.com/step-by-step-breakdown-of-how-golang-behaves-behind-the-scenes-eba1d5582b55"
            target="_blank"
          >
            How Golang Behaves Behind the Scenes
          </Link>
        </span>
      </li>
      <li className="pl-2">
        <span className=" text-blue-500 hover:text-blue-700">
          <Link
            href="https://blog.stackademic.com/what-does-enumerable-mean-in-javascript-explained-simply-b3e52d00f621"
            target="_blank"
          >
            What Does Enumerable Mean in JavaScript?
          </Link>
        </span>
      </li>
      <li className="pl-2">
        <span className=" text-blue-500 hover:text-blue-700">
          <Link
            href="https://blog.stackademic.com/understanding-the-basics-of-next-js-for-beginners-b2e542c3e6e1"
            target="_blank"
          >
            Understanding the Basics of Next.js
          </Link>
        </span>
      </li>
      <p className="mt-2 pl-7">
        Check out more of my articles on{" "}
        <span className="text-blue-500 hover:text-blue-700">
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
