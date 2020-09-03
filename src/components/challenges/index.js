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
  const [challengesSearch, setChallengesSearch]= useState({
    search: '',
    result: []
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getChallenges();
    }
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase()
    const results = challenges.filter(challenge => challenge.title.toLowerCase().match(value))
    setChallengesSearch({
      search: value,
      result: results
    })
  }

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
    setLoading(true)
    try {
      const challenges = await handleChallenges();
      if (challenges.length) setChallenges(challenges);
    } catch (error) {
      myContext.setAlert({ message: error.message, type: "error" });
    } finally {
      setLoading(false)
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
        <input 
          type="search" 
          placeholder="Search" 
          onChange={handleSearch}
        />
      </label>
      {
        !loading ?
          challengesSearch.length || challenges.length 
            ? <ChallengeList challenges={challengesSearch.result.length ? challengesSearch.result : challenges} /> 
            : <p>No challenges! <span role="img" aria-label="Crying face">😢</span></p> 
        : <p>Loading...</p>
      }
    </main>
  );
};

export default Challenges;
