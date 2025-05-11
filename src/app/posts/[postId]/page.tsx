import { fetchPost, fetchPostComments } from '@/hooks/useFetchData'
import Link from 'next/link'

interface Comment {
  id: number
  name: string
  email: string
  body: string
}

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

interface PostPageProps {
  params: {
    postId: string
  }
}

export default async function PostDetail({ params }: PostPageProps) {
  const post: Post = await fetchPost(params.postId)
  const comments: Comment[] = await fetchPostComments(params.postId)

  return (
    <div className="space-y-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 mb-4 shadow-sm">
        <div className="px-6 py-8">
          <h1 className="text-2xl font-bold text-gray-900">{post.title}</h1>
          <p className="mt-4 text-gray-600">{post.body}</p>
          
          <div className="mt-6">
            <Link 
              href={`/users/${post.userId}`}
              className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-100 hover:bg-[#F59E0B]/90 transition-colors"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Comments</h2>
        
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white/70 backdrop-blur-sm rounded-lg p-5 mb-4 shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{comment.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{comment.email}</p>
                <p className="mt-2 text-sm text-gray-600">{comment.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}