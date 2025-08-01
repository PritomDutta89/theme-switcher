/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";
import type { ThemeType } from "../themes/themes";

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    return (localStorage.getItem("theme") as ThemeType) || "theme1";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Dynamic class names
  const themeClass =
    theme === "theme1"
      ? "bg-white text-black font-sans"
      : theme === "theme2"
      ? "bg-gray-900 text-white font-serif"
      : "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-black font-pacifico";

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${themeClass} min-h-screen transition-all duration-300`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
