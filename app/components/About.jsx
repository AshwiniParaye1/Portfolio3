// app/components/About.jsx

import Link from "next/link";
import React from "react";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiFillMediumSquare,
} from "react-icons/ai";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";

const SocialLink = ({ href, icon: Icon, external = true }) => (
  <Link href={href} target={external ? "_blank" : undefined}>
    <Icon
      size={20}
      className="text-gray-800 dark:text-gray-200 hover:opacity-80"
    />
  </Link>
);

const About = () => {
  const socialLinks = [
    {
      href: "mailto:ashwiniparaye1@gmail.com",
      icon: AiOutlineMail,
      external: false,
    },
    {
      href: "https://www.linkedin.com/in/ashwini-paraye/",
      icon: RiLinkedinBoxLine,
    },
    { href: "https://github.com/AshwiniParaye1", icon: AiOutlineGithub },
    { href: "https://ashwini-paraye.medium.com/", icon: AiFillMediumSquare },
    {
      href: "https://drive.google.com/uc?export=download&id=1Dqhha3QLvlqH29xQTF0XwgTEPs4_2rLH",
      icon: CgNotes,
    },
  ];

  return (
    <div>
      <h1 className="text-xl text-black dark:text-white mb-2">
        Ashwini Paraye
      </h1>
      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1 mb-6 flex flex-row gap-3">
        {socialLinks.map((link, index) => (
          <div key={index}>
            <SocialLink
              href={link.href}
              icon={link.icon}
              external={link.external}
            />
          </div>
        ))}
      </div>
      <p className="pl-7 text-gray-600 dark:text-gray-300 text-justify">
        I am Ashwini Paraye, a passionate Full Stack Developer with a love for
        writing, based in the vibrant world of technology. With expertise in
        both front-end and back-end development, I craft seamless, user-focused
        web applications. When I'm not coding, I share my knowledge and insights
        through writing. Let's collaborate to bring your ideas to life with
        innovative solutions and engaging content.
      </p>
    </div>
  );
};

export default About;
