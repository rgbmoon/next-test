'use server'

import { API_URL } from '@/constants/constants'
import { cookies } from 'next/headers'

type Request = { email: string; password: string }
type Response = { token: string; userId: number }

export const userLogin = async (input: Request) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      // TODO: send data correctly
      body: JSON.stringify(input),
    })

    const parsed: Response = await response.json()

    cookies().set('token', parsed.token, {
      expires: new Date().getTime() + 3600000, // 6 hours
    })

    return parsed
  } catch (error) {
    throw new Error('Login failed, contact your administrator')
  }
}
