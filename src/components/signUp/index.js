import React from "react";

import "./index.css"

const SignUp = () => (
    <main className="signUp">

        <div className="signUp__img">
            <img src="share.svg" alt="Two girls sharing content" />
        </div>

        <h1>Sign Up <span role="img" aria-label="Victory Hand">✌️</span></h1>

        <form>
            <label>
                <span>Username</span>
                <input type="text" />
            </label>
            <label>
                <span>Password</span>
                <input type="password" />
            </label>
            <label>
                <span>Password Confirm</span>
                <input type="password" />
            </label>
            <button>
                Sign Up
            </button>
        </form>
    </main>
);

export default SignUp