import React from 'react';


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // currentWeek: this.props.currentWeek
        // ...
    };
    this.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  }

// { currentWeek } = props

  render() {

    for (let i = 0; i < 7; i++) {
      days.push(<Day key={i} id={i} name={dayNames[i]} />)
    }

    <div className="day">
        {days}
    </div>

  }
}

export default Calendar;
