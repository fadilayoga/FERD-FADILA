import React, { useState } from 'react'
import propTypes from 'prop-types'

const HeroName = ({ name }) => {
    return <h3>{name}</h3>
}

HeroName.propTypes = {
    name: propTypes.string
}

export default function Hero() {
    const heroName = useState("Fadila")
    return <HeroName name={heroName} />
}