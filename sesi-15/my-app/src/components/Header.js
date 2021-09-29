import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const history = useHistory()
    const [btn, setBtn] = useState(null)

    useEffect(() => {
        if (localStorage.getItem('login')) {
            setBtn(true)
        } else {
            setBtn(false)
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('login')
        setBtn(false)
        history.push("/")
    }

    const doLogin = () => {
        localStorage.setItem('login', 'true')
        setBtn(true)
        history.push("/")
    }

    return (
        <>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <nav class="nav nav-pills me-auto">
                        <ul className="nav list-unstyled">
                            <li><NavLink className="nav-link" to="/" exact>Home</NavLink></li>
                            <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                            {btn ? <li><NavLink className="nav-link" to="/todos">Todos</NavLink></li> : <li><NavLink className="nav-link" to="/login">Todos</NavLink></li>}
                        </ul>
                    </nav>
                    <ul className="nav">
                        {btn ? <button className="btn btn-sm btn-danger" onClick={logout}>Logout</button> : <button className="btn btn-sm btn-success" onClick={doLogin}>Login</button>}
                    </ul>
                </div>
            </nav>
            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <span className="fs-4">My First React App</span>
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header