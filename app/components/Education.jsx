// app/components/Education.jsx
import React from "react";

const Education = () => {
  return (
    <div>
      <h1 className="text-xl mb-2 text-black dark:text-white">Education</h1>
      <ul className="list-disc pl-4">
        <li className="text-gray-600 dark:text-gray-300">
          <span className="text-black dark:text-white">
            Master of Science - 2022
          </span>
          <p className="mt-1">
            Marathwada Institute of Technology, Sambhajinagar, MH.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Education;
