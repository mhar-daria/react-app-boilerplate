import { createAction } from '@reduxjs/toolkit'

export const fetchUser = createAction('user/fetchUser')
export const fetchUserWithError = createAction('user/fetchUserWithError')
export const fetchUserSuccess = createAction(
  'user/fetchUserSuccess',
  (payload: any) => ({
    payload,
  })
)
export const fetchUserFailed = createAction(
  'user/fetchUserFailed',
  (payload: any) => ({
    payload,
  })
)
export const fetchUserRunning = createAction('user/fetchUserRunning')
