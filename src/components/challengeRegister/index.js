import React, { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { navigate } from "@reach/router";

import Illustration from "../illustration";
import AppContext from "../appContext";

const ChallengeRegister = () => {
  const { register, handleSubmit, errors } = useForm();
  const myContext = useContext(AppContext);

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
  });

  const onSubmit = async (data) => {
    const { title, description, link } = data;
    await handleRegister(title, description, link);
    myContext.setAlert({
      message: "Challenge registered successfully",
      type: "success",
    });
    navigate("/dashboard");
  };

  const handleRegister = async (title, description, link) => {
    const register = await fetch(
      "https://challenge-backend.herokuapp.com/challenge/register",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Token: localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, link }),
      }
    );
    const response = await register.json();

    if (response.message) throw Error(response.message);
    return response;
  };

  return (
    <main className="container">
      <Illustration />
      <h1>
        Register Challenge{" "}
        <span role="img" aria-label="Victory Hand">
          ✌️
        </span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>Title</p>
          <input
            name="title"
            type="text"
            ref={register({ 
              required: true, 
              minLength: 5,
              pattern: /^[A-Za-z0-9]+$/i 
            })}
          />
          {errors.title && errors.title.type === "required" && (
            <span>Title is required.</span>
          )}
          {errors.title && errors.title.type === "minLength" && (
            <span>Title must contain at least 5 characters.</span>
          )}
          {errors.title && errors.title.type === "pattern" && (
            <span>Special characters are not allowed.</span>
          )}
        </label>
        <label>
          <p>Description</p>
          <textarea
            name="description"
            rows="10"
            ref={register({ required: true, minLength: 10 })}
          />
          {errors.description && errors.description.type === "required" && (
            <span>Description is required.</span>
          )}
          {errors.description && errors.description.type === "minLength" && (
            <span>Description must contain at least 10 characters.</span>
          )}
        </label>
        <label>
          <p>Group Link</p>
          <input
            name="link"
            type="text"
            ref={register({ required: true, minLength: 5 })}
          />
          {errors.link && errors.link.type === "required" && (
            <span>Group Link is required.</span>
          )}
          {errors.link && errors.link.type === "minLength" && (
            <span>Group Link must contain at least 5 characters.</span>
          )}
        </label>
        <button className="action">Register</button>
      </form>
    </main>
  );
};

export default ChallengeRegister;
