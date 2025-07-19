import { motion } from 'framer-motion'
import { FaClock, FaUsers, FaFire, FaBalanceScale } from 'react-icons/fa'
import { IoTimeOutline } from 'react-icons/io5'

export default function Sidebar({ debate }: { debate: any }) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 sticky top-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Debate Stats</h2>
      
      <div className="space-y-5">
        {/* Creator Info */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
              <span className="text-indigo-600 dark:text-indigo-300 font-semibold">
                {debate.creator.name.charAt(0)}
              </span>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
              Creator
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">{debate.creator.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{debate.creator.role}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <StatCard 
            icon={<FaUsers className="text-indigo-600 dark:text-indigo-400" />}
            label="Participants"
            value={debate.supporters + debate.opposers}
          />
          <StatCard 
            icon={<FaFire className="text-indigo-600 dark:text-indigo-400" />}
            label="Total Votes"
            value={debate.votes}
          />
          <StatCard 
            icon={<FaBalanceScale className="text-indigo-600 dark:text-indigo-400" />}
            label="Support/Oppose"
            value={`${debate.supporters}/${debate.opposers}`}
          />
          <StatCard 
            icon={<IoTimeOutline className="text-indigo-600 dark:text-indigo-400" />}
            label="Time Left"
            value="2 days"
          />
        </div>

        {/* Side Selection */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            Choose Your Side
          </h3>
          <div className="flex space-x-3">
            <button className="flex-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 py-2 px-4 rounded-lg font-medium hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
              Support
            </button>
            <button className="flex-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 py-2 px-4 rounded-lg font-medium hover:bg-red-200 dark:hover:bg-red-800 transition-colors">
              Oppose
            </button>
          </div>
        </div>

        {/* Share Options */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            Share Debate
          </h3>
          <div className="flex space-x-3">
            <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | number }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-600 rounded-lg p-3">
      <div className="flex items-center space-x-2">
        <div className="p-1">{icon}</div>
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
          <div className="font-semibold text-gray-800 dark:text-white">{value}</div>
        </div>
      </div>
    </div>
  )
}