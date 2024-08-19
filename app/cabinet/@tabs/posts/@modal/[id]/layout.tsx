import { Modal } from '@/components/ui/modal'
import { ReactNode } from 'react'

const CabinetTabPostsUpdateModalLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  return <Modal>{children}</Modal>
}

export default CabinetTabPostsUpdateModalLayout
