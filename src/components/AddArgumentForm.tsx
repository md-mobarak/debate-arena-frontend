'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from './ui/button'
// import { Textarea } from './ui/textarea' // Fixed import path
import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'
import { Textarea } from './ui/textarea'

const argumentSchema = z.object({
  content: z.string().min(10, 'Argument must be at least 10 characters')
})

type ArgumentFormData = z.infer<typeof argumentSchema>

export default function AddArgumentForm({ debateId }: { debateId: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ArgumentFormData>({
    resolver: zodResolver(argumentSchema)
  })

  const onSubmit = (data: ArgumentFormData) => {
    console.log('Submitting argument:', { ...data, debateId })
    // TODO: Connect to your API
    reset()
  }

  return (
    <motion.div 
      className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Add Your Argument</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Textarea
            {...register('content')}
            placeholder="Write your argument here..."
            className="min-h-[150px]"
          />
          {errors.content && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.content.message}
            </p>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Remember to keep it civil and fact-based
          </div>
          <Button type="submit" className="gap-2">
            <FaPaperPlane /> Post Argument
          </Button>
        </div>
      </form>
    </motion.div>
  )
}