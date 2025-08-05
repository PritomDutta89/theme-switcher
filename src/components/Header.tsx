/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full h-[5rem] p-4 shadow-md bg-white dark:bg-gray-800 dark:text-white z-50">
      <div className="flex justify-between items-center h-full  mx-auto">
        <Link to="/" className="font-bold text-xl cursor-pointer">
          <h1>ThemeApp</h1>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-4">
          <Link to="/" className="hover:underline cursor-pointer">
            Home
          </Link>
          <Link to="/about" className="hover:underline cursor-pointer">
            About
          </Link>
          <Link to="/contact" className="hover:underline cursor-pointer">
            Contact
          </Link>
        </nav>

        {/* Theme Selector */}
        <select
          className="p-2 border rounded cursor-pointer outline-0 ml-4 hidden md:block"
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
        >
          <option value="theme1">Theme 1 (Light)</option>
          <option value="theme2">Theme 2 (Dark)</option>
          <option value="theme3">Theme 3 (Colorful)</option>
        </select>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden ml-4"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-2 items-center bg-white dark:bg-gray-800 py-4 shadow-inner">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <select
            className="p-2 border rounded cursor-pointer outline-0 ml-4 md:hidden dark:bg-gray-800 dark:text-white"
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
          >
            <option value="theme1">Theme 1 (Light)</option>
            <option value="theme2">Theme 2 (Dark)</option>
            <option value="theme3">Theme 3 (Colorful)</option>
          </select>
        </nav>
      )}
    </header>
  );
};

export default Header;
