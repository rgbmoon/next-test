import { FC, forwardRef, InputHTMLAttributes } from 'react'
import { FieldErrors } from 'react-hook-form'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  errors?: FieldErrors
}

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, errors, ...props }, ref) => {
    const error = errors?.[props.name!]

    return (
      <label className="flex w-full flex-col gap-1 text-gray-400 focus-within:text-gray-600">
        {label && <span className="text-sm">{label}</span>}
        <input
          ref={ref}
          className={`${error && '!focus:border-red-600 !border-red-600'} rounded border border-solid border-slate-200 p-1 text-black outline-none focus:border-slate-400`}
          {...props}
        ></input>
        {error?.type === 'required' && (
          <span className="text-xs text-red-600">This field is required</span>
        )}
        {error?.type === 'minLength' && (
          <span className="text-xs text-red-600">
            This field requires more characters
          </span>
        )}
      </label>
    )
  }
)

Input.displayName = 'Input'
