import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex px-2 justify-between lg:py-0 lg:justify-center space-x-4 items-center bg-blue-900 h-12">
      <Link href="/" className="text-xl font-bold text-white">
        Next Blog
      </Link>
      <div className="hidden lg:flex text-lg text-center space-x-6 text-white">
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <a href="https://github.com/brkunver/next-static-blog">Github Repo</a>
        <a href="https://github.com/brkunver">github/brkunver</a>
        <a href="https://nextjs.org/docs">Next.js Docs</a>
        <a href="https://jsonplaceholder.typicode.com/">Json Placeholder</a>
      </div>
      <button className="lg:hidden text-white">More...</button>
    </nav>
  )
}

export default Navbar
