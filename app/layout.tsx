import Image from 'next/image'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Link } from '@/components/link'
import NextLink from 'next/link'

const roboto = Roboto_Condensed({ subsets: ['latin', 'cyrillic'] })

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="fixed top-0 z-50 h-12 w-full bg-white shadow">
          <div className="container mx-auto flex items-center gap-2 p-2">
            <NextLink href="/">
              <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={120}
                height={24}
              />
            </NextLink>
            <nav className="ml-auto flex gap-2">
              <Link href="/cabinet">Cabinet</Link>
            </nav>
          </div>
        </header>
        <main className="h-container container mx-auto flex flex-col p-2">
          {children}
        </main>
        <footer className="bg-slate-700">
          <div className="container mx-auto flex flex-row items-center justify-between gap-2 p-2 text-white">
            <div className="text-sm">
              Made with love by{' '}
              <NextLink
                className="text-sky-300 transition ease-in-out hover:text-sky-500"
                href="https://github.com/rgbmoon"
                target="_blank"
              >
                me
              </NextLink>
              .
            </div>
            <div className="text-sm">2024</div>
          </div>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout
