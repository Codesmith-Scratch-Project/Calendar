import React from 'react';
import Day from './Day.jsx';

/**
* Calendar Component - will be a child of MainContainer
*   Stateful component displaying days of the week
*   props: {events}
*   
*   children: Day
*/


// mock data
// Jan 23 (sunday) - Jan 29 (saturday)
// const dates = {
//   coffee: {
//     start: new Date('January 29, 2022 02:00:00'),
//     end: new Date('January 29, 2022 03:00:00')
//   },
//   coding: {
//     start: new Date('January 29, 2022 03:00:00'),
//     end: new Date('January 29, 2022 04:30:00')
//   }
// }

// events: [
//   {
//     eventID: 1,
//     userID: 123,
//     username: "mk",
//     name: "Coffee Break",
//     timeStart: dates.coffee.start,
//     timeEnd: dates.coffee.end,
//     details: 'pop a caffeine pill and take a nap',
//     location: 'home',
//   },
//   {
//     eventID: 2,
//     userID: 123,
//     username: "mk",
//     name: "Coding Grind",
//     timeStart: dates.coding.start,
//     timeEnd: dates.coding.end,
//     details: 'gotta work on react components',
//     location: 'home',
//   },
// ]

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // currentWeek: this.props.currentWeek
    };
    this.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  }

// { currentWeek } = props
// for (let i = 0; i < 7; i++) {
//   days.push(<Day key={i} id={i} name={dayNames[i]} />)
// }

  render() {
    const days = [];
    
    for (let i = 0; i < 7; i++) {
      days.push(<Day name={this.dayNames[i]}/>);
    }
    return (

      <div className="calendar">
        {days}
        {/* <Day name={"sunday"}/>
        <Day name={"monday"}/>
        <Day name={"tuesday"}/> */}
      </div>
    )
  }
}

export default Calendar;
