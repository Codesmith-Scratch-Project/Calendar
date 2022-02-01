const event1 = {
  eventName: "Art Exhibit",
  location: "DTLA",
  startTime: "2022-01-23T12:00",
  endTime: "2022-01-23T13:00",
}

const event2 = {
  eventName: "Luncheon",
  location: "Tofu House",
  startTime: "2022-01-24T13:00",
  endTime: "2022-01-24T15:00",
}

const event3 = {
  eventName: "Concert",
  location: "The Roxy",
  startTime: "2022-01-25T16:00",
  endTime: "2022-01-25T18:00",
}

const event4 = {
  eventName: "Dinner",
  location: "Don Izakaya",
  startTime: "2022-01-27T18:00",
  endTime: "2022-01-27T21:00",
}

const initialState = {
  counter: 0,
  events: [event1, event2, event3, event4],
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
    default: {
      return state;
    }
  }
  
  
  
  };

function addEventController (event){
  dispatch(ADD_EVENT(event));
  addEventServ()
}

const getEventsServ = () => async (dispatch, getState) => {
  const events = await fetch('http://localhost:3000/calendar/').then(res => res.json())
  dispatch(setEvents(events))
}

const addEventServ = () => async (dispatch, getState) => {
  
  const event = getState().newEvent;
  await fetch('http://localhost:3000/calendar/create', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(event)
  })
  
  alert('you made a POST request!!!!')
}



//POST localhost:3000/calendar/create
//GET localhost:3000/calendar/

  export default reducer