/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable brace-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
    Formik,
    Form,
    Field,
    FormikConfig,
    FormikValues
} from 'formik';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
// import { Input } from 'components/input';
// import { Button } from '../../components/button';
import * as Yup from 'yup';
import { NODE_ENV } from '../../config/baseURL';

 const MyInput = ({ field, form, ...props }) => {
     return (
    <label htmlFor={props}>
        <input {...field} {...props} />
    </label>
     );
 };

export const Business = () => {
const [avatar, setAvatar] = React.useState('');

React.useEffect(() => {
    const reader = new FileReader();

    if (avatar) {
            reader.onload = (e) => {
                const { result } = e.target;
                if (result) {
                    setAvatar(result);
                    console.log(result);
                }
            };
            console.log(avatar);
            reader.readAsDataURL(avatar);
        }

    return () => {
        if (reader && reader.readyState === 1) {
            reader.abort();
        }
    };
}, [avatar]);

    return (
        <Stepper
          initialValues={{
            occupation: '',
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            password: '',
            confirmPassword: '',
            avatar: ''
        }}
          onSubmit={() => {}}
        >
            <FormikStep validationSchema={Yup.object({
                firstName: Yup.string()
                    .min(2, 'Your name is too short!')
                    .max(50, 'Name is too long!')
                    .required('First name is required!'),
                lastName: Yup.string()
                    .min(2, 'Your name is too short!')
                    .max(50, 'Name is too long!')
                    .required('Last name is required!'),
            })}
            >
            <Helmet>
                <title> Join Thousands of Enterpreneurs and Investors | Blendot </title>
                <meta name='description' content='Create an account for free and share enterpreneurial journey with other enterpreneurs.' />
                <link rel='canonical' href='/register' />
            </Helmet>
                <h3> Create Free Account </h3>
                <label>
                    First Names:
                <Field
                  name='firstName'
                  component={MyInput}
                  placeholder='E.g. Mphumeleli Errol'
                  className='register__emailField'
                />
                </label>
                <label>
                    Last Name:
                <Field
                  name='lastName'
                  component={MyInput}
                  placeholder='E.g. Ntetha'
                  className='register__emailField'
                />
                </label>

                <label>
                    Occupation:
                    <Field as='select' name='occupation'>
                        <option> Select </option>
                        <option value='employed'> Employed </option>
                        <option value='selfEmployed'> Self-Employed </option>
                        <option value='student'> Student </option>
                        <option value='unemployed'> Unemployed </option>
                        <option value='retired'> Retired </option>
                    </Field>
                </label>

                <label>
                    Your gender
                    <Field as='select' name='gender'>
                        <option> Select </option>
                        <option value='male'> Male </option>
                        <option value='female'> Female </option>
                    </Field>
                </label>
                <label>
                    Choose profile picture
                    <input type='file' accept='image/*' onChange={(e) => setAvatar(e.target.files[0])} name='avatar' />
                    {console.log(avatar)}
                </label>
            </FormikStep>

            <FormikStep validationSchema={Yup.object({
                    email: Yup.string()
                        .email('The email is invalid.')
                        .required('Email is required!'),
                    password: Yup.string()
                        .min(6, 'Passoword must be at least 6 characters long.')
                        .max(40, 'Password is too long.')
                        .required('Password is required!')
                })}
            >
                <h3> More Information </h3>
                <label>
                    Email Address:
                <Field
                  name='email'
                  type='email'
                  component={MyInput}
                  placeholder='name@example.com'
                  className='register__emailField'
                />
                </label>
                <label>
                    Password:
                    <Field
                      name='password'
                      type='password'
                      placeholder='Create a password (minimum of 6 characters long)'
                      className='register__emailField'
                    />
                </label>
                <label>
                    Confirm Password:
                    <Field
                      name='confirmPassword'
                      type='password'
                      placeholder='Repeat the passowrd'
                      className='register__emailField'
                    />
                </label>
            </FormikStep>
        </Stepper>
    );
};

export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {

}

export const FormikStep = ({ children }: FormikStepProps) => {
    return <> {children} </>;
};

export const Stepper = ({ children, ...props }: FormikConfig<FormikValues>) => {
    const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
    const [step, setStep] = React.useState(0);
    const step1 = childrenArray[step] as React.ElementType<FormikStepProps>;
    const isLastChild = childrenArray.length - 1;

    return (
        <Formik
          {...props}
          validationSchema={step1.props.validationSchema}
          onSubmit={async (values) => {
            if (step === isLastChild) {
                await axios.post(`${NODE_ENV()}/register`, values, {
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    }
                });
                try {
                    console.log('posted');
                    console.log(values);
                }

                catch (err) {
                    console.log(err);
                }
                console.log(values);
            }
            else {
                 setStep((nextStep) => nextStep + 1);
            }
          }}
        >
            {(propss) => (
                <Form>
                    {step1}
                    {console.log(propss)}
                    {step > 0 && <button type='button' onClick={() => setStep((currentStep) => currentStep - 1)}> Back </button>}
                    <button type='submit'> { step === isLastChild ? 'Create Account' : 'Continue' } </button>
                </Form>
            )}
        </Formik>
  );
};
