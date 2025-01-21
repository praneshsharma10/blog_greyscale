import { Github } from "lucide-react";
import Link from "next/link";


export default function AboutPage() {
    return (
      <div className="">
        <div className="">
            <div className="">
                <h1 className="font-bold text-2xl text-black justify-center	">
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
                    </ul>

                </div>
                
                {/* icons */}
                <div className="flex gap-4">
                    <Link href="">
                        <Github className="" size={24} />
                    </Link>

                </div>
                
            </div>
        </div>
          
      </div>
        )
  }
  
