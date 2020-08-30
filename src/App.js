import React from "react";
import { Router, Link } from "@reach/router";

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> 
    </nav>
    <Router>
      <Home path="/" />
    </Router>
  </div>
);

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

export default App