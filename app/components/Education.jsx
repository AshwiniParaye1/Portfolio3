// app/components/Education.jsx
import React from "react";

const Education = () => {
  return (
    <section aria-labelledby="education-heading">
      <h1
        id="education-heading"
        className="text-xl mb-2 text-black dark:text-white"
      >
        Education
      </h1>
      <ul className="list-disc pl-4">
        <li className="text-gray-600 dark:text-gray-300">
          <span className="text-black dark:text-white font-medium">
            Master of Science - 2022
          </span>
          <p className="mt-1">
            Marathwada Institute of Technology, Sambhajinagar, MH.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Education;
