import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import taskReducer from './tasks/reducer'

const rootReducer = combineReducers({
  tasks: taskReducer,
})

// Logger with default options
const store = createStore(rootReducer, applyMiddleware(logger))

export default store
