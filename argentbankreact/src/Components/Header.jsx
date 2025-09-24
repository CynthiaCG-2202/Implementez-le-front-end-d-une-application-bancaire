import { Link } from "react-router-dom";
import "../styles/main.css"; 
import logo from "../assets/Images/argentBankLogo.png";

function Header({ isLoggedIn, onLogout }) {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {isLoggedIn ? (
          <button className="main-nav-item" onClick={onLogout}>
            <i className="fa fa-user-circle"></i> Sign Out
          </button>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
