import React from "react";
import { Router } from "@reach/router";

import Nav from './components/nav'
import Home from './pages/home'

const App = () => (
  <>
    <Nav />

    <Router>
      <Home path="/" />
    </Router>
  </>
);

export default App