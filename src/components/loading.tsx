/* eslint-disable no-nested-ternary */
import React from 'react';
import { ScaleLoader, SyncLoader, MoonLoader } from 'react-spinners';

interface Props {
    className: string;
    content: string;
    syncSize?: number;
    moonSize?: number;
}

export const Loading = ({
    content,
    className,
    syncSize,
    moonSize
}: Props) => {
    return (
        <main className={className}>
            {content === 'article'
                ? <ScaleLoader color='white' />
                : content === 'button'
                ? <SyncLoader size={syncSize} color='white' />
                : <MoonLoader size={moonSize} color='white' />}
        </main>
    );
};
