import React, { ChangeEventHandler } from 'react';
// import { useFormik } from 'formik';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { Button } from '../../components/button';
// import { SERVER_URL } from '../../config/baseURL';

interface Props {
    setType: ChangeEventHandler<HTMLInputElement>;
    submit: React.FormEventHandler<HTMLFormElement>;
    click: React.MouseEventHandler<HTMLButtonElement>;
    // eslint-disable-next-line react/require-default-props
    type?: string;
}

export const InitialForm = ({
 type, submit, click, setType
}: Props) => {
    return (
            <section className='register'>
                <p className='register__introHeader'> Signup up for a free account! </p>
                <section className='register__container'>
                    <section className='register__left'>
                        Grow your business at the comfort of your own bed!
                    </section>
                    <section className='register__right'>
                       <span className='register__header'>  Type of Account </span>
                        <form onSubmit={submit}>
                        <span className='register__radioContainer'>
                                <input
                                  type='radio'
                                  name={type}
                                  value='personal'
                                  onChange={setType}
                                //   className='register__emailField'
                                /> Personal Account
                        </span>
                        <span className='register__radioContainer'>
                                <input
                                  type='radio'
                                  name={type}
                                  value='business'
                                  onChange={setType}
                                //   className='register__emailField'
                                /> Business Account
                        </span>
                            <span className='register__btnContainer'>
                                <Button type='submit' onClick={click} className='register__button'> Back </Button>
                                <Button type='submit' className='register__button'> Next </Button>
                            </span>
                        </form>
                    </section>
                </section>
            </section>
    );
};