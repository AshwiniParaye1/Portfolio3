//component/GetInTouch.jsx

import Link from "next/link";
import React from "react";

const GetInTouch = () => {
  return (
    <div>
      <h1 className="text-xl mb-2 text-gray-700">Get In Touch</h1>
      <p className="pl-7 text-gray-500 text-justify">
        Interested in a conversation? Drop DM's over
        <span className="text-blue-500 hover:text-blue-700">
          <Link href="https://www.linkedin.com/in/ashwini-paraye/">
            {" "}
            linkedin{" "}
          </Link>
        </span>
        or{" "}
        <span className="text-blue-500 hover:text-blue-700">
          <Link href="mailto:ashwiniparaye1@gmail.com"> email. </Link>
        </span>
        Ask me anything about my work, my projects, or anything else you'd like.
      </p>
    </div>
  );
};

export default GetInTouch;
