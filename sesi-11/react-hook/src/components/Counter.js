import React, { useState, useEffect } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count
    }, [count])

    return (
        <div>
            <h3>{count}</h3>
            <br />
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}