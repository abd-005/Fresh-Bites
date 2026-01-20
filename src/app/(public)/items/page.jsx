const getFoods = async () => {

  const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random', { cache: 'no-store' });
  const items = await res.json();

  return items.foods || []
}

export default async function ItemsPage() {

  const foods = await getFoods()

  return (
    <div className="min-h-screen p-4 bg-gray-50 dark:bg-slate-950">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food) => (
          <div key={food.id} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md">
            <img src={food.foodImg} alt={food.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-xl dark:text-white">{food.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{food.category}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-green-600 font-bold">${food.price}</span>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}