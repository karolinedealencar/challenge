/* eslint-disable react-hooks/exhaustive-deps */
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
  }, []);

  const handleUserChallenges = async () => {
    const challenges = await fetch(
      "https://challenge-backend.herokuapp.com/challenge/my-challenges",
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
    const challenges = await fetch(
      "https://challenge-backend.herokuapp.com/favorite/",
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

  const getUserChallenges = async () => {
    try {
      const challenges = await handleUserChallenges();
      if (challenges.length) setUserChallenges(challenges);
    } catch (error) {
      myContext.setAlert({ message: error.message, type: "error" });
    }
  };

  const getUserFavorites = async () => {
    try {
      const challenges = await handleUserFavorites();
      if (challenges.length) setUserFavorites(challenges);
    } catch (error) {
      myContext.setAlert({ message: error.message, type: "error" });
    }
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
