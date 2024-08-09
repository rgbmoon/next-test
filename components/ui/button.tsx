import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

export const Button: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`${className} w-fit rounded bg-slate-200 p-1 outline-none transition ease-in-out hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-slate-200`}
      {...props}
    >
      {children}
    </button>
  )
}
