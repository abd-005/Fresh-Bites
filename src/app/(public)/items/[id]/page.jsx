import Link from 'next/link';
import { ArrowLeft, Play, Globe, Tag } from 'lucide-react';

async function getFoodDetails(id) {
  // Pattern match for your specific API structure
  const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`, { cache: 'no-store' });
  const data = await res.json();
  return data.details || null; 
}

export default async function ItemDetailsPage({ params }) {
  const { id } = await params;
  const food = await getFoodDetails(id);

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl dark:text-white">Dish not found.</p>
      </div>
    );
  }

  // Extracting YouTube ID for the embed player
  const videoId = food.video?.split('v=')[1];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-poppins">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        
        {/* Back Button */}
        <Link href="/items" className="inline-flex items-center gap-2 text-orange-500 mb-8 font-medium hover:opacity-80 transition-opacity">
          <ArrowLeft size={20} /> Back to Menu
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Food Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img 
                src={food.foodImg} 
                alt={food.title} 
                className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Price Tag Overlay */}
            <div className="absolute top-6 right-6 bg-white dark:bg-slate-900 px-6 py-3 rounded-2xl shadow-xl border dark:border-slate-800">
              <span className="text-2xl font-bold text-green-600">${food.price}</span>
            </div>
          </div>

          {/* Right: Food Info */}
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider">
                <Tag size={14} /> {food.category}
              </span>
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Globe size={14} /> {food.area}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white leading-tight">
              {food.title}
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg font-lora leading-relaxed mb-10">
              Experience the authentic taste of our {food.title}. Prepared following 
              traditional {food.area} techniques, this {food.category} dish is a highlight 
              of the Fresh Bites seasonal menu.
            </p>

            <button className="w-full md:w-max bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-orange-500/20 transition-all active:scale-95">
              Order Now
            </button>
          </div>
        </div>

        {/* Video Recipe Section */}
        {videoId && (
          <div className="border-t dark:border-slate-800 pt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-xl">
                <Play size={24} fill="currentColor" />
              </div>
              <h2 className="text-2xl font-bold dark:text-white">Watch How It's Made</h2>
            </div>
            
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border dark:border-slate-800">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={food.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
