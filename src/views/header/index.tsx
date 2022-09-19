/* eslint-disable no-nested-ternary */
/* eslint-disable  react/jsx-no-useless-fragment */
import React from 'react';
import { Group } from 'components/header/group';
// import { useStore } from 'hoc/useStore';

interface Props {
    children: React.ReactNode;
}

export const Header = ({ children }: Props) => {
    return (
        <div className='header'>
            <header className='header__content'>
                {children}
                <Group />
            </header>
        </div>
    );
};
