import { userGet, usersGet } from '@/lib/api-user'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const CabinetTabUsers = async () => {
  const userId = cookies().get('userId')?.value

  const user = await userGet({ userId: Number(userId) })

  if (!user.isAdmin) redirect('/cabinet')

  // TODO: make ASC/DESC sort by createdAt/updatedAt, pagination, search
  const users = await usersGet()

  return (
    <div className="">
      {users.map((user) => (
        // TODO: make user card
        <div key={user.userId} className="">
          {user.email}
        </div>
      ))}
    </div>
  )
}

export default CabinetTabUsers
