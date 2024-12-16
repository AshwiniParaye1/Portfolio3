import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div>
      <h1 className="text-xl  mb-2 text-gray-700">Projects</h1>
      <li className="pl-2 text-gray-700">
        <span className="text-blue-500 hover:text-blue-700 ">
          <Link href="https://icloud-drive.vercel.app/sign-in/" target="_blank">
            Cloud Drive |
          </Link>{" "}
        </span>

        <span className=" text-blue-500 hover:text-blue-700">
          <Link
            href="https://github.com/AshwiniParaye1/CloudDrive"
            target="_blank"
          >
            Source Code
          </Link>
        </span>
      </li>
      <li className="pl-2 text-gray-700">
        <span className="text-blue-500 hover:text-blue-700">
          <Link href={"https://clip-ai.vercel.app/"} target="_blank">
            Clip AI |
          </Link>{" "}
        </span>
        <span className="text-blue-500 hover:text-blue-700">
          <Link
            href={"https://github.com/AshwiniParaye1/AI-Video-Generator"}
            target="_blank"
          >
            Source Code
          </Link>
        </span>
      </li>
      <li className="pl-2 text-gray-700">
        <span className=" text-blue-500 hover:text-blue-700">
          <Link href={"https://1whackamole.netlify.app/"} target="_blank">
            Whack a Mole |
          </Link>{" "}
        </span>
        <span className=" text-blue-500 hover:text-blue-700">
          <Link
            href={"https://github.com/AshwiniParaye1/Whack-a-mole"}
            target="_blank"
          >
            Source Code
          </Link>
        </span>
      </li>
      <p className="mt-2 pl-7 text-gray-500">
        I actively build products like games and browser extensions, while also
        working on projects such as e-commerce platforms and AI-driven tools.
      </p>
    </div>
  );
};

export default Projects;
