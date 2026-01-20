export default function Loading() {
  const skeletons = Array.from({ length: 6 });

  return (
    <div className="min-h-screen p-4 bg-gray-50 dark:bg-slate-950">
      <div className="h-10 w-48 bg-gray-200 dark:bg-slate-800 rounded-lg mb-8 animate-pulse" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skeletons.map((_, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md">
            {/* Image Skeleton */}
            <div className="w-full h-48 bg-gray-200 dark:bg-slate-800 animate-pulse" />
            
            <div className="p-4 space-y-4">
              {/* Title Skeleton */}
              <div className="h-6 w-3/4 bg-gray-200 dark:bg-slate-800 rounded animate-pulse" />
              {/* Category Skeleton */}
              <div className="h-4 w-1/2 bg-gray-200 dark:bg-slate-800 rounded animate-pulse" />
              
              <div className="mt-4 flex justify-between items-center">
                <div className="h-6 w-16 bg-gray-200 dark:bg-slate-800 rounded animate-pulse" />
                <div className="h-10 w-28 bg-gray-200 dark:bg-slate-800 rounded-lg animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}