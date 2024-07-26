import { FC } from 'react'
import { Link } from './link'

type Props = {
  content: Array<{
    href: string
    label: string
  }>
  className?: string
}

export const Tabs: FC<Props> = ({ content, className }) => {
  return (
    <div
      className={`flex min-w-48 flex-col gap-2 rounded-lg border border-solid border-slate-100 p-2 align-middle shadow ${className}`}
    >
      {content.map(({ href, label }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </div>
  )
}
