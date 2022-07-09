import React from 'react';

interface Props {
    children: React.ReactHTMLElement<any>;
    className: string;
}

export const Toast = ({ children, className }: Props) => {
    return (
        <section className={className}>
            <span style={{ width: '100%', background: 'red' }}> {children} </span>
        </section>
    );
};
