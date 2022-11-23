import axios from 'modules/axios'
import { User } from 'models/user'

export const fetchUsers = () => {
  return axios.get('/users')
}

export const fetchUsersWithError = () => {
  return axios.get('/users/adslfkjsadlk')
}

export type FetchUsersType = {
  data: User[]
}
