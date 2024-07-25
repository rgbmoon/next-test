import Image from 'next/image'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Link } from '@/components/link'

const roboto = Roboto_Condensed({ subsets: ['latin', 'cyrillic'] })

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="fixed top-0 flex h-14 w-full items-center gap-2 bg-white p-2 shadow">
          <Image src="/next.svg" alt="Next.js Logo" width={120} height={24} />
          <nav className="ml-auto flex gap-2">
            <Link href="/">Home</Link>
            <Link href="/cabinet">Cabinet</Link>
          </nav>
        </header>
        <main className="h-container flex flex-col p-2">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
