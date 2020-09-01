import React from "react";

import Illustration from '../illustration'

const SignUp = () => (
    <main className="container">
        <Illustration />
        <h1>Sign Up <span role="img" aria-label="Victory Hand">✌️</span></h1>
        <form>
            <label>
                <span>Username</span>
                <input type="text" placeholder="ex: soraka" />
            </label>
            <label>
                <span>Password</span>
                <input type="password" />
            </label>
            <label>
                <span>Password Confirm</span>
                <input type="password" />
            </label>
            <button className="action">Sign Up</button>
        </form>
    </main>
);

export default SignUp