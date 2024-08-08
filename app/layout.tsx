import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Link } from '@/components/ui/link'
import NextLink from 'next/link'
import { NotistackProvider } from '@/components/providers/snackbar-provider'
import { cookies } from 'next/headers'
import { AuthProvider } from '@/components/providers/session-provider'
import { LogoIcon } from '@/components/icons/logo'

const roboto = Roboto_Condensed({ subsets: ['latin', 'cyrillic'] })

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  const isAuthorized = cookies().has('token')

  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="fixed top-0 z-50 h-12 w-full bg-white shadow">
          <div className="container mx-auto flex items-center gap-2 p-2">
            <NextLink href="/">
              <LogoIcon width={120} height={24} />
            </NextLink>
            <nav className="ml-auto flex gap-2">
              {isAuthorized ? (
                <>
                  <Link href="/cabinet">Cabinet</Link>
                  <Link href="/logout">Logout</Link>
                </>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </nav>
          </div>
        </header>
        <main className="h-container container mx-auto flex flex-col p-2">
          <NotistackProvider
            maxSnack={3}
            autoHideDuration={2000}
            preventDuplicate
          >
            <AuthProvider>{children}</AuthProvider>
          </NotistackProvider>
        </main>
        <footer className="bg-slate-700">
          <div className="container mx-auto flex h-12 flex-row items-center justify-between gap-2 p-2 text-white">
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
