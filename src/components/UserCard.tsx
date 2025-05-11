import Link from 'next/link'

export default function UserCard({ user }: { user: any }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-5 mb-4 shadow-sm">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
        <p className="mt-1 text-sm text-gray-500">@{user.username}</p>
        <p className="mt-2 text-sm text-gray-600">{user.email}</p>
        <div className="mt-4">
          <Link 
            href={`/users/${user.id}`}
            className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-gray-100 hover:bg-[#F59E0B]/90 transition-colors"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  )
}