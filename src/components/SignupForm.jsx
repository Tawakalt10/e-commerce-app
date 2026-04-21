import React from 'react'
import { useState } from 'react';
import {useForm} from 'react-hook-form';


export default function SignupForm () {
    const {register, handleSubmit} = useForm();

function onSubmit(event){
    event.preventDefault();
    alert (`Email is : ${email} and Password is : ${password}`)
    
}

return (
    <div style={{maxWidth: 400, margin:"2rem auto"}}>
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{marginBottom: '1rem'}}>
                <label>
                    Email
                    <input
                    type="email" 
                    placeholder='you@example.com'
                    {...register("email", {required: "Email is required"})}
                    /> 
                </label>

            </div>

            <div style={{marginBottom: '1rem'}}>
                <label>
                    Password
                    <input
                    type='password'
                    placeholder='*******'
                     {...register("password", {required: "Password is required"})}
                   
                    />
                    
                </label>

            </div>
            
            <button type='submit'> Create account</button>

        </form>

    </div>
)
}

