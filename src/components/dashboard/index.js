import React from "react";
import { Link } from "@reach/router";

import "./index.css"

const Dashboard = () => (
    <main className="dashboard">
        <div className="dashboard__img">
            <img src="share.svg" alt="Two girls sharing content" />
        </div>

        <h1>Dashboard <span role="img" aria-label="Victory Hand">✌️</span></h1>

        <section className="dashboard__section">
            <h2 className="dashboard__title">My Challenges</h2>
            <ul className="dashboard__list">
                <li className="dashboard__item">
                    <Link 
                        className="dashboard__link"
                        to="/challenges/chloe-ting"
                    >
                        Chole Ting Workout Challenge
                        <span className="dashboard__social-media">facebook</span>
                    </Link>
                </li>
                <li>
                    <Link 
                        className="dashboard__link"
                        to="/challenges/emi-wong"
                    >
                        Emi Wong Workout Challenge
                        <span className="dashboard__social-media">discord</span>
                    </Link>
                </li>
            </ul>
        </section>

        <section className="dashboard__section">
            <h2 className="dashboard__title">My Favorites</h2>
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
        </section>
        
    </main>
);

export default Dashboard