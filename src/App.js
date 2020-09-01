import React from "react";
import { Router } from "@reach/router";

import Nav from './components/nav'
import Alert from './components/alert'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/sign-up'
import Dashboard from './pages/dashboard'
import ChallengeDetail from './pages/challengeDetail'
import Challenges from './pages/challenges'
import ChallengeRegister from './pages/challengeRegister'

const App = () => (
  <>
    <Alert />
    <Nav />

    <Router>
      <Home path="/" />
      <Login path="/login" />
      <SignUp path="/sign-up" />
      <Dashboard path="/dashboard" />
      <ChallengeDetail path="challenges/:challengeID" />
      <Challenges path="/challenges" />
      <ChallengeRegister path="/challenges/register" />
    </Router>
  </>
);

export default App