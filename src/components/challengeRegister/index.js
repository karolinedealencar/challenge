import React from "react";
import { useForm } from 'react-hook-form';

import Illustration from '../illustration'

const ChallengeRegister = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const { title, description, link } = data
        console.log(title, description, link)
    }

    return (
        <main className="container"> 
            <Illustration />
            <h1>Register Challenge <span role="img" aria-label="Victory Hand">✌️</span></h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <p>Title</p>
                    <input 
                        name="title"
                        type="text" 
                        ref={register({ required: true, minLength: 5 })}
                    />
                    { errors.title && errors.title.type === "required" && <span>Title is required.</span> }
                    { errors.title && errors.title.type === "minLength" && <span>Title must contain at least 5 characters.</span> }
                </label>
                <label>
                    <p>Description</p>
                    <textarea 
                        name="description"
                        ref={register({ required: true, minLength: 10 })}
                    />
                    { errors.description && errors.description.type === "required" && <span>Description is required.</span> }
                    { errors.description && errors.description.type === "minLength" && <span>Description must contain at least 10 characters.</span> }
                </label>
                <label>
                    <p>Group Link</p>
                    <input 
                        name="link"
                        type="text" 
                        ref={register({ required: true, minLength: 5 })}
                    />
                    { errors.link && errors.link.type === "required" && <span>Group Link is required.</span> }
                    { errors.link && errors.link.type === "minLength" && <span>Group Link must contain at least 5 characters.</span> }
                </label>
                <button className="action">Register</button>
            </form>
        </main>
    )
};

export default ChallengeRegister