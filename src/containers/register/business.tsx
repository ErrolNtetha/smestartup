/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable brace-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import {
    Formik,
    Form,
    Field,
    FormikConfig,
    FormikValues
} from 'formik';
import axios from 'axios';
import { occupations } from 'helpers/occupations';
import { Helmet } from 'react-helmet-async';
// import { Input } from 'components/input';
import * as Yup from 'yup';
// import { FiImage } from 'react-icons/fi';
import defaultAvatar from 'assets/blendot.png';
import { Button } from '../../components/button';
import { NODE_ENV } from '../../config/baseURL';

const MyInput = ({ field, form, ...props }) => {
     return (
    <label htmlFor={props}>
        <input {...field} {...props} />
        {console.log(props)}
    </label>
     );
 };

export const Business = () => {
const [avatar, setAvatar] = React.useState('');
const [avatarURL, setAvatarURL] = React.useState(defaultAvatar);
const imageInput = useRef(null);
// const [titles, setTitle] = React.useState('');

const title = [...occupations, 'Unemployed', 'Founder & CEO'].sort();

const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
};

React.useEffect(() => {
    const reader = new FileReader();

    if (avatar) {
        reader.onload = (e) => {
            const { result } = e.target;

            if (result) {
                setAvatarURL(result);
            }
        };
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
            avatarURL: ''
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
                <title> Join a new world of endless possibilities and meet Enterpreneurs and Investors | Blendot </title>
                <meta name='description' content='Create an account for free and share enterpreneurial journey with other enterpreneurs.' />
                <link rel='canonical' href='/register' />
            </Helmet>
                <h3 className='register__header'> Create Free Account </h3>
                <hr style={{ margin: 0, opacity: 0.3 }} />
                <label>
                    <span className='register__avatarWrapper'>
                        Set an avatar
                        <div className='register__avatarContainer' role='button' tabIndex={0} onKeyDown={() => imageInput.current.click()} onClick={() => imageInput.current.click()}>
                            {/* <div className='register__avatarLayer'>
                                camera
                        </div> */}
                            <img src={avatarURL} alt='default avatar' className='register__avatar' />
                        </div>
                    </span>
                    <input
                      type='file'
                      hidden
                      ref={imageInput}
                      accept='image/*'
                      onChange={handleFileChange}
                      name='avatarURL'
                    />
                </label>
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
                        {title.map((item: string[]) => <option key={item}> {item} </option>)}
                    </Field>
                </label>

                <label />

                <label>
                    Your gender
                    <Field as='select' name='gender' className='register__emailField'>
                        <option> Select </option>
                        <option value='male'> Male </option>
                        <option value='female'> Female </option>
                    </Field>
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
                <h3 className='register__header'> More Information </h3>
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
    return <div> {children} </div>;
};

export const Stepper = ({ children, ...props }: FormikConfig<FormikValues>) => {
    const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
    const [step, setStep] = React.useState(0);
    const currentStep = childrenArray[step] as React.ElementType<FormikStepProps>;
    const isLastChild = childrenArray.length - 1;

    return (
        <Formik
          {...props}
          validationSchema={currentStep.props.validationSchema}
          onSubmit={async (values) => {
            if (step === 1) {
                await axios.post(`${NODE_ENV()}/register`, values, {
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    }
                })
                .then((res) => console.log('registered. ', res.data));
            }
            else {
                 setStep((nextStep) => nextStep + 1);
            }
          }}
        >
            {(meta) => (
                <Form className='register__container'>
                    {currentStep}
                    {meta.errors.firstName}
                    <div className='register__btnGroup'>
                        {step > 0 && <Button type='button' className='register__button--register' onClick={() => setStep((s) => s - 1)}> Back </Button>}
                        <Button type='submit' className='register__button--register'> { step === isLastChild ? 'Create Account' : 'Continue' } </Button>
                    </div>
                </Form>
            )}
        </Formik>
  );
};
