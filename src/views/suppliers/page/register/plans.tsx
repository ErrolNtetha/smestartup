/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

interface PlansProps {
    children: React.ReactChild;
    planType: React.ReactNode
    id: string;
    htmlFor: string;
    value: string;
    selectPlan: React.ChangeEventHandler<HTMLInputElement>;
}

export const Plan = ({
    children,
    planType,
    id,
    htmlFor,
    value,
    selectPlan
}: PlansProps) => {
    return (
        <section className='supplier__plansContainer'>
            <span>
                <p style={{ padding: '10px', margin: '0' }}>{planType}</p>
            </span>
            <hr className='global' />
            {children}
            <input className='supplier__radio' onChange={selectPlan} name='plan' type='radio' id={id} value={value} />
            <label htmlFor={htmlFor} className='supplier__radioLabel'> Select </label>
        </section>
    );
};
