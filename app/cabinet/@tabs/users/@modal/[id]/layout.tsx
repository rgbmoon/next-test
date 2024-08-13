import { Modal } from '@/components/ui/modal'
import { ReactNode } from 'react'

const CabinetTabUsersModalLayout = ({ children }: { children: ReactNode }) => {
  return <Modal closeHref="/cabinet/users">{children}</Modal>
}

export default CabinetTabUsersModalLayout
