import Hero from "@/components/Hero"
import PostsSection from "@/components/PostsSection"
export default function Home() {
  return (
    <main className="px-2 container mx-auto lg:px-0">
      <Hero />
      <PostsSection />
    </main>
  )
}
