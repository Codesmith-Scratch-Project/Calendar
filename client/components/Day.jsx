import React from 'react';
import Event from './Event.jsx';

/**
* Day Component - will be a child of Calendar
*   Presentation component that renders a list of events on a given day
*   props: {key, id, name, events}
*   
*   children: Event
*/

const Day = (props) => {
    const {name, date, events} = props;
    events.sort((a, b) => {
        return new Date(a.start) - new Date(b.start);
    });
    const eventMaker = (event) => {
        return <Event
            {...event}
        />
    }
    const eventComponents = events.map((event) => eventMaker(event));

    return (
        <div className="day">
            <div className="day-label"> 
                {name} {date}
            </div>
            {eventComponents}
        </div>
    )
}

export default Day;