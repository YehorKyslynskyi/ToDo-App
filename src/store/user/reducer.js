import { ACTION_TYPES } from './actionTypes'

const defaultState = {
  user: null,
}

const reducer = (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPES.ADD_USER:
      return { ...state, user: payload }
    default:
      return state
  }
}

export default reducer
