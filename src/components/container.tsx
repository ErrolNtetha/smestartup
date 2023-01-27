import React from 'react';

interface Props {
    header: React.ReactNode;
    children: React.ReactNode;
    className: string;
}

export const Container = ({ header, children, className }: Props) => {
    return (
        <section className={`${className}`}>
            <header> {header} </header>
            <hr className='global' />
            <section className='childContainer'>
                {children}
            </section>
        </section>
    );
};
