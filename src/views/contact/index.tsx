/* eslint-disable react/prop-types */
/* eslint-disable  jsx-a11y/label-has-associated-control */

import React from 'react';
import {
    Field,
    Form,
    Formik
} from 'formik';
import { axiosPrivate, axiosPublic } from 'config/axiosInstance';
import { useStore } from 'hoc/useStore';

export const ContactPage = () => {
    const { isLogged } = useStore();

    return (
        <section className='contact__innerContainer'>
            <section className='contact__leftColumn'>
                <Formik
                  initialValues={{
                    fullNames: '',
                    email: '',
                    question: ''
                }}
                  onSubmit={async (values) => {
                      console.log(values);
                      if (isLogged) {
                        await axiosPrivate.post('/contact', values)
                          .then((response) => console.log(response.data))
                          .catch((error) => console.log(error.message));
                      } else {
                      await axiosPublic.post('/contact', values)
                          .then((response) => console.log(response.data))
                          .catch((error) => console.log(error.message));
                      }
                }}
                >
                    {(props) => (
                        <Form onSubmit={props.handleSubmit} className='contact__form'>
                            <section>
                                <label> Full Name </label>
                                <Field
                                  name='fullNames'
                                  placeholder='John Doe'
                                  className='contact__inputField'
                                  autoComplete='off'
                                />
                            </section>
                            <section>
                                <label> Email </label>
                                <Field
                                  name='email'
                                  placeholder='johndoe@example.com'
                                  className='contact__inputField'
                                />
                            </section>
                            <section>
                                <label> What is your question? </label>
                                <Field
                                  as='textarea'
                                  rows={6}
                                  name='question'
                                  placeholder='Type your question here'
                                  className='contact__inputField contact__textarea'
                                />
                                <p style={{ textAlign: 'right', margin: '0' }}> Characters: {props.values.question.length} </p>
                            </section>
                            <button type='submit' className='contact__submitButton'> Send </button>
                        </Form>
                    )}
                </Formik>
            </section>
            <section className='contact__rightColumn' />
        </section>
    );
};
