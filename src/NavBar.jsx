import { Link } from 'react-router-dom';
import "./styles/NavBar.css"
const NavBar = () => {
    return (
        <>
            <div id="topnav">
                <nav>
                    <ul id="nav-ul">
                        <li>
                            <Link to="/"> Pocket </Link>
                        </li>
                        <li >
                            <div id="login-id">
                                <Link to="/login">Log-In</Link>
                            </div>
                        </li>
                        <li >
                            <div id="signUp">
                                <Link to="/signup">Sign UP</Link>
                            </div>
                        </li>
                        <li >
                            <div id="scan-download">
                                <Link to="/scan-download">Scan-to-Download-App <br> IOS & Android</br></Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default NavBar;