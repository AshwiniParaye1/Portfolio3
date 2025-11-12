"use client"; // This component might already be a client component, but good to ensure if it uses Framer Motion

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

import { motion } from "framer-motion";

const SocialLink = ({ href, icon: Icon, label, external = true }) => (
  <motion.a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    aria-label={label}
    className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-sm block"
    whileHover={{ scale: 1.2, rotate: 5 }} // Subtle bounce/pulse on hover
    whileTap={{ scale: 0.9 }} // Visual feedback on tap/click
  >
    <Icon
      size={22} // Increased icon size for better visibility and hover effect
      className="text-gray-800 dark:text-gray-200 hover:opacity-70 transition-opacity duration-200"
    />
  </motion.a>
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

  // Variants for the container to stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child's animation
        delayChildren: 0.2, // Delay before the first child animates
      },
    },
  };

  // Variants for individual icon items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" aria-labelledby="about-heading" className="mb-4">
      <div className="flex flex-row justify-between items-center mb-2">
        <motion.h1 // Make the H1 animate as well
          id="about-heading"
          className="text-xl sm:text-2xl font-semibold text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ashwini Paraye
        </motion.h1>
        <ThemeToggle />
      </div>

      <motion.div // Container for social links
        className="text-base text-gray-600 dark:text-gray-300 mt-1 mb-3 flex flex-row gap-5" // Increased gap for better spacing
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Animate when the container enters view
        viewport={{ amount: 0.5 }} // Trigger every time 50% of container is visible
      >
        {socialLinks.map((link) => (
          <motion.div key={link.href} variants={itemVariants}>
            <SocialLink
              href={link.href}
              icon={link.icon}
              label={link.label}
              external={link.external}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.p // Make the paragraph animate as well
        className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }} // Trigger every time 50% of paragraph is visible
        transition={{ duration: 0.6, delay: 0.4 }} // Delay to animate after icons
      >
        I am Ashwini Paraye, a passionate Full Stack Developer with a love for
        writing, based in the vibrant world of technology. With expertise in
        both front-end and back-end development, I craft seamless, user-focused
        web applications. When I'm not coding, I share my knowledge and insights
        through writing. Let's collaborate to bring your ideas to life with
        innovative solutions and engaging content.
      </motion.p>
    </section>
  );
};

export default About;
