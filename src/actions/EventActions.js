import { actionTypes } from '../constants/actionTypes';
import instance from '../axiosConfigs/config';

export const createEvent =( eventsDetails )=> ({
  type: actionTypes.CREATE_EVENT,
  payload:instance.post('/create-event', eventsDetails)
});
export const addRsvp = (id, rsvpInfo) => ({
  type:actionTypes.CREATE_RSVP,
  payload:instance.post(`/public-events/${id}/public-rsvps`, rsvpInfo)
});
export const getEvents = (limit=6 ,page=1)=> ({
  type:actionTypes.GET_ALL_EVENTS,
  payload:instance.get(`/events/?limit=${limit}&page=${page}`)  
});
export const publicEvents = (limit=6 ,page=1) => ({
  type:actionTypes.PUBLIC_EVENTS,
  payload:instance.get(`/public-events/?limit=${limit}&page=${page}`)
});
export const getEventPages = (url) => ({
  type:actionTypes.GET_EVENT_PAGES,
  payload:instance.get(`${url}`)
});
export const getPublicPages = (url) => ({
  type:actionTypes.GET_PUBLIC_PAGES,
  payload:instance.get(`${url}`)
});
export const getOneEvent = (id) =>({
  type:actionTypes.GET_ONE_EVENT,
  payload:instance.get(`/events/${id}/`)
});
export const getOnePublicEvent = (id) => ({
  type:actionTypes.ONE_PUBLIC_EVENT,
  payload:instance.get(`/public-events/${id}/`)
});
export const editEvent = (id, editDetails) => ({
  type:actionTypes.EDIT_EVENT,
  payload:instance.put(`/events/${id}/`, editDetails)
});
export const deleteEvent = (id) => ({
  type:actionTypes.DELETE_EVENT,
  payload:instance.delete(`/events/${id}/`)  
});
export const searchEvent = (searchData) => ({
  type:actionTypes.SEARCH_EVENT,
  payload:instance.get(`/events/?q=${searchData}`)
});
export const searchPublicEvent = (publicData) => ({
  type:actionTypes.SEARCH_PUBLIC_EVENT,
  payload:instance.get(`/public-events/?q=${publicData}`)
});
export const getRsvp = (id) =>({
  type:actionTypes.GET_RSVP,
  payload:instance.get(`/events/${id}/rsvps`)
});


