import { ReactNode } from 'react'

const CabinetLayout = ({
  children,
  tabs,
}: {
  children: ReactNode
  tabs: ReactNode
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-5 text-4xl">Cabinet</h1>
      <div className="mb-4">
        <p>This is your cabinet page.</p>
        <p>Here you can edit your profile info, as well as users and posts.</p>
      </div>
      {children}
      {tabs}
    </div>
  )
}

export default CabinetLayout
