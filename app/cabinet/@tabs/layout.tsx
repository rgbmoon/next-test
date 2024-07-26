import { Tabs } from '@/components/tabs'
import { ReactNode } from 'react'

const CabinetTabsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-2">
      <Tabs
        content={[
          { href: '/cabinet', label: 'Edit profile' },
          { href: '/cabinet/users', label: 'Users' },
          { href: '/cabinet/posts', label: 'Posts' },
        ]}
      />
      <div className="flex grow rounded-lg border border-solid border-slate-100 p-2 shadow">
        {children}
      </div>
    </div>
  )
}

export default CabinetTabsLayout
