import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div className="space-y-6">
          <Link href="/" className="inline-block transition-transform hover:scale-105">
            <img src="/logo.png" alt="Taxi-Burger Logo" className="w-15 drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            The ultimate gourmet kitchen experience. We deliver tender, juicy, and delicious burgers at taxi speed.
          </p>
          <div className="flex gap-4">
            <Facebook className="text-white/30 hover:text-yellow-500 cursor-pointer transition-all" size={20} />
            <Instagram className="text-white/30 hover:text-yellow-500 cursor-pointer transition-all" size={20} />
            <Youtube className="text-white/30 hover:text-yellow-500 cursor-pointer transition-all" size={20} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-yellow-500 font-black tracking-widest uppercase text-xs mb-6">Explore</h4>
          <ul className="space-y-4 text-white/60 font-medium">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/items" className="hover:text-white transition-colors">Full Menu</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">Our Story</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-white transition-colors">Admin Portal</Link>
            </li>
          </ul>
        </div>

        {/* Categories (New Relevant Column) */}
        <div>
          <h4 className="text-yellow-500 font-black tracking-widest uppercase text-xs mb-6">Top Picks</h4>
          <ul className="space-y-4 text-white/60 font-medium">
            <li>
              <Link href="/items?cat=8" className="hover:text-white transition-colors">Signature Burgers</Link>
            </li>
            <li>
              <Link href="/items?cat=11" className="hover:text-white transition-colors">Desserts</Link>
            </li>
            <li>
              <Link href="/items?cat=12" className="hover:text-white transition-colors">Seafood Specials</Link>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-4">
          <h4 className="text-yellow-500 font-black tracking-widest uppercase text-xs mb-6">Find Us</h4>
          <div className="flex items-start gap-3 text-white/60 text-sm">
            <MapPin size={18} className="text-yellow-500 shrink-0" />
            <span>123 Gourmet Street, <br /> Foodie District, NY 10001</span>
          </div>
          <div className="flex items-center gap-3 text-white/60 text-sm">
            <Phone size={18} className="text-yellow-500 shrink-0" />
            <span>+1 (555) 9876392</span>
          </div>
          <div className="flex items-center gap-3 text-white/60 text-sm">
            <Mail size={18} className="text-yellow-500 shrink-0" />
            <span>hello@taxi-burger.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-16 pt-8 border-t border-white/5 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/20">
          <p>© {new Date().getFullYear()} TAXI-BURGER. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}