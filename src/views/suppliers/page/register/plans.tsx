/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

interface PlansProps {
    children: React.ReactChild;
    planType: React.ReactNode
    id: string;
    htmlFor: string;
}

export const Plan = ({
    children,
    planType,
    id,
    htmlFor
}: PlansProps) => {
    return (
        <section className='supplier__plansContainer'>
            <span> <p style={{ padding: '10px', margin: '0' }}>{planType}</p> </span>
            <hr className='global' />
            {children}
            <input className='supplier__radio' name='plan' type='radio' id={id} value='free' />
            <label htmlFor={htmlFor} className='supplier__radioLabel'> Select </label>
        </section>
    );
};
