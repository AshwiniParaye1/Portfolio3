// app/page.js
"use client";

import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import GetInTouch from "./components/GetInTouch";
import Education from "./components/Education";

// Import motion from framer-motion
import { motion } from "framer-motion";
import Skills from "./components/Skills";

const Page = () => {
  // Define a common animation variant for consistency
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Starts invisible and slightly below its final position
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // How long the animation takes
        ease: "easeOut",
      },
    },
  };

  return (
    <main
      className="bg-neutral-100 dark:bg-neutral-950 text-black dark:text-white flex flex-col
                 px-16 md:px-16 lg:px-24 xl:px-52 py-16 sm:py-12 md:py-20 gap-4
                 min-h-screen max-w-screen-xl mx-auto" // Main padding and gap
    >
      {/* About Section - it has internal animations, but wrapping it
          ensures its parent section also triggers on scroll if it's below the fold */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // Animate every time 30% of section is in view
      >
        <About />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <Skills />
      </motion.section>

      {/* Experience Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // Animate every time 30% of section is in view
      >
        <Experience />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // Animate every time 30% of section is in view
      >
        <Projects />
      </motion.section>

      {/* Articles Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // Animate every time 30% of section is in view
      >
        <Articles />
      </motion.section>

      {/* Education Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // Animate every time 30% of section is in view
      >
        <Education />
      </motion.section>

      {/* Get In Touch Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // Animate every time 30% of section is in view
      >
        <GetInTouch />
      </motion.section>
    </main>
  );
};

export default Page;
