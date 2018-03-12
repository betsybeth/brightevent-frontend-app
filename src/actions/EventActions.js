import { actionTypes } from '../constants/actionTypes';
import instance from '../axiosConfigs/config';

export const createEvent = eventsDetails => ({
  type:actionTypes.CREATE_EVENT,
  payload:instance.post('/create_event'),

})

export const getAllEvents = events => ({
  type:actionTypes.GET_ALL_EVENTS,
  payload: instance.get('/events')
})

export const PUBLIC_EVENTS = publicEvents => ({
  type:actionTypes.PUBLIC_EVENTS,
  payload:instance.get('/public_events')
})
