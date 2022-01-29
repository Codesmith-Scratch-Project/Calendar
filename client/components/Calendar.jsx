import React from 'react';


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

// { currentWeek } = props

  render() {


  }
}

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const shortDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const days = [];

for (let i = 0; i < 7; i++) {
  days.push(<Day key={i} id={i} name={dayNames[i]} />)
}



return (
    <div>
        {days}
    </div>
)