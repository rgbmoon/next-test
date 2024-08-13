'use client'

import { FC, PropsWithChildren } from 'react'
import NextLink from 'next/link'
import { CloseIcon } from '../icons/close'

type Props = {
  closeHref: string
}

export const Modal: FC<PropsWithChildren<Props>> = ({
  children,
  closeHref,
}) => {
  return (
    <div className="absolute left-0 top-0 z-[999] flex h-[100vh] w-[100vw]">
      <div className="z-[9999] m-auto flex min-h-60 min-w-60 flex-col gap-2 rounded-lg border border-solid border-slate-100 bg-white p-3 shadow-lg">
        <div className="flex justify-end">
          {/* TODO: fix unmount after navigation */}
          <NextLink href={closeHref}>
            <CloseIcon width={24} height={24} />
          </NextLink>
        </div>
        <div className="">{children}</div>
      </div>
      <div className="absolute left-0 top-0 z-[999] flex h-[100vh] w-[100vw] bg-black bg-opacity-25"></div>
    </div>
  )
}
