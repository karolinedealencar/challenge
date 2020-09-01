import React from "react";
import { useForm } from 'react-hook-form';

import Illustration from '../illustration'

const Login = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const { username, password } = data
        console.log(username, password)
    }

    return (        
        <main className="container">
            <Illustration />
            <h1>Login <span role="img" aria-label="Victory Hand">✌️</span></h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <p>Username</p>
                    <input 
                        name="username" 
                        type="text" 
                        placeholder="ex: soraka" 
                        ref={register({ required: true })}
                    />
                    { errors.username && <span>Username is required.</span> }
                </label>
                <label>
                    <p>Password</p>
                    <input 
                        name="password" 
                        type="password" 
                        ref={register({ required: true })}
                    />
                    { errors.password && <span>Password is required.</span> }
                </label>
                <button className="action">Login</button>
            </form>
        </main>
    )
};

export default Login