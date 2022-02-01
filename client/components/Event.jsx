import React, { useState } from 'react';

/**
* Event Component - will be a child of Day
*   Presentation component to display event data
*   props: {userID, username, name, timeStart, timeEnd, details, location}
*   
*/

const Event = (props) => {
    const {eventName, startTime, endTime, details, location } = props;
    // need to convert timeStart and timeEnd? 
    const start = (new Date(startTime));
    const end = (new Date(endTime));
    const startStr = `${start.toTimeString().split(' ')[0]}`;
    const endStr = `${end.toTimeString().split(' ')[0]}`;
    return (
        <div className="event">
            <p>{eventName}</p>
            <p>{startStr} - {endStr} </p>
            {/* <p>{location}</p> */}
        </div>
    )

}

export default Event;