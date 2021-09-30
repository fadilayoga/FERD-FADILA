import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../store/action'

const CounterFn = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    const increment = () => {
        dispatch({
            type: "INCREMENT"
        })
    }

    const decrement = () => {
        dispatch({
            type: "DECREMENT"
        })
    }

    const customIncrement = () => {
        dispatch({
            type: "CUSTOM",
            payload: 10
        })
    }

    const handleFetchUser = () => {
        dispatch(fetchUser())
    }

    return (
        <div className="demo">
            <h1>Functional Component</h1>
            <h1 id="counter">{state.counter}</h1>
            <button id="decrement" onClick={decrement}>-</button>
            &nbsp;&nbsp;
            <button id="increment" onClick={increment}>+</button>
            &nbsp;&nbsp;
            <button id="decrement" onClick={customIncrement}>+ 10</button>
            <hr />
            <button id="fetch" onClick={handleFetchUser}>Get Users</button>
            <br /><br />
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.users.map((user, idx) => (
                            <tr key={idx}>
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

export default CounterFn