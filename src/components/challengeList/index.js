import React from "react";
import { Link } from "@reach/router";

import "./index.css"

const ChallengeList = () => (
    <ul className="challenge-list">
        <li>
            <Link 
                className="challenge-list__link"
                to="/challenges/chloe-ting"
            >
                CS50 Python 
                <span className="challenge-list__social-media">
                    reddit
                </span>
            </Link>
        </li>
        <li>
            <Link 
                className="challenge-list__link"
                to="/challenges/emi-wong"
            >
                A 7 Day Productivity Challenge
                <span className="challenge-list__social-media">
                    discord
                </span>
            </Link>
        </li>
    </ul>
);

export default ChallengeList