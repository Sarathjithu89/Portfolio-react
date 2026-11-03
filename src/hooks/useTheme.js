import { useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDark ? "#0a0a0f" : "#f8fafc");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return { theme, isDark: theme === "dark", toggleTheme };
};
