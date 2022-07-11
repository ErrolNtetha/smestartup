/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Field } from 'formik';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import { Button } from 'components/button';
// import { SERVER_URL } from '../../config/baseURL';

export interface Props {
    type: string;
}

export const InitialForm = ({ type }: Props) => {
   return (
    <Field
      type='checkbox'
      name='firstName'
      placeholder='your name'
      value={type}
    />
   );
};
