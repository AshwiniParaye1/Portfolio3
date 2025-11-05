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
                 xl:px-80 lg:px-60 md:px-48 sm:px-36 p-10 gap-10 min-h-screen"
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
