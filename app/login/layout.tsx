import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Login page title',
  description: 'Login page description',
}

const LoginLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
}

export default LoginLayout
