"use client"
import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '../themes/ThemeToggle';
import { Menu, X, ShoppingCart, User, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/items' },
    { name: 'Add Dish', path: '/add-item' },
  ];

  return (
    <nav className="fixed top-0 z-[100] w-full border-b border-white/10 bg-black/60 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="transition-transform active:scale-95">
              <img 
                src="/logo.png" 
                alt="Taxi-Burger Logo" 
                className="w-[55px] drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  className="text-sm font-black uppercase tracking-widest text-white/70 transition-all hover:text-yellow-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Action Group */}
            <div className="flex items-center gap-4 border-l border-white/10 pl-8">
              <ThemeToggle />
              <Link href="/cart" className="relative p-2 text-white hover:text-yellow-500 transition-colors">
                <ShoppingCart size={22} />
                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-bold text-black">
                  3
                </span>
              </Link>
              <Link href="/login" className="btn-glass !py-2 !px-5 !text-xs !rounded-xl">
                <User size={16} />
                LOGIN
              </Link>
            </div>
          </div>

          {/* Mobile UI Buttons */}
          <div className="flex items-center gap-4 md:hidden">
             <Link href="/cart" className="relative p-2 text-white">
                <ShoppingCart size={22} />
                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-bold text-black">
                  3
                </span>
              </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="rounded-xl bg-white/5 p-2 text-white transition-colors hover:bg-white/10"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown - Glass Overly */}
      <div className={`
        absolute left-0 top-[80px] w-full border-b border-white/10 bg-black/95 p-6 backdrop-blur-2xl transition-all duration-300 md:hidden
        ${isOpen ? 'translate-y-0 opacity-100 shadow-2xl' : '-translate-y-full opacity-0 pointer-events-none'}
      `}>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black uppercase tracking-tighter text-white hover:text-yellow-500"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-[1px] w-full bg-white/10 my-2" />
          <Link 
            href="/login" 
            onClick={() => setIsOpen(false)}
            className="group btn-primary !w-full"
          >
            ADMIN LOGIN <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex justify-center pt-4">
             <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}