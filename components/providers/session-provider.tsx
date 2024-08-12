'use client'

import { FC, PropsWithChildren, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const [isUIRefreshed, setUIRefreshed] = useState(false)

  // TODO: make refreshSession method and token, remove setInterval

  useEffect(() => {
    const authCheckInterval = setInterval(() => {
      // When we can't get the token cookie, that means user was logged out or session was expired
      const hasToken = !!Cookies.get('token')

      if (!hasToken && !isUIRefreshed) {
        // Then we need to refresh the page, to get auth conditional server components updated
        router.refresh()
        setUIRefreshed(true)
      }

      if (hasToken && isUIRefreshed) {
        setUIRefreshed(false)
      }
    }, 500)

    return () => clearInterval(authCheckInterval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUIRefreshed])

  return <>{children}</>
}
