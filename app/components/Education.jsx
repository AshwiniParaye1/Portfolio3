// app/components/Education.jsx
import React from "react";

const Education = () => {
  return (
    <section aria-labelledby="education-heading" className="mb-8 md:mb-12">
      <h2
        id="education-heading"
        className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white"
      >
        Education
      </h2>
      <ul className="list-none pl-0">
        {" "}
        {/* Changed from list-disc to list-none */}
        <li className="mb-2 text-gray-700 dark:text-gray-300">
          <h3 className="text-lg sm:text-xl text-black dark:text-white font-medium">
            Master of Science - 2022
          </h3>
          <p className="mt-1 text-base">
            Marathwada Institute of Technology, Sambhajinagar, MH.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Education;
