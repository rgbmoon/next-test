import { userGet } from '@/lib/api-user'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const CabinetTabUsers = async () => {
  const userId = cookies().get('userId')?.value

  const user = await userGet({ userId: Number(userId) })

  if (!user.isAdmin) redirect('/cabinet')

  return <div className="">Users tab</div>
}

export default CabinetTabUsers
