"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Badge } from "@/components/ui/badge";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


import Link from "next/link"

import { blogs, categories, featuredVideos } from "@/lib/data";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"

// const blogs = [
//   {
//     title: "Getting Started with AWS",
//     description: "Learn the basics of AWS and how to set up your first cloud infrastructure.",
//     author: "Pranesh Sharma",
//     date: "2024-01-09",
//     tags: ["AWS", "Cloud"],
//   },
//   {
//     title: "Git Fundamentals",
//     description: "Master the essential Git commands and workflows for version control.",
//     author: "Pranesh Sharma",
//     date: "2024-01-10",
//     tags: ["Git", "Version Control"],
//   },
//   {
//     title: "Introduction to DevOps",
//     description: "Understand the principles of DevOps and how it can improve your development process.",
//     author: "Pranesh Sharma",
//     date: "2024-01-11",
//     tags: ["DevOps", "CI/CD"],
//   },
//   {
//     title: "Python for Beginners",
//     description: "Start your programming journey with Python, a versatile and beginner-friendly language.",
//     author: "Pranesh Sharma",
//     date: "2024-01-12",
//     tags: ["Python", "Programming"],
//   },
//   {
//     title: "Understanding RESTful APIs",
//     description: "Learn about RESTful API design principles and best practices.",
//     author: "Pranesh Sharma",
//     date: "2024-01-13",
//     tags: ["API", "REST"],
//   },
//   {
//     title: "Containerization with Docker",
//     description: "Explore how Docker can simplify your application deployment process.",
//     author: "Pranesh Sharma",
//     date: "2024-01-14",
//     tags: ["Docker", "Containerization"],
//   },
//   {
//     title: "JavaScript ES6+ Features",
//     description: "Discover the powerful features introduced in modern JavaScript.",
//     author: "Pranesh Sharma",
//     date: "2024-01-15",
//     tags: ["JavaScript", "ES6"],
//   },
//   {
//     title: "Agile Methodology Explained",
//     description: "Understand the principles of Agile and how to implement it in your projects.",
//     author: "Pranesh Sharma",
//     date: "2024-01-16",
//     tags: ["Agile", "Project Management"],
//   },
//   {
//     title: "AWS Lambda and Serverless Computing",
//     description: "Dive into serverless architecture with AWS Lambda.",
//     author: "Pranesh Sharma",
//     date: "2024-01-17",
//     tags: ["AWS", "Serverless"],
//   },
//   {
//     title: "Git Branching Strategies",
//     description: "Learn different Git branching models to improve your team's workflow.",
//     author: "Pranesh Sharma",
//     date: "2024-01-18",
//     tags: ["Git", "Workflow"],
//   },
// ]

// const categories = [
//   { value: "all", label: "All Categories" },
//   { value: "aws", label: "AWS for Beginners" },
//   { value: "git", label: "Git & Version Control" },
//   { value: "software-development", label: "Software Development" },
//   { value: "devops", label: "DevOps & CI/CD" },
//   { value: "programming", label: "Programming Tutorials" },
// ]


function FeaturedVideos() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Featured Videos</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredVideos.map((video, index) => (
          <Card key={index} className="flex flex-col">
            <div className="relative pt-[56.25%]">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="absolute inset-0 flex items-center justify-center w-full h-full">
                    <Play className="w-12 h-12" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px]">
                  <iframe
                    width="100%"
                    height="450"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </DialogContent>
              </Dialog>
            </div>
            <div className="p-4 flex-grow">
              <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
              <p className="text-gray-600 mb-4">{video.description}</p>
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                Watch on YouTube
                <ExternalLink className="ml-1 w-4 h-4" />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}




const categoryOptions = [
  { value: "all", label: "All Categories" },
  ...categories.map((category) => ({ value: category.name, label: category.name })),
]

// ...categories.map((category) => ({ value: category.slug, label: category.name })), //previously no effect 

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("latest")

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory
    //blog.category.toLowerCase() === selectedCategory.toLowerCase() //previously affected the filtering and search
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
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">all blogs</h1>

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
            {categoryOptions.map((category) => (
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
          <Link href={`/blog/${blog.slug}`} key={index}>
            <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="p-6 flex flex-col h-full">
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
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{blog.description}</p>
                <div className="flex gap-2">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      #{tag.toLowerCase()}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <FeaturedVideos />
    </div>
  )
}

