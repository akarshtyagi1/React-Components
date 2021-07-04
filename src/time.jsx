import React, { useState } from 'react';

function Time() {
    var now = new Date().toLocaleTimeString();
    var [time, setTime] = useState(now);

    setInterval(getTime, 1000);

    function getTime() {
        setTime(new Date().toLocaleTimeString())
    }

    return <div>
        <h1>{time}</h1>
        <button onClick={getTime} >Get Time</button>
    </div>
}

export default Time;