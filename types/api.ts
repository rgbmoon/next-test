// Shared

type Sort = {
  createdAt?: 'ASC' | 'DESC'
  updatedAt?: 'ASC' | 'DESC'
}

// Session

export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  token: string
  userId: number
}

// User

export type User = {
  userId: number
  email: string
  isAdmin: boolean
  firstName: string
  lastName: string
  createdAt: Date
  updatedAt: Date
}

export type UserGetRequest = Pick<User, 'userId'>
export type UserGetResponse = User

export type UsersGetAllRequest = {
  sort: Sort
  search?: string
  limit?: number
  offset?: number
}
export type UsersGetAllResponse = User[]

export type UserCreateRequest = {
  email: string
  password: string
  isAdmin: boolean
  firstName: string
  lastName: string
}
export type UserCreateResponse = User

export type UserUpdateRequest = Partial<UserCreateRequest> &
  Pick<User, 'userId'>
export type UserUpdateResponse = User
