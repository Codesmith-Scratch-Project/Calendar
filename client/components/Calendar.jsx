import React from 'react';
import Day from './Day.jsx';
import { connect } from 'react-redux';

/**
* Calendar Component - will be a child of MainContainer
*   Stateful component displaying days of the week
*   props: {events}
*   
*   children: Day
*/

const mapStateToProps = state => ({
  counter: state.counter,
  events: state.events
})

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.weekStart = 23;
    this.weekEnd = 29;
    this.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // this.dayDict = {
    //   'Sun': 'Sunday',
    //   'Mon': 'Monday',
    //   'Tues': 'Tuesday',
    //   'Wed': 'Wednesday',
    //   'Thurs': 'Thursday',
    //   'Fri': 'Friday',
    //   'Sat': 'Saturday',
    // }
    // this.numDayDict = {
    //   '0': 'Sunday',
    //   '1': 'Monday',
    //   '2': 'Tuesday',
    //   '3': 'Wednesday',
    //   '4': 'Thursday',
    //   '5': 'Friday',
    //   '6': 'Saturday',
    // }
  }

  render() {

    const dayEvents = {
      '0': [],
      '1': [],
      '2': [],
      '3': [],
      '4': [],
      '5': [],
      '6': []
    }
    console.log('Calendar events: ', this.props.events);
    if (this.props.events.length > 0) {
      const date = new Date(this.props.events[0].start); 
      this.props.events.forEach((event) => {
        console.log(event);
        const i = new Date(event.start).getDay();
        if (typeof i === 'number' && i >= 0 && i <= 6) dayEvents[i].push(event);
      })
    }
    const days = []; 
    
    // passing in all events to each day, even if event doesn't apply to date
    // in Day component, use date prop to filter through relevant events for that day 
    for (let i = 0; i < 7; i++) {
      days.push(<Day name={this.dayNames[i]} date={this.weekStart+i} events={dayEvents[i]}/>);
    }

    return (
      <div className="calendar">
        {days}
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Calendar);
