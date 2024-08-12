import NextLink from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-slate-700">
      <div className="container mx-auto flex h-12 flex-row items-center justify-between gap-2 p-2 text-white">
        <div className="text-sm">
          Made with love by{' '}
          <NextLink
            className="text-sky-300 transition ease-in-out hover:text-sky-500"
            href="https://github.com/rgbmoon"
            target="_blank"
          >
            me
          </NextLink>
          .
        </div>
        <div className="text-sm">2024</div>
      </div>
    </footer>
  )
}
