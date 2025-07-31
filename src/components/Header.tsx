/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed w-full p-4 shadow-md bg-white dark:bg-gray-800 z-50 flex justify-between items-center">
      <h1 className="font-bold text-xl">ThemeApp</h1>
      <p>
        <Link to="/" className="mr-4 hover:underline">
          Home
        </Link>
        <Link to="/about" className="mr-4 hover:underline">
          About
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </p>
      <select
        className="p-2 border rounded"
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
      >
        <option value="theme1">Theme 1 (Light)</option>
        <option value="theme2">Theme 2 (Dark)</option>
        <option value="theme3">Theme 3 (Colorful)</option>
      </select>
    </header>
  );
};

export default Header;
