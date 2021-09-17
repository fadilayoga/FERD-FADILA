import React, { useState, useEffect } from 'react'
import './App.css'

const Header = () => {
  return (
    <header className="header">
      <h1>Simulasi Antrian</h1>
    </header>
  )
}

const Content = () => {
  const [antrian, setName] = useState([])
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    console.log(disable)
  }, [antrian, disable])

  const handleSubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("name")

    if (e.target.value === "Antrikan!") {
      setName([...antrian, {
        id: antrian.length,
        value: name.value
      }])
    } else {
      antrian.shift()
      setName([...antrian])
    }
  }

  const buttonStatus = () => {
    let name = document.getElementById("name").value
    if (name === "") {
      setDisable(true)
    } else {
      setDisable(false)
    }
  }

  return (
    <div className="content">
      <form>
        <label>Masukkan Nama<br />
          <input onChange={buttonStatus} id="name" type="text" name="name" />
        </label><br /><br />
        <input onClick={handleSubmit} disabled={disable} type="submit" value="Antrikan!" />
        <span>&nbsp;&nbsp;</span>
        <input onClick={handleSubmit} type="submit" value="Majukan!" />
      </form>
      <hr />
      <div className="result">
        {antrian.length === 0
          ? <p>[ Antrian Kosong ! ]</p>
          : <p>{antrian.map((antrian, index) => (
            index === 0
              ? <span key={antrian.id}><span className="value">{antrian.value}</span></span>
              : <span key={antrian.id}>{' => '}<span className="value">{antrian.value}</span></span>
          ))}</p>
        }
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="container">
      <Header />
      <hr />
      <Content />
      <hr />
    </div>
  )
}

export default App;