import React from 'react';
import { Button } from './button';

interface ErrorProps {
    errorMessage: string;
    className: string;
}

export const OnError = ({ errorMessage, className } : ErrorProps) => {
    return (
            <section className={`${className}__responseContainer`}>
                <p>{errorMessage}</p>
                <Button className='supplier__retryButton' onClick={() => window.location.reload()}> Retry </Button>
            </section>
    );
};
