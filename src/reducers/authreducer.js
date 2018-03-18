import initialState from './initialState'

export default (state = initialState.entities , action) => {
  switch (action.type){
    case 'REGISTER_USER_PENDING':
      return {
        request : {
          loading: true
        }
      }

    case 'REGISTER_USER_FULFILLED':
      return {
        request: {
          loading : false
        },
        user: {
          token : action.payload.data.token,
          message: action.payload.data.message,
        }
      }

    case 'REGISTER_USER_REJECTED':
     return {
       user : {
         message: action.payload.response.data.message
       }
     }

    case 'LOGIN_USER_PENDING':
      return {
        request : {
          loading:true,
        }
      }

    case 'LOGIN_USER_FULFILLED':
      return{
        user : {
          token_:action.payload.data.token,
          authenticated:true,
          message:action.payload.data.message
        },
        request : {
          loading: false
        }
      }

    case 'LOGIN_USER_REJECTED':
      return {
        user : {
          message:action.payload.response.data.message

        },
        request : {
          loading: false
        }
      }
    default:
      return state;

  };
};
