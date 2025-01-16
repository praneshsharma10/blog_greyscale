
//using shadcn
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

import { Badge } from '@/components/ui/badge'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const blogs = [
  {
    title: 'Getting Started with AWS',
    description: 'Learn the basics of AWS and how to set up your first cloud infrastructure.',
    author: 'Pranesh Sharma',
    date: '2024-01-09',
    tags: ['AWS', 'Cloud'],
  },

]

export default function BlogsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
        all blogs
      </h1>

      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center mb-8">
        <Input
          placeholder="Search blogs..."
          className="max-w-sm"
        />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="popular">Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Blog List */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <Card key={index} className="flex flex-col">
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span>{blog.author}</span>
                <span>•</span>
                <time dateTime={blog.date}>
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <div className="flex gap-2">
                {blog.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    #{tag.toLowerCase()}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

