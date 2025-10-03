import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, usersuccess } from "../Redux/features/authSlice";
import logo from "../assets/Images/argentBankLogo.png";
import '../styles/main.css'

function Header() {
  const { isLoggedIn, user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;
    fetch("http://localhost:3001/api/v1/user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Impossible de récupérer le profil");
        const data = await res.json();
        dispatch(usersuccess({ user: data.body }));
      })
      .catch((err) => {
        console.error(err);
        dispatch(logout());
      });
  }, [dispatch, token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    dispatch(logout());
    navigate("/sign-in");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div className="main-nav-user">
        {isLoggedIn && user ? (
          <div className="user-info">
            <i className="fa fa-user-circle"></i>
            <span className="user-name">{user.userName || user.firstName}</span>
            <a className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Sign Out
            </a>
          </div>
        ) : (
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;