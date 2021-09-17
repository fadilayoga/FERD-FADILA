import React, { useState, useEffect } from 'react';

export default function Clockclass() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        document.title = date
    }, [date])

    function tick() {
        setDate(new Date())
    }

    setInterval(() => tick(), 1000)

    return (
        <div className="App">
            <h1>Functional Realtime CLOCK</h1>
            <hr />
            <h1>{date.toLocaleString()}</h1>
        </div>
    )
}