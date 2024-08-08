import Image from 'next/image'
import { FC } from 'react'

export const LoaderIcon: FC<Partial<HTMLImageElement>> = ({
  width = 40,
  height = 40,
  className,
}) => (
  <Image
    src="/loader.svg"
    alt="Loader image"
    width={width}
    height={height}
    className={className}
  />
)
