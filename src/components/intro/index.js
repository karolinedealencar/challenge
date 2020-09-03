import React, { useEffect, useContext } from "react";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

import "./index.css";
import Illustration from "../illustration";

const Intro = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/dashboard");
  });

  return (
    <main className="container">
      <h1 className="intro__title">
        Challenge{" "}
        <span role="img" aria-label="Victory Hand">
          ✌️
        </span>
      </h1>
      <p className="intro__description">
        Share your challenge group so people can join you.
      </p>
      <Link className="action" to="/sign-up" title="Sign up">
        Sign up
      </Link>
      <Illustration big={true} />
    </main>
  );
};

export default Intro;
