/* global describe it :true */

import AuthReducer from '../../reducers/authreducer';
import { expect } from 'chai';

const initialState = {
  user: {
    token: '',
    message:'',
    authenticated:false,
    error: ''
  },
  request: {
    loading:true,
    error: '',
  }
};

describe ('Authentication Reducers', () => {
  it('CASE: REGISTER_USER_FULFILLED', () => {

    const action = {
      type: 'REGISTER_USER_FULFILLED',
      payload: {
        data: {
          token: 'awesome',
          message: 'Successfully Registered'
        }
      }
    };


    const expectedState = {
      user: {
        token: '',
        message: '', 
        authenticated: false, 
        error: '' },
      request: { 
        loading: false,
        error: '' },
      data: { 
        token: 'awesome',
        message: 'Successfully Registered' ,
        authenticated: true, 
      } 
    };
    const newState = AuthReducer(initialState, action);
    expect(newState).to.deep.equal(expectedState);
  });
  
  it('CASE:LOGIN_USER_FULFILLED', () => {
    const action = {
      type: 'LOGIN_USER_FULFILLED',
      payload:{
        data: {
          token : 'awesome',
          message:'You are successfully login'
        }
      }
    };
    const expectedLoginState = {
      user: {
        token: '', 
        message: '', 
        authenticated: false, 
        error: '' 
      },
      request: { 
        loading: false, 
        error: '' },
      data:{
        token: 'awesome',
        authenticated: true,
        message: 'You are successfully login' 
      } 

    }; 
    const newState = AuthReducer(initialState, action);
    expect(newState).to.deep.equal(expectedLoginState);
  });

  it('CASE: LOGOUT_USER_FULFILLED', () => {

    const action = {
      type: 'LOGOUT_USER_FULFILLED',
      payload: {
        data: {
          message:'logout fulfilled',
      
        }
      }  
    };
  
  
    const expectedState = {
      user: { 
        token: '', 
        message: '', 
        authenticated: false, 
        error: '' },
      request: { 
        loading:true, 
        error: '' },
      data: { 
        token:null,
        message:'logout fulfilled',
        authenticated:false 
      }
    }; 
    
    const newState = AuthReducer(initialState, action);
    expect(newState).to.deep.equal(expectedState);
  });  

});
