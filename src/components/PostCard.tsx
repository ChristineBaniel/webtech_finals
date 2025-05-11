import Link from 'next/link'

export default function PostCard({ post }: { post: any }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 mb-4 shadow-sm">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">
          <Link href={`/posts/${post.id}`} className="hover:text-primary-600">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.body}</p>
        <div className="mt-4">
          <Link 
            href={`/posts/${post.id}`}
            className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-100 hover:bg-[#F59E0B]/90 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}