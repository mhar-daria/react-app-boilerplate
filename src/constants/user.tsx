import { UserReducer } from 'models/user'

export const users: UserReducer = {
  users: {
    data: [],
    cached: false,
    message: '',
    status: 'idle',
    errors: null,
  },
}
