import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store/reduxstore'
import ReactDOM from 'react-dom';
import './index.css';
import  RegisterContainer from './components/containers/RegisterContainer';

class Home extends Component{
  render(){
    return(
      <div>
        <RegisterContainer />
      </div>
    );
  }
}




ReactDOM.render( <Provider store={store}>
  <Home />
  </Provider>
  , document.getElementById('root'));
