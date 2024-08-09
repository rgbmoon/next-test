import { FC, InputHTMLAttributes, ReactNode } from 'react'
import { FieldErrors, RefCallBack } from 'react-hook-form'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  errors?: FieldErrors
  inputRef?: RefCallBack
  endAdornment?: ReactNode
}

export const Input: FC<InputProps> = ({
  label,
  errors,
  inputRef,
  className,
  endAdornment,
  ...props
}) => {
  const error = errors?.[props.name!]

  return (
    <label className="flex w-full flex-col gap-1 text-gray-400 focus-within:text-gray-600">
      {label && <span className="text-sm">{label}</span>}
      <div className="relative">
        <input
          ref={inputRef}
          className={`${error && '!focus:border-red-600 !border-red-600'} ${className ?? ''} ${endAdornment ? 'pr-8' : ''} w-full rounded border border-solid border-slate-200 p-1 text-black outline-none focus:border-slate-400`}
          {...props}
        ></input>
        {endAdornment && (
          <div className="absolute bottom-[3px] right-[3px] flex h-7 w-7">
            {endAdornment}
          </div>
        )}
      </div>
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
