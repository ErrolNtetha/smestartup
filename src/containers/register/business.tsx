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
import { Button } from '../../components/button';
// import { SERVER_URL } from '../../config/baseURL';

interface Props {
    value: {
        firstName: string;
        lastName: string;
    } | null;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    // nextPage: React.MouseEventHandler<HTMLButtonElement>;
    prevPage: React.MouseEventHandler<HTMLButtonElement>;
}

export const Business = ({
prevPage, onSubmit, value
}: Props) => {
    return (
            <section className='register'>
                <section className='register__container'>
                    <section className='register__left'>
                        Grow your business at the comfort of your own bed!
                    </section>
                    <Stepper
                      initialValues={{
                         firstName: '',
                         lastName: '',
                        }}
                      onSubmit={(values) => {
                          console.log(values);
                      }}
                    >
                       {(props) => (
                            <section className='register__right'>
                            <span className='register__header'>  Company Information </span>
                                <Form onSubmit={props.handleSubmit}>
                                    <div>
                                    <Field
                                      label='first name'
                                      name='firstName'
                                      type='text'
                                      value={value.firstName}
                                      component={Input}
                                      placeholder='Enter your name'
                                      className='register__emailField'
                                      onChange={props.handleChange}
                                    />
                                    </div>

                                    <div>
                                    <Field
                                      name='lastName'
                                      type='text'
                                      value={value.lastName}
                                      component={Input}
                                      placeholder='Enter your last name'
                                      className='register__emailField'
                                    />
                                    </div>
                                    <span className='register__btnContainer'>
                                        <Button type='submit' onClick={prevPage} className='register__button'> Back </Button>
                                        <Button type='submit' onClick={onSubmit} className='register__button'> Next </Button>
                                    </span>
                                </Form>
                            </section>
                       )}
                    </Stepper>
                </section>
            </section>
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
