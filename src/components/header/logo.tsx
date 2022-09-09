/* eslint-disable no-unused-expressions */

import React from 'react';
import { useDispatch } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useStore } from 'hoc/useStore';
import { toggleNavOn } from 'store/actions/toggleMenu';
import { Nav } from 'components/header/nav';
import blendot from '../../assets/blendot1.png';

export const Logo = () => {
    const { isLogged, navbar } = useStore();
    const dispatch = useDispatch();

    return (
        <span className='header__innerContent'>
            <FiMenu className='header__menu-icon' onClick={() => dispatch(toggleNavOn())} />
            <Link to={isLogged ? '/feed' : '/'}> <img src={blendot} className='header__logo' alt='Blendot Official Logo' /> </Link>
            {navbar && <Nav />}
        </span>
    );
};
