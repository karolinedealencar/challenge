import React, { useState, useEffect } from "react";
import { Router, Redirect } from "@reach/router";

import Nav from "./components/nav";
import Alert from "./components/alert";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Dashboard from "./pages/dashboard";
import ChallengeDetail from "./pages/challengeDetail";
import Challenges from "./pages/challenges";
import ChallengeRegister from "./pages/challengeRegister";
import AppContext from "./components/appContext";

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [alert, setAlert] = useState({
    message: null,
    type: null,
  });

  const userSettings = {
    userLoggedIn,
    alert,
    setUserLoggedIn,
    setAlert,
  };

  useEffect(() => {
    localStorage.getItem("token")
      ? setUserLoggedIn(true)
      : setUserLoggedIn(false);
  }, []);

  return (
    <AppContext.Provider value={userSettings}>
      {alert.message && <Alert alert={alert} />}

      <Nav />

      {userLoggedIn && <Redirect noThrow from="/login" to="/dashboard" />}
      {userLoggedIn && <Redirect noThrow from="/sign-up" to="/dashboard" />}
      {userLoggedIn && <Redirect noThrow from="/" to="/dashboard" />}

      {!userLoggedIn && <Redirect noThrow from="/dashboard" to="/login" />}
      {!userLoggedIn && (
        <Redirect noThrow from="/challenges/:challengeID" to="/login" />
      )}
      {!userLoggedIn && <Redirect noThrow from="/challenges" to="/login" />}
      {!userLoggedIn && (
        <Redirect noThrow from="/challenges/register" to="/login" />
      )}

      <Router>
        <Home path="/" />
        <Login path="/login" />
        <SignUp path="/sign-up" />
        <Dashboard path="/dashboard" />
        <ChallengeDetail path="challenges/:challengeID" />
        <Challenges path="/challenges" />
        <ChallengeRegister path="/challenges/register" />
      </Router>
    </AppContext.Provider>
  );
};

export default App;
