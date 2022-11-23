import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from 'reducers'

export const userSelector = createSelector(
  (state: RootState) => state.users,
  ({ users }) => users
)
