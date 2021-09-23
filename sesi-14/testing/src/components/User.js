import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
    },[])

    return (
        <div className="container">
            <Link to="/"><button type="button" class="btn btn-success m-2 mt-4">Back to Home</button></Link>
            <table className="table table-striped w-50 m-2">
                <thead class="table-dark">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Username</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}