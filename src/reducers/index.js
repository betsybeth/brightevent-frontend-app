import { combineReducers } from 'redux'
import AuthReducer from './authreducer'


const rootReducer = combineReducers({
  auth:AuthReducer
});

export default rootReducer
