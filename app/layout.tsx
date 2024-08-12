import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { NotistackProvider } from '@/components/providers/snackbar-provider'
import { AuthProvider } from '@/components/providers/session-provider'
import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'

const roboto = Roboto_Condensed({ subsets: ['latin', 'cyrillic'] })

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="h-container container mx-auto flex flex-col p-2">
          <NotistackProvider
            maxSnack={3}
            autoHideDuration={2000}
            preventDuplicate
          >
            <AuthProvider>{children}</AuthProvider>
          </NotistackProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
