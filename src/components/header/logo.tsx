/* eslint-disable no-unused-expressions */

import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useStore } from 'hoc/useStore';
import { Nav } from 'components/header/nav';
import blendot from '../../assets/blogo.png';

export const Logo = () => {
    const [open, setOpen] = useState(false);
    const { isLogged } = useStore();

    const handleToggleMenu = () => setOpen(!open);

    return (
        <span className='header__innerContent'>
            <FiMenu className='header__menu-icon' onClick={handleToggleMenu} />
            <Link to={isLogged ? '/feed' : '/'}>
                <img src={blendot} className='header__logo' alt='Blendot Official Logo' />
            </Link>
            <Nav className={open ? 'header__nav' : 'header__nav active'} handleToggleMenu={handleToggleMenu} />
        </span>
    );
};
