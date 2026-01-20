import Link from 'next/link';
import { ChevronRight, Star, Clock, MapPin, Leaf, UtensilsCrossed } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import { UtensilsCrossed } from 'react-icons/fa';


export default function LandingPage() {
  return (
    <div className="font-poppins text-slate-900 dark:text-slate-100">

        <Navbar></Navbar>
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Freshness in <span className="text-orange-500">Every Bite.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-80 font-lora">
            Organic, locally sourced ingredients prepared by world-class chefs. 
            Experience the true taste of nature.
          </p>
          <Link href="/items" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 inline-flex items-center gap-2">
            Explore Menu <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* 2. FEATURED ITEMS (Quick Preview) */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Chef's Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl">
              <div className="h-64 bg-slate-200 dark:bg-slate-800 animate-pulse" /> {/* Replace with <img> */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Signature Dish {i}</h3>
                <p className="text-sm opacity-70 mb-4 font-lora">Slow-cooked greens with citrus zest.</p>
                <span className="text-orange-500 font-bold">$18.00</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR PHILOSOPHY (About) */}
      <section className="py-20 bg-orange-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Leaf className="text-green-500 mb-4" size={40} />
            <h2 className="text-4xl font-bold mb-6">100% Organic & Local</h2>
            <p className="text-lg font-lora opacity-80 leading-relaxed">
              At Fresh Bites, we believe food should be as honest as the soil it grows in. 
              We partner with local farmers to ensure every plate is a tribute to health.
            </p>
          </div>
          <div className="flex-1 w-full h-80 bg-slate-300 dark:bg-slate-700 rounded-3xl" />
        </div>
      </section>

      {/* 4. KEY STATS */}
      <section className="py-16 border-y dark:border-slate-800">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><h4 className="text-4xl font-bold text-orange-500">12k+</h4><p className="text-sm opacity-60">Happy Clients</p></div>
          <div><h4 className="text-4xl font-bold text-orange-500">24</h4><p className="text-sm opacity-60">Farm Partners</p></div>
          <div><h4 className="text-4xl font-bold text-orange-500">0</h4><p className="text-sm opacity-60">Preservatives</p></div>
          <div><h4 className="text-4xl font-bold text-orange-500">4.9</h4><p className="text-sm opacity-60">Rating</p></div>
        </div>
      </section>

      {/* 5. SERVICES (How it Works) */}
      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">How We Serve You</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border dark:border-slate-800">
            <Clock className="mx-auto mb-4 text-orange-500" />
            <h3 className="font-bold mb-2">Fast Pickup</h3>
            <p className="text-sm opacity-70">Ready in under 15 minutes.</p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border dark:border-slate-800 scale-110 border-orange-200">
            <UtensilsCrossed className="mx-auto mb-4 text-orange-500" />
            <h3 className="font-bold mb-2">Dine In</h3>
            <p className="text-sm opacity-70">A cozy, eco-friendly atmosphere.</p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border dark:border-slate-800">
            <MapPin className="mx-auto mb-4 text-orange-500" />
            <h3 className="font-bold mb-2">Delivery</h3>
            <p className="text-sm opacity-70">Straight to your doorstep.</p>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-6"><Star fill="orange" stroke="none"/><Star fill="orange" stroke="none"/><Star fill="orange" stroke="none"/><Star fill="orange" stroke="none"/><Star fill="orange" stroke="none"/></div>
          <blockquote className="text-2xl font-lora italic mb-8">
            "The best avocado toast I've ever had. You can literally taste the sunshine."
          </blockquote>
          <p className="font-bold">— Sarah J., Food Critic</p>
        </div>
      </section>

      {/* 7. NEWSLETTER / JOIN */}
      <section className="py-20 container mx-auto px-6 text-center">
        <div className="bg-orange-500 rounded-[3rem] p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">Join the Fresh Club</h2>
          <p className="mb-8 opacity-90">Get 20% off your first order by subscribing.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Email Address" className="px-6 py-4 rounded-full text-slate-900 w-full outline-none" />
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold">Subscribe</button>
          </div>
        </div>
      </section>

      <Footer></Footer>

    </div>
  );
}