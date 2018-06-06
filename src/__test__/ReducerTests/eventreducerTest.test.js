/* global describe it:true */
import EventReducer from '../../reducers/eventreducer';
import { expect } from 'chai';

const initialState = {
  events: {
    data: [],
    request: {
      authenticated:true,
      id:[],
      error: '',
      message: '',
      isSearch:'',
      pages:'',
      nextPage: '',
      prevPage: '',
    },
    rsvp:{
      data:[],
      error:'',
      message:''
    }  
  }
};

describe('Events Reducers', () => {
  it.skip('CASE CREATE_EVENT_FULFILLED', () => {
    const action = {
      type:'CREATE_EVENT_FULFILLED',
      payload:{
        data:{
          name:'testevent',
          description:'awesome',
          category:'testCategory',
          date_of_event:'2018-12-4',
          location:'nairobi',
          message:'create successfully'
        }
      }
    };

    const expectedState = {
      events: {
        data: [{name:'testevent',
          description:'awesome',
          category:'testCategory',
          date_of_event:'2018-12-4',
          location:'nairobi',
          message:'create successfully'}],
        request: {
          authenticated:true,
          id:[],
          error: '',
          message: 'create successfully',
          isSearch:true,
          pages:'',
          nextPage: '',
          prevPage: '',
        },
        rsvp:{
          data:[],
          error:'',
          message:''
        }  
      }
    }; 

    /* eslint-disable no-console */
    console.log('>kklkdkllll',action);
    /* eslint-enable no-console */ 
    const newState = EventReducer(initialState, action);
    expect(newState).to.deep.equal(expectedState);
  });  
});

