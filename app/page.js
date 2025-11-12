// app/page.js
"use client";

import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import GetInTouch from "./components/GetInTouch";
import Education from "./components/Education";

import { motion } from "framer-motion";
import Skills from "./components/Skills";

const Page = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Navbar />
      <main
        className="bg-neutral-100 dark:bg-neutral-950 text-black dark:text-white flex flex-col
                   px-16 md:px-16 lg:px-24 xl:px-52 py-16 sm:py-12 md:py-20 gap-4
                   min-h-screen max-w-screen-xl mx-auto pt-28"
      >
        {/* ... sections with IDs ... */}
        <motion.section
          id="about" // ADDED ID
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <About />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills" // ADDED ID
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Skills />
        </motion.section>

        <motion.section
          id="experience" // ADDED ID
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Experience />
        </motion.section>

        <motion.section
          id="projects" // ADDED ID
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Projects />
        </motion.section>

        <motion.section
          id="articles" // ADDED ID
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Articles />
        </motion.section>

        <motion.section
          id="education" // ADDED ID
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Education />
        </motion.section>

        <motion.section
          id="contact" // ADDED ID (common to use "contact" for Get In Touch)
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <GetInTouch />
        </motion.section>
      </main>
    </>
  );
};

export default Page;
