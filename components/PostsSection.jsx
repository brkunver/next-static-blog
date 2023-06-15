import SinglePost from "./SinglePost"

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_page=1", {
    next: {
      revalidate: 60,
    },
  })
  return response.json()
}

async function PostsSection() {
  const posts = await getPosts()
  console.log(posts[0])
  return (
    <section>
      {posts.map((item) => (
        <SinglePost key={item.id} title={item.title} body={item.body} id={item.id} />
      ))}
    </section>
  )
}

export default PostsSection
