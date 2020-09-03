import React, { useEffect, useState, useContext } from "react";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

import Illustration from "../illustration";
import ChallengeList from "../challengeList";
import AppContext from "../appContext";

const Dashboard = () => {
  const myContext = useContext(AppContext);
  const [userChallenges, setUserChallenges] = useState(null);
  const [userFavorites, setUserFavorites] = useState(null);

  useEffect(() => {
    if (!myContext.userLoggedIn) navigate("/login");
    getUserChallenges();
    getUserFavorites();
  });

  const handleUserChallenges = async () => {
    const challenges = await fetch(
      "http://localhost:4000/challenge/my-challenges",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Token: localStorage.getItem("token"),
        },
      }
    );
    const response = await challenges.json();

    if (response.message) throw Error(response.message);
    return response;
  };

  const handleUserFavorites = async () => {
    const challenges = await fetch("http://localhost:4000/favorite/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
    });
    const response = await challenges.json();

    if (response.message) throw Error(response.message);
    return response;
  };

  const getUserChallenges = async () => {
    const challenges = await handleUserChallenges();
    if (challenges.length) setUserChallenges(challenges);
  };

  const getUserFavorites = async () => {
    const challenges = await handleUserFavorites();
    if (challenges.length) setUserFavorites(challenges);
  };

  return (
    <main className="container">
      <Illustration />
      <h1>
        Dashboard{" "}
        <span role="img" aria-label="Victory Hand">
          ✌️
        </span>
      </h1>

      {userChallenges && (
        <section>
          <h2>My Challenges</h2>
          <ChallengeList challenges={userChallenges} />
        </section>
      )}

      {userFavorites && (
        <section>
          <h2>My Favorites</h2>
          <ChallengeList challenges={userFavorites} />
        </section>
      )}

      <Link className="action" to="/challenges/register">
        Register Challenge
      </Link>
    </main>
  );
};

export default Dashboard;
