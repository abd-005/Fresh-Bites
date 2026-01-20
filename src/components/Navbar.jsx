"use client"
import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/items' },
    { name: 'Add Dish', path: '/add-item' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-orange-500 font-bold text-xl font-poppins">
            <UtensilsCrossed size={28} />
            <span>Fresh Bites</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} className="hover:text-orange-500 transition-colors dark:text-gray-200">
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="dark:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b dark:border-slate-800 p-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium hover:text-orange-500 dark:text-gray-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}