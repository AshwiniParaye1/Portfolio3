// app/components/Education.jsx
import React from "react";

const Education = () => {
  return (
    <section aria-labelledby="education-heading" className="mb-4">
      {" "}
      {/* Smallest margin */}
      <h2
        id="education-heading"
        className="text-base sm:text-lg font-semibold mb-2 text-black dark:text-white hover-underline-animation hover-blue" // Heading size, margin
      >
        Education
      </h2>
      <ul className="list-disc pl-4">
        {/* list-disc and pl-4 */}
        <li className="mb-3 text-gray-700 dark:text-gray-300">
          {" "}
          {/* List item margin */}
          <h3 className="text-base sm:text-base text-black dark:text-white font-medium">
            Masters in Information Technology - 2022
          </h3>{" "}
          {/* Heading size */}
          <p className="mt-0.5 text-base">
            Marathwada Institute of Technology, Sambhajinagar, MH.
          </p>{" "}
          {/* Paragraph size */}
        </li>
      </ul>
    </section>
  );
};

export default Education;
