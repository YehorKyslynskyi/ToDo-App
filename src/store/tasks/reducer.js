import { ACTION_TYPES } from './actionTypes'

const defaultState = {
  tasks: [],
}

const reducer = (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPES.ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] }
    case ACTION_TYPES.SET_DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? { ...task, isDone: payload.checked } : task,
        ),
      }
    default:
      return state
  }
}

export default reducer
