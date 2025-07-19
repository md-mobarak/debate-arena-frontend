'use client'
import LeaderboardTable from '@/components/LeaderboardTable'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState('weekly')
  
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Leaderboard</h1>
      </motion.div>
      
      <div className="w-full">
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'weekly'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => setActiveTab('weekly')}
          >
            Weekly
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'monthly'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'all-time'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => setActiveTab('all-time')}
          >
            All Time
          </button>
        </div>
        
        <div className={activeTab === 'weekly' ? 'block' : 'hidden'}>
          <LeaderboardTable period="weekly" />
        </div>
        <div className={activeTab === 'monthly' ? 'block' : 'hidden'}>
          <LeaderboardTable period="monthly" />
        </div>
        <div className={activeTab === 'all-time' ? 'block' : 'hidden'}>
          <LeaderboardTable period="all-time" />
        </div>
      </div>
    </div>
  )
}