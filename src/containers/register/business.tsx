/* eslint-disable react/prop-types */
import React from 'react';
import { Formik } from 'formik';
import { Button } from '../../components/button';
// import { SERVER_URL } from '../../config/baseURL';

interface Props {
    value: {
        firstName: string;
        lastName: string;
    } | null;
    onChangeHandler: React.ChangeEventHandler<HTMLInputElement>
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    // nextPage: React.MouseEventHandler<HTMLButtonElement>;
    prevPage: React.MouseEventHandler<HTMLButtonElement>;
}

export const Business = ({
prevPage, onChangeHandler, onSubmit, value
}: Props) => {
    return (
            <section className='register'>
                <section className='register__container'>
                    <section className='register__left'>
                        Grow your business at the comfort of your own bed!
                    </section>
                    <Formik
                      initialValues={{
                        firstName: value.firstName,
                        lastName: value.lastName,
                        }}
                      onSubmit={(values) => {
                          console.log(values);
                      }}
                    >
                       {(props) => (
                            <section className='register__right'>
                                {console.log(props)}
                            <span className='register__header'>  Company Information </span>
                                <form onSubmit={onSubmit}>
                                    <label className='register__label' htmlFor='firstName'> Company&apos;s Legal Name:
                                        <input
                                          type='text'
                                          name='firstName'
                                          placeholder='First Name'
                                          value={value.firstName}
                                          onChange={onChangeHandler}
                                          className='register__emailField'
                                        />
                                    </label>
                                    <label className='register__label' htmlFor='lastName'> Trading as:
                                        <input
                                          type='text'
                                          name='lastName'
                                          placeholder='Trading as (Optional)'
                                          value={value.lastName}
                                          onChange={onChangeHandler}
                                          className='register__emailField'
                                        />
                                    </label>

                                    <span className='register__btnContainer'>
                                        <Button type='submit' onClick={prevPage} className='register__button'> Back </Button>
                                        <Button type='submit' onClick={onSubmit} className='register__button'> Next </Button>
                                    </span>
                                </form>
                            </section>
                       )}
                    </Formik>
                </section>
            </section>
    );
};