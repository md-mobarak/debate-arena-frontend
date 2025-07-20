// 'use client'
// import { motion } from 'framer-motion'
// import { FaUsers, FaComments, FaLightbulb } from 'react-icons/fa'

// export default function AboutPage() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="max-w-4xl mx-auto text-center mb-16">
//         <motion.h1 
//           className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           About Debate Arena
//         </motion.h1>
//         <motion.p 
//           className="text-xl text-gray-600 dark:text-gray-400"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//         >
//           A platform where ideas clash and understanding grows
//         </motion.p>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//         <FeatureCard 
//           icon={<FaUsers className="text-4xl text-indigo-600 dark:text-indigo-400" />}
//           title="Community Driven"
//           description="Join thousands of passionate debaters from around the world in thoughtful discussions"
//           delay={0.1}
//         />
//         <FeatureCard 
//           icon={<FaComments className="text-4xl text-indigo-600 dark:text-indigo-400" />}
//           title="Constructive Debates"
//           description="Our platform encourages evidence-based arguments and respectful discourse"
//           delay={0.2}
//         />
//         <FeatureCard 
//           icon={<FaLightbulb className="text-4xl text-indigo-600 dark:text-indigo-400" />}
//           title="Expand Your Mind"
//           description="Challenge your perspectives and gain new insights on important issues"
//           delay={0.3}
//         />
//       </div>
      
//       <div className="max-w-3xl mx-auto">
//         <motion.h2 
//           className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           Our Mission
//         </motion.h2>
//         <motion.p 
//           className="text-lg text-gray-600 dark:text-gray-400 mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           At Debate Arena, we believe that thoughtful discourse is essential for progress. 
//           In a world of echo chambers and polarized opinions, we provide a space where 
//           diverse perspectives can be shared, challenged, and refined.
//         </motion.p>
//         <motion.p 
//           className="text-lg text-gray-600 dark:text-gray-400 mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           Our mission is to foster critical thinking, promote understanding, and elevate 
//           public discourse on important issues. We're committed to creating a platform 
//           where ideas are judged on their merit, not their popularity.
//         </motion.p>
//       </div>
//     </div>
//   )
// }

// function FeatureCard({ icon, title, description, delay = 0 }: { 
//   icon: React.ReactNode
//   title: string
//   description: string
//   delay?: number
// }) {
//   return (
//     <motion.div 
//       className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8 text-center"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay, duration: 0.5 }}
//     >
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{title}</h3>
//       <p className="text-gray-600 dark:text-gray-400">{description}</p>
//     </motion.div>
//   )
// }

'use client'
import { motion } from 'framer-motion'
import { FaUsers, FaComments, FaLightbulb } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Debate Arena
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          A platform where ideas clash and understanding grows
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard 
          icon={<FaUsers className="text-4xl text-indigo-600 dark:text-indigo-400" />}
          title="Community Driven"
          description="Join thousands of passionate debaters from around the world in thoughtful discussions"
          delay={0.1}
        />
        <FeatureCard 
          icon={<FaComments className="text-4xl text-indigo-600 dark:text-indigo-400" />}
          title="Constructive Debates"
          description="Our platform encourages evidence-based arguments and respectful discourse"
          delay={0.2}
        />
        <FeatureCard 
          icon={<FaLightbulb className="text-4xl text-indigo-600 dark:text-indigo-400" />}
          title="Expand Your Mind"
          description="Challenge your perspectives and gain new insights on important issues"
          delay={0.3}
        />
      </div>
      
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Our Mission
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          At Debate Arena, we believe that thoughtful discourse is essential for progress. 
          In a world of echo chambers and polarized opinions, we provide a space where 
          diverse perspectives can be shared, challenged, and refined.
        </motion.p>
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Our mission is to foster critical thinking, promote understanding, and elevate 
          public discourse on important issues. We&apos;re committed to creating a platform 
          where ideas are judged on their merit, not their popularity.
        </motion.p>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  )
}