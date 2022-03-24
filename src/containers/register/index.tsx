import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Header } from '../../views/header';
import { Button } from '../../components/button';
// import { BASE_URL } from '../../config/baseURL';

export const Register = () => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            file: '',
            gender: ''
        },
        onSubmit(values) {
            if (!values.firstName || !values.email || !values.password) {
                console.log('Fields empty...');
                console.log(values);
                return;
            }

            // console.log(values);
            // console.log(values.file);

            axios.post('http://localhost:5000/signup', values)
            .then((res) => {
                if (res) {
                    console.log(values);
                    history.push('/login');
                }
            })
            .catch((err) => console.log(err));
        }
    });

    return (
        <>
        <Header />
            <section className='register'>
                <p className='register__introHeader'> Signup up for a free account! </p>
                <section className='register__container'>
                    <section className='register__left'>
                        Grow your business at the comfort of your own bed!
                    </section>
                    <section className='register__right'>
                       <span className='register__header'>  Personal Details </span>
                        <form onSubmit={formik.handleSubmit}>
                        <label className='register__label' htmlFor='firstName'> First Name
                            <input
                              type='text'
                              name='firstName'
                              placeholder='Mphumeleli Ntetha'
                              value={formik.values.firstName}
                              onChange={formik.handleChange}
                              className='register__emailField'
                              autoCapitalize='false'
                            />
                        </label>
                        <label className='register__label' htmlFor='firstName'> Last Name
                            <input
                              type='text'
                              name='lastName'
                              placeholder='Ntetha'
                              value={formik.values.lastName}
                              onChange={formik.handleChange}
                              className='register__emailField'
                              autoCapitalize='false'
                            />
                        </label>
                        <label className='register__label' htmlFor='email'> Email
                            <input
                              type='email'
                              name='email'
                              placeholder='name@example.com'
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              className='register__emailField'
                              autoCapitalize='false'
                            />
                        </label>

                        <label className='register__label' htmlFor='gender'> Gender
                            <input
                              type='radio'
                              name='male'
                              value={formik.values.gender}
                              onChange={formik.handleChange}
                              className='register__emailField'
                            />
                            <input
                              type='radio'
                              name='female'
                              value={formik.values.gender}
                              onChange={formik.handleChange}
                              className='register__emailField'
                            />
                        </label>

                        <label className='register__label' htmlFor='email'> Password:
                            <input
                              type='password'
                              name='password'
                              placeholder='Enter password'
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              className='register__emailField'
                              autoComplete='false'
                            />
                        </label>
                        {/* <label className='register__label' htmlFor='email'> Password:
                            <Button className='login__button'>
                                Choose Avatar
                            <input
                              type='file'
                            />
                              name='avatar'
                              accept='image/*'
                              onChange={(event) => formik.setFieldValue('file', event.currentTarget.files[0])}
                              className='register__emailField'
                            />
                            </Button>
                        </label> */}
                            <Button type='submit' className='register__button'> Create Account </Button>
                        </form>
                    </section>
                </section>
            </section>
        </>
    );
};