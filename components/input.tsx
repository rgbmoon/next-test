import { FC, forwardRef, InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, ...props }, ref) => {
    return (
      <label className="flex w-full flex-col gap-1 text-gray-400 focus-within:text-gray-600">
        {label && <span className="text-sm">{label}</span>}
        <input
          ref={ref}
          className="rounded border border-solid border-slate-200 p-1 text-black outline-none invalid:border-red-700 invalid:text-red-700 focus:border-slate-400"
          {...props}
        ></input>
      </label>
    )
  }
)

Input.displayName = 'Input'
