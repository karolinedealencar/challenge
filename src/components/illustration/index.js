import React from "react";

import "./index.css"

const Illustration = ({ big }) => (
    <figure className={big ? "illustration illustration_big" : "illustration"}>
        <img src="/share.svg" alt="Two girls. One is browsing on her cell phone and the other is sitting." />
    </figure>
);

export default Illustration