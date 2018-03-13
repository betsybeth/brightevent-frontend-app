import { actionTypes } from '../constants/actionTypes';
import instance from '../axiosConfigs/config';

export const createEvent = eventsDetails => ({
  type:actionTypes.CREATE_EVENT,
  payload:instance.post('/create_event'),

})
export const PUBLIC_EVENTS = (limit=4 ,page=1)=> ({
  type:actionTypes.PUBLIC_EVENTS,
  payload:instance.get('/public_events')
})
