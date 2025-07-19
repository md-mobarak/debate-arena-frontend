'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function ProfilePage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  }

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Your Profile
        </h1>
        
        <div className="flex items-center space-x-6 mb-8">
          {session.user?.image ? (
            <img 
              src={session.user.image} 
              alt="Profile" 
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          )}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {session.user?.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {session.user?.email}
            </p>
          </div>
        </div>
        
        {/* Additional profile content */}
      </div>
    </div>
  )
}