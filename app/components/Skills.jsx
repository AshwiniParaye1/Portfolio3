"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Next.js",
  "Vue.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Golang",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Git/GitHub",
];

const Skills = () => {
  return (
    <section className="flex flex-col mb-4">
      <h2 className="text-lg sm:text-xl font-semibold mb-2 text-black dark:text-white hover-underline-animation hover-purple">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.4,
              ease: "easeOut",
            }}
            className="border border-neutral-700/40 dark:border-neutral-300/20 rounded-full px-4 py-2
                       text-base tracking-tight hover:bg-neutral-200/10
                       dark:hover:bg-neutral-800/50 cursor-default transition-colors mt-2"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
