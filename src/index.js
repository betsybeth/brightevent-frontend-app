import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/reduxstore';
import Routes from './Routes';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
  , document.getElementById('root'));
