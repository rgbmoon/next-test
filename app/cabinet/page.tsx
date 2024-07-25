import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Cabinet page title',
  description: 'Cabinet page description',
}

const Cabinet = () => {
  return <h1 className="text-4xl">Cabinet page</h1>
}

export default Cabinet
