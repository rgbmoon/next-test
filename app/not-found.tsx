import { Link } from '@/components/ui/link'

const NotFound = () => {
  return (
    <div className="my-auto flex flex-col items-center justify-center gap-2 self-center">
      <div className="flex items-center gap-2">
        <h1 className="text-4xl">404</h1>
        <div className="">Page not found</div>
      </div>
      <Link href="/">Home page</Link>
    </div>
  )
}

export default NotFound
