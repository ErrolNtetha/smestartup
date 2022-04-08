import React from 'react';
import { FiX } from 'react-icons/fi';

interface Props {
  children: React.ReactNode;
}

export const Modal:React.FC<Props> = ({ children }) => {
    return (
        <div className='feed__modalContainer'>
            <section className='feed__modal'>
                {children}
                <section className='feed__modalClose'> <FiX /> </section>
            </section>
        </div>
    );
};
