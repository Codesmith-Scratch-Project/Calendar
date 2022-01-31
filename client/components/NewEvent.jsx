import React, { useState } from 'react';
import { ADD_EVENT } from '../actions/actions.js';
import { Provider, useDispatch, connect } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import  store  from '../App.jsx';
import { addEventServ } from '../reducers/reducers.js';


// const dispatch = useDispatch();

// const mapDispatchToProps = dispatch => (
//   {
//     addEvent: (event) => dispatch(ADD_EVENT(event))
//   }
// )



class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      eventName: '',
      startTime: '',
      endTime: '',
      details: '',
      location: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetValues = this.resetValues.bind(this);
  }

  resetValues() {
    this.setState(
    {
      eventName: '',
      startTime: '',
      endTime: '',
      details: '',
      location: ''
    });
  }

  handleSubmit( event ) {
    event.preventDefault();
    if (this.state.endTime < this.state.startTime) {
      this.setState({...this.state, endTime: ''});
      window.alert('End time must be greater than start time');
      return;
    }
    console.log(this.state);
    store.dispatch(addEventServ(this.state));
    // this.props.addEvent(this.state);
    console.log('time to call add event')
    // addEventServ()
  };

  handleChange( { target } ) {
    this.setState({...this.state, [target.name]: target.value});
  }

  render() {
    return (
      <div id='form'>
        <div id="createEvent"><strong>Create Event</strong></div>
        <form onSubmit={this.handleSubmit}> 
          <input id='eventName' 
            name='eventName' 
            placeholder="Add title"
            type='text' 
            value={this.state.eventName} 
            onChange={this.handleChange} 
            autoComplete="off"
            required
          />
          Start time:
          <input id='startTime' 
            name='startTime' 
            type='datetime-local' 
            value={this.state.startTime} 
            onChange={this.handleChange} 
            autoComplete="off"
            required
          />
          End time:
          <input id='endTime' 
            name='endTime' 
            type='datetime-local' 
            value={this.state.endTime} 
            onChange={this.handleChange} 
            autoComplete="off"
            required
          />
          <input id='details' 
            name='details' 
            placeholder="Add details (optional)"
            type='text' 
            value={this.state.details} 
            autoComplete="off"
            onChange={this.handleChange} 
          />
          <input id='location' 
            name='location' 
            placeholder="Add location (optional)"
            type='text' 
            value={this.state.location} 
            autoComplete="off"
            onChange={this.handleChange} 
          />
          <div id='buttons'>
            <input type="button" onClick={this.resetValues} value="Reset" />
            <input type="submit" value="Save" />
          </div>
        </form>
      </div>
    );
  } 
}


// export default connect(null, mapDispatchToProps)(NewEvent)
export default NewEvent;