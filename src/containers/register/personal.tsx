/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { Formik } from 'formik';
// import { occupations } from 'helpers/occupations';
import defaultAvatar from 'assets/blendot.png';
import { Preview } from 'components/preview';
import { Button } from '../../components/button';

export const Personal = () => {
const imageInput = useRef(null);

// const title = [...occupations, 'Unemployed', 'Founder & CEO'].sort();

return (
    <div className='register__container'>
    <Formik
      initialValues={{
            avatar: ''
        }}
      onSubmit={async (values) => {
          console.log(values);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
                <h3 className='register__header'> Create Free Account </h3>
                <hr style={{ margin: 0, opacity: 0.3 }} />
                <label>
                    <span className='register__avatarWrapper'>
                        Set an avatar
                        <div className='register__avatarContainer' role='button' tabIndex={0} onKeyDown={() => imageInput.current.click()} onClick={() => imageInput.current.click()}>
                            {props.values.avatar ? <Preview image={props.values.avatar} className='register__avatar' />
                            : <img src={defaultAvatar} alt='default avatar' className='register__avatar' />}
                        </div>
                    </span>
                    <input
                      type='file'
                      hidden
                      ref={imageInput}
                      accept='image/*'
                      name='avatar'
                      onChange={(e) => props.setFieldValue('avatar', e.currentTarget.files[0])}
                    />
                </label>
        <Button type='submit' className='register__button--register'> Create Account </Button>
        </form>
      )}
    </Formik>
    </div>
);
};
