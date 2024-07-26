import { Link } from '@/components/link'

export default async function NotFound() {
  return (
    <div className="my-auto flex items-center justify-center gap-2 self-center">
      <h1 className="text-4xl">404</h1>
      <div className="">Page not found</div>
    </div>
  )
}
