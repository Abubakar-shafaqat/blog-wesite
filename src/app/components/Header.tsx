'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-purple-950 font-serif tracking-widest">
          InsightSphere
        </h1>
        
        {/* Navigation for desktop and larger screens */}
        <nav className="hidden sm:flex space-x-6">
          <Link href="/" className="text-lg font-semibold hover:text-purple-900 transition duration-300">
            Home
          </Link>
          <Link href="/blog" className="text-lg font-semibold hover:text-purple-950 transition duration-300">
            Blog
          </Link>
          <Link href="/about" className="text-lg font-semibold hover:text-purple-950 transition duration-300">
            About Us
          </Link>
          <Link href="/contact" className="text-lg font-semibold hover:text-purple-950 transition duration-300">
            Contact
          </Link>
        </nav>

        {/* Toggle Button for Mobile Menu */}
        <button
          onClick={toggleMenu}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

     {/* Mobile Menu (Visible when the menu is open) */}
{isMenuOpen && (
  <div className="sm:hidden bg-teal-400 px-6 py-4 space-y-4">
    <div className="flex flex-col items-center space-y-4">
      <Link
        href="/"
        className="text-lg font-semibold text-gray-200 hover:text-purple-950 transition duration-300"
      >
        Home
      </Link>
      <Link
        href="/blog"
        className="text-lg font-semibold text-gray-200 hover:text-purple-950 transition duration-300"
      >
        Blog
      </Link>
      <Link
        href="/about"
        className="text-lg font-semibold text-gray-200 hover:text-purple-950 transition duration-300"
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className="text-lg font-semibold text-gray-200 hover:text-purple-950 transition duration-300"
      >
        Contact
      </Link>
    </div>
  </div>
)}

    
    </header>
  );
}
