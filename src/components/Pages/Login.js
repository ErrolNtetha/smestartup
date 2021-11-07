import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { post } from 'axios';

export default function Login() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const onSubmitHandler = () => {
        const loginDetails = {
            email,
            password,
        }

        const url = "http://localhost:5000/login";

        post(url, loginDetails)
            .then(res => console.log(res.data))
            .catch(err => console.log('Something went wrong: ', err));

        console.log(loginDetails);
    }

    return (
        <section className="loginContainer">
            <section>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <Link to='/login' onClick={onSubmitHandler}> login </Link>
                <p> Don't have an account? <Link to='/signup'> Signup </Link> </p>
            </section>
        </section>
    )
}
