// app/components/GetInTouch.jsx
import Link from "next/link";
import React from "react";

const GetInTouch = () => {
  return (
    <div>
      <h1 className="text-xl mb-2 text-black dark:text-white">Get In Touch</h1>
      <p className="pl-7 text-gray-600 dark:text-gray-300 text-justify">
        I'd love to hear from you. Whether you have a question or just want to
        talk about tech, my work, projects, or anything else you'd like. Just
        Drop a message over{" "}
        <span className="text-blue-600 dark:text-blue-400 hover:underline">
          <Link href="https://www.linkedin.com/in/ashwini-paraye/">
            {" "}
            Linkedin{" "}
          </Link>
        </span>
        or{" "}
        <span className="text-blue-600 dark:text-blue-400 hover:underline">
          <Link href="mailto:ashwiniparaye1@gmail.com"> Email. </Link>
        </span>
      </p>
    </div>
  );
};

export default GetInTouch;
