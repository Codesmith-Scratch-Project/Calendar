import React, { useState } from 'react';
import { deleteEventServ } from '../reducers/reducers.js';
import  store  from '../App.jsx';

/**
* Event Component - will be a child of Day
*   Presentation component to display event data
*   props: {userID, username, name, timeStart, timeEnd, details, location}
*   
*/

const Event = (props) => {
    console.log('in event jsx', props);
    const {eventid, name, start, end, details, location } = props;
    // need to convert timeStart and timeEnd? 
    const startTime = (new Date(start));
    const endTime = (new Date(end));
    const startStr = `${startTime.toTimeString().split(' ')[0]}`;
    const endStr = `${endTime.toTimeString().split(' ')[0]}`;
// http://localhost:8080/calendar/undefined
    function handleClick() {
        console.log('clci');
        store.dispatch(deleteEventServ(eventid));
        
    }

    return (
        <div className="event">
            <p>{name}</p>
            <p>{startStr} - {endStr} </p>
            {/* <p>{location}</p> */}
            <button onClick={handleClick}>x</button>
        </div>
    )

}

export default Event;