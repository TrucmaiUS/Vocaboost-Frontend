import { Link } from "react-router-dom";
import MainPageLogo from "../assets/Logo.svg";
import NavBar from "./Navbar";

const Header = () => {
    return (
        <nav className="header">
            {/* Logo */}
            <Link to="/" className="site-title">
                <img src={MainPageLogo} alt="Vocaboost Logo" className="logo" />
            </Link>

            <NavBar/>

            <div className="login-signup">
                <Link to="/signin" className="signin">Sign in</Link>
                <Link to="/signup" className="signup">Sign up</Link>
            </div>
        </nav>
    );
}

export default Header