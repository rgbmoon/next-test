import { Modal } from '@/components/ui/modal'
import { ReactNode } from 'react'

const CabinetTabPostsCreateModalLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  return <Modal>{children}</Modal>
}

export default CabinetTabPostsCreateModalLayout
