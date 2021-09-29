import { NavLink } from 'react-router-dom'
function Sidemenu() {
    return (
        <div class="vh-100 w-25 d-flex flex-column fixed-top">
            <nav class="nav nav-pills m-auto">
                <ul className="nav-list text-center m-auto list-unstyled p-0">
                    <li><NavLink className="nav-link" to="/" exact>Home</NavLink></li>
                    <li><NavLink className="nav-link" to="/about">About</NavLink></li>
                    <li><NavLink className="nav-link" to="/experience">Experience</NavLink></li>
                    <li><NavLink className="nav-link" to="/skills">Skills</NavLink></li>
                    <li><NavLink className="nav-link" to="/interest">Interest</NavLink></li>
                    <li><NavLink className="nav-link" to="/awards">Awards</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidemenu