import React from 'react';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

interface Props {
    message: string | null;
    success?: boolean | null;
}

export const Toast = ({ success, message }: Props) => {
    return (
        <span className='toast'>
            <span className='toast__inner'>
                {success
                    ? (
                        <span>
                            <FiCheckCircle className='toast__success' />
                            {message}
                        </span>
                    )
                    : (
                        <span>
                            <FiXCircle className='toast__error' />
                            {message}
                        </span>
                    )}
            </span>
        </span>
    );
};
