import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

export const middleware = (request: NextRequest) => {
  const {
    nextUrl: { pathname },
    url,
  } = request

  if (pathname.startsWith('/cabinet') && !cookies().has('token')) {
    return NextResponse.redirect(new URL('/login', url))
  }
}
