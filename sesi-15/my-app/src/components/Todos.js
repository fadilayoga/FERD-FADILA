import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router'

function Todos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setTodos(data.slice(0, 10)))
    }, [])


    if (!localStorage.getItem('login')) {
        return (
            <Redirect to="/login" />
        )
    }

    return (
        <div className="container">
            <h1>Todo List</h1>
            <table className="table table-striped w-100 m-2">
                <thead className="table-dark">
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Completed</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) => (
                            <tr key={index}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? 'v' : 'x'}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todos