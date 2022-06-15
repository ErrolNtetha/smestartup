/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { useField } from 'formik';

interface Values {
  label: string;
}

export const Input = ({ label, ...props }: Values) => {
  const [field] = useField(props);

  return (
      <label>
        <input {...field} {...props} />
        {label}
      </label>
  );
};
