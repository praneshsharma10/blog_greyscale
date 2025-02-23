import Link from 'next/link' ;
import { Github, Linkedin, Twitter } from 'lucide-react' ;



export function Footer() {
    return (
      <footer className="border-t bg-gray-50">
        <div className=" px-4 py-12 ">
        <nav className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex gap-6 text-sm">

            <Link href="/" className="text-gray-500 hover:text-black">
              home
            </Link>
            <Link href="/blogs" className="text-gray-500 hover:text-black">
              blogs
            </Link>

            <Link href="/tools" className="text-gray-500 hover:text-black">
              tools
            </Link>
            
            {/* <Link href="/about" className="text-gray-500 hover:text-black">
              about
            </Link> */}
            <Link href="/contact" className="text-gray-500 hover:text-black">
              contact
            </Link>
          </div>
          
          <div className="flex gap-6">
            <Link href="https://github.com" className="text-gray-500 hover:text-black">
              <Github className="h-6 w-5" />

            </Link>
            <Link href="https://linkedin.com" className="text-gray-500 hover:text-black">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" className="text-gray-500 hover:text-black">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </nav>
          







        <p className="text-center text-sm text-gray-500 ">
          © {new Date().getFullYear()} pranesh sharma | tech explorer
        </p>
        </div>
      </footer>
    )
  }


// import Link from 'next/link' ;
// import { Github, Linkedin, Twitter } from 'lucide-react' ;



// export function Footer() {
//   return (
//     <footer className="border-t bg-background">
//       <div className="px-4 py-12">
//         <nav className="flex flex-col items-center justify-between gap-6 sm:flex-row">
//           <div className="flex gap-6 text-sm">
//             <Link href="/" className="text-muted-foreground hover:text-foreground">
//               home
//             </Link>
//             <Link href="/blogs" className="text-muted-foreground hover:text-foreground">
//               blogs
//             </Link>
//             <Link href="/tools" className="text-muted-foreground hover:text-foreground">
//               tools
//             </Link>
//             <Link href="/contact" className="text-muted-foreground hover:text-foreground">
//               contact
//             </Link>
//           </div>
          
//           <div className="flex gap-6">
//             <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
//               <Github className="h-6 w-5" />
//             </Link>
//             <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
//               <Linkedin className="h-5 w-5" />
//             </Link>
//             <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
//               <Twitter className="h-5 w-5" />
//             </Link>
//           </div>
//         </nav>
//         <p className="text-center text-sm text-muted-foreground">
//           © {new Date().getFullYear()} pranesh sharma | tech explorer
//         </p>
//       </div>
//     </footer>
//   )
// }
