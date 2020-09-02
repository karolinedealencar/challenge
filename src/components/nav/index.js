import React, { useContext } from "react";
import { Link, navigate } from "@reach/router";

import "./index.css";
import AppContext from "../appContext";

const Nav = () => {
  const myContext = useContext(AppContext);

  const handleLogout = () => {
    myContext.setUserLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header>
      <nav className="nav">
        <ul className="nav__list">
          {!myContext.userLoggedIn && (
            <li className="nav__item">
              <Link className="nav__link" to="/login">
                Login
              </Link>
            </li>
          )}
          {myContext.userLoggedIn && (
            <li className="nav__item">
              <Link className="nav__link" to="/dashboard">
                Dashboard
              </Link>
            </li>
          )}
          {myContext.userLoggedIn && (
            <li className="nav__item">
              <Link className="nav__link" to="/challenges">
                Challenges
              </Link>
            </li>
          )}
          {myContext.userLoggedIn && (
            <li className="nav__item" onClick={handleLogout}>
              Logout
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
