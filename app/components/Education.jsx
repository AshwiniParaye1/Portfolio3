import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mb-4"
    >
      {" "}
      <h2
        id="education-heading"
        className="text-lg sm:text-xl font-semibold mb-2 text-black dark:text-white hover-underline-animation hover-blue"
      >
        Education
      </h2>
      <ul className="list-disc pl-4">
        <li className="mb-3 text-gray-700 dark:text-gray-300">
          {" "}
          <h3 className="text-base sm:text-base text-black dark:text-white font-medium">
            Masters in Information Technology - 2022
          </h3>{" "}
          <p className="mt-0.5 text-base">
            Marathwada Institute of Technology, Sambhajinagar, MH.
          </p>{" "}
        </li>
      </ul>
    </section>
  );
};

export default Education;
