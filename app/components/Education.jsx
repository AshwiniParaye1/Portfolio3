// app/components/Education.jsx
import React from "react";

const Education = () => {
  return (
    <section aria-labelledby="education-heading" className="mb-6 md:mb-8">
      {" "}
      {/* Reduced bottom margin */}
      <h2
        id="education-heading"
        className="text-lg sm:text-xl font-semibold mb-3 text-black dark:text-white" // Reduced font size, margin
      >
        Education
      </h2>
      <ul className="list-none pl-0">
        <li className="mb-3 text-gray-700 dark:text-gray-300">
          {" "}
          {/* Reduced bottom margin */}
          <h3 className="text-base sm:text-lg text-black dark:text-white font-medium">
            Master of Science - 2022
          </h3>{" "}
          {/* Reduced font size */}
          <p className="mt-1 text-sm">
            Marathwada Institute of Technology, Sambhajinagar, MH.
          </p>{" "}
          {/* Reduced font size */}
        </li>
      </ul>
    </section>
  );
};

export default Education;
