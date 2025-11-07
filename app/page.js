// app/page.js
"use client";

import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import GetInTouch from "./components/GetInTouch";
import Education from "./components/Education";

const Page = () => {
  return (
    <main
      className="bg-neutral-100 dark:bg-neutral-950 text-black dark:text-white flex flex-col
                 px-16 md:px-16 lg:px-24 xl:px-52 py-16 sm:py-12 md:py-20 gap-4
                 min-h-screen max-w-screen-xl mx-auto" // Main padding and gap
    >
      <About />
      <Experience />
      <Projects />
      <Articles />
      <Education />
      <GetInTouch />
    </main>
  );
};

export default Page;
