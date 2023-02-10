import React from 'react';

interface Props {
    header: React.ReactNode;
    children: React.ReactNode;
    className: string;
    handleToggleComments?: React.MouseEventHandler<HTMLDivElement>;
    isClosable?: boolean;
}

export const Container = ({
    header,
    children,
    className,
    handleToggleComments,
    isClosable = false
}: Props) => {
    return (
        <section className={`${className}`}>
            <header> {header} </header>
            <hr className='global' />
            {isClosable
                && <div className='closeModal' onClick={handleToggleComments} onKeyPress={handleToggleComments} role='button' tabIndex={0}> Close </div> }
            <section className='childContainer'>
                {children}
            </section>
        </section>
    );
};
