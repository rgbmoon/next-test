import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { url } = request

  cookies().delete('token')
  cookies().delete('userId')

  return NextResponse.redirect(new URL('/', url))
}
