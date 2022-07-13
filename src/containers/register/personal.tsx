/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { occupations } from 'helpers/occupations';
// import defaultAvatar from 'assets/blendot.png';
// import { Preview } from 'components/preview';
import * as Yup from 'yup';
import { axiosPublic } from 'config/axiosInstance';
import { SyncLoader } from 'react-spinners';
import { Button } from '../../components/button';

export const Personal = () => {
// const imageInput = useRef(null);
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
          confirmPassword: Yup.string()
                    .label('confirm password')
                    .required('Password is required.')
                    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
            })}
      initialValues={{
            occupation: '',
            firstName: '',
            lastName: '',
            location: '',
            company: '',
            qualification: '',
            school: '',
            email: '',
            gender: '',
            password: '',
            confirmPassword: '',
            avatar: ''
        }}
      onSubmit={async (values) => {
            console.log(values);
          await axiosPublic.post('/register', values)
              .then((res) => {
                  const { success } = res.data;
                  if (!success) {
                      console.log('Looks like you already have an account with us. Please try logging in instead.');
                      console.log(res.data);
                      return;
                  }
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
                {/* <span className='register__avatarOuterContainer'>
                <label>
                    <span className='register__avatarWrapper'>
                        Set an avatar
                        <div className='register__avatarContainer' role='button' tabIndex={0} onKeyDown={() => imageInput.current.click()} onClick={() => imageInput.current.click()}>
                            {props.values.avatarBlob ? <Preview image={props.values.avatar} className='register__avatar' />
                            : <img src={defaultAvatar} alt='default avatar' className='register__avatar' />}
                        </div>
                    </span>
                    <input
                      type='file'
                      hidden
                      ref={imageInput}
                      accept='image/*'
                      name='avatar'
                      onChange={(e) => props.setFieldValue('avatar', e.currentTarget.files[0])}
                    />
                </label>
                </span> */}

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
                    <Field as='select' name='occupation' className='register__select'>
                        <option> Choose title </option>
                        {title.map((item: string[]) => <option key={item}> {item} </option>)}
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
                    <Field as='select' name='gender' className='register__select'>
                        <option className='register__option'> Select </option>
                        <option value='male'> Male </option>
                        <option value='female'> Female </option>
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
                <label className='register__label'>
                    Confirm Password:
                    <Field
                      name='confirmPassword'
                      type='password'
                      placeholder='Repeat the passowrd'
                      className='register__emailField'
                    />

                    {props.touched.confirmPassword && <p className='register__errorMessage'> {props.errors.confirmPassword} </p>}
                </label>
                </section>
                <Button type='submit' className='register__button--register'> { props.isSubmitting ? <SyncLoader color='white' size={8} /> : 'Create Account' } </Button>
        </Form>
      )}
    </Formik>
    </div>
);
};
