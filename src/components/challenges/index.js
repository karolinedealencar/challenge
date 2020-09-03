/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import { navigate } from "@reach/router";

import "./index.css";

import ChallengeList from "../challengeList";
import Illustration from "../illustration";
import AppContext from "../appContext";

const Challenges = () => {
  const myContext = useContext(AppContext);
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getChallenges();
    }
  }, []);

  const handleChallenges = async () => {
    const challenges = await fetch(
      "https://challenge-backend.herokuapp.com/challenge",
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

  const getChallenges = async () => {
    try {
      const challenges = await handleChallenges();
      if (challenges.length) setChallenges(challenges);
    } catch (error) {
      myContext.setAlert({ message: error.message, type: "error" });
    }
  };

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
      {challenges.length && <ChallengeList challenges={challenges} />}
    </main>
  );
};

export default Challenges;
