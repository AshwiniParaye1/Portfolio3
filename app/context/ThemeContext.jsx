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

export const ThemeProvider = ({ children, initialIsDark }) => {
  // Initialize state directly with the prop passed from the server.
  // This ensures hydration consistency.
  const [isDark, setIsDark] = useState(initialIsDark);

  // This effect synchronizes the `<html>` class and the cookie when `isDark`
  // state changes. It also handles initial load for clients without a cookie
  // or when system preference differs from initialIsDark (which might happen
  // if the server couldn't read system preference).
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get the current saved theme from cookie or system preference if no cookie
      let currentTheme = Cookies.get(THEME_COOKIE_NAME);
      if (!currentTheme) {
        currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }

      // Check if the current client-side state is consistent with the `isDark` state
      // that came from SSR or was set by toggleTheme.
      const shouldBeDark = isDark;
      const htmlElement = document.documentElement;

      if (shouldBeDark) {
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
