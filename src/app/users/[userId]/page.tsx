import { fetchUser, fetchUserPosts } from '@/hooks/useFetchData'
import Link from 'next/link'

export default async function UserProfile({ params }: { params: { userId: string } }) {
  const user = await fetchUser(params.userId)
  const posts = await fetchUserPosts(params.userId)

  return (
    <div className="space-y-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 mb-4 shadow-sm">
        <div className="px-6 py-8">
          <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
          <p className="mt-1 text-sm text-gray-500">@{user.username}</p>
          
          <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <p className="mt-1 text-sm text-gray-900">{user.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Phone</h3>
              <p className="mt-1 text-sm text-gray-900">{user.phone}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Website</h3>
              <p className="mt-1 text-sm text-gray-900">{user.website}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Company</h3>
              <p className="mt-1 text-sm text-gray-900">{user.company?.name}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900">Address</h3>
            <div className="mt-2 text-sm text-gray-700">
              <p>{user.address?.street}</p>
              <p>{user.address?.suite}</p>
              <p>{user.address?.city}, {user.address?.zipcode}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Posts by {user.name}</h2>
        
        <div className="space-y-4">
          {posts.map((post: any) => (
            <div key={post.id} className="bg-white/70 backdrop-blur-sm rounded-lg p-5 mb-4 shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  <Link href={`/posts/${post.id}`} className="hover:text-primary-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-600">{post.body}</p>
                <div className="mt-4">
                  <Link 
                    href={`/posts/${post.id}`}
                    className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-100 hover:bg-[#F59E0B]/90 transition-colors"
                  >
                    View Post
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}