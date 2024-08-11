'use server'

import { API_URL } from '@/constants/constants'
import {
  UserGetRequest,
  UserGetResponse,
  UserUpdateRequest,
  UserUpdateResponse,
} from '@/types/api'
import { APIError, fetchWithAuth, formatAPIError } from '@/utils/api'

export const userUpdate = async (
  input: UserUpdateRequest
): Promise<UserUpdateResponse> => {
  const { userId, ...inputBody } = input

  const response = await fetchWithAuth(`${API_URL}/users/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(inputBody),
  })

  if (!response.ok) {
    const errorBody: APIError = await response.json()
    throw new Error(formatAPIError(errorBody))
  }

  return response.json()
}

export const userGet = async ({
  userId,
}: UserGetRequest): Promise<UserGetResponse> => {
  const response = await fetchWithAuth(`${API_URL}/users/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })

  if (!response.ok) {
    const errorBody: APIError = await response.json()
    throw new Error(formatAPIError(errorBody))
  }

  return response.json()
}
