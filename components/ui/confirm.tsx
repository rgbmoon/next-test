'use client'

import { FC, MouseEventHandler, useEffect } from 'react'
import { CloseIcon } from '../icons/close'
import { Button } from './button'

type Props = {
  title: string
  isOpen: boolean
  onClose: MouseEventHandler<HTMLButtonElement>
  onConfirm: MouseEventHandler<HTMLButtonElement>
}

export const Confirm: FC<Props> = ({ title, isOpen, onClose, onConfirm }) => {
  // this workaround used to prevent body scroll when the modal is rendered
  useEffect(() => {
    document.body.classList.add('overflow-hidden', 'h-auto')

    return () => {
      document.body.classList.remove('overflow-hidden', 'h-auto')
    }
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[999] flex p-2">
      <div className="max-md-w-full z-[9999] m-auto flex w-48 flex-col gap-2 rounded-lg border border-solid border-slate-100 bg-white p-3 shadow-lg">
        <div className="flex justify-between gap-2">
          {title}
          <button onClick={onClose}>
            <CloseIcon width={24} height={24} />
          </button>
        </div>
        <div className="flex gap-2">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onConfirm}>OK</Button>
        </div>
      </div>
    </div>
  )
}
