'use client'

import { FC, useState } from 'react'
import { Input, InputProps } from './input'
import { EyeOpenIcon } from '../icons/eye-open'
import { EyeClosedIcon } from '../icons/eye-closed'

export const PasswordInput: FC<Omit<InputProps, 'type'>> = (props) => {
  const [isVisible, setVisible] = useState(false)

  return (
    <Input
      type={isVisible ? 'text' : 'password'}
      endAdornment={
        <button type="button" onClick={() => setVisible(!isVisible)}>
          {isVisible ? (
            <EyeClosedIcon width={28} height={28} />
          ) : (
            <EyeOpenIcon width={28} height={28} />
          )}
        </button>
      }
      {...props}
    />
  )
}
