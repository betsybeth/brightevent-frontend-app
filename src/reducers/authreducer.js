
export const initialState = {
  token_: null,
  isuserregistered: false,
  userlogin:false
}

export default (state = initialState, action) => {
  switch (action.type){
    case 'REGISTER_USER_FULLIFIED':
      return {
        ...state,
        isuserregistered:true,
        token_:action.payload.data.token,
        message:action.payload.data.message,
      };
    case 'REGISTER_USER_REJECTED':
      return {
      ...state,
      message: action.payload.response.data.error,
    };
    case 'LOGIN_USER_FULLIFIED':
    return{
      ...state,
      isuserregistered:true,
      userlogin:true,
      message:action.payload.data.message
    }
    default:
      return state;
  };
};
