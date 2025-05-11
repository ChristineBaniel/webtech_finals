/* import { fetchUsers } from '@/hooks/useFetchData'
import UserCard from '@/components/UserCard'

export default async function UsersPage() {
  const users = await fetchUsers()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Users</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user: any) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
} */

import { fetchUsers } from '@/hooks/useFetchData'
import UserCard from '@/components/UserCard'

export default async function UsersPage() {
  const users = await fetchUsers()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Users</h1>
      
      <div className="space-y-4">
        {users.map((user: any) => (
          <div key={user.id} className="border-b border-gray-200 pb-4 last:border-b-0">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  )
}