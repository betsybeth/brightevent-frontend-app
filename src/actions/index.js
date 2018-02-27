import { actionTypes } from '../constants/actionTypes'
import instance from '../axiosConfigs/config'

export function registerUser(user){
  return {
    type : actionTypes.REGISTER_USER,
    payload : instance.post('/register', user),
  }
};

export function loginUser(logininfo){
  return{
    type:actionTypes.LOGIN_USER,
    payload:instance.post('/login', logininfo)
  }
}
