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

export const ThemeProvider = ({ children, initialIsDark }) => {
  const [isDark, setIsDark] = useState(initialIsDark);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const htmlElement = document.documentElement;

      if (isDark) {
        if (!htmlElement.classList.contains("dark")) {
          htmlElement.classList.add("dark");
        }
        Cookies.set(THEME_COOKIE_NAME, "dark", {
          expires: 365,
          sameSite: "Lax",
          secure: process.env.NODE_ENV === "production",
        });
      } else {
        if (htmlElement.classList.contains("dark")) {
          htmlElement.classList.remove("dark");
        }
        Cookies.set(THEME_COOKIE_NAME, "light", {
          expires: 365,
          sameSite: "Lax",
          secure: process.env.NODE_ENV === "production",
        });
      }
    }
  }, [isDark]);

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
