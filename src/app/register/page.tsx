

// // 'use client'

// // import { useRouter } from 'next/navigation'
// // import { useState } from 'react'
// // import { motion } from 'framer-motion'
// // import { signIn } from 'next-auth/react'

// // export default function RegisterPage() {
// //   const [email, setEmail] = useState('')
// //   const [password, setPassword] = useState('')
// //   const [username, setUsername] = useState('')
// //   const [error, setError] = useState('')
// //   const router = useRouter()

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setError('')
    
// //     try {
// //       const res = await fetch('/api/auth/register', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ 
// //           email, 
// //           password, 
// //           username 
// //         }),
// //       })
      
// //       const data = await res.json()
      
// //       if (res.ok) {
// //         // Automatically log in after successful registration
// //         const result = await signIn('credentials', {
// //           redirect: false,
// //           email,
// //           password,
// //         })
        
// //         if (result?.error) {
// //           setError(result.error)
// //         } else {
// //           router.push('/')
// //         }
// //       } else {
// //         setError(data.error || 'Registration failed')
// //       }
// //     } catch (err: any) {
// //       setError(err.message || 'An unexpected error occurred')
// //     }
// //   }

// //   const handleGoogleSignUp = () => {
// //     signIn('google', { callbackUrl: '/' })
// //   }

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
// //       <motion.div 
// //         className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 max-w-md w-full"
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //       >
// //         <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
// //           Create a new account
// //         </h2>
        
// //         {error && (
// //           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
// //             {error}
// //           </div>
// //         )}
        
// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           <div>
// //             <label 
// //               htmlFor="username" 
// //               className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
// //             >
// //               Username
// //             </label>
// //             <input
// //               id="username"
// //               type="text"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               required
// //               className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
// //               placeholder="Enter your username"
// //             />
// //           </div>
          
// //           <div>
// //             <label 
// //               htmlFor="email" 
// //               className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
// //             >
// //               Email address
// //             </label>
// //             <input
// //               id="email"
// //               type="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //               className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
// //               placeholder="email@example.com"
// //             />
// //           </div>
          
// //           <div>
// //             <label 
// //               htmlFor="password" 
// //               className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
// //             >
// //               Password
// //             </label>
// //             <input
// //               id="password"
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //               className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
// //               placeholder="••••••••"
// //             />
// //             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
// //               Must be at least 8 characters with one uppercase letter and one number
// //             </p>
// //           </div>
          
// //           <button 
// //             type="submit" 
// //             className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
// //           >
// //             Sign up
// //           </button>
// //         </form>
        
// //         <div className="mt-6">
// //           <div className="relative">
// //             <div className="absolute inset-0 flex items-center">
// //               <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
// //             </div>
// //             <div className="relative flex justify-center text-sm">
// //               <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
// //                 Or sign up with
// //               </span>
// //             </div>
// //           </div>

// //           <div className="mt-6 grid grid-cols-1 gap-3">
// //             <button
// //               onClick={handleGoogleSignUp}
// //               className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-white bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
// //             >
// //               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
// //                 <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
// //               </svg>
// //               Sign up with Google
// //             </button>
// //           </div>
// //         </div>

// //         <div className="mt-6 text-center">
// //           <p className="text-gray-600 dark:text-gray-400">
// //             Already have an account?{' '}
// //             <button 
// //               className="text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none font-medium transition-colors duration-200"
// //               onClick={() => router.push('/login')}
// //             >
// //               Sign in
// //             </button>
// //           </p>
// //         </div>
// //       </motion.div>
// //     </div>
// //   )
// // }

// 'use client'

// import { useRouter } from 'next/navigation'
// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { signIn } from 'next-auth/react'

// export default function RegisterPage() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [username, setUsername] = useState('')
//   const [error, setError] = useState('')
//   const router = useRouter()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setError('')
    
//     try {
//       const res = await fetch('/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           email, 
//           password, 
//           username 
//         }),
//       })
      
//       const data = await res.json()
      
//       if (res.ok) {
//         // Automatically log in after successful registration
//         const result = await signIn('credentials', {
//           redirect: false,
//           email,
//           password,
//         })
        
//         if (result?.error) {
//           setError(result.error)
//         } else {
//           router.push('/')
//         }
//       } else {
//         setError(data.error || 'Registration failed')
//       }
//     } catch (err) {
//       // Handle error safely without 'any'
//       let errorMessage = 'An unexpected error occurred'
//       if (err instanceof Error) {
//         errorMessage = err.message
//       } else if (typeof err === 'string') {
//         errorMessage = err
//       }
//       setError(errorMessage)
//     }
//   }

//   const handleGoogleSignUp = () => {
//     signIn('google', { callbackUrl: '/' })
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
//       <motion.div 
//         className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 max-w-md w-full"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
//           Create a new account
//         </h2>
        
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
//             {error}
//           </div>
//         )}
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label 
//               htmlFor="username" 
//               className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//             >
//               Username
//             </label>
//             <input
//               id="username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
//               placeholder="Enter your username"
//             />
//           </div>
          
//           <div>
//             <label 
//               htmlFor="email" 
//               className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//             >
//               Email address
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
//               placeholder="email@example.com"
//             />
//           </div>
          
//           <div>
//             <label 
//               htmlFor="password" 
//               className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
//               placeholder="••••••••"
//             />
//             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
//               Must be at least 8 characters with one uppercase letter and one number
//             </p>
//           </div>
          
//           <button 
//             type="submit" 
//             className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
//           >
//             Sign up
//           </button>
//         </form>
        
//         <div className="mt-6">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
//                 Or sign up with
//               </span>
//             </div>
//           </div>

//           <div className="mt-6 grid grid-cols-1 gap-3">
//             <button
//               onClick={handleGoogleSignUp}
//               className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-white bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
//             >
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
//               </svg>
//               Sign up with Google
//             </button>
//           </div>
//         </div>

//         <div className="mt-6 text-center">
//           <p className="text-gray-600 dark:text-gray-400">
//             Already have an account?{' '}
//             <button 
//               className="text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none font-medium transition-colors duration-200"
//               onClick={() => router.push('/login')}
//             >
//               Sign in
//             </button>
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   )
// }
'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { signIn } from 'next-auth/react'
import { registerUser } from '@/lib/backend'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    try {
      // Call backend register endpoint directly
      const res = await registerUser({ 
        email, 
        password, 
        username 
      });
      
      if (res.data && res.data.success) {
        // Automatically log in after successful registration
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        })
        
        if (result?.error) {
          setError(result.error)
        } else {
          router.push('/')
        }
      } else {
        setError(res.data?.error || 'Registration failed');
      }
    } catch (err: any) {
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  }

  const handleGoogleSignUp = () => {
    signIn('google', { callbackUrl: '/' })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <motion.div 
        className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 max-w-md w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Create a new account
        </h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your username"
            />
          </div>
          
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="email@example.com"
            />
          </div>
          
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Must be at least 8 characters with one uppercase letter and one number
            </p>
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isLoading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {isLoading ? 'Creating account...' : 'Sign up'}
          </button>
        </form>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                Or sign up with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            <button
              onClick={handleGoogleSignUp}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-white bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
              </svg>
              Sign up with Google
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <button 
              className="text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none font-medium"
              onClick={() => router.push('/login')}
            >
              Sign in
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  )
}