import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import taskReducer from './tasks/reducer'
import userReducer from './user/reducer'

const rootReducer = combineReducers({
  tasks: taskReducer,
  user: userReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store
