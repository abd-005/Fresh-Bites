import React from 'react';
import Link from 'next/link';
import { ChevronRight, Star, Clock, MapPin, Sparkles, UtensilsCrossed, Flame, ShoppingCart, Eye, Zap, Smartphone } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-[#0a0a0a] font-poppins text-white">
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[120px]" />
        
        <div className="container z-10 mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <Flame size={18} className="text-yellow-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">Fastest Delivery in Town</span>
          </div>
          
          <h1 className="mb-6 text-6xl font-black tracking-tighter md:text-8xl">
            Tender. Juicy. <br />
            <span className="text-yellow-500 drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]">Delicious.</span>
          </h1>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mt-10">
            <Link href="/items" className="group btn-primary">
              ORDER NOW <ChevronRight size={20} />
            </Link>
            <Link href="/items" className="btn-glass px-10 py-5">
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (New Relevant Section) */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: 'Daily Orders', value: '1.2k+', icon: <Zap size={20}/> },
              { label: 'Expert Chefs', value: '12', icon: <UtensilsCrossed size={20}/> },
              { label: 'Happy Clients', value: '15k', icon: <Star size={20}/> },
              { label: 'Cities', value: '05', icon: <MapPin size={20}/> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center rounded-[2rem] border border-white/5 bg-white/5 py-8 backdrop-blur-sm">
                <div className="mb-2 text-yellow-500">{stat.icon}</div>
                <h4 className="text-3xl font-black">{stat.value}</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CHEF'S SPECIALS - Glass Cards */}
      <section className="container mx-auto px-6 py-24">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-black tracking-tighter">CHEF'S SPECIALS</h2>
            <div className="h-1.5 w-20 rounded-full bg-yellow-500 mt-2" />
          </div>
          <Link href="/items" className="text-sm font-bold text-yellow-500 hover:underline">View All Items</Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/5 p-4 backdrop-blur-xl transition-all duration-500 hover:bg-white/10">
              <div className="relative h-64 overflow-hidden rounded-[2rem]">
                <div className="absolute inset-0 bg-stone-800 animate-pulse group-hover:hidden" />
                <img 
                   src={`https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop`} 
                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                   alt="Burger"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">Taxi Signature {i}</h3>
                  <span className="text-yellow-500 font-black">$12.99</span>
                </div>
                <p className="text-sm text-white/50 mb-6">Double patty, triple cheese, and our secret taxi sauce.</p>
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3 font-bold hover:bg-yellow-500 hover:text-black transition-all">
                   <ShoppingCart size={18} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. APP PROMO SECTION (New Relevant Section) */}
      <section className="container mx-auto px-6 py-24">
        <div className="relative flex flex-col items-center gap-12 rounded-[3.5rem] bg-gradient-to-br from-yellow-500 to-yellow-600 px-10 py-16 text-black md:flex-row">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/10 px-4 py-1 text-xs font-bold uppercase">
              <Smartphone size={16} /> Mobile App
            </div>
            <h2 className="text-5xl font-black tracking-tighter leading-none">
              TAXI-BURGER <br /> IN YOUR POCKET.
            </h2>
            <p className="text-lg font-bold opacity-80">
              Download our app for exclusive "Flash Deals" and real-time taxi tracking for your food.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <button className="flex items-center gap-3 rounded-2xl bg-black px-8 py-4 text-white hover:scale-105 transition-all">
                <span className="text-left leading-none">
                  <p className="text-[10px] opacity-60">Get it on</p>
                  <p className="text-lg font-bold">App Store</p>
                </span>
              </button>
              <button className="flex items-center gap-3 rounded-2xl bg-black px-8 py-4 text-white hover:scale-105 transition-all">
                <span className="text-left leading-none">
                  <p className="text-[10px] opacity-60">Get it on</p>
                  <p className="text-lg font-bold">Google Play</p>
                </span>
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
             <div className="relative h-80 w-64 rounded-[3rem] border-8 border-black bg-stone-900 shadow-2xl overflow-hidden">
                <div className="absolute top-0 h-6 w-32 left-1/2 -translate-x-1/2 bg-black rounded-b-2xl" />
                <img src="https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg" className="h-full w-full object-cover opacity-50" alt="app" />
             </div>
          </div>
        </div>
      </section>

      {/* 5. JOIN THE CLUB */}
      <section className="container mx-auto px-6 py-24">
        <div className="rounded-[3rem] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
          <h2 className="text-4xl font-black tracking-tighter mb-4 uppercase">Join the Taxi Club</h2>
          <p className="text-white/60 mb-8">Subscribe to get notified about new juicy arrivals.</p>
          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Email Address" className="flex-1 rounded-2xl bg-white/10 px-6 py-4 outline-none border border-white/10 focus:border-yellow-500 transition-all" />
            <button className="btn-primary !px-8 !py-4">Subscribe</button>
          </div>
        </div>
      </section>

      

      {/* 3. OUR PHILOSOPHY - The "Tender" Look */}
      <section className="bg-white/5 py-24 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col items-center gap-16 px-6 md:flex-row">
          <div className="relative flex-1">
             <div className="h-[450px] w-full rounded-[3rem] border border-white/20 bg-stone-800 object-cover shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop" 
                  className="h-full w-full object-cover opacity-80"
                  alt="Quality Ingredients"
                />
             </div>
             {/* Float Badge */}
             <div className="absolute -bottom-6 -right-6 rounded-3xl bg-yellow-500 p-8 text-black shadow-2xl">
                <Sparkles size={32} />
                <div className="mt-2 text-2xl font-black">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest">Premium Beef</div>
             </div>
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl font-black tracking-tighter leading-none">
              WE DON'T DO FAST FOOD. <br />
              <span className="text-yellow-500">WE DO GOOD FOOD FAST.</span>
            </h2>
            <p className="text-lg text-white/60">
              Every burger at Taxi-Kitchen is a masterpiece. We use a proprietary blend of prime rib and brisket, 
              smashed to perfection to lock in all that juice and flavor.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                    <h4 className="text-2xl font-black text-yellow-500">0%</h4>
                    <p className="text-xs uppercase text-white/40">Frozen Ingredients</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                    <h4 className="text-2xl font-black text-yellow-500">100%</h4>
                    <p className="text-xs uppercase text-white/40">Hand-made Buns</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES - How it Works */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="mb-16 text-3xl font-black tracking-widest opacity-20">HOW WE SERVE</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="group rounded-[2.5rem] border border-white/10 bg-white/5 p-10 transition-all hover:border-yellow-500/50">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-500 text-black shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <Clock size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold">Taxi Delivery</h3>
            <p className="text-sm text-white/50">From our grill to your door in 30 mins or less.</p>
          </div>
          <div className="group rounded-[2.5rem] border border-white/10 bg-white/5 p-10 transition-all hover:border-yellow-500/50 scale-105 bg-white/10 border-white/20">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-500 text-black shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <UtensilsCrossed size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold">Dine In Style</h3>
            <p className="text-sm text-white/50">A premium, glass-themed atmosphere for your soul.</p>
          </div>
          <div className="group rounded-[2.5rem] border border-white/10 bg-white/5 p-10 transition-all hover:border-yellow-500/50">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-500 text-black shadow-[0_0_30px_rgba(234,179,8,0.2)]">
              <MapPin size={32} />
            </div>
            <h3 className="mb-2 text-xl font-bold">Live Tracking</h3>
            <p className="text-sm text-white/50">Watch your burger's journey in real-time.</p>
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER - CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="relative overflow-hidden rounded-[4rem] bg-yellow-500 px-10 py-20 text-black">
          {/* Decorative circles */}
          <div className="absolute right-[-5%] top-[-10%] h-64 w-64 rounded-full bg-black/5" />
          
          <div className="relative z-10 text-center">
            <h2 className="mb-4 text-5xl font-black tracking-tighter">GET 20% OFF YOUR FIRST TAXI</h2>
            <p className="mb-10 text-lg font-bold opacity-80 uppercase tracking-widest">Join the inner circle of flavor</p>
            <div className="mx-auto flex max-w-lg flex-col gap-4 md:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 rounded-2xl border-none bg-black/10 px-6 py-5 font-bold placeholder:text-black/40 focus:ring-2 focus:ring-black outline-none" 
              />
              <button className="rounded-2xl bg-black px-10 py-5 font-black text-white transition-transform hover:scale-105 active:scale-95">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}