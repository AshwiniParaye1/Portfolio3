import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import GetInTouch from "./components/GetInTouch";

const Page = () => {
  return (
    <div className="bg-white text-black flex flex-col pl-96 pr-96 pt-20 pb-20 justify-between min-h-screen w-full mx-auto p-6 space-y-8">
      <div className="w-full  max-w-5xl">
        <About />
      </div>
      <div className="w-full max-w-5xl">
        <Experience />
      </div>
      <div className="w-full max-w-5xl">
        <Projects />
      </div>
      <div className="w-full max-w-5xl">
        <Articles />
      </div>
      <div className="w-full max-w-5xl">
        <GetInTouch />
      </div>
    </div>
  );
};

export default Page;
