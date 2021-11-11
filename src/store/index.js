import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import taskReducer from './tasks/reducer'

const rootReducer = combineReducers({
  tasks: taskReducer,
})

const store = createStore(rootReducer, applyMiddleware([logger, thunk]))

export default store
