import initialState from './initialState';
export default (state = initialState.entities.events, action) => {
  switch(action.type){
  case 'CREATE_EVENT_FULFILLED':
    return {
      ...state,
      data: state.data.concat({ ...action.payload.data }),
      request: {
        ...state.request,
        message: action.payload.data.message
      }  
    };

  case 'CREATE_EVENT_REJECTED':
    return {
      ...state,
      request: {
        ...state.request,
        message: action.payload.response.data.message,
        error:true
      }
    }; 

  case 'EDIT_EVENT_FULFILLED': {
        
    let newState = state.data.filter(event => event.id !== action.payload.id);
    return {
      ...newState,
      request: {
        ...newState.request,
        message: action.payload.data.message
      }
    };
  }
  case 'EDIT_EVENT_REJECTED': {
    let newState = state.data.filter(event => event.id !== action.payload.id);
    return {
      ...newState,
      request: {
        ...newState.request,
        message:''
      }
    };
  }
  case 'GET_ALL_EVENTS_FULFILLED':
    return {
      ...state,
      data: action.payload.data.results,
      request: {
        ...state.request,
        message: action.payload.data.results,
        pages: action.payload.data.pages,
        nextPage: action.payload.data.next_page,
        prevPage: action.payload.data.prev_page
      }
    };
  case 'GET_EVENT_PAGES_FULFILLED':
    return {
      ...state,
      data: action.payload.data.results,
      request: {
        ...state.request,
        pages: action.payload.data.pages,
        nextPage: action.payload.data.next_page,
        prevPage: action.payload.data.prev_page
      }
    };

  case 'GET_ALL_EVENTS_REJECTED':
    return {
      ...state,
      request: {
        ...state.request,
        message: action.payload.data,
        error: true
      }
    };
  case 'SEARCH_EVENT_FULFILLED':
    return {
      ...state,
      data:action.payload.data.result,
      request: {
        ...state.request,
        message: action.payload.data.result,
        isSearch:true
      }
    };

  case 'DELETE_EVENT_FULFILLED':{
    let deleteEvent = delete state.data.id;
    return {
      ...deleteEvent,
      request:{
        ...state.request,
        message:action.payload.data.message
      }
    }; 
  }
  case 'DELETE_EVENT_REJECTED':
    return {
      ...state,
      request: {
        ...state.request,
        message: action.payload.response.message,
        error:true
      }

    };
    //  rsvp reducers
  case 'CREATE_RSVP_FULFILLED':
    return {
      ...state,
      rsvp: {
        ...state.request,
        error:'',
        message:action.payload.data.message
      }

    };
  default:
    return state; 
  }    
};


