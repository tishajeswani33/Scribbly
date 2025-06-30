import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, MessageCircle } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface BlogCardProps {
  post: {
    id: string
    title: string
    slug: string
    excerpt: string | null
    created_at: string
    author: {
      full_name: string | null
      avatar_url: string | null
    }
    comments_count?: number
  }
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
      <div className="p-6">
        <Link to={`/post/${post.slug}`} className="block mb-3">
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        
        {post.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {post.author.avatar_url ? (
                <img
                  src={post.author.avatar_url}
                  alt={post.author.full_name || 'Author'}
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-white" />
                </div>
              )}
              <span className="font-medium">{post.author.full_name || 'Anonymous'}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}</span>
            </div>
          </div>

          {typeof post.comments_count === 'number' && (
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>{post.comments_count}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}