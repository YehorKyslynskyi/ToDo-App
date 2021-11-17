import { ACTION_TYPES } from './actionTypes'

export const addUser = (payload) => ({
  type: ACTION_TYPES.ADD_USER,
  payload,
})
