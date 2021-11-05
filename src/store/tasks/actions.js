import { ACTION_TYPES } from './actionTypes'

export const addTask = (payload) => ({
  type: ACTION_TYPES.ADD_TASK,
  payload,
})

export const setDoneStatus = (payload) => ({
  type: ACTION_TYPES.SET_DONE_TASK,
  payload,
})
