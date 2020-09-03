import React from "react";
import { Link } from "@reach/router";

import "./index.css";

const ChallengeList = ({ challenges }) => (
  <ul className="challenge-list">
    {challenges.map((challenge) => {
      return (
        <li key={challenge._id}>
          <Link
            className="challenge-list__link"
            to={`/challenges/${challenge.title.replace(" ", "-")}-${
              challenge._id
            }`}
          >
            {challenge.title}
            <span className="challenge-list__social-media">
              {challenge.link.split(".")[1]}
            </span>
          </Link>
        </li>
      );
    })}
  </ul>
);

export default ChallengeList;
