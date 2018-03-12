export const initialState = {
  userregistered: false,
  token_: null,
  message: null,
  error: '',
  userlogin:false
}

export default (state = initialState, action) => {
  switch (action.type){
    case 'REGISTER_USER':
        return {
          ...state,
          userregistered: true,
          token_: action.payload.data.token,
          message: action.payload.data.message,
      };
    case 'LOGIN_USER':
      return{
        ...state,
        isuserregistered:true,
        userlogin:true,
        token_:action.payload.data.token,
        message:action.payload.data.message
      }
    default:
      return state;

  };
};
