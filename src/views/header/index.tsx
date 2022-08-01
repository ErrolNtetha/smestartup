/* eslint-disable no-nested-ternary */
/* eslint-disable  react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { Nav } from 'components/header/nav';
import { Group } from 'components/header/group';

interface Props {
    children: React.ReactNode;
}

export const Header = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setInnerWidth(window.innerWidth);
        if (innerWidth > 769) {
            setIsOpen(true);
        } else setIsOpen(false);
    }, [innerWidth]);

    return (
        <div className='header'>
            <header className='header__content'>
                {children}
                { isOpen
                    ? <Nav handleToggle={() => handleToggle()} />
                    : null }
                    <Group />
            </header>
        </div>
    );
};
