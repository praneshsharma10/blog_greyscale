
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const featuredBlogs = [
  {
    title: "Getting Started with AWS",
    description: "Learn the basics of AWS and how to set up your first cloud infrastructure.",
    tags: ["AWS", "Cloud"],
  },
  {
    title: "Git Fundamentals",
    description: "Master the essential Git commands and workflows for version control.",
    tags: ["Git", "Version Control"],
  },
  {
    title: "CI/CD Pipeline Setup",
    description: "Build and deploy your applications automatically with CI/CD pipelines.",
    tags: ["DevOps", "CI/CD"],
  },
]

const categories = [
  { name: "AWS for Beginners", count: 12, slug: "aws-for-beginners" },
  { name: "Git & Version Control", count: 8, slug: "git-and-version-control" },
  { name: "Software Development Basics", count: 15, slug: "software-development-basics" },
  { name: "DevOps & CI/CD", count: 10, slug: "devops-and-cicd" },
  { name: "Programming Tutorials", count: 20, slug: "programming-tutorials" },
]

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              simplifying software tools for everyone
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              actionable guides and tips to master aws, git, and more
            </p>
            <div className="mt-10">
              <Link href="/blogs">
                <Button size="lg" className="rounded-full">
                  explore blogs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">featured blogs</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredBlogs.map((blog, index) => (
            <Card key={index} className="flex flex-col">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <div className="flex gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      #{tag.toLowerCase()}
                    </Badge>
                  ))}
                </div>
                <Link href="/blogs" passHref>
                  <Button variant="outline" className="w-full">
                    read more
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">categories</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link href={`/category/${category.slug}`} key={index}>
              <Card className="p-6 hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} articles</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

