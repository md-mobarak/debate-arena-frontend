
'use client'

import { useState, useEffect } from 'react'
import DebateCard from '@/components/DebateCard'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiLoader } from 'react-icons/fi'

interface Debate {
  _id: string
  title: string
  description: string
  category: string
  supporters: string[]
  opposers: string[]
  endTime: string
  createdAt: string
  commentCount?: number
  tags?: string[]
  imageUrl?: string
  status?: string
}

interface ApiResponse {
  debates: Debate[]
  totalPages: number
  totalDebates: number
  message?: string
}

export default function DebatesPage() {
  const [debates, setDebates] = useState<Debate[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalDebates, setTotalDebates] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all')
  const [sort, setSort] = useState<'newest' | 'popular'>('newest')

  useEffect(() => {
    const fetchDebates = async () => {
      setIsLoading(true)
      setError('')
      try {
          const queryParams = new URLSearchParams({
          page: currentPage.toString(),
          limit: '9',
          filter,
          sort
        });
        
        if (searchQuery) {
          queryParams.set('search', searchQuery);
        }
        
        const res = await fetch(`https://debate-arena-backend-five.vercel.app/api/v1/debates?${queryParams.toString()}`);
        const data: ApiResponse = await res.json()
        
        if (res.ok) {
          setDebates(data.debates)
          setTotalPages(data.totalPages)
          setTotalDebates(data.totalDebates)
        } else {
          setError(data.message || 'Failed to fetch debates')
        }
      } catch (error) {
        console.error('Error fetching debates:', error)
        setError('An unexpected error occurred while fetching debates')
      } finally {
        setIsLoading(false)
      }
    }

    fetchDebates()
  }, [currentPage, filter, sort, searchQuery] )

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const calculateTimeLeft = (endTime: string): string => {
    const end = new Date(endTime)
    const now = new Date()
    const diff = end.getTime() - now.getTime()
    
    if (diff <= 0) return 'Ended'
    
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    return `${hours}h ${minutes}m`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Explore Debates
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Join discussions on various topics, share your arguments, and vote on the most compelling points.
        </p>
      </motion.div>

      {/* Search and Filters */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search debates by title, topic or user..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
            <svg 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
        
        <div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as 'all' | 'open' | 'closed')}
            className="w-full py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
          >
            <option value="all">All Debates</option>
            <option value="open">Open Debates</option>
            <option value="closed">Closed Debates</option>
          </select>
        </div>
        
        <div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as 'newest' | 'popular')}
            className="w-full py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
          >
            <option value="newest">Newest First</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {debates.length} of {totalDebates} debates
        </p>
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <FiLoader className="animate-spin text-indigo-600 text-4xl" />
        </div>
      )}

      {/* Error state */}
      {error && !isLoading && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-8 text-center">
          <h3 className="text-xl font-medium text-red-800 dark:text-red-200 mb-2">
            Error Loading Debates
          </h3>
          <p className="text-red-600 dark:text-red-400">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Debates grid */}
      {!isLoading && debates.length === 0 && !error && (
        <div className="bg-indigo-50 dark:bg-gray-800 rounded-xl p-12 text-center border border-dashed border-indigo-200 dark:border-gray-700">
          <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">
            No debates found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {searchQuery 
              ? `No debates match your search for "${searchQuery}"` 
              : 'There are no debates available at the moment.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('')
              setFilter('all')
              setSort('newest')
              setCurrentPage(1)
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {!isLoading && debates.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
     
    
 {debates.map((debate, index) => (
      <DebateCard 
        key={debate._id} 
        debate={{
          id: debate._id,
          title: debate.title,
          description: debate.description,
          category: debate.category,
          tags: debate.tags || [],
          endTime: debate.endTime,
          supporters: debate.supporters.length,
          opposers: debate.opposers.length,
          image: debate.imageUrl || '', // FIXED: Use imageUrl from Debate interface
          status: debate.status ?? 'unknown' // FIXED: Use status from backend, fallback to 'unknown'
        }} 
        delay={index * 0.1}
      />
    ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && !isLoading && !error && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <FiChevronLeft className="mr-1" />
              Previous
            </button>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum = i + 1;
              
              if (currentPage > 3) {
                pageNum = currentPage - 2 + i;
                if (pageNum > totalPages) return null;
              }
              
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                    currentPage === pageNum
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {pageNum}
                </button>
              )
            })}
            
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <span className="px-2 text-gray-500">...</span>
            )}
            
            {totalPages > 5 && currentPage < totalPages - 1 && (
              <button
                onClick={() => handlePageChange(totalPages)}
                className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                  currentPage === totalPages
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {totalPages}
              </button>
            )}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Next
              <FiChevronRight className="ml-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}