// app/context/ThemeContext.jsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import Cookies from "js-cookie";

const ThemeContext = createContext(undefined);

const THEME_COOKIE_NAME = "app-theme";

// ThemeProvider now accepts an initialIsDark prop from the server
export const ThemeProvider = ({ children, initialIsDark }) => {
  // Initialize state directly with the prop passed from the server
  // This ensures hydration consistency.
  const [isDark, setIsDark] = useState(initialIsDark);

  // This effect synchronizes the `<html>` class and the cookie when `isDark` state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isDark) {
        document.documentElement.classList.add("dark");
        // Expires in 1 year, set samesite and secure for production
        Cookies.set(THEME_COOKIE_NAME, "dark", {
          expires: 365,
          sameSite: "Lax",
          secure: process.env.NODE_ENV === "production",
        });
      } else {
        document.documentElement.classList.remove("dark");
        Cookies.set(THEME_COOKIE_NAME, "light", {
          expires: 365,
          sameSite: "Lax",
          secure: process.env.NODE_ENV === "production",
        });
      }
    }
  }, [isDark]); // Dependency on isDark

  const toggleTheme = useCallback(() => {
    setIsDark((prevIsDark) => !prevIsDark);
  }, []);

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
