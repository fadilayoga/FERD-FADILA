import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    counter: 0,
    users: []
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                counter: state.counter + 1,
                users: state.users
            }
        case "DECREMENT":
            return {
                counter: state.counter - 1,
                users: state.users
            }
        case "CUSTOM":
            return {
                counter: state.counter + action.payload,
                users: state.users
            }
        case "SET_USERS":
            return {
                counter: state.counter,
                users: action.payload
            }
        default:
            return state
    }
}

const store = createStore(counter, applyMiddleware(thunk))

export default store