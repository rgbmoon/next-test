import { ReactNode } from 'react'

const CabinetTabUsersLayout = ({
  children,
  modal,
}: {
  children: ReactNode
  modal: ReactNode
}) => {
  return (
    <>
      {children}
      {modal}
    </>
  )
}

export default CabinetTabUsersLayout
