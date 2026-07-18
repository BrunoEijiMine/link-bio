import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full
        border border-line bg-card text-primary shadow-sm transition-colors hover:bg-page"
    >
      <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
    </button>
  );
}
