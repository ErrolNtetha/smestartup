import React, { useState } from 'react';
import { post } from 'axios';
import { Link } from 'react-router-dom';

export default function SignupInputs() {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const onSubmitHandler = () => {
        const user = {
            firstName,
            lastName,
            email,
            title,
            password,
            confirmPassword,
        }
        
        const url = 'http://localhost:5000/signup'
        post(url, user)
            .then(res => console.log(res))
            .catch(err => console.log("Something went wrong: ", err))

        console.log(user);
    }

    return (
        <section>
             <select name="select">
                <option value=""> Choose title </option>
                <option value=""> Mr </option>
                <option value=""> Mrs </option>
                <option value=""> Ms </option>
                <option value=""> Dr. </option>
            </select>
            <input type="text" placeholder='First Names' onChange={e => setFirstName(e.target.value)} />
            <input type="text" placeholder='Last Names' onChange={e => setLastName(e.target.value)} />
            <input type="email" placeholder='Email address' onChange={e => setEmail(e.target.value)} />
            <select name="select" onChange={(e)=> setTitle(e.target.value)}>
                <option value=""> Select </option>
                <option value=""> Male </option>
                <option value=""> Female </option>
            </select>
            <input type="password" placeholder='Create password (minimum 6 characters' onChange={e => setPassword(e.target.value)} />
            <input type="password" placeholder='Confirm password' onChange={e => setConfirmPassword(e.target.value)} />
            <button onClick={onSubmitHandler}> Signup </button>
            <p> Already have an account? <Link to='/login'> Login </Link> </p>
    </section>
    )
}
