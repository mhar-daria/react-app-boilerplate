import user, { UserState } from './user'

export type RootState = {
  users: UserState
}

const reducers = {
  ...user,
}

export default reducers
