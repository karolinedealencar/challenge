import React from "react";
import { Link } from "@reach/router";

import "./index.css"

const Challenges = () => (
    <main className="dashboard">
        <div className="dashboard__img">
            <img src="share.svg" alt="Two girls sharing content" />
        </div>

        <h1>Challenges <span role="img" aria-label="Victory Hand">✌️</span></h1>

        <label>
            <input type="search" placeholder="Search" />
        </label>

        <ul className="dashboard__list">
            <li className="dashboard__item">
                <Link 
                    className="dashboard__link"
                    to="/challenges/chloe-ting"
                >
                    CS50 Python 
                    <span className="dashboard__social-media">reddit</span>
                </Link>
            </li>
            <li>
                <Link 
                    className="dashboard__link"
                    to="/challenges/emi-wong"
                >
                    A 7 Day Productivity Challenge
                    <span className="dashboard__social-media">discord</span>
                </Link>
            </li>
        </ul>
        
    </main>
);

export default Challenges