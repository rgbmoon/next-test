'use server'

import { API_URL } from '@/constants/constants'
import {
  PostsCreateRequest,
  PostsCreateResponse,
  PostsDeleteRequest,
  PostsDeleteResponse,
  PostsGetRequest,
  PostsGetResponse,
  PostsUpdateRequest,
  PostsUpdateResponse,
} from '@/types/api'
import { APIError, fetchWithAuth, formatAPIError } from '@/utils/api'

export const postCreate = async (
  input: PostsCreateRequest
): Promise<PostsCreateResponse> => {
  const response = await fetchWithAuth(`${API_URL}/posts`, {
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

export const postUpdate = async (
  input: PostsUpdateRequest
): Promise<PostsUpdateResponse> => {
  const { id, ...inputBody } = input

  const response = await fetchWithAuth(`${API_URL}/posts/${id}`, {
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

export const postsGet = async (
  params?: PostsGetRequest
): Promise<PostsGetResponse> => {
  const response = await fetchWithAuth(`${API_URL}/posts`, {
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

export const postDelete = async ({
  id,
}: PostsDeleteRequest): Promise<PostsDeleteResponse> => {
  const response = await fetchWithAuth(`${API_URL}/posts/${id}`, {
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
