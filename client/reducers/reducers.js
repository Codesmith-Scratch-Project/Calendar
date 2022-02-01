import { ADD_EVENT, DELETE_EVENT, GET_EVENTS } from "../actions/actions";
import 'regenerator-runtime/runtime'
import "core-js/stable";


const initialState = {
  counter: 0,
  events: [],
  newEvent: {}
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {...state, counter : state.counter + 1 }
    case 'DECREMENT':
      return {...state, counter : state.counter - 1 }
    case 'GET_EVENTS': 
      return {...state, events : action.payload}
    case 'ADD_EVENT':
      return {...state, events : [...state.events, action.payload], newEvent : action.payload }
    case "DELETE_EVENT":
        return { events : state.events.filter((event) => event.eventid !== action.payload) };
    default: {
      return state;
    }
  }
  
  
  
  };

// export function addEventController (event){
//   dispatch({type: 'ADD_EVENT', payload: event});
//   addEventServ()
// }

export const getEventsServ = () => async (dispatch, getState) => {
  console.log('getting events')
  return fetch('/calendar/123')
  .then(res => res.json())
  .then(res => {
    console.log(res);
    return res;
  })
  .then(res => dispatch(GET_EVENTS(res)))
  
}

export const addEventServ = (newEvent) => async (dispatch) => {
  console.log('in the async func')
  
  
  return fetch('/calendar/123', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newEvent)
  })
  .then(res => {
    console.log(res.locals);
    return res;
  })
  .then(res => dispatch(ADD_EVENT(newEvent)))
  .catch(err => console.log(err))

}

export const deleteEventServ = (eventid) => async (dispatch) => {
  
console.log('before fetch')
console.log('this is the event id variable', eventid)
  return fetch(`/calendar/${eventid}`, {
    method: 'DELETE'
  })
  .then(res => {
    console.log(res.text);
    return res;
  })
  .then(res => dispatch(DELETE_EVENT(eventid)))
  .catch(err => console.log(err))

}


//POST localhost:3000/calendar/create
//GET localhost:3000/calendar/

  export default reducer