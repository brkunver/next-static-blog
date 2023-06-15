import Link from "next/link"

function SinglePost({ title, body, id }) {
  return (
    <div className="border-2 mb-4 px-2 py-4 shadow-sm rounded-md transition lg:hover:scale-105 duration-300">
      <Link href={`/posts/${id}`} className="mb-2 font-bold text-lg border-b-2">
        {title}
      </Link>
      <p className="text-lg">{body.slice(0, 50) + "..."}</p>
      <Link href={`/posts/${id}`}>
        <button className="py-1 px-3 mt-2 border text-white bg-blue-900 font-semibold shadow-sm rounded-lg hover:bg-blue-950 transition hover:scale-105 duration-300">
          Read More...
        </button>
      </Link>
    </div>
  )
}

export default SinglePost
