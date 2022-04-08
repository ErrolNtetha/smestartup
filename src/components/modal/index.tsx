/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FiX } from 'react-icons/fi';

interface Props {
  children: React.ReactNode;
}

export const Modal:React.FC<Props> = ({ children }) => {
    const [modal, setModal] = React.useState(true);

    return (
        <div>
            {modal
            ?
            (
                <div className='feed__modalContainer'>
                    <section className='feed__modal'>
                        {children}
                        <section className='feed__modalClose' onClick={() => setModal(!modal)}> <FiX /> </section>
                    </section>
                </div>
            ) : null}
        </div>
    );
};
