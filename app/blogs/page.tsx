'use client'
//using shadcn
import { useState } from "react" ;

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
    category: "aws",
    tags: ['AWS', 'Cloud'],
  },

  {
    title: 'Git Fundamentals',
    description: 'Master the essential Git commands and workflows for version control.',
    author: 'pranesh' ,
    date :'10' ,
    category: "git",
    tags: ['Git', 'Version Control'],
  },
  {
    title: 'CI/CD Pipeline Setup',
    description: 'Build and deploy your applications automatically with CI/CD pipelines.',
    author: 'pranesh' ,
    date :'12' ,
    category:'devops',
    tags: ['DevOps', 'CI/CD'],
  },

]


const categories = [
  { value: "all", label: "All Categories" },
  { value: "aws", label: "AWS for Beginners" },
  { value: "git", label: "Git & Version Control" },
  { value: "software-development", label: "Software Development" },
  { value: "devops", label: "DevOps & CI/CD" },
  { value: "programming", label: "Programming Tutorials" },

]

export default function BlogsPage() {

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("latest")

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else {
      return a.title.localeCompare(b.title)
    }
  })

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
        all blogs
      </h1>

      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center mb-8">
        <Input
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}

          className="max-w-sm"
        />

        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>



          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="alphabetical">Alphabetical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Blog List */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {sortedBlogs.map((blog, index) => (
          <Card key={index} className="flex flex-col">
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span>{blog.author}</span>
                <span>•</span>
                <time dateTime={blog.date}>
                {new Date(blog.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
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

