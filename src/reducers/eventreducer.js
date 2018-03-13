import initialState from './initialState'

 export default (state = initialState.eventState, action) => {
   switch(action.type){
     case 'CREATE_EVENT':
        return {
          event : {
            userlogin:true,
            authenticated: true,
            createEvent:true,
          }
      };
      case 'GET_ALL_EVENTS':
        return {
          createEvent:true,
          message:action.payload.data.message
      }
      case 'PUBLIC_EVENTS':
        return {
          createEvents: true,
          message:action.payload.data.message
      }
      default:
      return state
  };
 }
