import React from 'react';

interface Props {
    message: string | null;
    error: boolean | null;
}

export const Notice = ({ error, message }: Props) => {
    console.log(error);
    return (
        <section className='notice'>
            <section className='notice__message' style={{ background: `${error ? 'green' : 'red'}` }}>
                {message}
            </section>
        </section>
    );
};
