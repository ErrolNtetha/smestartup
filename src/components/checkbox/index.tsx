/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

export const Checkbox = () => {
    return (
        <label className='checkboxContainer'>
            <input type='checkbox' />
            <span className='slider' />
        </label>
    );
};
