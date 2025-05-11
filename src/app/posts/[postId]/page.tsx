import { fetchPost, fetchPostComments } from '@/hooks/useFetchData'
import Link from 'next/link'

export default async function PostDetail({ params }: { params: { postId: string } }) {
  const post = await fetchPost(params.postId)
  const comments = await fetchPostComments(params.postId)

  return (
    <div className="space-y-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 mb-4 shadow-sm">
        <div className="px-6 py-8">
          <h1 className="text-2xl font-bold text-gray-900">{post.title}</h1>
          <p className="mt-4 text-gray-600">{post.body}</p>
          
          <div className="mt-6">
            <Link 
              href={`/users/${post.userId}`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-green bg-green-600 hover:bg-green-700"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Comments</h2>
        
        <div className="space-y-4">
          {comments.map((comment: any) => (
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