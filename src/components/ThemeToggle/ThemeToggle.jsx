import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" ||
           (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-10 h-10 p-2 rounded-full border border-[var(--border-color)] bg-[var(--button-bg)] dark:bg-[var(--button-bg-dark)]
                 shadow-md transition-transform duration-300 hover:scale-110 hover:bg-[var(--button-hover)] dark:hover:bg-[var(--button-hover-dark)]
                 focus:outline-none"
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        <Sun className="w-6 h-6 text-[var(--text-dark)]" />
      ) : (
        <Moon className="w-6 h-6 text-[var(--text-dark)]" />
      )}
    </button>
  );
}
