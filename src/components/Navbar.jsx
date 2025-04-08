import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-3 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-gray-900 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          LINEVO
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex md:items-center space-x-8 text-gray-800 font-medium">
          <Link to="/browse" className="transition-transform duration-400 hover:-translate-y-2">House</Link>
          <Link to="/browse" className="transition-transform duration-400 hover:-translate-y-2">Apartment</Link>
          <Link to="/product" className="bg-black text-white px-3 py-2 rounded-md transition-transform duration-400 hover:-translate-y-2">Buy Now</Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-3xl text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden mt-4 px-6 pb-4 flex flex-col gap-3 bg-white shadow-md rounded-md">
          <Link to="/browse" className="text-gray-800 hover:text-blue-600">House</Link>
          <Link to="/browse" className="text-gray-800 hover:text-blue-600">Apartment</Link>
          <Link to="/product" className="text-gray-800 hover:text-blue-600">Buy Now</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
