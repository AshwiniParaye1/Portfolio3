import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillMediumSquare } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";

const About = () => {
  return (
    <div className="">
      <h1 className="text-xl text-gray-700">Ashwini Paraye</h1>
      <div className="text-sm text-gray-500 mt-1 mb-4 flex flex-row gap-3">
        <div>
          <Link href="mailto:ashwiniparaye1@gmail.com">
            <AiOutlineMail size={20} className="hover:text-gray-700" />
          </Link>
        </div>
        <span>
          <Link
            href="https://www.linkedin.com/in/ashwini-paraye/"
            target="_blank"
          >
            <RiLinkedinBoxLine size={20} className="hover:text-gray-700" />
          </Link>
        </span>
        <span>
          <Link href="https://github.com/AshwiniParaye1" target="_blank">
            <AiOutlineGithub size={20} className="hover:text-gray-700" />
          </Link>
        </span>
        <span>
          <Link href="https://ashwini-paraye.medium.com/" target="_blank">
            <AiFillMediumSquare size={20} className="hover:text-gray-700" />
          </Link>
        </span>
        <span>
          <Link
            href="https://drive.google.com/uc?export=download&id=1Dqhha3QLvlqH29xQTF0XwgTEPs4_2rLH"
            target="_blank"
          >
            <CgNotes size={20} className="hover:text-gray-700" />
          </Link>
        </span>
      </div>
      <p className="pl-7 text-gray-500 text-justify">
        I am Ashwini Paraye, a passionate Full Stack Developer with a love for
        writing, based in the vibrant world of technology. With expertise in
        both front-end and back-end development, I craft seamless, user-focused
        web applications. When I’m not coding, I share my knowledge and insights
        through writing. Let’s collaborate to bring your ideas to life with
        innovative solutions and engaging content.
      </p>
    </div>
  );
};

export default About;
