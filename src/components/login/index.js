import React from "react";

import "./index.css"

const Login = () => (
    <main className="login">

        <div className="login__img">
            <img src="share.svg" alt="Two girls sharing content" />
        </div>

        <h1>Login <span role="img" aria-label="Victory Hand">✌️</span></h1>

        <form>
            <label>
                <span>Username</span>
                <input type="text" />
            </label>
            <label>
                <span>Password</span>
                <input type="password" />
            </label>
            <button className="login__button">
                Login
            </button>
        </form>
    </main>
);

export default Login