'use client'

import { FC, PropsWithChildren } from 'react'
import { CloseIcon } from '../icons/close'
import { useRouter } from 'next/navigation'

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  // TODO: disable scroll under modal when open

  return (
    <div className="absolute left-0 top-0 z-[999] flex h-[100vh] w-[100vw]">
      <div className="max-md-w-full z-[9999] m-auto flex min-h-[12rem] w-[40rem] flex-col gap-2 rounded-lg border border-solid border-slate-100 bg-white p-3 shadow-lg max-md:m-2">
        <div className="flex justify-end">
          <button
            onClick={() => {
              router.back()
            }}
          >
            <CloseIcon width={24} height={24} />
          </button>
        </div>
        <div className="">{children}</div>
      </div>
      <div className="absolute left-0 top-0 z-[999] flex h-[100vh] w-[100vw] bg-black bg-opacity-25"></div>
    </div>
  )
}
