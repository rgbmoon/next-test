// Shared

type BaseSort = {
  createdAt?: 'ASC' | 'DESC'
  updatedAt?: 'ASC' | 'DESC'
}

type BaseFilters = {
  createdAt?: {
    from?: Date
    to?: Date
  }
  updatedAt?: {
    from?: Date
    to?: Date
  }
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
  sort: BaseSort
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

export type UserDeleteRequest = Pick<User, 'userId'>
export type UserDeleteResponse = {
  message: string
}

// Post

export type Post = {
  id: number
  userId: number
  title: string
  description: string
  blocks: Array<{
    type: 'paragraph' | 'qoute'
    order: number
    content: string
  }>
  creator: Pick<User, 'email' | 'firstName' | 'lastName'>
  createdAt: Date
  updatedAt: Date
}

export type PostsGetRequest = {
  sort: BaseSort
  search?: string
  filters: BaseFilters & {
    id?: number
    userId?: number
  }
  limit?: number
  offset?: number
}
export type PostsGetResponse = Post[]

export type PostsCreateRequest = {
  userId: number
  title: string
  description: string
  blocks: Array<{
    type: 'paragraph' | 'qoute'
    order: number
    content: string
  }>
}
export type PostsCreateResponse = Omit<Post, 'creator'>

export type PostsUpdateRequest = Partial<PostsCreateRequest> & Pick<Post, 'id'>
export type PostsUpdateResponse = Omit<Post, 'creator'>

export type PostsDeleteRequest = Pick<Post, 'id'>
export type PostsDeleteResponse = {
  message: string
}
