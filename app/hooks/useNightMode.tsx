// hooks/useDarkMode.ts
import { useState, useEffect } from "react";

export const useNightMode = () => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersNight = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setIsNight(savedTheme === "dark" || (!savedTheme && systemPrefersNight));
  }, []);

  useEffect(() => {
    if (isNight) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isNight]);

  return [isNight, setIsNight] as const;
};
