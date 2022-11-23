import { Status } from 'models/status'

export interface User {
  firstName: string
  lastName: string
  avatar: string
  createdAt: Date
  id: string | number
}

export interface UserState {
  data: Array<Record<string, User>>
  status: Status
  cached: boolean
  message: string
  errors: null | string[]
}

export interface UserReducer {
  users: Partial<UserState>
}
