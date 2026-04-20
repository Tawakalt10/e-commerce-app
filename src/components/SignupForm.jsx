import React from 'react'
import { useState } from 'react';
import {useForm} from 'react-hook-form';


export default function SignupForm () {
    const {register, handleSubmit} = useForm();

function onSubmit(event){
    event.preventDefault();
    
}

return (
    <div style={{maxWidth: 400, margin:"2rem auto"}}>
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>
            <div style={{marginBottom: '1rem'}}>
                <label>
                    Email
                    <input
                    type="email" 
                    placeholder='you@example.com'
                    onChange={(e) => setEmail(e.target.value)}/>
                </label>

            </div>

            <div style={{marginBottom: '1rem'}}>
                <label>
                    Password
                    <input
                    type='password'
                    placeholder='*******'
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    
                </label>

            </div>

        </form>

    </div>
)
}

