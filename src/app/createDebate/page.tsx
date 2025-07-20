
'use client'

import { redirect, useRouter } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'

interface DebateFormData {
  title: string
  description: string
  tags: string
  category: string
  image: string
  duration: string
}

export default function CreateDebatePage() {
  const router = useRouter()
    const { data: session, status } = useSession()
  
    if (status === 'loading') {
      return <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    }
  
    if (!session) {
      redirect('/login')
    }
  const [formData, setFormData] = useState<DebateFormData>({
    title: '',
    description: '',
    tags: '',
    category: '',
    image: '',
    duration: '24h'
  })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      
      const res = await fetch('https://debate-arena-backend-five.vercel.app/api/v1/debates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          tags: tagsArray,
          category: formData.category,
          image: formData.image, // FIXED: Changed from imageUrl to image
          duration: formData.duration,
        }),
      });
      const data = await res.json()
      
      if (res.ok) {
        router.push(`/debates/${data.debate._id}`) // Adjust according to your API response
      } else {
        setError(data.message || 'Failed to create debate')
      }
    } catch (error) {
      console.error('Error creating debate:', error)
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <motion.div 
        className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 max-w-2xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Create a New Debate
        </h2>
        {error && (
          <div className="text-red-500 mb-4 text-center">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="title" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Debate Title *
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              required
              minLength={5}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter a compelling debate title"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Minimum 5 characters</p>
          </div>
          
          <div>
            <label 
              htmlFor="description" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              minLength={10}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="Describe the debate topic in detail..."
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Minimum 10 characters</p>
          </div>
          
          <div>
            <label 
              htmlFor="tags" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Tags
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              value={formData.tags}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="Comma separated tags (e.g., politics, technology, environment)"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label 
                htmlFor="category" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Category *
              </label>
              <input
                id="category"
                name="category"
                type="text"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., Politics, Technology, Education"
              />
            </div>
            
            <div>
              <label 
                htmlFor="duration" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Duration *
              </label>
              <select
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="1h">1 Hour</option>
                <option value="12h">12 Hours</option>
                <option value="24h">24 Hours</option>
              </select>
            </div>
          </div>
          
          <div>
            <label 
              htmlFor="image" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Image URL (Optional)
            </label>
            <input
              id="image"
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create Debate'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}