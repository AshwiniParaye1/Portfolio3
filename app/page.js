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
                   px-16 md:px-16 lg:px-24 xl:px-52 py-16 sm:py-12 md:py-20 gap-10
                   min-h-screen max-w-screen-xl mx-auto pt-28"
      >
        <motion.section
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <About />
        </motion.section>

        <motion.section
          id="skills"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Skills />
        </motion.section>

        <motion.section
          id="experience"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Experience />
        </motion.section>

        <motion.section
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Projects />
        </motion.section>

        <motion.section
          id="articles"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Articles />
        </motion.section>

        <motion.section
          id="education"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <Education />
        </motion.section>

        <motion.section
          id="contact"
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
