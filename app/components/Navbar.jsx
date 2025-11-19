"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Articles", href: "#articles" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block
               backdrop-blur-lg  ${scrolled ? "shadow-md" : ""}`}
    >
      <div
        className="max-w-screen-xl mx-auto flex items-center
                   justify-end md:justify-center h-20 px-4 sm:px-6
                   lg:px-8 xl:px-12"
      >
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-gray-500 dark:text-gray-400 transition-colors
                         duration-200 text-sm font-semibold relative
                         hover-underline-animation
                         ${
                           link.name === "Articles"
                             ? "hover-orange"
                             : link.name === "Experience"
                             ? "hover-pink"
                             : link.name === "Projects"
                             ? "hover-green"
                             : link.name === "Skills"
                             ? "hover-yellow"
                             : link.name === "Education"
                             ? "hover-blue"
                             : link.name === "Contact"
                             ? "hover-purple"
                             : "hover-pink"
                         }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
