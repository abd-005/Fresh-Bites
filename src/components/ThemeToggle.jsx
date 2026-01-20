"use client"
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors"
    >
      <Sun className="h-5 w-5 hidden dark:block text-yellow-400" />
      <Moon className="h-5 w-5 block dark:hidden text-slate-700" />
    </button>
  );
}