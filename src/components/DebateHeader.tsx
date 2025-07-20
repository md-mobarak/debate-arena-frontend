// import { motion } from 'framer-motion'
// import { FaFire, FaClock, FaUsers } from 'react-icons/fa'

// export default function DebateHeader({ debate }: { debate: any }) {
//   return (
//     <motion.div 
//       className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg overflow-hidden"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="p-6 md:p-8 text-white">
//         <div className="flex flex-wrap justify-between items-start gap-4">
//           <div>
//             <div className="flex items-center mb-2">
//               <div className="bg-white text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">
//                 {debate.category}
//               </div>
//               <div className="ml-3 flex items-center text-sm">
//                 <FaClock className="mr-1" />
//                 <span>{debate.status === 'active' ? `Ends in ${debate.endTime}` : 'Closed'}</span>
//               </div>
//             </div>
            
//             <h1 className="text-2xl md:text-3xl font-bold mb-4">{debate.title}</h1>
            
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center">
//                 <FaUsers className="mr-2" />
//                 <span>{debate.supporters + debate.opposers} participants</span>
//               </div>
//               <div className="flex items-center">
//                 <FaFire className="mr-2" />
//                 <span>{debate.votes} votes</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex space-x-4">
//             <button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors">
//               Join Debate
//             </button>
//             <button className="bg-transparent border border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors">
//               Share
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Debate Status Bar */}
//       <div className="h-2 bg-white/20 relative">
//         <motion.div 
//           className="absolute top-0 left-0 h-full bg-white"
//           style={{ width: `${(debate.supporters / (debate.supporters + debate.opposers)) * 100}%` }}
//           initial={{ width: 0 }}
//           animate={{ width: `${(debate.supporters / (debate.supporters + debate.opposers)) * 100}%` }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         />
//         <div className="absolute top-0 left-1/2 h-full w-px bg-white/30"></div>
//       </div>
      
//       <div className="flex justify-between px-8 py-3 bg-white/10">
//         <div className="text-center">
//           <div className="text-lg font-bold">Support</div>
//           <div className="text-2xl font-bold">{debate.supporters}</div>
//         </div>
//         <div className="text-center">
//           <div className="text-lg font-bold">Oppose</div>
//           <div className="text-2xl font-bold">{debate.opposers}</div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }
'use client';
import { motion } from 'framer-motion'
import { FaFire, FaClock, FaUsers } from 'react-icons/fa'

// Define TypeScript interface
interface Debate {
  category: string;
  status: 'active' | 'closed' | string; // Allows for other statuses
  endTime?: string;
  title: string;
  supporters: number;
  opposers: number;
  votes: number;
}

interface DebateHeaderProps {
  debate: Debate;
}

export default function DebateHeader({ debate }: DebateHeaderProps) {
  // Calculate participant count
  const participants = debate.supporters + debate.opposers;
  
  // Calculate percentage for status bar
  const supportPercentage = participants > 0 
    ? (debate.supporters / participants) * 100 
    : 50;

  return (
    <motion.div 
      className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 md:p-8 text-white">
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div>
            <div className="flex items-center mb-2">
              <div className="bg-white text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">
                {debate.category}
              </div>
              <div className="ml-3 flex items-center text-sm">
                <FaClock className="mr-1" />
                <span>
                  {debate.status === 'active' && debate.endTime 
                    ? `Ends in ${debate.endTime}` 
                    : 'Closed'}
                </span>
              </div>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{debate.title}</h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <FaUsers className="mr-2" />
                <span>{participants} participants</span>
              </div>
              <div className="flex items-center">
                <FaFire className="mr-2" />
                <span>{debate.votes} votes</span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors">
              Join Debate
            </button>
            <button className="bg-transparent border border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors">
              Share
            </button>
          </div>
        </div>
      </div>
      
      {/* Debate Status Bar */}
      <div className="h-2 bg-white/20 relative">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-white"
          style={{ width: `${supportPercentage}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${supportPercentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <div className="absolute top-0 left-1/2 h-full w-px bg-white/30"></div>
      </div>
      
      <div className="flex justify-between px-8 py-3 bg-white/10">
        <div className="text-center">
          <div className="text-lg font-bold">Support</div>
          <div className="text-2xl font-bold">{debate.supporters}</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold">Oppose</div>
          <div className="text-2xl font-bold">{debate.opposers}</div>
        </div>
      </div>
    </motion.div>
  )
}