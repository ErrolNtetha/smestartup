/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import { Button } from 'components/button';
import React from 'react';
import { FaLinkedinIn, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { Header } from 'views/header';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit(values) {
            console.log(values);
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
                              autoCapitalize='true'
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