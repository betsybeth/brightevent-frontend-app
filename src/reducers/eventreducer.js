 const initialState = {
   token_:null,
   userregistered:false,
   createEvent:false,
   userlogin:false,
   mesage:null

 }

 export default (state=initialState, action) => {
   switch(action.type){
     case 'CREATE_EVENT':
        return {
          ...state,
          userregistered:true,
          userlogin:true,
          createEvent:true,
          message:action.payload.data.message
      };
      case 'GET_ALL_EVENTS':
        return {
          ...state,
          createEvent:true,
          message:action.payload.data.message
      }
      case 'PUBLIC_EVENTS':
        return {
          ...state,
          createEvents: true,
          message:action.payload.data.message
      }
      default:
      return state
  };
 }
