import { Modal } from '@/components/ui/modal'
import { ReactNode } from 'react'

const CabinetTabUsersCreateModalLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  return <Modal>{children}</Modal>
}

export default CabinetTabUsersCreateModalLayout
