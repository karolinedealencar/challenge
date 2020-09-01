import React from "react";

import Illustration from '../illustration'

const Login = () => (
    <main className="container">
        <Illustration />
        <h1>Login <span role="img" aria-label="Victory Hand">✌️</span></h1>
        <form>
            <label>
                <span>Username</span>
                <input type="text" placeholder="ex: soraka" />
            </label>
            <label>
                <span>Password</span>
                <input type="password" />
            </label>
            <button className="action">Login</button>
        </form>
    </main>
);

export default Login