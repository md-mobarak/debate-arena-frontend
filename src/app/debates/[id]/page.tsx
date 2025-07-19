'use client' 

// import DebateHeader from '@/components/DebateHeader'
import ArgumentList from '@/components/ArgumentList'
import AddArgumentForm from '@/components/AddArgumentForm'
import Sidebar from '@/components/Sidebar'
import { FaFire, FaClock, FaUsers } from 'react-icons/fa'
import DebateHeader from '@/components/DebateHeader'

export default function DebateDetailPage({ params }: { params: { id: string } }) {
  // Sample debate data
  const debate = {
    id: params.id,
    title: 'Should AI development be regulated internationally?',
    description: 'As artificial intelligence continues to advance at a rapid pace, questions about its ethical implications and potential dangers have become increasingly urgent. This debate focuses on whether there should be international regulations governing AI development.',
    creator: {
      name: 'Alex Johnson',
      avatar: '/avatar1.jpg',
      role: 'AI Researcher'
    },
    tags: ['Technology', 'AI', 'Policy', 'Ethics'],
    category: 'Technology',
    createdAt: '2023-10-15',
    endTime: '2023-10-22',
    status: 'active',
    supporters: 42,
    opposers: 38,
    votes: 1284,
    arguments: [
      {
        id: 'arg1',
        side: 'support',
        author: {
          name: 'Sarah Miller',
          avatar: '/avatar2.jpg',
          role: 'Policy Analyst'
        },
        content: 'International regulation is essential to prevent an AI arms race between nations. Without global standards, we risk creating uncontrollable AI systems that could threaten humanity.',
        votes: 128,
        replies: 12,
        timestamp: '2 hours ago'
      },
      {
        id: 'arg2',
        side: 'oppose',
        author: {
          name: 'Michael Chen',
          avatar: '/avatar3.jpg',
          role: 'Tech Entrepreneur'
        },
        content: 'Over-regulation will stifle innovation. AI development is moving too fast for bureaucracies to keep up. We need industry self-regulation with ethical guidelines.',
        votes: 96,
        replies: 8,
        timestamp: '4 hours ago'
      },
      // More arguments...
    ]
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <DebateHeader debate={debate} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Debate Description</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {debate.description}
            </p>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {debate.tags.map(tag => (
                <span 
                  key={tag} 
                  className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <ArgumentList arguments={debate.arguments} />
          
          <AddArgumentForm debateId={debate.id} />
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar debate={debate} />
        </div>
      </div>
    </div>
  )
}