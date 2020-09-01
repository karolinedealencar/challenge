import React from "react";
import { Link } from "@reach/router";

import Illustration from '../illustration'
import ChallengeList from '../challengeList'

const Dashboard = () => (
    <main className="container">
        <Illustration />
        <h1>Dashboard <span role="img" aria-label="Victory Hand">✌️</span></h1>

        <section>
            <h2>My Challenges</h2>
            <ChallengeList />
        </section>

        <section>
            <h2>My Favorites</h2>
            <ChallengeList />
        </section>

        <Link 
            className="action"
            to="/challenges/register"
        >
            Register Challenge
        </Link>
        
    </main>
);

export default Dashboard