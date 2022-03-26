import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/button';
import { SERVER_URL } from '../../config/baseURL';

export const Business = () => {
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

            axios.post(`${SERVER_URL}/signup`, values)
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

                        <span className='register__radioContainer'>
                                <input
                                  type='radio'
                                  name='gender'
                                  value='Male'
                                  onChange={formik.handleChange}
                                //   className='register__emailField'
                                /> Male
                        </span>
                        <span className='register__radioContainer'>
                                <input
                                  type='radio'
                                  name='gender'
                                  value='Female'
                                  onChange={formik.handleChange}
                                //   className='register__emailField'
                                /> Female
                        </span>

                        <label className='register__label register__radio' htmlFor='email'> Password:
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
                            <span className='register__btnContainer'>
                                <Button type='submit' className='register__button'> Back </Button>
                                <Button type='submit' className='register__button'> Next </Button>
                            </span>
                        </form>
                    </section>
                </section>
            </section>
    );
};