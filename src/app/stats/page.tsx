import { fetchUsers, fetchPosts, fetchComments } from '@/hooks/useFetchData'
import StatsChart from '@/components/StatsChart'

export default async function StatsPage() {
  const [users, posts, comments] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
  ])

  const stats = {
    users: users.length,
    posts: posts.length,
    comments: comments.length
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Statistics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Total Users</h3>
          <p className="mt-2 text-3xl font-bold text-gray-600">{stats.users}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Total Posts</h3>
          <p className="mt-2 text-3xl font-bold text-gray-600">{stats.posts}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Total Comments</h3>
          <p className="mt-2 text-3xl font-bold text-gray-600">{stats.comments}</p>
        </div>
      </div>

      <StatsChart stats={stats} />
    </div>
  )
}