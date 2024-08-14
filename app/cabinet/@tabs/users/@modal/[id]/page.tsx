import { UserUpdateForm } from '@/app/cabinet/_components/user-update-form'
import { userGet } from '@/lib/api-user'
import { cookies } from 'next/headers'

const CabinetTabUsersModal = async ({
  params: { id: userToEditid },
}: {
  params: { id: string }
}) => {
  const userId = cookies().get('userId')?.value
  const user = await userGet({ userId: Number(userId) })

  const userToEdit = await userGet({ userId: Number(userToEditid) })

  return <UserUpdateForm defaultValues={userToEdit} isAdmin={user.isAdmin} />
}

export default CabinetTabUsersModal
