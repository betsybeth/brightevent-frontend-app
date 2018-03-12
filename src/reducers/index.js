import { combineReducers } from 'redux';
import AuthReducer from './authreducer';
import EventReducer from './eventreducer'


const rootReducer = combineReducers({
  auth: AuthReducer,
  event: EventReducer
});

export default rootReducer;
