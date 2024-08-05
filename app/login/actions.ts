'use server'

import { API_URL } from '@/constants/constants'
import { APIError, formatAPIError } from '@/utils/api'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type RequestBody = {
  email: string
  password: string
}

type ResponseBody = {
  token: string
  userId: number
}

export const userLogin = async (input: RequestBody) => {
  const response = await fetch(`${API_URL}/login`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(input),
  })

  if (!response.ok) {
    const errorBody: APIError = await response.json()
    throw new Error(formatAPIError(errorBody))
  }

  const responseBody: ResponseBody = await response.json()

  cookies().set('token', responseBody.token, {
    expires: new Date().getTime() + 3600000, // 6 hours
  })

  redirect('/cabinet')
}
