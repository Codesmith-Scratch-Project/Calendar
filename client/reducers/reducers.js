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
      return {...state, events : [...state.events, action.payload]}
    default: {
      return state;
    }
  }
  
  
  
  };

const getEvents = () => async (dispatch, getState) => {
  const events = await fetch('http://localhost:3000/calendar/').then(res => res.json())
  dispatch(setEvents(events))
}

const addEvent = () => async (dispatch, getState) => {
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


//set up the add event thing to update the state as well!

//POST localhost:3000/calendar/create
//GET localhost:3000/calendar/

  export default reducer