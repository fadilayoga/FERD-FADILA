import React from 'react'

export default class Users extends React.Component {
    constructor() {
        super()
        this.state = {
            username: 'default'
        }
    }

    getUsername(){
        return this.state.username
    }

    setUsername = () => {
        this.setState({
            username: 'user_satu'
        })
    }

    resetUsername = () => {
        this.setState({
            username: 'user_reset'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.getUsername()}</h1>
                <br/>
                <button onClick={this.setUsername}>Set Username</button>
                <button onClick={this.resetUsername}>Reset Username</button>
            </div>
        )
    }
}