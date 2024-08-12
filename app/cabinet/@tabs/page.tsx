import { userGet } from '@/lib/api-user'
import { cookies } from 'next/headers'
import { ProfileUpdateForm } from '../_components/profile-update-form'

const CabinetTabProfile = async () => {
  const userId = cookies().get('userId')?.value
  const user = await userGet({ userId: Number(userId) })

  return <ProfileUpdateForm defaultValues={user} />
}

export default CabinetTabProfile
