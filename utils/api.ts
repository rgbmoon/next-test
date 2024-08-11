import { cookies } from 'next/headers'

export type APIError = {
  error: string
  details?: Array<{
    message: string
  }>
}

export const formatAPIError = ({ error, details }: APIError) => {
  const errorDetailsParsed = details?.map(({ message }) => message)

  return `${error}. ${errorDetailsParsed?.join(', ') ?? ''}`
}

export const fetchWithAuth = (input: RequestInfo | URL, init?: RequestInit) => {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Auth token not found')
  }

  const { headers, ...restInit } = init ?? {}

  return fetch(input, {
    headers: { Authorization: `Bearer ${token}`, ...headers },
    ...restInit,
  })
}
