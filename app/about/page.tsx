import { Github , Linkedin , Twitter } from "lucide-react";
import Link from "next/link";


export default function AboutPage() {
    return (
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
            <div className="">
                <h1 className="font-bold text-2xl text-black justify-center mb-5">
                    about
                </h1>
                <div>
                    <p>
                    hi, I am Pranesh Sharma, an aspiring software engineer with a passion for simplifying complex technical concepts.
                    I believe in making technology more accessible and easier to understand for everyone.

                    </p>
                    <h2>
                    Skills
                    </h2>
                    <ul>
                        <li>AWS</li>
                        <li>git</li>
                        <li>Devops</li>

                    </ul>

                </div>
                
                {/* icons */}
                <div className="flex gap-6 mt-8">
                    <Link href="https://github.com" className="text-gray-500 hover:text-gray-900">
                    <Github className="h-6 w-6" />
                    </Link>
                    <Link href="https://linkedin.com" className="text-gray-500 hover:text-gray-900">
                    <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link href="https://twitter.com" className="text-gray-500 hover:text-gray-900">
                    <Twitter className="h-6 w-6" />
                    </Link>
                </div>
                
            </div>
        </div>
          
      </div>
        )
  }
  
