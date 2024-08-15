'use client'

import { FC, PropsWithChildren, useEffect } from 'react'
import { CloseIcon } from '../icons/close'
import { useRouter } from 'next/navigation'
import { createPortal } from 'react-dom'

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  // this workaround used to prevent body scroll when the modal is rendered
  useEffect(() => {
    document.body.classList.add('overflow-hidden', 'h-auto')

    return () => {
      document.body.classList.remove('overflow-hidden', 'h-auto')
    }
  }, [])

  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[999] flex bg-black bg-opacity-25 p-2">
      <div className="max-md-w-full z-[9999] m-auto flex min-h-[12rem] w-[40rem] flex-col gap-2 rounded-lg border border-solid border-slate-100 bg-white p-3 shadow-lg">
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
    </div>,
    document.body
  )
}
