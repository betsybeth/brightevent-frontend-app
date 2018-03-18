import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/reduxstore';
import Routes from './Routes.js'
import ReactDOM from 'react-dom';
import './index.css';






ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
