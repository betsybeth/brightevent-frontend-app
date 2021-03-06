import initialState from './initialState';

export default (state = initialState.entities.user, action) => {
  switch (action.type){
  case 'REGISTER_USER_FULFILLED':
    return {
      ...state,
      request: {
        ...state.request,
        loading : false
      },
      data: {
        ...state.data,
        token: action.payload.data.token,
        authenticated:true,
        message: action.payload.data.message,
      }
    };
  case 'LOGIN_USER_FULFILLED':
    return {
      ...state,
      data: {
        ...state.data,
        token: action.payload.data.token,
        authenticated:true,
        message: action.payload.data.message
      },
      request: {
        ...state.request,
        loading: false
      }
    };
  
  case 'LOGOUT_USER_FULFILLED':
    return {
      ...state,
      data : {
        token: null,
        message:action.payload.data.message,
        authenticated: false,
      },

    };  

  default:
    return state;

  }
};
