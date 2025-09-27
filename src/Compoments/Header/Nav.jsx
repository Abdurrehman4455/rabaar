import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Logo */}
          <div className="text-orange-600 font-heading font-extrabold text-3xl tracking-wide">
            Rabba
          </div>

          {/* Center: Search (hidden on small screens) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-72 lg:w-96 shadow-inner focus-within:ring-2 focus-within:ring-orange-500 transition">
              <Search className="text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search supplements..."
                className="bg-transparent px-3 py-1 w-full focus:outline-none text-sm text-gray-700 placeholder-gray-400 font-body"
              />
            </div>
          </div>

          {/* Right: Nav + Icons + Button (desktop only) */}
          <div className="hidden md:flex items-center space-x-6 font-body">
            <a href="#" className="text-gray-800 hover:text-orange-500 transition font-medium">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 transition font-medium">
              Products
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 transition font-medium">
              Contact
            </a>

            <button className="text-gray-800 hover:text-orange-500 transition">
              <User className="w-6 h-6" />
            </button>
            <button className="relative text-gray-800 hover:text-orange-500 transition">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white font-bold text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </button>

            <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:shadow-lg hover:bg-orange-400 transition duration-300">
              Login
            </button>
          </div>

          {/* Mobile: Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 hover:text-orange-500 transition"
            >
              {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 font-body bg-gray-50 p-5 rounded-lg shadow-lg">
            {/* Search Bar */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner focus-within:ring-2 focus-within:ring-orange-500 transition">
              <Search className="text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search supplements..."
                className="bg-transparent px-3 py-1 w-full focus:outline-none text-sm text-gray-700 placeholder-gray-400 font-body"
              />
            </div>

            {/* Links */}
            <a href="#" className="text-gray-800 hover:text-orange-500 transition font-medium">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 transition font-medium">
              Products
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 transition font-medium">
              Contact
            </a>

            {/* Icons */}
            <div className="flex space-x-6">
              <button className="text-gray-800 hover:text-orange-500 transition">
                <User className="w-6 h-6" />
              </button>
              <button className="relative text-gray-800 hover:text-orange-500 transition">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white font-bold text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  2
                </span>
              </button>
            </div>

            {/* Login Button */}
            <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:shadow-lg hover:bg-orange-400 transition duration-300">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
