import React, { useState, useHistory, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { post, get } from 'axios';

export default function Login() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const history = []

    const onSubmitHandler = () => {
        const loginDetails = {
            email,
            password,
        }

        const url = "http://localhost:5000/login";

        post(url, loginDetails, { 
            headers: { "Content-type": "application/json" },
         })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token)
            console.log(data)
        })
        .catch(err => console.log('Something went wrong: ', err));

        console.log(loginDetails);
    }

    useEffect(() => {
        get('localhost:5000/feed', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
        .then(res => res.json())
        .then(data => data.isLoggedIn ? history.push("/feed") : null)
        .catch(err => console.log(err))
    }, [])

    return (
        <section className="loginContainer">
            <section className='innerSection'>
                <section className='inputFields'>
                    <label className='loginLabel'> Username: </label>
                    <input 
                        type="text" 
                        name="email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email or Username" 
                    />
                    <label className='loginLabel'> Password: </label>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                    />
                    <Link to='/feed' className="loginBTN" onClick={onSubmitHandler}> login </Link>
                    <p> Don't have an account? <Link to='/signup'> Signup </Link> </p>
                </section>

                
                {/* <section className="socialLogin">
                    <section>
                        <p> social links </p>
                    </section>
                </section> */}
            </section>
        </section>
    )
}
