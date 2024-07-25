import { Tabs } from '@/components/tabs'
import { ReactNode } from 'react'

const CabinetLayout = ({
  children,
  // tabs,
}: {
  children: ReactNode
  tabs: ReactNode
}) => {
  return (
    <>
      <div className="mb-4">{children}</div>
      <div className="flex gap-2">
        <Tabs
          content={[
            { href: '/cabinet/profile', label: 'Edit profile' },
            { href: '/cabinet/users', label: 'Users' },
            { href: '/cabinet/posts', label: 'Posts' },
          ]}
        />
        {/* <div className="m-2">{tabs}</div> */}
        {/* TODO: finish tabs */}
      </div>
    </>
  )
}

export default CabinetLayout
