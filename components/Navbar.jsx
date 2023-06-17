"use client"
import Link from "next/link"
import menu from "@/assets/menu.png"
import Image from "next/image"
import { useState } from "react"
const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (
    <div>
      <nav className="flex px-2 justify-between lg:py-0 lg:justify-center space-x-4 items-center bg-blue-900 h-12">
        <Link href="/" className="text-xl font-bold text-white">
          Next Blog
        </Link>
        <div className="hidden lg:flex text-lg text-center space-x-6 text-white">
          <Link className="hover:underline" href="/contact">
            Contact
          </Link>
          <Link className="hover:underline" href="/about">
            About
          </Link>
          <a className="hover:underline" href="https://github.com/brkunver/next-static-blog">
            Github Repo
          </a>
          <a className="hover:underline" href="https://github.com/brkunver">
            github/brkunver
          </a>
          <a className="hover:underline" href="https://nextjs.org/docs">
            Next.js Docs
          </a>
          <a className="hover:underline" href="https://jsonplaceholder.typicode.com/">
            Json Placeholder
          </a>
        </div>
        <button onClick={() => setIsMenuVisible((state) => !state)} className="lg:hidden text-white">
          <Image src={menu} alt="menu button" className="w-8 text-white" />
        </button>
      </nav>

      <div
        className={`items-center text-center font-bold underline bg-white ${
          isMenuVisible ? "flex flex-col" : "hidden"
        }`}
      >
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <a href="https://github.com/brkunver/next-static-blog">Github Repo</a>
        <a href="https://github.com/brkunver">github/brkunver</a>
        <a href="https://nextjs.org/docs">Next.js Docs</a>
        <a href="https://jsonplaceholder.typicode.com/">Json Placeholder</a>
      </div>
    </div>
  )
}

export default Navbar
