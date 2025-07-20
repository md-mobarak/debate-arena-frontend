// 'use client'

// import Link from 'next/link'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import { useTheme } from './ThemeProvider'
// import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
// import { useState, useEffect, useRef } from 'react'
// import { FiMenu, FiX } from 'react-icons/fi'

// export default function Navbar() {
//   const { data: session } = useSession()
//   const { theme, toggleTheme } = useTheme()
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isVisible, setIsVisible] = useState(true)
//   const { scrollY } = useScroll()
//   const lastScrollY = useRef(0)
  
//   // Handle scroll behavior
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY
      
//       // Always show navbar when at top of page
//       if (currentScrollY <= 100) {
//         setIsVisible(true)
//         setIsScrolled(false)
//         lastScrollY.current = currentScrollY
//         return
//       }
      
//       // Hide navbar when scrolling down, show when scrolling up
//       if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
//         setIsVisible(false)
//       } else {
//         setIsVisible(true)
//       }
      
//       // Update background when scrolled past threshold
//       setIsScrolled(currentScrollY > 100)
//       lastScrollY.current = currentScrollY
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])
  
//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (isMenuOpen && !(e.target as Element).closest('.mobile-menu')) {
//         setIsMenuOpen(false)
//       }
//     }
    
//     document.addEventListener('click', handleClickOutside)
//     return () => document.removeEventListener('click', handleClickOutside)
//   }, [isMenuOpen])

//   return (
//     <>
//       <motion.nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled 
//             ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' 
//             : 'bg-transparent backdrop-blur-none'
//         }`}
//         initial={{ y: -100 }}
//         animate={{ 
//           y: isVisible ? 0 : -100,
//           opacity: isVisible ? 1 : 0
//         }}
//         transition={{ duration: 0.3, ease: "easeOut" }}
//       >
//         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2 z-50">
//             <motion.div 
//               className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="font-bold text-xl">D</span>
//             </motion.div>
//             <span className="text-xl font-bold text-gray-800 dark:text-white">
//               Debate<span className="text-indigo-600">Arena</span>
//             </span>
//           </Link>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex space-x-8">
//             <NavLink href="/debates">Debates</NavLink>
//             <NavLink href="/leaderboard">Leaderboard</NavLink>
//             <NavLink href="/createDebate">Create</NavLink>
//             <NavLink href="/about">About</NavLink>
//           </div>

//           {/* Right Side Controls */}
//           <div className="flex items-center space-x-4">
//             {/* Theme Toggle */}
//             <motion.button 
//               onClick={toggleTheme}
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//               aria-label="Toggle theme"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {theme === 'light' ? (
//                 <span className="text-gray-700">🌙</span>
//               ) : (
//                 <span className="text-yellow-400">☀️</span>
//               )}
//             </motion.button>

//             {/* Auth Controls */}
//             {session ? (
//               <div className="hidden md:flex items-center space-x-3">
//                 <Link 
//                   href="/profile" 
//                   className="flex items-center space-x-2 group"
//                 >
//                   {session.user?.image ? (
//                     <motion.img 
//                       src={session.user.image} 
//                       alt="Profile" 
//                       className="w-8 h-8 rounded-full"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                     />
//                   ) : (
//                     <motion.div 
//                       className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 w-8 h-8 rounded-full flex items-center justify-center"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <span className="font-semibold">
//                         {session.user?.name?.charAt(0).toUpperCase()}
//                       </span>
//                     </motion.div>
//                   )}
//                   <span className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
//                     {session.user?.name}
//                   </span>
//                 </Link>
//                 <motion.button
//                   onClick={() => signOut()}
//                   className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Sign Out
//                 </motion.button>
//               </div>
//             ) : (
//               <div className="hidden md:flex space-x-3">
//                 <motion.button
//                   onClick={() => signIn()}
//                   className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Sign In
//                 </motion.button>
//                 <motion.button
//                   onClick={() => signIn()}
//                   className="px-4 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Register
//                 </motion.button>
//               </div>
//             )}

//             {/* Mobile Menu Button */}
//             <motion.button
//               className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </motion.button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             className="mobile-menu fixed inset-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg md:hidden"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="container mx-auto px-4 py-20 h-full flex flex-col">
//               <div className="flex-1 flex flex-col items-center justify-center space-y-8">
//                 <MobileNavLink href="/debates" onClick={() => setIsMenuOpen(false)}>
//                   Debates
//                 </MobileNavLink>
//                 <MobileNavLink href="/leaderboard" onClick={() => setIsMenuOpen(false)}>
//                   Leaderboard
//                 </MobileNavLink>
//                 <MobileNavLink href="/createDebate" onClick={() => setIsMenuOpen(false)}>
//                   Create Debate
//                 </MobileNavLink>
//                 <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
//                   About
//                 </MobileNavLink>
//               </div>

//               <div className="pb-10 flex flex-col items-center space-y-6">
//                 {session ? (
//                   <>
//                     <div className="flex items-center space-x-3">
//                       {session.user?.image ? (
//                         <img 
//                           src={session.user.image} 
//                           alt="Profile" 
//                           className="w-12 h-12 rounded-full"
//                         />
//                       ) : (
//                         <div className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 w-12 h-12 rounded-full flex items-center justify-center">
//                           <span className="font-semibold text-xl">
//                             {session.user?.name?.charAt(0).toUpperCase()}
//                           </span>
//                         </div>
//                       )}
//                       <span className="text-xl font-medium text-gray-700 dark:text-gray-300">
//                         {session.user?.name}
//                       </span>
//                     </div>
//                     <motion.button
//                       onClick={() => {
//                         signOut()
//                         setIsMenuOpen(false)
//                       }}
//                       className="w-full max-w-xs px-6 py-3 text-base bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Sign Out
//                     </motion.button>
//                   </>
//                 ) : (
//                   <>
//                     <motion.button
//                       onClick={() => {
//                         signIn()
//                         setIsMenuOpen(false)
//                       }}
//                       className="w-full max-w-xs px-6 py-3 text-base bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Sign In
//                     </motion.button>
//                     <motion.button
//                       onClick={() => {
//                         signIn()
//                         setIsMenuOpen(false)
//                       }}
//                       className="w-full max-w-xs px-6 py-3 text-base bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Register
//                     </motion.button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// // Reusable NavLink Component
// function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
//   return (
//     <Link href={href}>
//       <motion.span 
//         className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         {children}
//       </motion.span>
//     </Link>
//   )
// }

// // Mobile NavLink Component
// function MobileNavLink({ href, children, onClick }: { 
//   href: string; 
//   children: React.ReactNode;
//   onClick: () => void;
// }) {
//   return (
//     <Link href={href} onClick={onClick}>
//       <motion.span 
//         className="text-2xl font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         {children}
//       </motion.span>
//     </Link>
//   )
// }
'use client'

import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useTheme } from './ThemeProvider'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const { data: session } = useSession()
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)
  
  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Always show navbar when at top of page
      if (currentScrollY <= 100) {
        setIsVisible(true)
        setIsScrolled(false)
        lastScrollY.current = currentScrollY
        return
      }
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      // Update background when scrolled past threshold
      setIsScrolled(currentScrollY > 100)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && !(e.target as Element).closest('.mobile-menu')) {
        setIsMenuOpen(false)
      }
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' 
            : 'bg-transparent backdrop-blur-none'
        }`}
        initial={{ y: -100 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-50">
            <motion.div 
              className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-bold text-xl">D</span>
            </motion.div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Debate<span className="text-indigo-600">Arena</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/debates">Debates</NavLink>
            <NavLink href="/leaderboard">Leaderboard</NavLink>
            <NavLink href="/createDebate">Create</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? (
                <span className="text-gray-700">🌙</span>
              ) : (
                <span className="text-yellow-400">☀️</span>
              )}
            </motion.button>

            {/* Auth Controls */}
            {session ? (
              <div className="hidden md:flex items-center space-x-3">
                <Link 
                  href="/profile" 
                  className="flex items-center space-x-2 group"
                >
                  {session.user?.image ? (
                    <motion.img 
                      src={session.user.image} 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ) : (
                    <motion.div 
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 w-8 h-8 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="font-semibold">
                        {session.user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </motion.div>
                  )}
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {session.user?.name}
                  </span>
                </Link>
                <motion.button
                  onClick={() => signOut()}
                  className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Out
                </motion.button>
              </div>
            ) : (
              <div className="hidden md:flex space-x-3">
                <Link href="/login">
                  <motion.button
                    className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign In
                  </motion.button>
                </Link>
                <Link href="/register">
                  <motion.button
                    className="px-4 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register
                  </motion.button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu fixed inset-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg md:hidden pt-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-8 h-full flex flex-col">
              <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                <MobileNavLink href="/debates" onClick={() => setIsMenuOpen(false)}>
                  Debates
                </MobileNavLink>
                <MobileNavLink href="/leaderboard" onClick={() => setIsMenuOpen(false)}>
                  Leaderboard
                </MobileNavLink>
                <MobileNavLink href="/createDebate" onClick={() => setIsMenuOpen(false)}>
                  Create Debate
                </MobileNavLink>
                <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </MobileNavLink>
              </div>

              <div className="pb-10 flex flex-col items-center space-y-6">
                {session ? (
                  <>
                    <div className="flex items-center space-x-3">
                      {session.user?.image ? (
                        <img 
                          src={session.user.image} 
                          alt="Profile" 
                          className="w-12 h-12 rounded-full"
                        />
                      ) : (
                        <div className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 w-12 h-12 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-xl">
                            {session.user?.name?.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <span className="text-xl font-medium text-gray-700 dark:text-gray-300">
                        {session.user?.name}
                      </span>
                    </div>
                    <motion.button
                      onClick={() => {
                        signOut()
                        setIsMenuOpen(false)
                      }}
                      className="w-full max-w-xs px-6 py-3 text-base bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign Out
                    </motion.button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="w-full max-w-xs">
                      <motion.button
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full px-6 py-3 text-base bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Sign In
                      </motion.button>
                    </Link>
                    <Link href="/register" className="w-full max-w-xs">
                      <motion.button
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full px-6 py-3 text-base bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Register
                      </motion.button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Reusable NavLink Component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <motion.span 
        className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
    </Link>
  )
}

// Mobile NavLink Component
function MobileNavLink({ href, children, onClick }: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link href={href} onClick={onClick}>
      <motion.span 
        className="text-2xl font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
    </Link>
  )
}