import React from "react";
import { Router } from "@reach/router";

import Nav from './components/nav'
import Alert from './components/alert'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/sign-up'
import Dashboard from './pages/dashboard'
import Challenge from './pages/challenge'
import Challenges from './pages/challenges'
import RegisterChallenge from './pages/registerChallenge'

const App = () => (
  <>
    <Alert />
    <Nav />

    <Router>
      <Home path="/" />
      <Login path="/login" />
      <SignUp path="/sign-up" />
      <Dashboard path="/dashboard" />
      <Challenge path="challenges/:invoiceId" />
      <Challenges path="/challenges" />
      <RegisterChallenge path="/challenges/register" />
    </Router>
  </>
);

export default App