import { all, takeLatest, put, call } from 'redux-saga/effects'
import {
  fetchUser,
  fetchUserWithError,
  fetchUserSuccess,
  fetchUserFailed,
} from 'actions'
import type { PutEffect, SelectEffect, CallEffect } from 'redux-saga/effects'
import {
  fetchUsers as fetchUsersAPI,
  fetchUsersWithError as fetchUsersWithErrorAPI,
} from 'api/user'
import type { AxiosResponse } from 'axios'
import type { FetchUsersType } from 'api/user'

/**
 * Get users
 *
 * @param {Object} action
 */
export function* fetchUsersSaga(): Generator<
  PutEffect<any> | SelectEffect | CallEffect<AxiosResponse<any, any>>,
  void,
  FetchUsersType
> {
  try {
    const { data } = yield call(fetchUsersAPI)

    yield put(fetchUserSuccess(data))
  } catch (error: any) {
    const { message = '' } = error.response
    yield put(fetchUserFailed(message))
  } finally {
  }
}

/**
 * Get Error users
 *
 * @param {Object} action
 */
export function* fetchUsersWithErrorSaga(): Generator<
  PutEffect<any> | SelectEffect | CallEffect<AxiosResponse<any, any>>,
  void,
  FetchUsersType
> {
  try {
    const { data } = yield call(fetchUsersWithErrorAPI)

    yield put(fetchUserSuccess(data))
  } catch (error: any) {
    const { data: message = '' } = error.response
    yield put(fetchUserFailed(message))
  } finally {
  }
}

export default function* root() {
  yield all([
    takeLatest(fetchUser.toString(), fetchUsersSaga),
    takeLatest(fetchUserWithError.toString(), fetchUsersWithErrorSaga),
  ])
}
