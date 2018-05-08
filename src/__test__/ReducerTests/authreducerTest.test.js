import { actionTypes } from '../../constants/actionTypes';
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
        message: 'Successfully Registered' 
      } 
    };
    const newState = AuthReducer(initialState, action);
    expect(newState).to.deep.equal(expectedState);
  });
  it('CASE: REGISTER_USER_REJECTED', () => {

    const action = {
      type: 'REGISTER_USER_REJECTED',
      payload: {
        response: {
          data: {
            token: 'null',
            message: 'wrong data'
          }
        }
      }  
    };


    const expectedState = {
      user: {
        token: '', 
        message: '', 
        authenticated: false, 
        error: '' 
      },
      request: { 
        loading: true, 
        error: true 
      },
      data: { 
        message: 'wrong data' 
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
  it('CASE: LOGIN_USER_REJECTED', () => {

    const action = {
      type: 'LOGIN_USER_REJECTED',
      payload: {
        response: {
          data: {
            message: 'invalid login'
          }
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
        error: true },
      data: { 
        message: 'invalid login' 
      }
    };   
    const newState = AuthReducer(initialState, action);
    expect(newState).to.deep.equal(expectedState);
  });  
});
