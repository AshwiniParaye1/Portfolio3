// app/context/ThemeContext.jsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check if localStorage is available (client-side only)
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme === "dark") {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      } else if (
        savedTheme === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
