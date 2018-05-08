import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers/index';


const composeEnhancers = (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      logger,
      promiseMiddleware()),
    )
  );


export default store;
