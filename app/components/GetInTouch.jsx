// app/components/GetInTouch.jsx
import Link from "next/link";
import React from "react";

const GetInTouch = () => {
  return (
    <section aria-labelledby="get-in-touch-heading">
      <h1
        id="get-in-touch-heading"
        className="text-xl mb-2 text-black dark:text-white"
      >
        Get In Touch
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
        I'd love to hear from you. Whether you have a question or just want to
        talk about tech, my work, projects, or anything else you'd like. Just
        Drop a message over{" "}
        <Link
          href="https://www.linkedin.com/in/ashwini-paraye/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
          aria-label="Connect on LinkedIn"
        >
          {" "}
          Linkedin{" "}
        </Link>
        or{" "}
        <Link
          href="mailto:ashwiniparaye1@gmail.com"
          className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
          aria-label="Send an email"
        >
          {" "}
          Email.{" "}
        </Link>
      </p>
    </section>
  );
};

export default GetInTouch;
