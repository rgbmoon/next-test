'use client'

import { User } from '@/types/api'
import { FC } from 'react'
import NextLink from 'next/link'

type Props = User & {
  className?: string
}

export const UserCard: FC<Props> = ({
  userId,
  email,
  firstName,
  lastName,
  isAdmin,
  className,
}) => {
  return (
    <NextLink
      href={`/cabinet/users/${userId}`}
      className={`${className ?? ''} ease flex h-32 cursor-pointer flex-col gap-1 rounded border border-solid border-slate-300 p-2 transition-all hover:border-sky-600 hover:shadow-lg`}
    >
      <span className="overflow-hidden text-ellipsis text-nowrap text-slate-600">
        {email}
      </span>
      <span className="overflow-hidden text-ellipsis text-nowrap">
        {firstName} {lastName}
      </span>
      {isAdmin && <span className="text-sky-800">admin</span>}
    </NextLink>
  )
}
