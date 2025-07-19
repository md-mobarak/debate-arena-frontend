// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { FaArrowUp, FaArrowDown, FaComment } from 'react-icons/fa'

// export default function DebateCard({ debate, delay = 0 }: { 
//   debate: any
//   delay?: number
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay }}
//       className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-600"
//     >
//       {/* Category Tag */}
//       <div className="px-4 pt-4">
//         <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full">
//           {debate.category}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="p-4">
//         <Link href={`/debates/${debate.id}`}>
//           <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
//             {debate.title}
//           </h3>
//         </Link>
//         <p className="text-gray-600 dark:text-gray-400 mb-4">{debate.description}</p>
        
//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {debate.tags.map((tag: string) => (
//             <span 
//               key={tag} 
//               className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
        
//         {/* Stats */}
//         <div className="flex justify-between text-gray-500 dark:text-gray-400 text-sm">
//           <div className="flex items-center">
//             <FaArrowUp className="text-green-500 mr-1" />
//             <span>{debate.votes} votes</span>
//           </div>
//           <div className="flex items-center">
//             <FaComment className="text-indigo-500 mr-1" />
//             <span>{debate.comments} arguments</span>
//           </div>
//           <div>{debate.participants} participants</div>
//         </div>
//       </div>
      
//       {/* Footer */}
//       <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 flex justify-between items-center">
//         <div className="text-sm text-gray-600 dark:text-gray-400">
//           <span className="font-semibold">Time left:</span> {debate.timeLeft}
//         </div>
//         <Link 
//           href={`/debates/${debate.id}`}
//           className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium text-sm"
//         >
//           Join Debate →
//         </Link>
//       </div>
//     </motion.div>
//   )
// }

// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { FaArrowUp, FaArrowDown, FaComment, FaClock } from 'react-icons/fa'

// export default function DebateCard({ debate, delay = 0 }: { 
//   debate: any
//   delay?: number
// }) {
//   // Determine status color
//   const statusColor = debate.status === 'closed' 
//     ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
//     : debate.timeLeft === 'Ended'
//       ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
//       : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay }}
//       className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
//     >
//       {/* Image */}
//       {debate.image && (
//         <div className="relative h-48 overflow-hidden">
//           <img 
//             src={debate.image} 
//             alt={debate.title} 
//             className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//           />
//           <div className="absolute top-4 right-4">
//             <span className={`${statusColor} text-xs font-semibold px-3 py-1 rounded-full`}>
//               {debate.status === 'closed' ? 'Closed' : debate.timeLeft === 'Ended' ? 'Ended' : 'Live'}
//             </span>
//           </div>
//         </div>
//       )}
      
//       {/* Content */}
//       <div className="p-5 flex-1 flex flex-col">
//         {/* Category Tag */}
//         <div className="mb-3">
//           <span className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full">
//             {debate.category}
//           </span>
//         </div>

//         {/* Title */}
//         <Link href={`/debates/${debate.id}`}>
//           <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors line-clamp-2">
//             {debate.title}
//           </h3>
//         </Link>
        
//         {/* Description */}
//         <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
//           {debate.description}
//         </p>
        
//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {debate.tags.map((tag: string) => (
//             <span 
//               key={tag} 
//               className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
        
//         {/* Stats */}
//         <div className="flex flex-wrap justify-between text-gray-500 dark:text-gray-400 text-sm mb-4">
//           <div className="flex items-center mb-2 sm:mb-0">
//             <FaArrowUp className="text-green-500 mr-1" />
//             <span className="font-medium">{debate.supporters.length} Support</span>
//           </div>
//           <div className="flex items-center mb-2 sm:mb-0">
//             <FaArrowDown className="text-red-500 mr-1" />
//             <span className="font-medium">{debate.opposers.length} Oppose</span>
//           </div>
//           <div className="flex items-center">
//             <FaComment className="text-indigo-500 mr-1" />
//             <span className="font-medium">{debate.comments} Arguments</span>
//           </div>
//         </div>
//       </div>
      
//       {/* Footer */}
//       <div className="bg-gray-50 dark:bg-gray-700/50 px-5 py-4 flex flex-col sm:flex-row justify-between items-center">
//         <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-0">
//           <FaClock className="mr-2" />
//           <span>{debate.timeLeft}</span>
//         </div>
//         <Link 
//           href={`/debates/${debate.id}`}
//           className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium text-sm px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg transition-colors"
//         >
//           {debate.status === 'closed' ? 'View Results' : 'Join Debate'}
//         </Link>
//       </div>
//     </motion.div>
//   )
// }

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowUp, FaArrowDown, FaComment, FaClock } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function DebateCard({ debate, delay = 0 }: { 
  debate: any
  delay?: number
}) {
  const [timeLeft, setTimeLeft] = useState('')
  const [isClient, setIsClient] = useState(false)
  
  // Determine status color
  const statusColor = debate.status === 'closed' 
    ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
    : timeLeft === 'Ended'
      ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
      : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'

  // Calculate time left on client side
  useEffect(() => {
    setIsClient(true)
    
    if (!debate.endTime) return
    
    const calculateTimeLeft = () => {
      const end = new Date(debate.endTime)
      const now = new Date()
      const diff = end.getTime() - now.getTime()
      
      if (diff <= 0) {
        setTimeLeft('Ended')
        return
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      
      setTimeLeft(`${hours}h ${minutes}m`)
    }
    
    calculateTimeLeft()
    
    // Update every minute if debate is still active
    if (debate.status === 'open' && timeLeft !== 'Ended') {
      const interval = setInterval(calculateTimeLeft, 60000)
      return () => clearInterval(interval)
    }
  }, [debate.endTime, debate.status, timeLeft])

  // Only render after client hydration
  if (!isClient) {
    return <div className="h-[400px]" /> // Empty placeholder
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      {/* Image */}
      {debate.image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={debate.image} 
            alt={debate.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <span className={`${statusColor} text-xs font-semibold px-3 py-1 rounded-full`}>
              {debate.status === 'closed' ? 'Closed' : timeLeft === 'Ended' ? 'Ended' : 'Live'}
            </span>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Category Tag */}
        <div className="mb-3">
          <span className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full">
            {debate.category}
          </span>
        </div>

        {/* Title */}
        <Link href={`/debates/${debate.id}`}>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors line-clamp-2">
            {debate.title}
          </h3>
        </Link>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
          {debate.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {debate.tags.map((tag: string) => (
            <span 
              key={tag} 
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-between text-gray-500 dark:text-gray-400 text-sm mb-4">
          <div className="flex items-center mb-2 sm:mb-0">
            <FaArrowUp className="text-green-500 mr-1" />
            <span className="font-medium">{debate.supporters.length} Support</span>
          </div>
          <div className="flex items-center mb-2 sm:mb-0">
            <FaArrowDown className="text-red-500 mr-1" />
            <span className="font-medium">{debate.opposers.length} Oppose</span>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-50 dark:bg-gray-700/50 px-5 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-0">
          <FaClock className="mr-2" />
          <span>{timeLeft || 'Calculating...'}</span>
        </div>
        <Link 
          href={`/debates/${debate.id}`}
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium text-sm px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg transition-colors"
        >
          {debate.status === 'closed' || timeLeft === 'Ended' ? 'View Results' : 'Join Debate'}
        </Link>
      </div>
    </motion.div>
  )
}