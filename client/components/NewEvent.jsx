import React, { useState } from 'react';

export default class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {eventName: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('sdfsdf');
  }

  handleSubmit( event ) {
    window.alert('a');
    event.preventDefault();
  };

  handleChange( {target} ) {
    console.log('change');
    console.log(target.value);
    this.setState({...this.state, eventName: target.value});
  }


  render() {
    return (
      <div id='form'>
        <h1>Create New Event</h1>
        <form onSubmit={this.handleSubmit}> 
          <label>
            Enter event name:
            <input id='eventName' 
              name='eventName' 
              type='text' 
              value={this.state.eventName} 
              onChange={() => console.log('change')} 
            />
          </label>
          <div>
            {/* <input type="submit" value="submit" /> */}
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  } 
}