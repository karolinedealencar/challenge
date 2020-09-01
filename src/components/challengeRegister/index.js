import React from "react";

import Illustration from '../illustration'

const ChallengeRegister = () => (
    <main className="container"> 
        <Illustration />
        <h1>Register Challenge <span role="img" aria-label="Victory Hand">✌️</span></h1>
        <form>
            <label>
                <span>Title</span>
                <input type="text" />
            </label>
            <label>
                <span>Description</span>
                <textarea></textarea>
            </label>
            <label>
                <span>Group Link</span>
                <input type="text" />
            </label>
            <button className="action">Register</button>
        </form>
    </main>
);

export default ChallengeRegister