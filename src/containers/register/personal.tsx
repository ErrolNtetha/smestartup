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
import * as Yup from 'yup';
import { Google, Facebook } from 'components/socialButton';
import { axiosPublic } from 'config/axiosInstance';
import { SyncLoader } from 'react-spinners';
import { Select } from 'components/select';
import { Notice } from 'components/notice';
import { Button } from '../../components/button';

export const Personal = () => {
const imageInput = useRef(null);
const [responseMessage, setResponseMessage] = React.useState<string | null>(null);
const [responseError, setResponseError] = React.useState<boolean | null>(null);
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
                    .required('Location is required!'),
            gender: Yup.string()
                    .required('Gender is required!'),
            occupation: Yup.string()
                    .required('Occupation is required!'),
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
          await axiosPublic.post('/register', values)
              .then((response) => {
                    setResponseMessage(response.data.message);
                    setResponseError(response.data.success);
                  if (response.status === 201) {
                        history.push('/login');
                  }
                })
              .catch(({ response }) => {
                    setResponseError(response.data.success);
              });
      }}
    >
      {(props) => (
        <Form style={{ width: '100%' }} onSubmit={props.handleSubmit}>
                <h3 className='register__header'> Create New Account </h3>
                <hr style={{ margin: 0, opacity: 0.3 }} />
                <section style={{ padding: '2em 0' }} className='login__socials'>
                    <Google buttonText='Signup with Google' url='/auth/google/' />
                    <Facebook buttonText='Signup with Facebook' />
                </section>
                <hr style={{ margin: 0, opacity: 0.3 }} />
                <p className='login__Or'>OR</p>
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
                  placeholder='Enter your first names'
                  className='register__emailField'
                />
                {props.touched.firstName && <p className='register__errorMessage'> {props.errors.firstName} </p>}
                </label>
                <br />
                <label>
                    Last Name:
                <Field
                  name='lastName'
                  placeholder='Enter your last names'
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
                    <Field
                      as='select'
                      title={!props.values.occupation ? '- Choose title -' : props.values.occupation}
                      name='occupation'
                      className='register__selectOccupation'
                      component={Select}
                    >
                        <section className='register__selectOccupation__options'>
                            {title.map((item: string) => {
                                return (
                                    <section key={item}>
                                        <hr className='register__selectOccupation__options__optionsDivider' />
                                        <p className='register__selectOccupation__options__option' onClick={() => props.setFieldValue('occupation', item)}> {item} </p>
                                    </section>
                                );
                            })}
                        </section>
                    </Field>
                </label>
                {props.touched.occupation && <p className='register__errorMessage'> {props.errors.occupation} </p>}
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
                        <Field name='company' className='register__emailField' placeholder='Name of the company' />
                    </span>
                    </label>
                    )
                : null }
                <br />
                <label>
                    Gender:
                    <br />
                    <Field as='select' name='gender' title={!props.values.gender ? 'Choose gender' : props.values.gender} className='register__selectOccupation' component={Select}>
                        <section className='register__selectOccupation__options'>
                            <p className='register__selectOccupation__options__option' onClick={() => props.setFieldValue('gender', 'Male')}> Male </p>
                            <hr className='register__selectOccupation__options__optionsDivider' />
                            <p className='register__selectOccupation__options__option' onClick={() => props.setFieldValue('gender', 'Female')}> Female </p>
                        </section>
                    </Field>
                {props.touched.gender && <p className='register__errorMessage'> {props.errors.gender} </p>}
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
                {responseError === false && <Notice error={responseError} message={responseMessage} /> }
        </Form>
      )}
    </Formik>
    </div>
);
};
