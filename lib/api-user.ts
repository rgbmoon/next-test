'use server'

import { API_URL } from '@/constants/constants'
import {
  UserCreateRequest,
  UserCreateResponse,
  UserDeleteRequest,
  UserDeleteResponse,
  UserGetRequest,
  UserGetResponse,
  UsersGetAllRequest,
  UsersGetAllResponse,
  UserUpdateRequest,
  UserUpdateResponse,
} from '@/types/api'
import { APIError, fetchWithAuth, formatAPIError } from '@/utils/api'

export const userCreate = async (
  input: UserCreateRequest
): Promise<UserCreateResponse> => {
  const response = await fetchWithAuth(`${API_URL}/users`, {
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

  return response.json()
}

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

export const userGetAll = async (
  params?: UsersGetAllRequest
): Promise<UsersGetAllResponse> => {
  const response = await fetchWithAuth(`${API_URL}/users`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
    body: JSON.stringify(params),
  })

  if (!response.ok) {
    const errorBody: APIError = await response.json()
    throw new Error(formatAPIError(errorBody))
  }

  return response.json()
}

export const userDelete = async ({
  userId,
}: UserDeleteRequest): Promise<UserDeleteResponse> => {
  const response = await fetchWithAuth(`${API_URL}/users/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  })

  if (!response.ok) {
    const errorBody: APIError = await response.json()
    throw new Error(formatAPIError(errorBody))
  }

  return response.json()
}
