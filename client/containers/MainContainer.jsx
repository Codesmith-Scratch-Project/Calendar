import React from 'react';
import NewEvent from '../components/NewEvent.jsx';
import Calendar from '../components/Calendar.jsx';
import { getEventsServ } from '../reducers/reducers.js';
import  store  from '../App.jsx';
import { ADD_EVENT } from '../actions/actions.js';
import { Provider, useDispatch, connect } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import { addEventServ } from '../reducers/reducers.js';

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => store.dispatch(getEventsServ()), 1);
  }

  render() {
    return (
      <div id="main-container">
        <NewEvent />
        <Calendar />
      </div>
    );
  }
  
}