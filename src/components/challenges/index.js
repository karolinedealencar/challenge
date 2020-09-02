import React, { useEffect, useContext } from "react";
import { navigate } from "@reach/router";

import "./index.css";

import ChallengeList from "../challengeList";
import Illustration from "../illustration";
import AppContext from "../appContext";

const Challenges = () => {
  const myContext = useContext(AppContext);

  useEffect(() => {
    if (!myContext.userLoggedIn) navigate("/login");
  });

  return (
    <main className="container challenges">
      <Illustration />
      <h1>
        Challenges{" "}
        <span role="img" aria-label="Victory Hand">
          ✌️
        </span>
      </h1>
      <label>
        <input type="search" placeholder="Search" />
      </label>
      <ChallengeList />
    </main>
  );
};

export default Challenges;
