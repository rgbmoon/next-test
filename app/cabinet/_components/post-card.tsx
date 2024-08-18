'use client'

import { Post, User } from '@/types/api'
import { FC } from 'react'
import NextLink from 'next/link'

type Props = Post & {
  isAdmin: boolean
  className?: string
}

export const PostCard: FC<Props> = ({
  id,
  title,
  description,
  className,
  isAdmin,
}) => {
  return (
    <NextLink
      href={`/cabinet/users/${id}`}
      className={`${className ?? ''} ease flex h-32 cursor-pointer flex-col gap-1 rounded border border-solid border-slate-300 p-2 transition-all hover:border-sky-600 hover:shadow-lg`}
    >
      <h3 className="overflow-hidden text-ellipsis text-nowrap text-lg">
        {title}
      </h3>
      <div className="overflow-hidden text-ellipsis text-nowrap text-slate-600">
        {description}
      </div>
      {/* TODO: add creator info after BE implementation */}
      {/* {isAdmin && (
        <div className="overflow-hidden text-ellipsis text-nowrap text-sm text-slate-400">
          <span className="text-sky-800">creator: </span>
          {user.email}
        </div>
      )} */}
    </NextLink>
  )
}
