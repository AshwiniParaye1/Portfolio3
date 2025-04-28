// app/page.js

"use client";

import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import GetInTouch from "./components/GetInTouch";
import Education from "./components/Education";
import ThemeToggle from "./components/ThemeToggle";

const Page = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white flex flex-col xl:pl-80 xl:pr-80 lg:pl-60 lg:pr-60 md:pl-48 md:pr-48 sm:pl-36 sm:pr-36 h-full p-16 gap-10 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <ThemeToggle />
      </div>
      <About />
      <Experience />
      <Projects />
      <Articles />
      <Education />
      <GetInTouch />
    </div>
  );
};

export default Page;
