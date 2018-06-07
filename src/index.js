import React from 'react'; // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './store/reduxstore';
import Routes from './Routes';
import './index.css';



ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router> 
        <Routes />      
      </Router>
    </PersistGate>
  </Provider>
  , document.getElementById('root'));
