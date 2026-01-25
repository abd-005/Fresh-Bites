"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { Plus, ChefHat } from 'lucide-react';

export default function AddItemForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const itemData = {
      title: formData.get('title'),
      price: formData.get('price'),
      category: formData.get('category'),
      foodImg: formData.get('foodImg'),
      area: formData.get('area'),
      video: formData.get('video'),
      catId: Math.floor(Math.random() * 100) // Mocking catId
    };

    try {
      const res = await fetch('http://localhost:5000/api/v1/foods', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData),
      });

      if (res.ok) {
        toast.success('Dish added to Fresh Bites menu! 🎉');
        e.target.reset();
        setTimeout(() => router.push('/items'), 1500);
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error('Failed to connect to backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Toaster position="top-center" />

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center">
            <ChefHat size={24} className="text-yellow-500" />
          </div>
          <h2 className="text-4xl font-black tracking-tighter dark:text-white">Add New Dish</h2>
        </div>
        <p className="text-white/60">Create a new menu item for Fresh Bites. Fill in all required fields to add your masterpiece to our collection.</p>
      </div>

      {/* Form Container */}
      <div className="relative rounded-[2.5rem] border border-white/20 bg-white/5 p-8 shadow-2xl backdrop-blur-xl dark:bg-stone-900/50 dark:border-stone-800">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title Field */}
          <div className="md:col-span-2">
            <label className="block text-sm font-bold mb-2 text-white/90">Dish Title *</label>
            <input
              name="title"
              placeholder="e.g. Signature Beef Burger"
              required
              className="w-full p-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 outline-none transition-all focus:border-yellow-500 focus:bg-white/10 focus:ring-2 focus:ring-yellow-500/20 dark:bg-stone-800 dark:border-stone-700"
            />
          </div>

          {/* Price Field */}
          <div>
            <label className="block text-sm font-bold mb-2 text-white/90">Price ($) *</label>
            <input
              name="price"
              type="number"
              step="0.01"
              placeholder="12.99"
              required
              className="w-full p-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 outline-none transition-all focus:border-yellow-500 focus:bg-white/10 focus:ring-2 focus:ring-yellow-500/20 dark:bg-stone-800 dark:border-stone-700"
            />
          </div>

          {/* Category Field */}
          <div>
            <label className="block text-sm font-bold mb-2 text-white/90">Category *</label>
            <input
              name="category"
              placeholder="e.g. Vegan, Seafood"
              required
              className="w-full p-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 outline-none transition-all focus:border-yellow-500 focus:bg-white/10 focus:ring-2 focus:ring-yellow-500/20 dark:bg-stone-800 dark:border-stone-700"
            />
          </div>

          {/* Image URL Field */}
          <div className="md:col-span-2">
            <label className="block text-sm font-bold mb-2 text-white/90">Food Image URL *</label>
            <input
              name="foodImg"
              type="url"
              placeholder="https://example.com/image.jpg"
              required
              className="w-full p-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 outline-none transition-all focus:border-yellow-500 focus:bg-white/10 focus:ring-2 focus:ring-yellow-500/20 dark:bg-stone-800 dark:border-stone-700"
            />
            <p className="text-xs text-white/40 mt-1">Use a direct image URL (JPG, PNG, WebP)</p>
          </div>

          {/* Cuisine Area Field */}
          <div>
            <label className="block text-sm font-bold mb-2 text-white/90">Cuisine Area</label>
            <input
              name="area"
              placeholder="e.g. American, Italian"
              className="w-full p-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 outline-none transition-all focus:border-yellow-500 focus:bg-white/10 focus:ring-2 focus:ring-yellow-500/20 dark:bg-stone-800 dark:border-stone-700"
            />
          </div>

          {/* Video URL Field */}
          <div>
            <label className="block text-sm font-bold mb-2 text-white/90">Recipe Video URL</label>
            <input
              name="video"
              type="url"
              placeholder="https://youtube.com/watch?v=..."
              className="w-full p-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 outline-none transition-all focus:border-yellow-500 focus:bg-white/10 focus:ring-2 focus:ring-yellow-500/20 dark:bg-stone-800 dark:border-stone-700"
            />
            <p className="text-xs text-white/40 mt-1">Optional: YouTube link for recipe video</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 mt-6 w-full bg-linear-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed text-black font-black py-4 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-3 text-lg"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-3 border-black border-t-transparent rounded-full animate-spin" />
                Adding to menu...
              </>
            ) : (
              <>
                <Plus size={22} />
                Save to Menu
              </>
            )}
          </button>
        </form>

        {/* Form Note */}
        <div className="mt-6 p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/5">
          <p className="text-xs font-bold text-yellow-500 mb-1">💡 Pro Tip</p>
          <p className="text-xs text-white/60">Fields marked with * are required. Use high-quality images for better presentation on the menu.</p>
        </div>
      </div>

      {/* Cancel Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => router.push('/items')}
          className="text-white/60 hover:text-white transition-colors font-medium underline"
        >
          Cancel &amp; Go Back
        </button>
      </div>
    </div>
  );
}