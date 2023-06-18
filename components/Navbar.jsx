"use client"
import Link from "next/link"
import menu from "@/assets/menu.png"
import Image from "next/image"
import { useState, useRef } from "react"
import { CSSTransition } from "react-transition-group"
const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const nodeRef = useRef(null)
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
        <button onClick={() => setIsMenuVisible((state) => !state)} className="lg:hidden text-white transition active:scale-105">
          <Image src={menu} alt="menu button" className="w-8 text-white" />
        </button>
      </nav>
      <CSSTransition
        nodeRef={nodeRef}
        in={isMenuVisible}
        classNames={{
          enter: "scale-0 opacity-0",
          enterActive: "scale-100 opacity-100 transition-all ease-in-out duration-900",
          exit: "opacity-100 scale-100",
          exitActive: "transition-all duration-300 scale-0 opacity-0",
        }}
        timeout={100}
        unmountOnExit
      >
        <div ref={nodeRef} className={"flex flex-col items-center text-center font-bold underline bg-white"}>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <a href="https://github.com/brkunver/next-static-blog">Github Repo</a>
          <a href="https://github.com/brkunver">github/brkunver</a>
          <a href="https://nextjs.org/docs">Next.js Docs</a>
          <a href="https://jsonplaceholder.typicode.com/">Json Placeholder</a>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Navbar
