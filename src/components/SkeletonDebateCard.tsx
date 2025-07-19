import React from 'react'

export default function SkeletonDebateCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col animate-pulse">
      {/* Image skeleton */}
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700" />
      
      {/* Content skeleton */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Category skeleton */}
        <div className="mb-3">
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-full" />
        </div>

        {/* Title skeleton */}
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-3/4" />
        
        {/* Tags skeleton */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        
        {/* Stats skeleton */}
        <div className="flex flex-wrap justify-between text-sm mb-4">
          <div className="flex items-center mb-2 sm:mb-0">
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
          <div className="flex items-center mb-2 sm:mb-0">
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
          <div className="flex items-center">
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
      
      {/* Footer skeleton */}
      <div className="bg-gray-50 dark:bg-gray-700/50 px-5 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2 sm:mb-0" />
        <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg" />
      </div>
    </div>
  )
}