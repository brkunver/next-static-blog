async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 60 } })
  return res.json()
}

async function PostPage({ params }) {
  const post = await getPost(params.postId)

  return (
    <div className="container mx-auto">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostPage
