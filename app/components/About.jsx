//app/components/About.jsx

import Link from "next/link";
import React from "react";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiFillMediumSquare,
} from "react-icons/ai";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import ThemeToggle from "./ThemeToggle";

const SocialLink = ({ href, icon: Icon, label, external = true }) => (
  <Link
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    aria-label={label}
    className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm" // Added focus styles
  >
    <Icon
      size={20}
      className="text-gray-800 dark:text-gray-200 hover:opacity-70 transition-opacity
                 duration-200"
    />
  </Link>
);

const About = () => {
  const socialLinks = React.useMemo(
    () => [
      {
        href: "mailto:ashwiniparaye1@gmail.com",
        icon: AiOutlineMail,
        label: "Email Ashwini Paraye",
        external: false,
      },
      {
        href: "https://dub.sh/ashwini-linkedin",
        icon: RiLinkedinBoxLine,
        label: "Ashwini Paraye on LinkedIn",
      },
      {
        href: "https://git.new/ashwini",
        icon: AiOutlineGithub,
        label: "Ashwini Paraye on GitHub",
      },
      {
        href: "https://dub.sh/ashwini-paraye",
        icon: AiFillMediumSquare,
        label: "Ashwini Paraye on Medium",
      },
      {
        href: "https://ggl.link/ashwini-paraye-resume",
        icon: CgNotes,
        label: "Ashwini Paraye's Resume",
      },
    ],
    []
  );

  return (
    <section aria-labelledby="about-heading" className="mb-8 md:mb-12">
      <div className="flex flex-row justify-between items-center mb-4 sm:mb-6">
        <h1
          id="about-heading"
          className="text-2xl sm:text-3xl font-semibold text-black dark:text-white"
        >
          Ashwini Paraye
        </h1>
        <ThemeToggle />
      </div>
      <div
        className="text-base text-gray-600 dark:text-gray-300 mt-2 mb-6 flex
                   flex-row gap-4"
      >
        {socialLinks.map((link) => (
          <SocialLink
            key={link.href}
            href={link.href}
            icon={link.icon}
            label={link.label}
            external={link.external}
          />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed text-base">
        I am Ashwini Paraye, a passionate Full Stack Developer with a love for
        writing, based in the vibrant world of technology. With expertise in
        both front-end and back-end development, I craft seamless, user-focused
        web applications. When I'm not coding, I share my knowledge and insights
        through writing. Let's collaborate to bring your ideas to life with
        innovative solutions and engaging content.
      </p>
    </section>
  );
};

export default About;
