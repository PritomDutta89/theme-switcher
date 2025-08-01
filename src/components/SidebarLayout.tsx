/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const SidebarLayout = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden p-4 bg-gray-800 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">ThemeApp</h1>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
      </div>

      {/* sidebar */}
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex w-full md:w-64 p-6 bg-gray-800 text-white shadow-lg flex-col gap-6 h-screen md:h-full sticky top-0`}
      >
        <h1 className="text-2xl font-bold hidden md:block">ThemeApp</h1>
        <nav className="flex flex-col gap-4 mb-6">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:underline">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:underline">
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:underline">
            Contact
          </Link>
        </nav>
        
        <select
          className="mt-auto p-2 bg-white text-black rounded"
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </aside>
    </>
  );
};

export default SidebarLayout;
