/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import { Button } from 'components/button';
import React from 'react';
import { FaLinkedinIn, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Header } from 'views/header';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import logged from '../../store/actions/logged';
// import { BASE_URL } from 'config/baseURL';

export const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    // const [token, setToken] = useState<string>('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        onSubmit(values) {
            const { email, password } = values;
            if (!email || !password) {
                console.log('Fields are empty...');
                return;
            }

            axios.post('/login', values, {
                headers: {
                    'Content-type': 'application/json',
                    'x-access-token': localStorage.getItem('token'),
                }
            })
                .then((res) => {
                    localStorage.setItem('token', res.data.token); // save token

                    if (res.data.isLoggedIn) {
                        dispatch(logged());
                        history.push('/feed');
                    }
                })
                .catch((err) => console.error('Something went wrong: ', err));
        }
    });

    return (
        <>
            <Header />
            <section className='login'>
                <section className='login__container'>
                        <h2 className='login__header'> Account Login </h2>
                        <form onSubmit={formik.handleSubmit} className='login__form'>
                            <label className='login__label' htmlFor='email'> Email or Username: </label>
                            <input
                              type='email'
                              name='email'
                              placeholder='Enter your email'
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              className='login__emailField'
                              autoCapitalize='false'
                            />

                            <label className='login__label' htmlFor='email'> Password: </label>
                            <input
                              type='password'
                              name='password'
                              placeholder='Enter password'
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              className='login__emailField'
                              autoComplete='false'
                            />
                            <Button type='submit' className='login__button'> Login </Button>
                        </form>
                        <p className='login__Or'>OR</p>
                        <section className='login__socials'>
                            <FaGoogle />
                            <FaFacebookF />
                            <FaLinkedinIn />
                        </section>
                        <section className='login__button--register'>
                            <p> Dont have an account? <b /> <Link to='/register'> Create new account! </Link> </p>
                        </section>
                </section>
            </section>
        </>
    );
};
