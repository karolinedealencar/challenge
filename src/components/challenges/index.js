import React from "react";

import "./index.css"

import ChallengeList from '../challengeList'
import Illustration from '../illustration'

const Challenges = () => (
    <main className="container challenges">
        <Illustration />
        <h1>Challenges <span role="img" aria-label="Victory Hand">✌️</span></h1>
        <label>
            <input type="search" placeholder="Search" />
        </label>
        <ChallengeList />        
    </main>
);

export default Challenges