import React from 'react'
import './App.css'

import Counter from './components/Counter.js'
import Hero from './components/Hero.js'
import Users from './components/Users.js'

function Header() {
  return (
    <header className="header">
      <h1>My First React app</h1>
    </header>
  )
}
function Content() {
  return (
    <div className="content">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
    </div>
  )
}
function Footer() {
  return (
    <div className="footer">
      <p>&copy; My self - 2021</p>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <Header />
      <hr />
      <Content />
      <hr />
      <Users />
      <hr />
      <Counter />
      <hr />
      <Hero />
      <br />
      <Footer />
    </div>
  )
}

export default App;