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
                 px-6 md:px-12 lg:px-20 xl:px-36 py-8 sm:py-10 md:py-12 gap-6
                 min-h-screen max-w-screen-xl mx-auto" // Reduced padding and gap
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
