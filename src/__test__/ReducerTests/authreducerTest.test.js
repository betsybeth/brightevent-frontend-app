import { actionTypes } from '../../constants/actionTypes';
import AuthReducer from '../../reducers/authreducer'
import { expect } from 'chai'

const initialState = {
  userregistered: false,
  token_: null,
  message: null,
  userlogin:false,
}

describe ('Authentication Reducers', () => {
    it('CASE: REGISTER_USER_FULFILLED', () => {

      const action = {
        type: "REGISTER_USER",
        payload: {
            data: {
              token: 'awesome',
              message: 'Successfully Registered'
            }
          }
      };


      const expectedState = {
        userregistered: true,
        token_: 'awesome',
        message: 'Successfully Registered',
        userlogin:false,
      }
      const newState = AuthReducer(initialState, action)
      expect(newState).to.deep.equal(expectedState)
    })
    it('LOGIN_USER_FULFILLED', () => {
      const action = {
        type: "LOGIN_USER",
        payload:{
          data: {
            token:'awesome',
            message:'You are successfully login'
          }
        }
      }
      const expectedLoginState = {
        userregistered:true,
        token_:'awesome',
        message:'You are successfully login',
        userlogin:true
      }
    })
});
