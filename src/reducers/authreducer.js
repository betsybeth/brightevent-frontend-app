import initialState from './initialState';

export default (state = initialState.entities.user, action) => {
  switch (action.type){
  case 'REGISTER_USER_PENDING':
    return {
      ...state,
      request : {
        ...state.request,
        loading: true
      }
    };

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
        message: action.payload.data.message,
      }
    };

  case 'REGISTER_USER_REJECTED':
    return {
      ...state,
      data: {
        ...state.data,
        message: action.payload.response.data.message
      },
      request : {
        ...state.request,
        error: true
      }
    };

  case 'LOGIN_USER':
    return {
      ...state,
      request: {
        ...state.request,
        loading: true     
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

  case 'LOGIN_USER_REJECTED':
    return {
      ...state,
      data: {
        ...state.data,
        message: action.payload.response.data.message
      },
      request : {
        ...state.request,
        loading: false,
        error: true
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
