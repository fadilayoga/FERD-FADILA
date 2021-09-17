import React from 'react'
import propTypes from 'prop-types'

class HeroName extends React.Component {
    render(){
        return <h3>{this.props.name}</h3>
    }
}

HeroName.propTypes = {
    name: propTypes.string
}

export default class Hero extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Fadila"
        }
    }

    render(){
        return <HeroName name={this.state.name}/>
    }
}