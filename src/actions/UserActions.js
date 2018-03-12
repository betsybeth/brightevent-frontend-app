import { actionTypes } from '../constants/actionTypes';
import instance from '../axiosConfigs/config';

export const registerUser = user => ({
    type : actionTypes.REGISTER_USER,
    payload : instance.post('/register', user),
});

export const loginUser = loginInfo => ({
    type:actionTypes.LOGIN_USER,
    payload:instance.post('/login', loginInfo),

});
