import React, { useContext, useState } from "react";
import { Link } from "@reach/router";
import { Redirect } from "@reach/router";

import "./index.css";
import AppContext from "../appContext";

const Nav = () => {
  const myContext = useContext(AppContext);
  const [redirect, setRedirect] = useState(false);

  const handleLogout = () => {
    myContext.setUserLoggedIn(false);
    localStorage.removeItem("token");
    setRedirect(true);
  };

  return (
    <header>
      {redirect && <Redirect to="/login" />}
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
