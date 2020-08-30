import React from "react";

import "./index.css"

const RegisterChallenge = () => (
    <main className="register">

        <div className="register__img">
            <img src="/share.svg" alt="Two girls sharing content" />
        </div>

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
            <button>
                Register
            </button>
        </form>
    </main>
);

export default RegisterChallenge