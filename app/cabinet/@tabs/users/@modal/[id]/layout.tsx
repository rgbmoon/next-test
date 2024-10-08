import { Modal } from '@/components/ui/modal'
import { ReactNode } from 'react'

const CabinetTabUsersUpdateModalLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  return <Modal>{children}</Modal>
}

export default CabinetTabUsersUpdateModalLayout
