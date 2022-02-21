import React from 'react';

interface Props {
    name?: string;
    age?: number;
}

export const Component: React.FC<Props> = (props) => {
    return (
        <div>
            <p> Hello world! </p>
        </div>
    );
}