import React from "react";
import { Link } from "@reach/router";

import "./index.css"

const Nav = () => (
    <header>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link 
                        className="nav__link"
                        to="/login"
                    >
                        Login
                    </Link>                 
                </li>
                <li className="nav__item">
                    <Link 
                        className="nav__link"
                        to="/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
                <li className="nav__item">
                    <Link 
                        className="nav__link"
                        to="/challenges"
                    >
                        Challenges
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Nav