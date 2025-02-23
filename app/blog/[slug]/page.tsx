// import { notFound } from "next/navigation"
// import { blogs } from "@/lib/data"
// import { Badge } from "@/components/ui/badge"
// import { CodeBlock } from "@/components/code-block"

// export function generateStaticParams() {
//   return blogs.map((blog) => ({
//     slug: blog.slug,
//   }))
// }

// export default function BlogPost({ params }: { params: { slug: string } }) {
//   const blog = blogs.find((b) => b.slug === params.slug)

//   if (!blog) {
//     notFound()
//   }

//   return (
//     <article className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
//       <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{blog.title}</h1>
//       <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
//         <span>{blog.author}</span>
//         <span>•</span>
//         <time dateTime={blog.date}>
//           {new Date(blog.date).toLocaleDateString("en-US", {
//             month: "long",
//             day: "numeric",
//             year: "numeric",
//           })}
//         </time>
//       </div>
//       <div className="flex gap-2 mb-8">
//         {blog.tags.map((tag) => (
//           <Badge key={tag} variant="secondary">
//             #{tag.toLowerCase()}
//           </Badge>
//         ))}
//       </div>
//       <div className="prose prose-lg max-w-none">
//         {blog.content.map((section, index) => (
//         //   <section key={index}>
//         //     {section.type === "paragraph" && <p>{section.content}</p>}
//         //     {section.type === "heading" && <h2 className="text-2xl font-bold mt-8 mb-4">{section.content}</h2>}
//         //     {section.type === "code" && <CodeBlock language={section.language} code={section.content} />}
//         //   </section>

//             <section key={index}>
//             {section.type === "paragraph" && <p>{section.content}</p>}
//             {section.type === "heading" && <h2 className="text-2xl font-bold mt-8 mb-4">{section.content}</h2>}
//             {section.type === "code" && (
//             <CodeBlock language={section.language ?? "plaintext"} code={section.content ?? ""} />
//   )}
// </section>

//         ))}
//       </div>
//     </article>
//   )
// }



import { notFound } from "next/navigation"
import { blogs } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/code-block"

// export function generateStaticParams() {
//   return blogs.map((blog) => ({
//     slug: blog.slug,
//   }))
// } 
//dockerfile issue { slug: string }

export function generateStaticParams(): { slug: string }[] {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}


// export default function BlogPost({ params }: { params: { slug: string } }) {

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  //for ts to correctly recognize params


  const blog = blogs.find((b) => b.slug === params.slug)

  if (!blog) {
    notFound()
  }




  return (
    <article className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{blog.title}</h1>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
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
      <div className="flex gap-2 mb-8">
        {blog.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            #{tag.toLowerCase()}
          </Badge>
        ))}
      </div>
      <div className="prose prose-lg max-w-none">
        {blog.content.map((section, index) => (
          <section key={index}>
            {section.type === "paragraph" && <p>{section.content}</p>}
            {section.type === "heading" && <h2 className="text-2xl font-bold mt-8 mb-4">{section.content}</h2>}
            {section.type === "code" && <CodeBlock language={section.language} code={section.content} />}
          </section>
        ))}
      </div>
    </article>
  )
}

