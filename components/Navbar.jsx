import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-4 items-center bg-blue-900 h-12">
      <Link href="/" className="text-xl font-bold mx-2 text-white">
        Next Blog
      </Link>
      <div className="flex text-lg text-center space-x-6 text-white">
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <a href="https://github.com/brkunver">github/brkunver</a>
        <a href="https://nextjs.org/docs">Next.js Docs</a>
        <a href="https://jsonplaceholder.typicode.com/">Json Placeholder</a>
      </div>
    </nav>
  )
}

export default Navbar
