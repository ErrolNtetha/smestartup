/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable  jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

interface Props {
    title: string;
    className: string;
    children: React.ReactChild;
}

export const Select = ({ title, className, children }: Props) => {
    const [open, setOpen] = useState(false);
    return (
        <section className={className} onClick={() => setOpen(!open)}>
            <section className='select__selected'>
                <p> {title} </p>
                {open
                    ? <FiChevronUp className='select__selected__icon' />
                    : <FiChevronDown className='select__selected__icon' />}
            </section>
            {open && children}
        </section>
    );
};
