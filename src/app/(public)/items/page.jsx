import ItemCard from '@/components/cards/ItemCard';
import ItemCardSkeleton from '@/components/skeletons/ItemCardSkeleton';
import { Suspense } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const getFoods = async () => {
    try {
        const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random', {
            cache: "no-store",
            timeout: 10000
        });

        if (!res.ok) throw new Error('Failed to fetch foods');

        const data = await res.json();
        return data.foods || [];
    } catch (error) {
        console.error('Error fetching foods:', error);
        return [];
    }
}

async function FoodsList() {
    const foods = await getFoods();

    if (!foods || foods.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <AlertCircle size={48} className="text-yellow-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No Foods Available</h3>
                <p className="text-white/60 mb-6">We couldn&apos;t load the menu right now. Please try again later.</p>
                <Link
                    href="/items"
                    className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-all flex items-center gap-2"
                >
                    <RefreshCw size={18} /> Retry
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className="mb-10">
                <h2 className='text-4xl md:text-5xl font-black tracking-tighter text-white'>
                    Our Menu <span className='text-yellow-500'>({foods.length} items)</span>
                </h2>
                <div className="h-1.5 w-32 rounded-full bg-yellow-500 mt-3" />
                <p className="text-white/60 mt-3 text-lg">Discover our delicious selection of freshly prepared dishes</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {foods.map(food =>
                    <ItemCard key={food.id} food={food}></ItemCard>
                )}
            </div>
        </>
    );
}

function FoodsLoading() {
    return (
        <>
            <div className="mb-10">
                <h2 className='text-4xl md:text-5xl font-black tracking-tighter text-white'>
                    Loading Our Menu...
                </h2>
                <div className="h-1.5 w-32 rounded-full bg-yellow-500/30 mt-3 animate-pulse" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[1, 2, 3, 4, 5, 6].map(i =>
                    <ItemCardSkeleton key={i} />
                )}
            </div>
        </>
    );
}

export default function Foods() {
    return (
        <div className="pt-8">
            <Suspense fallback={<FoodsLoading />}>
                <FoodsList />
            </Suspense>
        </div>
    );
}