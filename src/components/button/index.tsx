/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable func-names */
import React, { ButtonHTMLAttributes, ReactElement } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button:React.FC<ButtonProps> = ({ ...props }): ReactElement => {
  return (
    <button type='button' {...props} />
  );
};
