// app/components/GetInTouch.jsx
import Link from "next/link";
import React from "react";

const GetInTouch = () => {
  return (
    <div>
      <h1 className="text-xl mb-2 text-gray-700">Get In Touch</h1>
      <p className="pl-7 text-gray-500 text-justify">
        I'd love to hear from you. Whether you have a question or just want to
        talk about tech, my work, projects, or anything else you'd like. Just
        Drop a message over{" "}
        <span className="text-blue-500 hover:text-blue-700">
          <Link href="https://www.linkedin.com/in/ashwini-paraye/">
            {" "}
            Linkedin{" "}
          </Link>
        </span>
        or{" "}
        <span className="text-blue-500 hover:text-blue-700">
          <Link href="mailto:ashwiniparaye1@gmail.com"> Email. </Link>
        </span>
      </p>
    </div>
  );
};

export default GetInTouch;
