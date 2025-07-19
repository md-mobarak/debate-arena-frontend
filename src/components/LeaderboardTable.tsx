import { motion } from 'framer-motion'

const mockData = [
  { id: '1', name: 'Alex Johnson', points: 2450, debates: 24 },
  { id: '2', name: 'Sarah Miller', points: 1980, debates: 18 },
  { id: '3', name: 'Michael Chen', points: 1760, debates: 15 },
  { id: '4', name: 'Emma Wilson', points: 1620, debates: 14 },
  { id: '5', name: 'David Brown', points: 1480, debates: 12 },
  { id: '6', name: 'Priya Patel', points: 1320, debates: 11 },
  { id: '7', name: 'James Taylor', points: 1180, debates: 10 },
  { id: '8', name: 'Maria Garcia', points: 1050, debates: 9 },
  { id: '9', name: 'Robert Davis', points: 920, debates: 8 },
  { id: '10', name: 'Linda Wilson', points: 780, debates: 7 },
]

export default function LeaderboardTable({ period }: { period: string }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden mt-6">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-600 border-b">
            <th className="py-3 px-4 text-left text-gray-500 dark:text-gray-400 font-medium">Rank</th>
            <th className="py-3 px-4 text-left text-gray-500 dark:text-gray-400 font-medium">User</th>
            <th className="py-3 px-4 text-left text-gray-500 dark:text-gray-400 font-medium">Points</th>
            <th className="py-3 px-4 text-left text-gray-500 dark:text-gray-400 font-medium">Debates</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((user, index) => (
            <motion.tr 
              key={user.id}
              className="border-b last:border-0 hover:bg-gray-50 dark:hover:bg-gray-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <td className="py-3 px-4 font-medium">{index + 1}</td>
              <td className="py-3 px-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-200 dark:bg-gray-500 w-8 h-8 rounded-full"></div>
                  <span className="text-gray-800 dark:text-white">{user.name}</span>
                </div>
              </td>
              <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{user.points}</td>
              <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{user.debates}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}