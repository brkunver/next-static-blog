import Link from "next/link"
import axios from "axios";

async function getPost(id) {
  const res = await axios.get(`https://dummyjson.com/posts/${id}`)
    return res.data
}

async function PostPage({ params }) {
  const post = await getPost(params.postId)

  return (
    <div className="px-2 container mx-auto lg:px-0 lg:w-1/3">
      <h1 className="font-bold text-3xl mt-10">{post.title}</h1>
      <p className="mt-6 text-lg font-medium">{post.body}</p>
      <Link href="/">
        <button className="bg-blue-700 text-bold text-xl rounded-lg text-white px-4 py-1 mt-4 hover:bg-blue-900">
          Return to Home
        </button>
      </Link>
    </div>
  )
}

export default PostPage
