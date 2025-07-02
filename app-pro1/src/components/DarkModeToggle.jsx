import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; 

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="absolute top-5 right-60 flex items-center gap-2 px-4 py-2 rounded-full border border-none dark:border-none bg-transparent dark:bg-transparent shadow-md transition-colors duration-300"
    >
      <span className="text-lg transition-transform duration-300 transform">
        {isDark ? (
          <Sun className="text-white hover:rotate-90" />
        ) : (
          <Moon className="text-blue-600 hover:rotate-90" />
        )}
      </span>
   
    </button>
  );
}
