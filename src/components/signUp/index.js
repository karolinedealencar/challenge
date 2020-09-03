import React, { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { navigate } from "@reach/router";

import Illustration from "../illustration";
import AppContext from "../appContext";

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();
  const myContext = useContext(AppContext);

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/dashboard");
  });

  const handleSignUp = async (username, password) => {
    const signUp = await fetch(
      "https://challenge-backend.herokuapp.com/user/signup",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );
    const response = await signUp.json();

    if (response.message || response.msg) throw Error(response.message);
    return response;
  };

  const onSubmit = async (data) => {
    const { username, password } = data;
    try {
      const login = await handleSignUp(username, password);
      localStorage.setItem("token", login.token);
      myContext.setUserLoggedIn(true);
      myContext.setAlert({ message: null, type: null });
      navigate("/dashboard");
    } catch (error) {
      myContext.setAlert({ message: error.message, type: "error" });
    }
  };

  return (
    <main className="container">
      <Illustration />
      <h1>
        Sign Up{" "}
        <span role="img" aria-label="Victory Hand">
          ✌️
        </span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>Username</p>
          <input
            name="username"
            type="text"
            placeholder="ex: soraka"
            ref={register({ required: true, minLength: 6 })}
          />
          {errors.username && errors.username.type === "required" && (
            <span>Username is required.</span>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <span>Username must contain at least 6 characters.</span>
          )}
        </label>
        <label>
          <p>Password</p>
          <input
            name="password"
            type="password"
            ref={register({ required: true, minLength: 6 })}
          />
          {errors.password && errors.password.type === "required" && (
            <span>Password is required.</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span>Password must contain at least 6 characters.</span>
          )}
        </label>
        <button className="action">Sign Up</button>
      </form>
    </main>
  );
};

export default SignUp;
