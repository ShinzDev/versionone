/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/c48aHx0iuVF
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Comfortaa } from 'next/font/google'

comfortaa({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export function Navbar() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header
        className="px-4 lg:px-6 h-14 flex items-center justify-between sticky top-0 bg-black  text-white shadow">
        <Link className="flex items-center justify-center" href="#">
          <CodeIcon className="h-6 w-6    text-white" />
          <span className="sr-only"></span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline  transition-all underline-offset-4"
            href="#">
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#project">
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about">
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="#">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#project">Projects</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div
              className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1
                  className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Victor Bamgboye
                </h1>
                <p
                  className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">Frontend Developer</p>
                <p
                  className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I create beautiful and functional web applications using the latest technologies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
          <div className="container space-y-12 px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 id="project" className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out some of the projects I've worked on.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-4">
                <img
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550" />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Project 1</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A web application that helps users manage their tasks.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  alt="Project 2"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550" />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Project 2</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A web application that helps users track their expenses.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  alt="Project 3"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550" />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Project 3</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A web application that helps users plan their travel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 "
          id="about">
          <div
            className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
              <p
                className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I am a frontend developer with a passion for creating beautiful and functional web applications. I have
                experience working with a variety of technologies, including React.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div
            className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Me</h2>
              <p
                className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Feel free to reach out to me if you have any questions or would like to work together.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 shinXdev. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            LinkedIn
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            GitHub
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Email
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function CodeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}
