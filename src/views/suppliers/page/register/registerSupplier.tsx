/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable  jsx-a11y/click-events-have-key-events */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { axiosPrivate } from 'config/axiosInstance';
import * as Yup from 'yup';
import { SyncLoader } from 'react-spinners';
// import { Select } from 'components/select';
import { Button } from 'components/button';

export const RegisterSupplier = () => {
    const history = useHistory();
    const traceChars = (chars: number) => chars;
    return (
        <main className='supplier__registerSupplierContainer'>
            <Formik
              validationSchema={Yup.object({
                  name: Yup.string()
                        .min(2, 'Your name is too short!')
                        .max(100, 'Name is too long!')
                        .required('First name cannot be empty.'),
                  about: Yup.string()
                        .min(30, 'About should be at least 30 characters.')
                        .max(140, 'Name is too long!')
                        .required('About  is required!'),
                  description: Yup.string()
                        .min(30, 'Description should be at least 30 characters.')
                        .max(1200, 'You have exceeded maximum character limit of 200. Remove some characters.')
                        .required('Description is required!'),
                })}
              initialValues={{
                  name: '',
                  pictures: '',
                  about: '',
                  contacts: {
                    email: '',
                    website: '',
                    cellphone: '',
                    telephone: '',
                },
                  description: '',
                  addresses: '',
            }}
              onSubmit={async (values) => {
              await axiosPrivate.post('/suppliers/register', values)
                  .then((response) => {
                      if (response.status === 200) {
                          console.log('posted');
                      }
                    })
                  .catch(({ response }) => {
                    console.error(response);
                  });
                }}
            >
          {(props) => (
              <Form onSubmit={props.handleSubmit} className='profile__formContainer'>
                <h4>register supplier</h4>
                <hr className='global' />
                    <section>
                        <label htmlFor='name'> Company Name </label>
                        <Field
                          name='name'
                          placeholder='Name of the supplier'
                          className='profile__input'
                        />
                        {props.errors.name && <p style={{ color: 'red', margin: '0' }}>{props.errors.name}</p>}
                    </section>

                    <section>
                        <label htmlFor='email'>Email</label>
                        <Field
                          name='email'
                          placeholder='Business Email'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label htmlFor='website'>Website</label>
                        <Field
                          name='website'
                          placeholder='Company Website'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label htmlFor='location'> Address </label>
                        <Field
                          name='address'
                          placeholder='Full Company Address'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label htmlFor='company'> Cellphone Number </label>
                        <Field
                          name='cellphone'
                          placeholder='Cellphone'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label htmlFor='company'> Telephone Number </label>
                        <Field
                          name='telephone'
                          placeholder='Telephone'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label htmlFor='company'>Fax</label>
                        <Field
                          name='fax'
                          placeholder='Fax Number'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label htmlFor='about'> About </label>
                        <Field
                          name='about'
                          as='textarea'
                          rows={4}
                          placeholder='What is the business is about? Be short and precise.'
                          className='profile__inputBio'
                        />
                        <section style={{ fontSize: '.8rem', textAlign: 'right' }}> {`${traceChars(props.values.about.length)}/140`} characters </section>
                        {(props.errors.about && props.touched.about) && <p style={{ color: 'red', margin: '0' }}>{props.errors.about}</p>}
                    </section>

                    <section>
                        <label htmlFor='description'> Description </label>
                        <Field
                          name='description'
                          as='textarea'
                          rows={6}
                          placeholder='Write a description of what the business does.'
                          className='profile__inputBio'
                        />
                        <section style={{ fontSize: '.8rem', textAlign: 'right' }}> {`${traceChars(props.values.description.length)}/1200`} characters </section>
                        {(props.errors.description && props.touched.description) && <p style={{ color: 'red', margin: '0' }}>{props.errors.description}</p>}
                    </section>

                    <section className='profile__actionBtns'>
                        <Button onClick={() => history.goBack()} className='profile__button--cancel'>
                            Cancel
                        </Button>
                        <Button type='submit' disabled={props.isSubmitting} className='profile__button--save'>
                            {props.isSubmitting ? <SyncLoader color='white' size={6} /> : 'save' }
                        </Button>
                    </section>
              </Form>
          )}
            </Formik>
        </main>
    );
};
