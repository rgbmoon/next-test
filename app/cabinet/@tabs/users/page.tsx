import { userGet, userGetAll } from '@/lib/api-user'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { UserCard } from '../../_components/user-card'
import { Link } from '@/components/ui/link'

const CabinetTabUsers = async () => {
  const userId = cookies().get('userId')?.value

  const user = await userGet({ userId: Number(userId) })

  if (!user.isAdmin) {
    redirect('/cabinet')
  }

  const users = await userGetAll()

  // TODO: make add user button, that opens user create modal

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex justify-end">
        <Link href="/cabinet/users/create">Create user</Link>
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-2 max-md:grid-cols-2 max-sm:grid-cols-1">
        {users.map((user) => (
          <UserCard key={user.userId} {...user} />
        ))}
      </div>
    </div>
  )
}

export default CabinetTabUsers
