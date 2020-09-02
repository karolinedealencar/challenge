import React, { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { navigate } from "@reach/router";

import Illustration from "../illustration";
import AppContext from "../appContext";

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();
  const myContext = useContext(AppContext);

  useEffect(() => {
    if (myContext.userLoggedIn) navigate("/dashboard");
  });

  const onSubmit = (data) => {
    const { username, password } = data;
    console.log(username, password);
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
            ref={register({ required: true, minLength: 5 })}
          />
          {errors.username && errors.username.type === "required" && (
            <span>Username is required.</span>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <span>Username must contain at least 5 characters.</span>
          )}
        </label>
        <label>
          <p>Password</p>
          <input
            name="password"
            type="password"
            ref={register({ required: true })}
          />
          {errors.password && <span>Password is required.</span>}
        </label>
        <label>
          <p>Password Confirm</p>
          <input
            name="passwordConfirm"
            type="password"
            ref={register({ required: true })}
          />
          {errors.passwordConfirm && (
            <span>Password confirmation is required.</span>
          )}
        </label>
        <button className="action">Sign Up</button>
      </form>
    </main>
  );
};

export default SignUp;
