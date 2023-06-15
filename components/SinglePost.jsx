import Link from "next/link"

function SinglePost({ title, body, id }) {
  return (
    <div className="border-2 mb-4 px-2 py-4 shadow-sm rounded-md transition lg:hover:scale-105 duration-300">
      <Link href={`/posts/${id}`} className="mb-2 font-semibold text-lg">{title}</Link>
      <p className="text-md">{body}</p>
    </div>
  )
}

export default SinglePost
