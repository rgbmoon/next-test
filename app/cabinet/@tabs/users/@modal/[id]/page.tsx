import { UserUpdateForm } from '@/app/cabinet/_components/user-update-form'
import { userGet } from '@/lib/api-user'

const CabinetTabUsersUpdateModal = async ({
  params: { id: userId },
}: {
  params: { id: string }
}) => {
  const user = await userGet({ userId: Number(userId) })

  return <UserUpdateForm defaultValues={user} />
}

export default CabinetTabUsersUpdateModal
