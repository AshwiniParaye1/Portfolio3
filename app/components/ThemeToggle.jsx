// app/components/ThemeToggle.jsx
"use client";

import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import React from "react";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800
                 transition-colors duration-200 focus:outline-none focus:ring-2
                 focus:ring-blue-500" // Reduced padding
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      type="button"
    >
      {isDark ? (
        <FiSun className="text-gray-200 hover:text-white" size={18} />
      ) : (
        <FiMoon className="text-gray-800 hover:text-black" size={18} />
      )}{" "}
      {/* Reduced icon size */}
    </button>
  );
};

export default React.memo(ThemeToggle);
