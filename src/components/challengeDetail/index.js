/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import { navigate } from "@reach/router";

import "./index.css";
import Illustration from "../illustration";
import AppContext from "../appContext";

const ChallengeDetail = () => {
  const myContext = useContext(AppContext);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getChallengeDetail();
    }
  }, []);

  const handleChallengeDetail = async () => {
    const link = window.location.href.split("-");
    const index = link.length - 1;

    const challenges = await fetch(
      `https://challenge-backend.herokuapp.com/challenge/detail?id=${link[index]}`,
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

  const getChallengeDetail = async () => {
    try {
      const detail = await handleChallengeDetail();
      setDetail(detail);
    } catch (error) {
      myContext.setAlert({ message: error.message, type: "error" });
    }
    
  };

  const handleRegisterFavorite = async () => {
    const link = window.location.href.split("-");
    const index = link.length - 1;

    const challenges = await fetch(
      `https://challenge-backend.herokuapp.com/favorite/register`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Token: localStorage.getItem("token"),
        },
        body: JSON.stringify({ id: link[index] }),
      }
    );
    const response = await challenges.json();

    if (response.message) throw Error(response.message);
    return response;
  };

  const registerFavorite = async () => {
    try {
      await handleRegisterFavorite();
      myContext.setAlert({
        message: "Challenge added to favorites",
        type: "success",
      });
      navigate("/dashboard")
    } catch (error) {
      myContext.setAlert({ message: error.message, type: "error" });
    }
    
  };

  return (
    <main className="container challenge">
      <Illustration />
      <h1>
        {detail.title}{" "}
        <span role="img" aria-label="Victory Hand">
          ✌️
        </span>
      </h1>
      <button className="favorite" type="button" onClick={registerFavorite}>
        <span role="img" aria-label="Star emoji">
          ⭐
        </span>{" "}
        {detail.favorites}
      </button>
      <p>{detail.description}</p>
      <a
        className="action"
        href={detail.link}
        title="Join the group"
        target="_blank"
        rel="noopener noreferrer "
      >
        Join the group!
      </a>
    </main>
  );
};

export default ChallengeDetail;
