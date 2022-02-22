/* eslint-disable func-names */
import React from 'react';

interface ButtonValue {
    name: string;
}

export const Button: React.FC<ButtonValue> = function ({ name }) {
  return (
    <button type='button'> {name} </button>
  );
};