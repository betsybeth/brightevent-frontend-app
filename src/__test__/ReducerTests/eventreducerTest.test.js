import { actionTypes } from '../../constants/actionTypes';
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
  it('CASE CREATE_EVENT_FULFILLED', () => {
    const action = {
      type:'CREATE_EVENT_FULFILLED',
      payload:{
        data:[{
          name:'testevent',
          description:'awesome',
          category:'testCategory',
          date_of_event:'2018-12-4',
          location:'nairobi'
        }
        ],
        message:'create successfully'
      }
    };
    const expectedState = {
      events: {
        data: [
          {
            name:'testevent',
            description:'awesome',
            category:'testCategory',
            date_of_event:'2018-12-4',
            location:'nairobi'
          }
        ],
        request: {
          authenticated:true,
          id:[],
          error: '',
          message: 'created successfully',
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

    console.log("the initial", initialState, action)
    const newState = EventReducer(initialState, action);
    console.log("the new state is ", newState)
    expect(newState).to.deep.equal(expectedState);
  });  
});

