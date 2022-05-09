/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable brace-style */
import React from 'react';
import {
    Formik,
    Form,
    Field,
    FormikConfig,
    FormikValues
} from 'formik';
// import { Input } from 'components/input';
// import { Button } from '../../components/button';
// import { SERVER_URL } from '../../config/baseURL';

 const MyInput = ({ field, form, ...props }) => {
     return (
    <label htmlFor={props}>
        <input {...field} {...props} />
    </label>
     );
 };

export const Business = () => {
    return (
        <Stepper
          initialValues={{
             personal: '',
             business: ''
            }}
          onSubmit={() => {}}
        >
            <div>
                <Field
                  label='first name'
                  name='personal'
                  type='text'
                  component={MyInput}
                  placeholder='Enter your first name'
                  className='register__emailField'
                />
            </div>
            <div>
                <Field
                  label='last name'
                  name='business'
                  type='text'
                  component={MyInput}
                  placeholder='Enter your last name'
                  className='register__emailField'
                />
            </div>
        </Stepper>
    );
};

export const Stepper = ({ children, ...props }: FormikConfig<FormikValues>) => {
    const childrenArray = React.Children.toArray(children);
    const [step, setStep] = React.useState(0);
    const step1 = childrenArray[step];
    const isLastChild = childrenArray.length - 1;

    return (
        <Formik
          {...props}
          onSubmit={async (values, helpers) => {
            if (step === isLastChild) {
                await props.onSubmit(values, helpers);
                console.log(values);
            }
              else {
                setStep((prev) => prev + 1);
              } }}
        >
            <Form>
                {step1}

                {step > 0 && <button type='button' onClick={() => setStep((currentStep) => currentStep - 1)}> Back </button>}
                <button type='submit'> { step === isLastChild ? 'Submit' : 'Next' } </button>
            </Form>
        </Formik>
  );
};
