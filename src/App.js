import React from "react";
import { Router } from "@reach/router";

import Nav from './components/nav'
import Alert from './components/alert'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/sign-up'

const App = () => (
  <>
    <Alert />
    
    <Nav />

    <Router>
      <Home path="/" />
      <Login path="/login" />
      <SignUp path="/sign-up" />
    </Router>
  </>
);

export default App