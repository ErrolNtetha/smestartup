import React from 'react';
import { useFormik } from 'formik';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { Header } from '../../views/header';
import { Button } from '../../components/button';
// import { BASE_URL } from '../../config/baseURL';

export const Register = () => {
    // const history = useHistory();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            file: '',
        },
        onSubmit(values) {
            if (!values.firstName || !values.email || !values.password) {
                console.log('Fields empty...');
                return;
            }

            console.log(values);
            console.log(values.file);

            // axios.post('http://localhost:5000/signup', values)
            // .then(() => {
            //     history.push('/login');
            //     console.log(values);
            // })
            // .catch((err) => console.log(err));
        }
    });

    return (
        <>
        <Header />
            <section className='register'>
                <section className='register__container'>
                    <section className='register__left'>
                        Grow your business at the comfort of your own bed!
                    </section>
                    <section className='register__right'>
                       <span className='register__header'>  Create New Account </span>
                        <form onSubmit={formik.handleSubmit}>
                        <label className='login__label' htmlFor='firstName'> First Name
                            <input
                              type='text'
                              name='firstName'
                              placeholder='Mphumeleli Ntetha'
                              value={formik.values.firstName}
                              onChange={formik.handleChange}
                              className='login__emailField'
                              autoCapitalize='false'
                            />
                        </label>
                        <label className='login__label' htmlFor='firstName'> Last Name
                            <input
                              type='text'
                              name='lastName'
                              placeholder='Ntetha'
                              value={formik.values.lastName}
                              onChange={formik.handleChange}
                              className='login__emailField'
                              autoCapitalize='false'
                            />
                        </label>
                        <label className='login__label' htmlFor='email'> Email
                            <input
                              type='email'
                              name='email'
                              placeholder='name@example.com'
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              className='login__emailField'
                              autoCapitalize='false'
                            />
                        </label>

                        <label className='login__label' htmlFor='email'> Password:
                            <input
                              type='password'
                              name='password'
                              placeholder='Enter password'
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              className='login__emailField'
                              autoComplete='false'
                            />
                        </label>
                        <label className='login__label' htmlFor='email'> Password:
                            <Button className='login__button'>
                                Choose Avatar
                            <input
                              type='file'
                              name='avatar'
                              accept='image/*'
                              hidden
                              onChange={(event) => formik.setFieldValue('file', event.currentTarget.files[0])}
                              className='login__emailField'
                            />
                            </Button>
                        </label>
                            <Button type='submit' className='login__button'> Create Account </Button>
                        </form>
                    </section>
                </section>
            </section>
        </>
    );
};