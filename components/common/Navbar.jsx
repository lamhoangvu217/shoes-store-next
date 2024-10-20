"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Cart } from './Cart/Cart';
import { SheetTrigger } from '../ui/sheet';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };  
  const handleCartOpen = () => {
    setIsCartOpen(true)
  }
  const handleCartClose = () => {
    setIsCartOpen(false)
  }
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800">
      {/* Logo */}
      <div className="text-white font-bold text-xl">
        <Link href="/">Shoes Store</Link>
      </div>

      {/* Navigation Menu */}
      <div className="hidden md:flex space-x-4">
        <Link href="/" className="text-white hover:text-gray-300">Home</Link>
        <Link href="/about" className="text-white hover:text-gray-300">About</Link>
        <Link href="/products" className="text-white hover:text-gray-300">Products</Link>
        <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
      </div>

      {/* Cart Icon */}
        <div className="relative">
          <Button variant="ghost" className="text-white" onClick={handleCartOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18l-1 9H4L3 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 10h12M6 14h12M6 18h12" />
            </svg>
          </Button>
        </div>


      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={toggleMenu}
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 bg-gray-800 rounded-md shadow-lg">
          <Link href="/" className="block px-4 py-2 text-white hover:bg-gray-700">Home</Link>
          <Link href="/about" className="block px-4 py-2 text-white hover:bg-gray-700">About</Link>
          <Link href="/products" className="block px-4 py-2 text-white hover:bg-gray-700">Products</Link>
          <Link href="/contact" className="block px-4 py-2 text-white hover:bg-gray-700">Contact</Link>
        </div>
      )}

      <Cart cartOpen={isCartOpen} />
    </nav>
  );
};

export default Navbar;
