"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                  ${
                    scrolled
                      ? "bg-white/90 shadow-lg dark:bg-neutral-900/90 backdrop-blur-sm"
                      : "bg-transparent"
                  }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className="max-w-screen-xl mx-auto flex items-center
                   justify-end md:justify-center h-20 px-4 sm:px-6
                   lg:px-8 xl:px-12"
      >
        {/* <a
          href="#about" // Link to the about section on click
          className="text-2xl font-bold text-neutral-900 dark:text-white tracking-wide" // Adjusted styling
        >
          Your Name
        </a> */}
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-neutral-700 dark:text-neutral-300 transition-colors
                         duration-200 text-lg font-medium relative
                         hover-underline-animation
                         ${
                           // Dynamically apply hover color class
                           link.name === "Articles"
                             ? "hover-orange"
                             : link.name === "Experience"
                             ? "hover-pink"
                             : link.name === "Projects"
                             ? "hover-green"
                             : link.name === "Skills"
                             ? "hover-purple"
                             : link.name === "Education"
                             ? "hover-blue"
                             : "hover-blue" // Default hover for others (About & Contact)
                         }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-neutral-700 dark:text-neutral-300 focus:outline-none
                       ml-auto" // Push to right on mobile
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-white dark:bg-neutral-900 pb-4 shadow-lg"
          >
            <div className="flex flex-col items-center space-y-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu} // Close menu on link click
                  className={`text-neutral-700 dark:text-neutral-300 transition-colors
                             duration-200 text-2xl  py-2 w-full text-center
                             hover-underline-animation
                             ${
                               link.name === "Articles"
                                 ? "hover-orange"
                                 : link.name === "Experience"
                                 ? "hover-pink"
                                 : link.name === "Projects"
                                 ? "hover-green"
                                 : link.name === "Skills"
                                 ? "hover-purple"
                                 : link.name === "Education"
                                 ? "hover-blue"
                                 : link.name === "Contact"
                                 ? "hover-yellow"
                                 : "hover-red"
                             }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
