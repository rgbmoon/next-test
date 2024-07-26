import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Cabinet page title',
  description: 'Cabinet page description',
}

const Cabinet = () => {
  // finish redirect to profile
  // redirect('cabinet/profile')

  return <>User info</>
}

export default Cabinet
