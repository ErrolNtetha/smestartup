/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable  jsx-a11y/click-events-have-key-events */

import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { occupations } from 'helpers/occupations';
import defaultAvatar from 'assets/blendot.png';
// import { Preview } from 'components/preview';
// import { Avatar } from 'components/avatar';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { axiosPrivate } from 'config/axiosInstance';
import { SyncLoader } from 'react-spinners';
import { Select } from 'components/select';
// import { Checkbox } from 'components/checkbox';
import { useStore } from 'hoc/useStore';
import { fetchProfile } from 'store/actions/fetchProfile';
import { Tooltip } from 'components/tooltip';
import { Button } from '../../components/button';

export const ProfileEdit = () => {
    const imageInput = useRef(null);
    const history = useHistory();
    const dispatch = useDispatch();
    const { userProfile: { userData } } = useStore();
    const {
        name,
        avatar,
        occupation,
        _id,
        bio,
        location,
        company
    } = userData;

    const traceChars = (chars: number) => chars;

const title = [...occupations, 'Unemployed', 'Founder & CEO'].sort();

return (
    <section className='profile__updateContainer'>
        <Formik
          validationSchema={Yup.object({
                firstName: Yup.string()
                        .min(2, 'Your name is too short!')
                        .max(50, 'Name is too long!')
                        .required('First name cannot be empty.'),
                lastName: Yup.string()
                        .min(2, 'Your name is too short!')
                        .max(50, 'Name is too long!')
                        .required('Last name is required!'),
                bio: Yup.string()
                            .max(200, 'You have exceeded maximum character limit of 200. Remove some characters.'),
                })}
          initialValues={{
                occupation,
                firstName: name?.firstName,
                lastName: name?.lastName,
                location,
                company,
                avatar,
                bio
            }}
          onSubmit={async (values) => {
              await axiosPrivate.put(`/profile/${_id}/update`, values)
                  .then((response) => {
                      if (response.status === 201) {
                            dispatch(fetchProfile(response.data.user));
                            history.goBack();
                      }
                    })
                  .catch(({ response }) => {
                    console.error(response);
                  });
          }}
        >
          {(props) => (
              <Form onSubmit={props.handleSubmit} className='profile__formContainer'>
                <h4>personal</h4>
                <hr className='global' />
                <section className='profile__personalContainer'>
                    <section className='profile__avatarContainer'>
                        <span className='register__avatarWrapper'>
                            <div className='register__avatarContainer' role='button' tabIndex={0} onKeyDown={() => imageInput.current.click()} onClick={() => imageInput.current.click()}>
                                {props.values.avatar ? <img src={props.values.avatar} alt='rndo' className='register__avatar' />
                                : <img src={defaultAvatar} alt={`${props.values.firstName}'s avatar'`} className='register__avatar' />}
                            </div>
                            <Button className='profile__changeAvatar' onClick={() => imageInput.current.click()}> change avatar </Button>
                        </span>
                    <input
                      type='file'
                      hidden
                      ref={imageInput}
                      accept='image/png]'
                      name='avatar'
                      onChange={(e) => {
                          const reader = new FileReader();
                          reader.readAsDataURL(e.currentTarget.files[0]);

                          reader.onload = () => {
                              if (reader.result) {
                                  props.setFieldValue('avatar', reader.result);
                              }
                          };
                      }}
                    />
                    </section>

                    <section>
                        <label htmlFor='firstName'> First Name</label>
                        <Field
                          name='firstName'
                          placeholder='Your First Name'
                          className='profile__input'
                        />
                        {props.errors.firstName && <p style={{ color: 'red', margin: '0' }}>{props.errors.firstName}</p>}
                    </section>

                    <section>
                        <label htmlFor='lastName'> Last Name</label>
                        <Field
                          name='lastName'
                          placeholder='Your Last Name'
                          className='profile__input'
                        />
                        {props.errors.lastName && <p style={{ color: 'red', margin: '0' }}>{props.errors.lastName}</p>}
                    </section>

                    <section>
                        <label htmlFor='location'> Location </label>
                        <Field
                          name='location'
                          placeholder='City, Country. Example: Durban, South Africa'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label> Occupation <Tooltip className='tooltipContainer' message='I you cannot find a title that best describe you, you can choose Other.' /> </label>
                        <Field as='select' title={!props.values.occupation ? '- Choose title -' : props.values.occupation} name='occupation' className='register__selectOccupation' component={Select}>
                            <section className='profile__input'>
                                {title.map((item: string) => {
                                    return (
                                        <section key={item}>
                                            <hr className='select__options__optionsDivider' />
                                            <p className='register__options__option' onClick={() => props.setFieldValue('occupation', item)}> {item} </p>
                                        </section>
                                    );
                                })}
                            </section>
                        </Field>
                    </section>

                    <section>
                        <label htmlFor='company'> Company </label>
                        <Field
                          name='company'
                          placeholder='Name of the company you work at'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label htmlFor='bio'> Bio </label>
                        <Field
                          name='bio'
                          as='textarea'
                          rows={5}
                          placeholder='Tell people about yourself and what makes you special...'
                          className='profile__inputBio'
                        />
                        <section style={{ fontSize: '.8rem', textAlign: 'right' }}> {`${!props.values?.bio?.length ? '0' : traceChars(props.values?.bio?.length)}/200`} characters </section>
                        {props.errors.bio && <p style={{ color: 'red', margin: '0' }}>{props.errors.bio}</p>}
                    </section>

                <hr className='global' style={{ marginTop: '3em' }} />
                <h4> account & passwords </h4>
                <hr className='global' />
                    <section style={{ marginTop: '1.2em' }}>
                        <label htmlFor='current_password'> Current Password </label>
                        <Field
                          name='password'
                          type='password'
                          placeholder='Enter your current password'
                          className='profile__input'
                        />
                    </section>
                    <section>
                        <label htmlFor='new_password'> Create New Password </label>
                        <Field
                          name='password'
                          type='password'
                          placeholder='Enter your new password'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label htmlFor='new_password'> Confirm New Password </label>
                        <Field
                          name='password'
                          type='password'
                          placeholder='Confirm your new password'
                          className='profile__input'
                        />
                    </section>

                    <section className='profile__actionBtns'>
                        <Button onClick={() => history.goBack()} className='profile__button--cancel'>
                            Cancel
                        </Button>
                        <Button type='submit' disabled={props.isSubmitting} className='profile__button--save'>
                            {props.isSubmitting ? <SyncLoader color='white' size={6} /> : 'save' }
                        </Button>
                    </section>
                </section>
              </Form>
          )}
        </Formik>
    </section>
);
};
