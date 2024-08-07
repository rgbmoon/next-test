import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { url } = request

  cookies().delete('token')

  return NextResponse.redirect(new URL('/', url))
}
