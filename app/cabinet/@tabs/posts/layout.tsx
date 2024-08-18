import { ReactNode } from 'react'

const CabinetTabPostsLayout = ({
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

export default CabinetTabPostsLayout
