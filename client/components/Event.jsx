import React, { useState } from 'react';

/**
* Event Component - will be a child of Day
*   Presentation component to display event data
*   props: {userID, username, name, timeStart, timeEnd, details, location}
*   
*/

const Event = (props) => {
    const {name, start, end, details, location } = props;
    // need to convert timeStart and timeEnd? 
    const startTime = (new Date(start));
    const endTime = (new Date(end));
    const startStr = `${startTime.toTimeString().split(' ')[0]}`;
    const endStr = `${endTime.toTimeString().split(' ')[0]}`;
    return (
        <div className="event">
            <p>{name}</p>
            <p>{startStr} - {endStr} </p>
            {/* <p>{location}</p> */}
        </div>
    )

}

export default Event;