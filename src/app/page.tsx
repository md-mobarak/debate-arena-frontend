
// 'use client' 

// import { useState, useEffect } from 'react'
// import { Button } from '@/components/ui/button'
// import DebateCard from '@/components/DebateCard'
// import { motion } from 'framer-motion'
// import { FaFire, FaClock, FaChartLine } from 'react-icons/fa'
// import SkeletonDebateCard from '@/components/SkeletonDebateCard'
// // import SkeletonDebateCard from '@/components/SkeletonDebateCard' // We'll create this component

// export default function Home() {
//   const [trendingDebates, setTrendingDebates] = useState<any[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
// // https://debate-arena-backend-five.vercel.app
//   useEffect(() => {
//     const fetchDebates = async () => {
//       try {
//         const response = await fetch('https://debate-arena-backend-five.vercel.app/api/v1/debates')
        
//               // Add detailed error logging:
//       if (!response.ok) {
//         const errorBody = await response.text();
//         throw new Error(`
//           Status: ${response.status}
//           StatusText: ${response.statusText}
//           Body: ${errorBody}
//         `);
//       }
//         // if (!response.ok) {
//         //   throw new Error(`Failed to fetch debates: ${response.status} ${response.statusText}`)
//         // }
        
//         const data = await response.json()
        
//         // Transform API data to match our component's structure
//         const formattedDebates = data.data.map((debate: any) => ({
//           id: debate._id,
//           title: debate.title,
//           description: debate.description,
//           tags: debate.tags,
//           category: debate.category,
//           image: debate.image,
//           status: debate.status,
//           endTime: debate.endTime,
//           supporters: debate.supporters,
//           opposers: debate.opposers,
//           // Calculate time left - we'll calculate this in the card component
//         }))
        
//         setTrendingDebates(formattedDebates.slice(0, 3)) // Only take first 3
//         setLoading(false)
//       } catch (err) {
//         console.error('Error fetching debates:', err)
//         setError(err instanceof Error ? err.message : 'An unknown error occurred')
//         setLoading(false)
//       }
//     }

//     fetchDebates()
//   }, [])

//   return (
//     <div className="max-w-7xl mx-auto">
//       {/* Hero Section */}
//       <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <motion.h1 
//             className="text-4xl md:text-6xl font-bold mb-6"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Where <span className="bg-white text-indigo-600 px-2 rounded-md">Opinions</span> Battle
//           </motion.h1>
//           <motion.p 
//             className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             Join the conversation, take a stance, and debate with facts in our community-driven arena.
//           </motion.p>
//           <motion.div
//             className="flex flex-col sm:flex-row justify-center gap-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.5 }}
//           >
//             <Button 
//               size="lg" 
//               className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
//             >
//               Join a Debate
//             </Button>
//             <Button 
//               variant="outline" 
//               size="lg" 
//               className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
//             >
//               Create Your Own
//             </Button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-gray-50 dark:bg-gray-800">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">How It Works</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <FeatureCard 
//               icon={<FaFire className="text-4xl text-indigo-600" />}
//               title="Join Debates"
//               description="Choose a side and contribute to ongoing discussions with your arguments"
//             />
//             <FeatureCard 
//               icon={<FaClock className="text-4xl text-indigo-600" />}
//               title="Time-Bound Discussions"
//               description="Debates have limited timeframes to keep conversations focused"
//             />
//             <FeatureCard 
//               icon={<FaChartLine className="text-4xl text-indigo-600" />}
//               title="Track Your Progress"
//               description="Rise on the leaderboard based on your debate performance"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Trending Debates */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center mb-10">
//             <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Trending Debates</h2>
//             <Button variant="outline">View All</Button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {loading ? (
//               // Show skeleton loaders while loading
//               [1, 2, 3].map((i) => <SkeletonDebateCard key={i} />)
//             ) : error ? (
//               // Show error message if fetch failed
//               <div className="col-span-3 text-center py-12">
//                 <h3 className="text-xl text-red-600 dark:text-red-400 mb-4">Failed to load debates</h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
//                 <Button 
//                   onClick={() => window.location.reload()}
//                   className="bg-indigo-600 hover:bg-indigo-700 text-white"
//                 >
//                   Try Again
//                 </Button>
//               </div>
//             ) : trendingDebates.length > 0 ? (
//               // Show actual debates
//               trendingDebates.map((debate, index) => (
//                 <DebateCard 
//                   key={debate.id}
//                   debate={debate}
//                   delay={index * 0.1}
//                 />
//               ))
//             ) : (
//               // Show empty state if no debates
//               <div className="col-span-3 text-center py-12">
//                 <h3 className="text-xl text-gray-800 dark:text-white mb-4">No trending debates yet</h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   Be the first to start a debate!
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-16 bg-gray-50 dark:bg-gray-800">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Browse by Category</h2>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             <CategoryCard name="Technology" count="128" />
//             <CategoryCard name="Politics" count="94" />
//             <CategoryCard name="Science" count="76" />
//             <CategoryCard name="Culture" count="85" />
//             <CategoryCard name="Health" count="67" />
//             <CategoryCard name="Education" count="58" />
//             <CategoryCard name="Environment" count="72" />
//             <CategoryCard name="Economics" count="89" />
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// function FeatureCard({ icon, title, description }: { 
//   icon: React.ReactNode
//   title: string
//   description: string
// }) {
//   return (
//     <motion.div 
//       className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8 text-center"
//       whileHover={{ y: -10, transition: { duration: 0.2 } }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{title}</h3>
//       <p className="text-gray-600 dark:text-gray-400">{description}</p>
//     </motion.div>
//   )
// }

// function CategoryCard({ name, count }: { name: string; count: string }) {
//   return (
//     <motion.div 
//       className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 text-center cursor-pointer border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h3>
//       <p className="text-gray-500 dark:text-gray-400">{count} debates</p>
//     </motion.div>
//   )
// }

'use client' 

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import DebateCard from '@/components/DebateCard'
import { motion } from 'framer-motion'
import { FaFire, FaClock, FaChartLine } from 'react-icons/fa'
import SkeletonDebateCard from '@/components/SkeletonDebateCard'

// Define types for the debate data
interface Debate {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image?: string;
  status: string;
  endTime: string;
  supporters: number;
  opposers: number;
}

interface ApiResponse {
  data: {
    _id: string;
    title: string;
    description: string;
    tags: string[];
    category: string;
    image?: string;
    status: string;
    endTime: string;
    supporters: number;
    opposers: number;
  }[];
}

export default function Home() {
  const [trendingDebates, setTrendingDebates] = useState<Debate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDebates = async () => {
      try {
        const response = await fetch('https://debate-arena-backend-five.vercel.app/api/v1/debates')
        
        if (!response.ok) {
          const errorBody = await response.text();
          throw new Error(`
            Status: ${response.status}
            StatusText: ${response.statusText}
            Body: ${errorBody}
          `);
        }
        
        const data: ApiResponse = await response.json()
        
        // Transform API data to match our component's structure
        const formattedDebates = data.data.map((debate) => ({
          id: debate._id,
          title: debate.title,
          description: debate.description,
          tags: debate.tags,
          category: debate.category,
          image: debate.image,
          status: debate.status,
          endTime: debate.endTime,
          supporters: debate.supporters,
          opposers: debate.opposers,
        }))
        
        setTrendingDebates(formattedDebates.slice(0, 3))
        setLoading(false)
      } catch (err) {
        console.error('Error fetching debates:', err)
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
        setLoading(false)
      }
    }

    fetchDebates()
  }, [])

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
     <section className="py-16 md:py-24 pt-24 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Where <span className="bg-white text-indigo-600 px-2 rounded-md">Opinions</span> Battle
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Join the conversation, take a stance, and debate with facts in our community-driven arena.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              Join a Debate
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              Create Your Own
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FaFire className="text-4xl text-indigo-600" />}
              title="Join Debates"
              description="Choose a side and contribute to ongoing discussions with your arguments"
            />
            <FeatureCard 
              icon={<FaClock className="text-4xl text-indigo-600" />}
              title="Time-Bound Discussions"
              description="Debates have limited timeframes to keep conversations focused"
            />
            <FeatureCard 
              icon={<FaChartLine className="text-4xl text-indigo-600" />}
              title="Track Your Progress"
              description="Rise on the leaderboard based on your debate performance"
            />
          </div>
        </div>
      </section>

      {/* Trending Debates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Trending Debates</h2>
            <Button variant="outline">View All</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              [1, 2, 3].map((i) => <SkeletonDebateCard key={i} />)
            ) : error ? (
              <div className="col-span-3 text-center py-12">
                <h3 className="text-xl text-red-600 dark:text-red-400 mb-4">Failed to load debates</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
                <Button 
                  onClick={() => window.location.reload()}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Try Again
                </Button>
              </div>
            ) : trendingDebates.length > 0 ? (
              trendingDebates.map((debate, index) => (
                <DebateCard 
                  key={debate.id}
                  debate={debate}
                  delay={index * 0.1}
                />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <h3 className="text-xl text-gray-800 dark:text-white mb-4">No trending debates yet</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Be the first to start a debate!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Browse by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CategoryCard name="Technology" count="128" />
            <CategoryCard name="Politics" count="94" />
            <CategoryCard name="Science" count="76" />
            <CategoryCard name="Culture" count="85" />
            <CategoryCard name="Health" count="67" />
            <CategoryCard name="Education" count="58" />
            <CategoryCard name="Environment" count="72" />
            <CategoryCard name="Economics" count="89" />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8 text-center"
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  )
}

function CategoryCard({ name, count }: { name: string; count: string }) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 text-center cursor-pointer border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h3>
      <p className="text-gray-500 dark:text-gray-400">{count} debates</p>
    </motion.div>
  )
}