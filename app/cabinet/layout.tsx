import { Tabs } from '@/components/tabs'
import { ReactNode } from 'react'

const CabinetLayout = ({
  children,
  tabs,
}: {
  children: ReactNode
  tabs: ReactNode
}) => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="mb-5 text-4xl">Cabinet page</h1>
        <div className="flex gap-2">
          <Tabs
            content={[
              { href: '/cabinet/profile', label: 'Edit profile' },
              { href: '/cabinet/users', label: 'Users' },
              { href: '/cabinet/posts', label: 'Posts' },
            ]}
          />
          <div className="flex grow rounded-lg border border-solid border-slate-100 p-2 shadow">
            {children}
            {/* {tabs} */}
            {/* TODO: finish tabs */}
          </div>
        </div>
      </div>
    </>
  )
}

export default CabinetLayout
