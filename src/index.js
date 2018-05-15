import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import {store, persistor } from './store/reduxstore';
import Routes from './Routes';
import './index.css';

/* eslint-disable no-console */
console.log('>kklkdk',persistor);
/* eslint-enable no-console */

ReactDOM.render(
  <Provider store={store}>
    <Router> 
      <Routes />      
    </Router>
  </Provider>
  , document.getElementById('root'));
