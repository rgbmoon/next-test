import { userGet } from '@/lib/api-user'
import { cookies } from 'next/headers'
import { UserUpdateForm } from '../_components/user-update-form'

const CabinetTabProfile = async () => {
  const userId = cookies().get('userId')?.value
  const user = await userGet({ userId: Number(userId) })

  return <UserUpdateForm defaultValues={user} isAdmin={user.isAdmin} />
}

export default CabinetTabProfile
