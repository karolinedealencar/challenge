import React, { useEffect, useContext } from "react";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

import Illustration from "../illustration";
import ChallengeList from "../challengeList";
import AppContext from "../appContext";

const Dashboard = () => {
  const myContext = useContext(AppContext);

  useEffect(() => {
    if (!myContext.userLoggedIn) navigate("/login");
  });

  return (
    <main className="container">
      <Illustration />
      <h1>
        Dashboard{" "}
        <span role="img" aria-label="Victory Hand">
          ✌️
        </span>
      </h1>

      <section>
        <h2>My Challenges</h2>
        <ChallengeList />
      </section>

      <section>
        <h2>My Favorites</h2>
        <ChallengeList />
      </section>

      <Link className="action" to="/challenges/register">
        Register Challenge
      </Link>
    </main>
  );
};

export default Dashboard;
