/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-restricted-syntax */

import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Formik,
    Form,
    Field,
    FieldArray
} from 'formik';
import defaultBusiness from 'assets/defaultBusiness.png';
import { axiosPrivate } from 'config/axiosInstance';
import * as Yup from 'yup';
import { SyncLoader } from 'react-spinners';
import { Button } from 'components/button';
import { Select } from 'components/select';
import { Modal } from 'components/modal';
import { Tooltip } from 'components/tooltip';
import { FiPlus, FiX } from 'react-icons/fi';
import { useStore } from 'hoc/useStore';
import { RemoveIcon } from 'components/removeIcon';
import { sectors } from '../../sectors';
import { levels } from './bee';
import { Feedback } from './feedback';
import { types } from './types';

export const RegisterSupplier = () => {
    const imageInput = useRef(null);
    const imageInput1 = useRef(null);
    const avatar = useRef(null);
    const { supplier } = useStore();
    const history = useHistory();
    const [modal, setModal] = React.useState(false);
    const [tag, setTag] = React.useState('');
    const traceChars = (chars: number) => chars;
    const { planType } = supplier.data;

    const message = 'Thank you. Your profile has been successfully submitted and this process can take up to 3 days. Once we have approved your profile, you will receive an email.';
    const numOfPictures = `${planType === 'starter' ? 3 : 5}`;
    const numOfTags = `${planType === 'pro' ? 3 : 6}`;

    return (
        <main className='supplier__registerSupplierContainer'>
            <Formik
              validationSchema={Yup.object({
                  name: Yup.string()
                        .min(2, 'Company name is too short!')
                        .max(100, 'Company name is too long!')
                        .required('Company name cannot be empty.'),
                  about: Yup.string()
                        .min(30, 'The About should be at least 30 characters long.')
                        .max(200, 'The About is too long. Maximum is 200 characters.')
                        .required('About is required!'),
                  description: Yup.string()
                        .min(30, 'Description should be at least 30 characters long.')
                        .max(1200, 'You have exceeded maximum character limit of 1200.')
                        .required('Description is required!'),
                })}
              initialValues={{
                  name: '',
                  avatar: '',
                  photos: [],
                  tags: [],
                  about: '',
                  established: '',
                  contacts: {
                    email: '',
                    website: '',
                    cellphone: '',
                    telephone: '',
                    fax: '',
                  },
                  socials: {
                    facebook: '',
                    twitter: '',
                    linkedin: '',
                    youtube: '',
                    instagram: '',
                  },
                  description: '',
                  address: {
                    streetAddress: '',
                    city: '',
                    province: '',
                    postalCode: '',
                  },
                  beeLevel: '',
                  sector: '',
                  moq: '',
                  moqNumber: '',
                  quotation: '',
                  companyType: '',
              }}
              onSubmit={async (values) => {
              await axiosPrivate.post('/suppliers/register', values)
                  .then((response) => {
                      if (response.status === 201) {
                          setModal(true);
                      }
                    })
                  .catch((error) => {
                    console.error(error.message);
                  });
                }}
            >
          {(props) => (
              <Form onSubmit={props.handleSubmit} className='profile__formContainer'>
                <h4>supplier registration</h4>
              {modal && (
                <Modal isClosable={false} className='supplier__feedbackContainer'>
                    <Feedback message={message} />
                </Modal>
              )}
                <hr className='global' />
                <section className='supplier__dividerContainer'>
                    <h3> 1. Company Information </h3>
                    <section className='profile__avatarContainer'>
                            <span className='register__avatarWrapper'>
                                <div className='register__avatarContainer' role='button' tabIndex={0} onKeyDown={() => avatar.current.click()} onClick={() => avatar.current.click()}>
                                    {props.values.avatar ? <img src={props.values.avatar} alt={`${props.values.name} avatar`} className='supplier__companyLogo' />
                                    : <img src={defaultBusiness} alt={`${props.values.name}'s avatar'`} className='supplier__companyLogo' />}
                                </div>
                                <Button className='profile__changeAvatar' style={{ marginTop: '.8em' }} onClick={() => avatar.current.click()}> Company Logo </Button>
                            </span>
                        <input
                          type='file'
                          hidden
                          ref={avatar}
                          accept='image/*'
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
                        <label htmlFor='name'> Company Name * </label>
                        <Field
                          name='name'
                          placeholder='Company Trading name'
                          className='profile__input'
                        />
                        {(props.errors.name && props.touched.name) && <p style={{ color: 'red', margin: '0' }}>{props.errors.name}</p>}
                    </section>

                    <section>
                        <label htmlFor='email'>Email *</label>
                        <Field
                          name='contacts.email'
                          placeholder='Business Email'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label htmlFor='website'>Website</label>
                        <Field
                          name='contacts.website'
                          placeholder='Company Website'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label htmlFor='established'> Established Year </label>
                        <Field
                          type='number'
                          name='established'
                          placeholder='The year the company was established'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label htmlFor='about'> About * </label>
                        <Field
                          name='about'
                          as='textarea'
                          rows={4}
                          placeholder='What the business is about? Be short and precise.'
                          className='profile__inputBio'
                        />
                        <section style={{ fontSize: '.8rem', textAlign: 'right' }}> {`${traceChars(props.values.about.length)}/200`} characters </section>
                        {(props.errors.about && props.touched.about) && <p style={{ color: 'red', margin: '0' }}>{props.errors.about}</p>}
                    </section>

                    <section>
                        <label htmlFor='description'> Description *</label>
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
                </section>

                <section className='supplier__dividerContainer'>
                    <h3> 2. Company Address </h3>
                    <section>
                        <label htmlFor='address'> Street Address </label>
                        <Field
                          name='address.streetAddress'
                          placeholder='Ex: 32446 Mitchel Road'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label htmlFor='address'> City </label>
                        <Field
                          name='address.city'
                          placeholder='Enter city'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label htmlFor='address'> Province </label>
                        <Field
                          name='address.province'
                          placeholder='Enter province'
                          className='profile__input'
                        />
                    </section>

                    <section>
                        <label htmlFor='address'> Postal Code </label>
                        <Field
                          type='number'
                          name='address.postalCode'
                          placeholder='Enter postal code. Ex: 4000'
                          className='profile__input'
                        />
                    </section>
                </section>

                    <section className='supplier__dividerContainer'>
                        <h3> 3. Contacts Information </h3>
                        <section>
                            <label htmlFor='company'> Cellphone Number </label>
                            <Field
                              type='number'
                              name='contacts.cellphone'
                              placeholder='Cellphone'
                              className='profile__input'
                            />
                        </section>

                        <section>
                            <label htmlFor='telephone'> Telephone Number: </label>
                            <Field
                              type='number'
                              name='contacts.telephone'
                              placeholder='Telephone'
                              className='profile__input'
                            />
                        </section>

                        <section>
                            <label htmlFor='fax'>Fax</label>
                            <Field
                              type='number'
                              name='contacts.fax'
                              placeholder='Fax Number'
                              className='profile__input'
                            />
                        </section>

                        <section>
                            <label htmlFor='socials'>Facebook</label>
                            <Field
                              name='socials.facebook'
                              placeholder='Your company&apos;s Facebook page link'
                              className='profile__input'
                            />
                        </section>

                        <section>
                            <label htmlFor='socials'>Twitter</label>
                            <Field
                              name='socials.twitter'
                              placeholder='Your company&apos;s Twitter page link'
                              className='profile__input'
                            />
                        </section>

                        <section>
                            <label htmlFor='socials'>Instagram</label>
                            <Field
                              name='socials.instagram'
                              placeholder='Your company&apos;s Instagram page link'
                              className='profile__input'
                            />
                        </section>

                        <section>
                            <label htmlFor='socials'>YouTube</label>
                            <Field
                              name='socials.youtube'
                              placeholder='Your company&apos;s YouTube page link'
                              className='profile__input'
                            />
                        </section>

                        <section>
                            <label htmlFor='socials'>LinkedIn</label>
                            <Field
                              name='socials.linkedin'
                              placeholder='Your company&apos;s LinkedIn page link'
                              className='profile__input'
                            />
                        </section>
                    </section>

                    <section className='supplier__dividerContainer'>
                        <h3> 4. Product/Service Information </h3>
                    <section>
                        <label htmlFor='beeLevel'> BBBEE Level: </label>
                        <Field
                          as='select'
                          name='beeLevel'
                          className='supplier__selectContainer'
                          component={Select}
                          title={!props.values.beeLevel ? '- Choose BBBEE Level -' : props.values.beeLevel}
                        >
                            <section className='supplier__selectContainer__options'>
                                {levels.map((item) => (
                                    <section>
                                        <p onClick={() => props.setFieldValue('beeLevel', item)}>{item}</p>
                                        <hr className='supplier__selectContainer__options__optionsDivider' />
                                    </section>
                                ))}
                            </section>
                        </Field>
                    </section>

                    <section>
                        <label htmlFor='beeLevel'> Supplier Type: </label>
                        <Field
                          as='select'
                          name='companyType'
                          className='supplier__selectContainer'
                          component={Select}
                          title={!props.values.companyType ? '- Select Company Type -' : props.values.companyType}
                        >
                            <section className='supplier__selectContainer__options'>
                                {types.map((item) => (
                                    <section>
                                        <p onClick={() => props.setFieldValue('companyType', item)}>{item}</p>
                                        <hr className='supplier__selectContainer__options__optionsDivider' />
                                    </section>
                                ))}
                            </section>
                        </Field>
                    </section>

                    <section>
                        <label htmlFor='sector'> Sector: </label>
                        <Field
                          as='select'
                          name='sector'
                          className='supplier__selectContainer'
                          component={Select}
                          title={!props.values.sector ? '- Choose a sector -' : props.values.sector}
                        >
                            <section className='supplier__selectContainer__options'>
                                {sectors.map((item) => (
                                    <section>
                                        <p onClick={() => props.setFieldValue('sector', item.name)}>{item.name}</p>
                                        <hr className='supplier__selectContainer__options__optionsDivider' />
                                    </section>
                                ))}
                            </section>
                        </Field>
                    </section>

                    <section>
                        <label htmlFor='moq'> Do you apply Minimum Order Quantity? </label>
                        <Field
                          as='select'
                          name='moq'
                          className='supplier__selectContainer'
                          component={Select}
                          title={!props.values.moq ? '- Choose -' : props.values.moq}
                        >
                            <section className='supplier__selectContainer__options'>
                                    <section>
                                        <p onClick={() => props.setFieldValue('moq', 'Yes')}>Yes</p>
                                        <hr className='supplier__selectContainer__options__optionsDivider' />
                                        <p onClick={() => props.setFieldValue('moq', 'No')}>No</p>
                                    </section>
                            </section>
                        </Field>
                    </section>

                        { props.values.moq === 'Yes'
                            ? (
                                <section>
                                    <label htmlFor='moqNumber'> What is the minimum number? </label>
                                    <Field
                                      type='number'
                                      name='moqNumber'
                                      placeholder='Enter minimum order quantity number'
                                      className='profile__input'
                                    />
                                </section>
                        )
                        : null}

                    <section>
                        <label htmlFor='quotation'> Do you give quotations? </label>
                        <Field
                          as='select'
                          name='quotation'
                          className='supplier__selectContainer'
                          component={Select}
                          title={!props.values.quotation ? '- Choose -' : props.values.quotation}
                        >
                            <section className='supplier__selectContainer__options'>
                                    <section>
                                        <p onClick={() => props.setFieldValue('quotation', 'Yes')}>Yes</p>
                                        <hr className='supplier__selectContainer__options__optionsDivider' />
                                        <p onClick={() => props.setFieldValue('quotation', 'No')}>No</p>
                                    </section>
                            </section>
                        </Field>
                    </section>
                    </section>

                    {planType === 'basic'
                        ? null
                        : planType === ('starter' || 'pro' || 'premium')
                        ? (
                            <FieldArray
                              name='tags'
                              render={(arrayHelpers) => (
                                <section className='supplier__tagOuterContainer'>
                                    <p> Add relevant tags: </p>
                                    <section className='supplier__formTagContainer'>
                                        <input
                                          type='text'
                                          value={tag}
                                          className='supplier__tagInput'
                                          placeholder='Add tag'
                                          onChange={(e) => setTag(e.currentTarget.value)}
                                          name='tags'
                                        />
                                        <button
                                          type='button'
                                          className='supplier__addTagButton'
                                          disabled={props.values.tags.length > Number(numOfTags)}
                                          onClick={() => {
                                            if (!tag) return;
                                            arrayHelpers.push(tag);
                                            setTag('');
                                          }}
                                        >
                                          Add Tag
                                        </button>
                                    </section>
                                    {props.values.tags
                                        && (
                                            <section className='supplier__listTagContainer'>
                                                {props.values.tags.map((item, index) => (
                                                    <span className='supplier__tagContainer' key={index}>
                                                       <span className='supplier__innerTagContainer'>
                                                            <p> {item} </p>
                                                            <span className='supplier__removeTag' onClick={() => arrayHelpers.remove(index)}> <FiX className='supplier__removeTag__removeIcon' /> </span>
                                                       </span>
                                                    </span>
                                                ))}
                                            </section>
                                        )}
                                  {props.values.tags.length > 0 && `(${props.values.tags.length}/${numOfTags})`}
                                </section>
                              )}
                            />
                        )
                        : null }

                    <FieldArray
                      name='photos'
                      render={(arrayHelpers) => (
                        <section>
                            <p> Upload Photos <Tooltip message={`You can upload ${numOfPictures} picture${Number(numOfPictures) > 1 ? 's' : ''}. To upload more, you have to upgrade to a paid plan.`} className='profile__tooltip' /> </p>
                                <section className='profile__photos'>
                                    {props.values.photos.length
                                        ? (
                                            <section>
                                                <section className='profile__photosContainer'>
                                                    {props.values.photos && props.values.photos.map((item, index) => (
                                                        <section className='profile__photosGroup'>
                                                            <img src={item} alt='dummy text' />
                                                            <RemoveIcon removeIconHandler={() => arrayHelpers.remove(index)} className='supplier' />
                                                        </section>
                                                    ))}
                                                    <section className='profile__addPhotos' onClick={() => imageInput1.current.click()}>
                                                        <section>
                                                            <FiPlus className='profile__plusIcon' />
                                                        </section>
                                                    </section>
                                                </section>
                                            </section>
                                        )
                                        : (
                                            <section onClick={() => imageInput.current.click()} className='profile__addPhotoContainer'>
                                                <section>
                                                    <FiPlus className='profile__plusIcon' />
                                                    <p className='profile__addPhotoBtn'>Add Photos</p>
                                                </section>
                                            </section>
                                        )}
                                </section>

                            <input
                              type='file'
                              hidden
                              ref={imageInput1}
                              accept='image/*'
                              name='photos'
                              onChange={(e) => {
                                  const reader = new FileReader();
                                  reader.readAsDataURL(e.currentTarget.files[0]);

                                  reader.onload = () => {
                                      if (reader.result) {
                                          arrayHelpers.push(reader.result);
                                      }
                                  };
                              }}
                            />

                            <input
                              type='file'
                              hidden
                              multiple
                              ref={imageInput}
                              accept='image/png'
                              name='photos'
                              onChange={(e) => {
                                  const photos = e.currentTarget.files;

                                  if (photos) {
                                      for (const photo of photos) {
                                        const reader = new FileReader();

                                        reader.readAsDataURL(photo);
                                        reader.onload = () => {
                                            if (reader.result) {
                                                arrayHelpers.push(reader.result);
                                            }
                                        };
                                      }
                                  }
                              }}
                            />
                        </section>
                        )}
                    />

                    <section className='profile__actionBtns'>
                        <Button onClick={() => history.goBack()} className='profile__button--cancel'>
                            Back
                        </Button>
                        <Button type='submit' disabled={props.isSubmitting} className='profile__button--save'>
                            {props.isSubmitting ? <SyncLoader color='white' size={6} /> : 'Submit' }
                        </Button>
                    </section>
              </Form>
          )}
            </Formik>
        </main>
    );
};
