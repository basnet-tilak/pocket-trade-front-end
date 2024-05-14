import { Link } from 'react-router-dom';
import "./styles/NavBar.css"
const NavBar = () => {
    return (
        <>
            <nav>
                <ul >
                    <li>
                        <Link to="/">Pocket</Link>
                    </li>
                    <li>
                        <Link to="/buyctrypto">BuyCrypto</Link>
                    </li>
                    <li>
                        <Link to="/market">Market</Link>
                    </li>
                    <li>
                        <Link to="/trade">Trade</Link>
                    </li>
                    <li>
                        <Link to="/future">Future</Link>
                    </li>
                    <li>
                        <Link to="/square">Square</Link>
                    </li>
                    <li>
                        <Link to="/earn">Earn</Link>
                    </li>
                    <li id='login-signup-id'>
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign-Up</Link>
                        </div>
                    </li>

                </ul>
            </nav>
        </>
    )
}
export default NavBar;