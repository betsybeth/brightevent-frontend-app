import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { expect } from 'chai';
import promiseMiddleware from 'redux-promise-middleware';
import * as actions from '../../actions/UserActions';
import * as actionTypes from '../../constants/actionTypes';
import instance from '../../axiosConfigs/config';


const store = [thunk, promiseMiddleware()];
const mockStore = configureMockStore(store);

describe('Authentication Actions', () => {
  beforeEach(() => {
    moxios.install(instance);
  });
  afterEach(() => {
    moxios.uninstall(instance);
    localStorage.clear();
  });
  it('REGISTER_USER_FULFILLED action is dispatched', () =>{
    const registerInfo = {
      name:'testname',
      email:'test@test.com',
      password:123456789,
      confirm: 123456789
    };
    const payload = {
      token:'awesome',
      message:'Successfully Registered'
    };
    moxios.wait(() =>{
      const request= moxios.requests.mostRecent();
      request.respondWith({
        status:201,
        response:payload
      });
    });
    const expectedActions = ['REGISTER_USER_PENDING','REGISTER_USER_FULFILLED'];
    const store = mockStore({});
    return store.dispatch(actions.registerUser(registerInfo)).then(() =>{
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).to.deep.equal(expectedActions);
    });
  });
  it('LOGIN_USER_FULFILLED action is dispatched', () => {
    const loginData = {
      email:'test@test.com',
      password:123456789
    };
    const payload = {
      token:'awesome',
      message: 'you are successfully login'
    };
    moxios.wait(() =>{
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status:200,
        response:payload
      });
    });
    const expectedActions = ['LOGIN_USER_PENDING','LOGIN_USER_FULFILLED'];
    const store = mockStore({});
    return store.dispatch(actions.loginUser(loginData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).to.deep.equal(expectedActions);

    });
  });
});
