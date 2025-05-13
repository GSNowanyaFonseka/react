import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar (){
    return <nav className="nav-bar">
        <ul className="nav-links">
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/activity"> Activity </Link> </li>
        </ul>
    </nav>
}

export default Navbar;