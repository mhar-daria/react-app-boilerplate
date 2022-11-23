import { createReducer } from '@reduxjs/toolkit'
import { UserReducer } from 'models/user'
import * as actions from 'actions'
import { users as usersConstant } from 'constants/user'

export interface UserState extends UserReducer {}

const reducer = {
  users: createReducer<Partial<UserReducer>>(usersConstant, builder => {
    builder
      .addCase(actions.fetchUser, draft => {
        console.log('fetchUser', 'running')
        draft.users = draft.users || { ...usersConstant.users }
        draft.users.status = 'running'
      })
      .addCase(actions.fetchUserSuccess, (draft, { payload }: any) => {
        console.log('fetchuserSuccess', payload)
        draft.users = draft.users || { ...usersConstant.users }
        draft.users.data = payload || []
        draft.users.status = 'ready'
        draft.users.message = ''
        draft.users.errors = null
      })
      .addCase(actions.fetchUserFailed, (draft, { payload, ...rest }: any) => {
        console.log('fetchUserFailed', payload, rest)
        draft.users = draft.users || { ...usersConstant.users }
        draft.users.data = []
        draft.users.status = 'error'
        draft.users.message = payload
        draft.users.errors = null
      })
  }),
}

export default reducer
