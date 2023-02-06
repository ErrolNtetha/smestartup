import React from 'react';

interface Props {
 counter: number | string;
}

export const MessageCounter = ({ counter }: Props) => {
    const messageCounter = counter > 9 ? '9+' : `${counter}`;
    return (
        <span className='messageCounter'>
            <span> {messageCounter} </span>
        </span>
    );
};
