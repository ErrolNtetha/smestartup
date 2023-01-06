/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable  react/jsx-no-useless-fragment */
import React from 'react';
import { FiX } from 'react-icons/fi';

interface Props {
    className: string;
    children: React.ReactNode;
    isClosable?: boolean;
}

export const Modal:React.FC<Props> = ({ children, className, isClosable = true }) => {
    const [modal, setModal] = React.useState(true);

    return (
        <>
            {modal
            &&
            (
                <div className={className}>
                    <section className='feed__modal'>
                        {children}
                        { isClosable && <section className='feed__modalClose' onClick={() => setModal(!modal)}> <FiX /> </section>}
                    </section>
                </div>
            )}
        </>
    );
};
