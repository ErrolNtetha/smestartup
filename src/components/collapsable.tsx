/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

interface IProps {
    children: string;
    end: number;
}

export const Collapsable = ({ children, end }: IProps) => {
    const text = children;
    const [seeMore, setSeeMore] = useState(true);
    return (
        <section className='textContainer'>
            { seeMore ? text.slice(0, end) : text }
            <span onClick={() => setSeeMore(!seeMore)} className='seeMore'>
                {seeMore ? '...see more' : ' show less'}
            </span>
        </section>
    );
};
