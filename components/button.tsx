import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

export const Button: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, ...props }) => {
  return (
    <button
      className="rounded bg-slate-200 p-1 outline-none transition ease-in-out hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-400"
      {...props}
    >
      {children}
    </button>
  )
}
