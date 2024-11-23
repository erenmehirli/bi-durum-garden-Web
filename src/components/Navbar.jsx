import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center pl-4">
          <img src={logo} alt="logo" className="w-32" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 pr-4">
          <li className="group relative">
            <a
              href="/"
              className="text-gray-700 hover:text-red-600 transition-colors font-semibold"
            >
              ANASAYFA
            </a>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <a
              href="/hakkimizda"
              className="text-gray-700 hover:text-red-600 transition-colors font-semibold"
            >
              HAKKIMIZDA
            </a>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <a
              href="/menu"
              className="text-gray-700 hover:text-red-600 transition-colors font-semibold"
            >
              MENÜ
            </a>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <a
              href="/rezervasyon"
              className="text-gray-700 hover:text-red-600 transition-colors font-semibold"
            >
              REZERVASYON
            </a>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <a
              href="/iletisim"
              className="text-gray-700 hover:text-red-600 transition-colors font-semibold"
            >
              İLETİŞİM
            </a>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
        >
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full">
          <li className="border-b border-gray-200">
            <a
              href="/"
              className="block text-gray-700 hover:text-red-600 py-3 px-4 font-semibold"
            >
              ANASAYFA
            </a>
          </li>
          <li className="border-b border-gray-200">
            <a
              href="/hakkimizda"
              className="block text-gray-700 hover:text-red-600 py-3 px-4 font-semibold"
            >
              HAKKIMIZDA
            </a>
          </li>
          <li className="border-b border-gray-200">
            <a
              href="/menu"
              className="block text-gray-700 hover:text-red-600 py-3 px-4 font-semibold"
            >
              MENÜ
            </a>
          </li>
          <li className="border-b border-gray-200">
            <a
              href="/rezervasyon"
              className="block text-gray-700 hover:text-red-600 py-3 px-4 font-semibold"
            >
              REZERVASYON
            </a>
          </li>
          <li className="border-b border-gray-200">
            <a
              href="/iletisim"
              className="block text-gray-700 hover:text-red-600 py-3 px-4 font-semibold"
            >
              İLETİŞİM
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
