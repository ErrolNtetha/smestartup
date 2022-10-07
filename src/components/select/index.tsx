/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable  jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

interface Props {
    title: string;
    children: React.ReactChild;
    className: string;
}

export const Select = ({ title, children, className }: Props) => {
    const [open, setOpen] = useState(false);
    return (
        <section className={className} onClick={() => setOpen(!open)}>
            <section className={`${className}__selected`}>
                <p> {title} </p>
                {open
                    ? <FiChevronUp className={`${className}__selected__icon`} />
                    : <FiChevronDown className={`${className}__selected__icon`} />}
            </section>
            {open && children}
        </section>
    );
};
