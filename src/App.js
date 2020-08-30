import React from "react";
import { Router } from "@reach/router";

import Nav from './components/nav'
import Alert from './components/alert'
import Home from './pages/home'
import Login from './pages/login'

const App = () => (
  <>
    <Alert />
    
    <Nav />

    <Router>
      <Home path="/" />
      <Login path="/login" />
    </Router>
  </>
);

export default App