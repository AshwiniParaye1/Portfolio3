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
      className="bg-white dark:bg-black text-black dark:text-white flex flex-col
                 px-8 md:px-16 lg:px-24 xl:px-48 py-10 sm:py-12 md:py-16 gap-8
                 min-h-screen max-w-screen-xl mx-auto" // Adjusted padding and max-width
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
