// app/components/ThemeToggle.jsx
"use client";

import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? (
        <FiSun className="text-white" size={20} />
      ) : (
        <FiMoon className="text-black" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
