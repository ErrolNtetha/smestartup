import React, { useState, useHistory, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { post, get } from 'axios';
import toggleLoggin from '../../store/actions/logged';
import { useDispatch } from 'react-redux';
import toggle from '../../store/actions/logged';

export default function Login() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ serverRes, setServerRes ] = useState();
    const [ isLoggedIn, setIsLoggedIn ] = useState(null);
    const dispatch = useDispatch();

    // On submit of login details...
    const onSubmitHandler = () => {
        const loginDetails = {
            email,
            password,
        }

        const url = "http://localhost:5000/login"; 

        post(url, loginDetails, {
            headers: {
                "Content-type": "application/json",
                'x-access-token': localStorage.getItem('token')
            },
        })
        .then(res => {
            localStorage.setItem( 'token', res.data.token );
            setIsLoggedIn(res.data.isLoggedIn);
            dispatch(toggleLoggin); 
            console.log(res.data.isLoggedIn);
        })
        .catch(err => console.log('Something went wrong: ', err));
    }

    useEffect(() => {
        get('localhost:5000/feed', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
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
                    <p> {serverRes} </p>
                    <Link to={ () => isLoggedIn ? '/feed' : '/login' } className="loginBTN" onClick={onSubmitHandler}> login </Link>
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
