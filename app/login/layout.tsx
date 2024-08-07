import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Login page title',
  description: 'Login page description',
}

const LoginLayout = ({ children }: { children: ReactNode }) => {
  if (cookies().has('token')) {
    redirect('/cabinet')
  }

  return <>{children}</>
}

export default LoginLayout
