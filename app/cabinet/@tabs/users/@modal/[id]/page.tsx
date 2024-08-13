import { UserUpdateForm } from '@/app/cabinet/_components/user-update-form'
import { userGet } from '@/lib/api-user'
import { cookies } from 'next/headers'

const CabinetTabUsersModal = async () => {
  const userId = cookies().get('userId')?.value
  const user = await userGet({ userId: Number(userId) })

  return <UserUpdateForm defaultValues={user} isAdmin={user.isAdmin} />
}

export default CabinetTabUsersModal
