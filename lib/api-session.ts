'use server'

import { API_URL } from '@/constants/constants'
import { LoginRequest, LoginResponse } from '@/types/api'
import { APIError, formatAPIError } from '@/utils/api'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const login = async (input: LoginRequest) => {
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

  const responseBody: LoginResponse = await response.json()

  cookies().set('token', responseBody.token, {
    maxAge: 3600 * 6, // 6 hours
  })

  cookies().set('userId', responseBody.userId.toString(), {
    maxAge: 3600 * 6, // 6 hours
  })

  redirect('/cabinet')
}
