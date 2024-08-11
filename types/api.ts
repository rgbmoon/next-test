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

export type UserUpdateRequest = Partial<
  Omit<User, 'createdAt' | 'updatedAt'> & { password: string }
>

export type UserUpdateResponse = User
