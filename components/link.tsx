'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'

export type LinkProps = {
  href: string
}

export const Link: FC<PropsWithChildren<LinkProps>> = ({ href, children }) => {
  const currPathname = usePathname()

  return (
    <NextLink
      className={`rounded bg-slate-200 p-1 transition ease-in-out ${href === currPathname && 'bg-slate-400 text-white'}`}
      href={href}
    >
      {children}
    </NextLink>
  )
}
