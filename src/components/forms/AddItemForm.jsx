"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

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
        toast.success('Dish added to Fresh Bites menu!');
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
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-stone-900 rounded-2xl shadow-xl border dark:border-stone-800">
      <Toaster position="top-center" />
      <h2 className="text-2xl font-bold mb-6 dark:text-white font-poppins">Add New Dish</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Dish Title</label>
          <input name="title" required className="w-full p-3 rounded-lg border dark:bg-stone-800 dark:border-stone-700 outline-none focus:ring-2 focus:ring-yellow-500 dark:text-white" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Price ($)</label>
          <input name="price" type="number" step="0.01" required className="w-full p-3 rounded-lg border dark:bg-stone-800 dark:border-stone-700 outline-none focus:ring-2 focus:ring-yellow-500 dark:text-white" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Category</label>
          <input name="category" placeholder="e.g. Vegan, Seafood" required className="w-full p-3 rounded-lg border dark:bg-stone-800 dark:border-stone-700 outline-none focus:ring-2 focus:ring-yellow-500 dark:text-white" />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Food Image URL</label>
          <input name="foodImg" type="url" required className="w-full p-3 rounded-lg border dark:bg-stone-800 dark:border-stone-700 outline-none focus:ring-2 focus:ring-yellow-500 dark:text-white" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Cuisine Area</label>
          <input name="area" placeholder="e.g. American, Italian" className="w-full p-3 rounded-lg border dark:bg-stone-800 dark:border-stone-700 outline-none focus:ring-2 focus:ring-yellow-500 dark:text-white" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-gray-300">Recipe Video URL</label>
          <input name="video" type="url" placeholder="YouTube link" className="w-full p-3 rounded-lg border dark:bg-stone-800 dark:border-stone-700 outline-none focus:ring-2 focus:ring-yellow-500 dark:text-white" />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-xl transition-all active:scale-95 disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Save to Menu'}
        </button>
      </form>
    </div>
  );
}