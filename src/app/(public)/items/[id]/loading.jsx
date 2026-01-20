export default function DetailsLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 p-4 md:p-12 animate-pulse">
      {/* Back Button Skeleton */}
      <div className="h-6 w-32 bg-gray-200 dark:bg-slate-800 rounded mb-8" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Skeleton */}
        <div className="aspect-square bg-gray-200 dark:bg-slate-800 rounded-[2rem]" />

        {/* Info Skeleton */}
        <div className="space-y-6">
          <div className="h-6 w-24 bg-gray-200 dark:bg-slate-800 rounded-full" />
          <div className="h-12 w-full bg-gray-200 dark:bg-slate-800 rounded-xl" />
          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-200 dark:bg-slate-800 rounded" />
            <div className="h-4 w-full bg-gray-200 dark:bg-slate-800 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-slate-800 rounded" />
          </div>
          <div className="pt-8 flex justify-between">
            <div className="h-10 w-24 bg-gray-200 dark:bg-slate-800 rounded" />
            <div className="h-14 w-40 bg-gray-200 dark:bg-slate-800 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}