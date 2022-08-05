/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable  jsx-a11y/click-events-have-key-events */

import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { occupations } from 'helpers/occupations';
import defaultAvatar from 'assets/blendot.png';
// import { Preview } from 'components/preview';
import * as Yup from 'yup';
import { axiosPublic } from 'config/axiosInstance';
import { SyncLoader } from 'react-spinners';
import { Select } from 'components/select';
import { Button } from '../../components/button';

export const Personal = () => {
const imageInput = useRef(null);
const history = useHistory();

const title = [...occupations, 'Unemployed', 'Founder & CEO'].sort();

return (
    <div className='register__container'>
    <Formik
      validationSchema={Yup.object({
            firstName: Yup.string()
                    .min(2, 'Your name is too short!')
                    .max(50, 'Name is too long!')
                    .required('First name is required!'),
            lastName: Yup.string()
                    .min(2, 'Your name is too short!')
                    .max(50, 'Name is too long!')
                    .required('Last name is required!'),
            location: Yup.string()
                    .min(3, 'Location cannot be less than 3 characters long.')
                    .required('Please fill the location field as well!'),
            email: Yup.string()
                        .email('The email is invalid.')
                        .required('Email is required!'),
          password: Yup.string()
                    .min(6, 'The password is too short. At least 6 characters minimum.')
                    .required('Password is required. Please create password.'),
            })}
      initialValues={{
            occupation: '',
            firstName: '',
            lastName: '',
            location: '',
            company: '',
            email: '',
            gender: '',
            password: '',
            avatar: '',
        }}
      onSubmit={async (values) => {
          console.log(values);
          await axiosPublic.post('/register', values)
              .then(() => {
                history.push('/login');
                  console.log(values);
                })
              .catch((error) => {
                console.error(error.message);
              });
      }}
    >
      {(props) => (
        <Form onSubmit={props.handleSubmit}>
                <h3 className='register__header'> Personal Details </h3>
                <hr style={{ margin: 0, opacity: 0.3, marginBottom: '1em' }} />
                <span className='register__avatarOuterContainer'>
                <label>
                    <span className='register__avatarWrapper'>
                        Set an avatar
                        <div className='register__avatarContainer' role='button' tabIndex={0} onKeyDown={() => imageInput.current.click()} onClick={() => imageInput.current.click()}>
                            {props.values.avatar ? <img src={props.values.avatar} alt='rndo' className='register__avatar' />
                            : <img src={defaultAvatar} alt='new user avatar' className='register__avatar' />}
                        </div>
                    </span>
                    <input
                      type='file'
                      hidden
                      ref={imageInput}
                      accept='image/*'
                      name='avatar'
                      onChange={(e) => {
                          const reader = new FileReader();
                          reader.readAsDataURL(e.currentTarget.files[0]);

                          reader.onload = () => {
                              if (reader.result) {
                                  props.setFieldValue('avatar', reader.result);
                              }
                          };
                      }}
                    />
                </label>
                </span>

                <label>
                    First Names:
                <Field
                  name='firstName'
                  placeholder='E.g. Mphumeleli Errol'
                  className='register__emailField'
                />
                {props.touched.firstName && <p className='register__errorMessage'> {props.errors.firstName} </p>}
                </label>
                <br />
                <label>
                    Last Name:
                <Field
                  name='lastName'
                  placeholder='E.g. Ntetha'
                  className='register__emailField'
                />
                {props.touched.lastName && <p className='register__errorMessage'> {props.errors.lastName} </p>}
                </label>

                <label>
                    Your location:
                <Field
                  name='location'
                  placeholder='E.g. Durban, South Africa'
                  className='register__emailField'
                />
                {props.touched.location && <p className='register__errorMessage'> {props.errors.location} </p>}
                </label>

                <label>
                    Occupation:
                    <br />
                    <Field as='select' title={!props.values.occupation ? 'Choose title' : props.values.occupation} name='occupation' className='register__selectOccupation' component={Select}>
                        <section className='register__options'>
                            {title.map((item: string) => {
                                return (
                                    <section key={item}>
                                        <hr className='select__options__optionsDivider' />
                                        <p className='register__options__option' onClick={() => props.setFieldValue('occupation', item)}> {item} </p>
                                    </section>
                                );
                            })}
                        </section>
                    </Field>
                </label>
                {props.values.occupation === ''
                    ? null
                    : props.values.occupation === 'Student'
                    ? (
                        <>
                        <label>
                            Qualification Name:
                            <br />
                            <span className='register__selectContainer'>
                            <Field name='qualification' className='register__emailField' placeholder='E.g.  Diploma in Business Administration' />
                            </span>
                        </label>
                        <label>
                            School Name:
                            <br />
                            <span className='register__selectContainer'>
                            <Field name='school' className='register__emailField' placeholder='E.g. Durban University of Technology' />
                            </span>
                        </label>
                        </>
                    )
                    : props.values.occupation !== ('Unemployed' || 'Other')
                    ? (
                    <label>
                    Company Name:
                    <br />
                    <span className='register__selectContainer'>
                        <Field name='company' className='register__emailField' placeholder='E.g. Blendot Inc.' />
                    </span>
                    </label>
                    )
                : null }
                <br />
                <label>
                    Gender:
                    <br />
                    <span className='register__selectContainer'>
                    <Field as='select' name='gender' title={!props.values.gender ? 'Choose gender' : props.values.gender} className='register__selectOccupation' component={Select}>
                        <section className='register__genderOptions'>
                            <p className='register__options__option' onClick={() => props.setFieldValue('gender', 'Male')}> Male </p>
                            <hr className='select__options__optionsDivider' />
                            <p className='register__options__option' onClick={() => props.setFieldValue('gender', 'Female')}> Female </p>
                        </section>
                    </Field>
                    </span>
                </label>
                <br />

                <section className='register__accountInfo'>

                <h3 className='register__header'> Account Information </h3>
                <hr style={{ margin: '.8em 0', opacity: 0.3 }} />
                <label>
                    Email Address:
                <Field
                  name='email'
                  type='email'
                  placeholder='name@example.com'
                  className='register__emailField'
                />
                {props.touched.email && <p className='register__errorMessage'> {props.errors.email} </p>}
                </label>
                <label>
                    New Password:
                    <Field
                      name='password'
                      type='password'
                      placeholder='Create a password (minimum of 6 characters long)'
                      className='register__emailField'
                    />

                    {props.touched.password && <p className='register__errorMessage'> {props.errors.password} </p>}
                </label>
                </section>
                <Button type='submit' className='register__button--register'> { props.isSubmitting ? <SyncLoader color='white' size={8} /> : 'Create Account' } </Button>
        </Form>
      )}
    </Formik>
    </div>
);
};
