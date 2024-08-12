import { Link } from '@/components/ui/link'
import { cookies } from 'next/headers'
import { userGet } from '@/lib/api-user'
import { LogoIcon } from '@/components/icons/logo'
import NextLink from 'next/link'

export const Header = async () => {
  const isAuthorized = cookies().has('token')
  const userId = cookies().get('userId')?.value

  let user = null

  try {
    user = await userGet({ userId: Number(userId) })
  } catch {}

  return (
    <header className="fixed top-0 z-50 h-12 w-full bg-white shadow">
      <div className="container mx-auto flex items-center gap-2 p-2">
        <NextLink href="/">
          <LogoIcon width={120} height={24} />
        </NextLink>
        <nav className="ml-auto flex min-w-0 items-center gap-2">
          {isAuthorized ? (
            <>
              {!!user && (
                <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                  {user.isAdmin && (
                    <span className="text-sky-800">admin: </span>
                  )}
                  {user.firstName} {user.lastName} ({user.email})
                </div>
              )}
              <Link href="/cabinet">Cabinet</Link>
              <Link href="/logout">Logout</Link>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  )
}
