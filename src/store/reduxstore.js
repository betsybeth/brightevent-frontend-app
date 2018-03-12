import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from '../reducers/index'


export const store = createStore(rootReducer, applyMiddleware(thunk, promiseMiddleware(), ))


export default store
