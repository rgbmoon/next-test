import { FC, InputHTMLAttributes } from 'react'
import { RefCallBack } from 'react-hook-form'

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label?: string
  inputRef?: RefCallBack
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  inputRef,
  className,
  ...props
}) => {
  return (
    <label className="flex w-full flex-col gap-1 text-gray-400 focus-within:text-gray-600">
      <div className="flex gap-2">
        {label && <span className="flex self-center text-sm">{label}</span>}
        <input
          ref={inputRef}
          type="checkbox"
          className={`${className ?? ''} h-5 w-5`}
          {...props}
        ></input>
      </div>
    </label>
  )
}
