import React from 'react';
import Event from './Event.jsx';

/**
* Day Component - will be a child of Calendar
*   Presentation component that renders a list of events on a given day
*   props: {key, id, name, events}
*   
*   children: Event
*/

function randomString() {
    return (Math.random() + 1).toString(12).substring(2);
}

// Jan 23 (sunday) - Jan 29 (saturday)
function randomDate() {
    // const days = ['January 23, 2022', 'January 24, 2022', 'January 25, 2022',
    //  'January 26, 2022', 'January 27, 2022', 'January 28, 2022', 'January 29, 2022'];
     const days = ['January 23, 2022'];
    const times = ['01:00:00', '03:00:00', '08:00:00', '12:00:00', '16:00:00', '21:00:00'];
    // return `${days[Math.floor(Math.random() * days.length)]} ${times[Math.floor(Math.random() * times.length)]}`;
    return `${days[0]} ${times[Math.floor(Math.random() * times.length)]}`;
}

function randomLocation() {
    let roll = Math.random();
    if (roll < .3) {
        return 'Outdoors';
    } else if (roll < .6) {
        return 'Home';
    } else {
        return 'Nowhere but everywhere';
    }
}

function randomEventGen() {
    const events = [];
    const amount = 5;
    for (let i = 0; i < amount; i++) {
        events.push({
            name: randomString(),
            timeStart: randomDate(),
            timeEnd: randomDate(),
            location: randomLocation()
        })
    }
    console.log(events);
    return events;
}



const Day = (props) => {
    const {key, id, name, events} = props;
    
    const eventMaker = (event) => {
        return <Event
            {...event}
        />
    }

    const eventComponents = randomEventGen().map((event) => eventMaker(event));

    return (
        <div className="day">
            {name}
            {/* <Event name={'Coffee'} timeStart={'January 29, 2022 02:00:00'} timeEnd={'January 29, 2022 03:00:00'} location={'home'} />
            <Event name={'something'} timeStart={'January 29, 2022 03:00:00'} timeEnd={'January 29, 2022 04:00:00'} location={'work'} />
            <Event name={'Coding'} timeStart={'January 29, 2022 06:00:00'} timeEnd={'January 29, 2022 07:00:00'} location={'home'} /> */}
            {eventComponents}
        </div>
    )
}

export default Day;