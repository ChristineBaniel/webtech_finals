import { fetchPosts } from '@/hooks/useFetchData'
import PostCard from '@/components/PostCard'

export default async function PostsPage() {
  const posts = await fetchPosts()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Posts</h1>
      
      <div className="space-y-4">
        {posts.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}