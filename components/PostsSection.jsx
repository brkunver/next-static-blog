import SinglePost from "./SinglePost"
import axios from "axios";

async function getPosts() {
  const response = await axios.get("https://dummyjson.com/posts")
  return response.data
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
