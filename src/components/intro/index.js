import React from "react";
import { Link } from "@reach/router";

import "./index.css"

const Intro = () => (
    <main className="intro">
        <div>
            <h1 className="intro__title">Challenge <span role="img" aria-label="Victory Hand">✌️</span></h1>
            <p className="intro__description">
                Share your challenge group so people can join you.
            </p>
            <Link className="intro__link" to="/sign-up">
                Sign up
            </Link>
        </div>
        <div className="intro__img">
            <img src="share.svg" alt="Two girls sharing content" />
        </div>
    </main>
);

export default Intro