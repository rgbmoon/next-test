import { Tabs } from '@/components/ui/tabs'
import { userGet } from '@/lib/api-user'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Cabinet page title',
  description: 'Cabinet page description',
}

const CabinetTabsLayout = async ({ children }: { children: ReactNode }) => {
  const userId = cookies().get('userId')?.value
  const user = await userGet({ userId: Number(userId) })

  return (
    <div className="flex gap-2 max-md:flex-col">
      <div className="top-14">
        <Tabs
          className="sticky top-14"
          content={[
            { href: '/cabinet', label: 'Edit profile' },
            { href: '/cabinet/users', label: 'Users', hidden: !user.isAdmin },
            { href: '/cabinet/posts', label: 'Posts' },
          ]}
        />
      </div>
      <div className="flex max-w-screen-md grow rounded-lg border border-solid border-slate-100 p-2 shadow">
        {children}
      </div>
    </div>
  )
}

export default CabinetTabsLayout
