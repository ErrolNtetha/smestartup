/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
    Formik,
    Form,
    Field,
    FormikConfig,
    FormikValues
} from 'formik';
import { Input } from 'components/input';
// import { Button } from '../../components/button';
// import { SERVER_URL } from '../../config/baseURL';

interface Props {
    value: {
        firstName: string;
        lastName: string;
    } | null;
    // onSubmit: React.FormEventHandler<HTMLFormElement>;
    // nextPage: React.MouseEventHandler<HTMLButtonElement>;
    //    prevPage: React.MouseEventHandler<HTMLButtonElement>;
}

export const Business = ({ value }: Props) => {
    return (
        <Stepper
          initialValues={{
             firstName: '',
             lastName: ''
            }}
          onSubmit={(values) => {
                console.log(values);
            }}
        >
            <>
                <Field
                  label='first name'
                  name='firstName'
                  type='text'
                  value={value.firstName}
                  component={Input}
                  placeholder='Enter your first name'
                  className='register__emailField'
                />
                <Field
                  label='last name'
                  name='lastName'
                  type='text'
                  value={value.lastName}
                  component={Input}
                  placeholder='Enter your last name'
                  className='register__emailField'
                />
            </>
        </Stepper>
    );
};

export const Stepper = ({ children, ...props }: FormikConfig<FormikValues>) => {
    //    const childrenArray = React.Children.toArray(children);

    return (
        <Formik {...props}>
            <Form>{children}</Form>
        </Formik>
  );
};
