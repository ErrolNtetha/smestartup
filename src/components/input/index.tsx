/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useField } from 'formik';

interface Values {
  label: string;
}

export const Input = ({ label, ...props }: Values) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor='name'>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error && (
          <div className="error">{meta.error?.firstName}</div>
      )}
    </>
  );
};
