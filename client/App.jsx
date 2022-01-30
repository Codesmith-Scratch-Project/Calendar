import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import MainContainer from './containers/MainContainer.jsx';
import Calendar from './components/Calendar.jsx';
import Event from './components/Event.jsx';
import Day from './components/Day.jsx';
import New from './components/test.jsx';


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
        <Calendar />
        {/* <Day /> */}
        {/* <Event name={'Coffee'} timeStart={'January 29, 2022 02:00:00'} timeEnd={'January 29, 2022 03:00:00'} location={'home'} /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));