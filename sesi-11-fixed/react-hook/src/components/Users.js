import React, { useState } from 'react'

export default function Users() {
    const [username, setName] = useState("Default")
    return (
        <div>
            <h1>{username}</h1>
            <br />
            <button onClick={() => setName("Aris")}>Set Username</button>
            <button onClick={() => setName("Aris 2")}>Reset Username</button>
        </div>
    )
}