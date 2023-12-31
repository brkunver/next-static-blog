import SinglePost from "./SinglePost"

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts", {
    next: {
      revalidate: 60,
    },
  })
  return response.json()
}

async function PostsSection() {
  const {posts} = await getPosts()
  return (
    <section className="lg:grid lg:grid-cols-2 lg:gap-4">
      {posts.map((item) => (
        <SinglePost key={item.id} title={item.title} body={item.body} id={item.id} />
      ))}
    </section>
  )
}

export default PostsSection
