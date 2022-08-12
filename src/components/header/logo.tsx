import React from 'react';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useStore } from 'hoc/useStore';
import blendot from '../../assets/blendot1.png';

export const Logo = () => {
    const isLoggedIn = useSelector((state: RootState) => state.isLogged);
    const store = useStore();
    console.log(store);

    return (
        <span className='header__innerContent'>
            <FiMenu className='header__menu-icon' />
            <Link to={isLoggedIn ? '/feed' : '/'}> <img src={blendot} className='header__logo' alt='Blendot Official Logo' /> </Link>
        </span>
    );
};
