import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`${
        darkMode ? "bg-sotet" : "bg-white"
      } shadow-md px-2 py-3 fixed top-0 left-0 right-0 z-50`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <div className="flex-1">
          <div
            className={`text-2xl font-bold cursor-pointer transition-transform duration-400 ${
              darkMode ? "text-white" : "text-sotet"
            }`}
            onClick={() => (window.location.href = "/")}
          >
            LINEVO
          </div>
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center space-x-8 font-medium">
          <Link
            to="/browse"
            className="transition-transform duration-400 hover:scale-125"
          >
            House
          </Link>
          <Link
            to="/browse"
            className="transition-transform duration-400 hover:scale-125"
          >
            Apartment
          </Link>
          <Link
            to="/product"
            className={`px-3 py-2 rounded-md transition-transform duration-400 hover:scale-110 ${
              darkMode ? "bg-white text-black" : "bg-sotet text-white"
            }`}
          >
            Buy Now
          </Link>
          <button
            onClick={toggleDarkMode}
            className="hover:scale-125 p-2 rounded"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button onClick={toggleDarkMode} className="rounded">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className={`text-3xl focus:outline-none ${
              darkMode ? "text-white" : "text-black"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:hidden mt-2 p-2 flex flex-row justify-around items-center gap-6 text-sm ${
            darkMode ? "text-white" : "text-sotet"
          }`}
        >
          <Link to="/browse" className="font-bold">
            House
          </Link>
          <Link to="/browse" className="font-bold">
            Apartment
          </Link>
          <Link to="/product" className="font-bold">
            Buy Now
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
