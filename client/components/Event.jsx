import React from 'react';
import Calendar from './Calendar.jsx';

/**
* Event Component - will be a child of Day
*   Presentation component display event data, (name )
*   props: {userID, username, name, timeStart, timeEnd, details, location}
*   
*/

// render() {
//     return (
//       <div>
//         <Calendar />
//         {/* <Day /> */}
//         {/* <Event name={'Coffee'} timeStart={'January 29, 2022 02:00:00'} timeEnd={'January 29, 2022 03:00:00'} location={'home'} /> */}
//       </div>
//     );
//   }

const Event = (props) => {
    const { userID, username, name, timeStart, timeEnd, details, location } = props;
    // need to convert timeStart and timeEnd? 

    return (
        <div className="event">
            <h3>{name}</h3>
            <p>{timeStart} - {timeEnd} </p>
            <p>{location}</p>
        </div>
    )

}

export default Event;