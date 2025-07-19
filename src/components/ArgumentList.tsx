import { motion } from 'framer-motion'
import { FaArrowUp, FaArrowDown, FaReply } from 'react-icons/fa'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function ArgumentList({ arguments: args }: { arguments: any[] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Arguments</h2>
      
      {args.map((argument, index) => (
        <motion.div
          key={argument.id}
          className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-start space-x-4">
            <div className={`p-2 rounded-lg ${argument.side === 'support' ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
              {argument.side === 'support' ? (
                <FaArrowUp className="text-green-600 dark:text-green-400" />
              ) : (
                <FaArrowDown className="text-red-600 dark:text-red-400" />
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <Avatar>
                  <AvatarImage src={argument.author.avatar} />
                  <AvatarFallback>
                    {argument.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {argument.author.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {argument.author.role} • {argument.timestamp}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {argument.content}
              </p>
              
              <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
                <button className="flex items-center space-x-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <FaArrowUp />
                  <span>{argument.votes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <FaReply />
                  <span>Reply</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}