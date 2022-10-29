/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

interface IProps {
    children: string;
    end: number;
    className?: string;
}

export const Collapsable = ({ children, end, className }: IProps) => {
    const text = children;
    const [seeMore, setSeeMore] = useState(true);
    return (
        <span className={className}>
            { seeMore && (text?.length > end) ? text.slice(0, end).concat('...') : text }
            { text?.length > end
                && (
                    <span onClick={() => setSeeMore(!seeMore)} style={{ borderBottom: '.6px solid white', marginLeft: '.4em' }}>
                        {seeMore ? 'see more' : 'show less'}
                    </span>
                )}
        </span>
    );
};
