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
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700
                 transition-colors duration-200 focus:outline-none focus:ring-2
                 focus:ring-blue-500"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      type="button"
    >
      {isDark ? (
        <FiSun className="text-white" size={20} />
      ) : (
        <FiMoon className="text-black" size={20} />
      )}
    </button>
  );
};

export default React.memo(ThemeToggle);
