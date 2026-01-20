import { UtensilsCrossed, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t dark:border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 text-orange-500 font-bold text-xl mb-4">
            <UtensilsCrossed size={24} />
            <span>Fresh Bites</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-lora">
            Bringing the farm's finest harvests directly to your table since 2024.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4 dark:text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li><a href="/" className="hover:text-orange-500 transition-colors">Home</a></li>
            <li><a href="/items" className="hover:text-orange-500 transition-colors">Our Menu</a></li>
            <li><a href="/login" className="hover:text-orange-500 transition-colors">Admin Login</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="font-bold mb-4 dark:text-white">Follow Us</h4>
          <div className="flex gap-4 mb-4">
            <Facebook className="text-gray-400 hover:text-orange-500 cursor-pointer" />
            <Instagram className="text-gray-400 hover:text-orange-500 cursor-pointer" />
            <Twitter className="text-gray-400 hover:text-orange-500 cursor-pointer" />
          </div>
          <p className="text-sm text-gray-500 italic">123 Fresh Way, Organic City</p>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t dark:border-slate-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fresh Bites. All rights reserved.
      </div>
    </footer>
  );
}