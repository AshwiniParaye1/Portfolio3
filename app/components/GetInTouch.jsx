import Link from "next/link";
import React from "react";

const GetInTouch = () => {
  return (
    <section
      id="contact"
      aria-labelledby="get-in-touch-heading"
      className="mb-4"
    >
      {" "}
      <h2
        id="get-in-touch-heading"
        className="text-lg sm:text-xl font-semibold mb-2 text-black dark:text-white hover-underline-animation hover-yellow"
      >
        Get In Touch
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed text-base">
        {" "}
        I'd love to hear from you. Whether you have a question or just want to
        talk about tech, my work, projects, or anything else you'd like. Just
        Drop a message over{" "}
        <Link
          href="https://www.linkedin.com/in/ashwini-paraye/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 font-medium text-base
                     link-underline focus:outline-none focus:ring-2
                     focus:ring-blue-500 rounded-sm"
          aria-label="Connect on LinkedIn"
        >
          {" "}
          Linkedin{" "}
        </Link>{" "}
        or{" "}
        <Link
          href="mailto:ashwiniparaye1@gmail.com"
          className="text-gray-800 dark:text-gray-200 font-medium text-base
                     link-underline focus:outline-none focus:ring-2
                     focus:ring-blue-500 rounded-sm"
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
