import React from 'react';
import NewEvent from '../components/NewEvent.jsx';
import Calendar from '../components/Calendar.jsx';

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NewEvent />
        <div id="main-container">
          <Calendar />
        </div>
      </div>
    );
  }
  
}