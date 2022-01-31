import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import { Provider, useDispatch } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import reducer from './reducers/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import Calendar from './components/Calendar.jsx';
import Event from './components/Event.jsx';
import Day from './components/Day.jsx';
import New from './components/test.jsx';
import NavContainer from './containers/NavContainer.jsx';
import MainContainer from './containers/MainContainer.jsx';

// eventID: 1,
// userID: 123,
// username: "mk",
// name: "Coffee Break",
// timeStart: dates.coffee.start,
// timeEnd: dates.coffee.end,
// details: 'pop a caffeine pill and take a nap',
// location: 'home',

/**
 *  Main App component to hook onto html
 *  
 * 
 */

class App extends React.Component {
  constructor(props) {
    super(props);
  }


// should render NavContainer and MainContainer
  render() {
    return (
      <div>
        <NavContainer />
        <MainContainer />
        {/* <Day /> */}
        {/* <Event name={'Coffee'} timeStart={'January 29, 2022 02:00:00'} timeEnd={'January 29, 2022 03:00:00'} location={'home'} /> */}
      </div>
    );
  }
}

const mid = applyMiddleware(thunk)
const composedEnhancers = compose(mid, composeWithDevTools())
const store = createStore(reducer, undefined, composedEnhancers);

// store.subscribe(() => {
//   console.log('current state', store.getState());
// });

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'DECREMENT'
});


ReactDOM.render(
<Provider store={store}>


<App />
</Provider>,

document.getElementById('root'));