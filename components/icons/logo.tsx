import Image from 'next/image'
import { FC } from 'react'

export const LogoIcon: FC<Partial<HTMLImageElement>> = ({
  width,
  height,
  className,
}) => (
  <Image
    src="/next.svg"
    alt="Next.js Logo"
    width={width}
    height={height}
    className={className}
  />
)
