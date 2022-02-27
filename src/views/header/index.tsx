import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import { nav } from './utils';
import { Button } from '../../components/button';

export const Header: React.FC = () => {
    // const handleClick = (): void => console.log('Clicked');
    const history = useHistory();

    return (
        <div className='header'>
            <header className='header__content'>
                <img src={logo} className='header__logo' alt='Business logo' />
                <nav className='header__nav'>
                    <ul className='header__list'>
                        { nav.map((item) => (
                            !item.isPrivate && <Link to={item.url} key={item.key} className='header__item'> <li> {item.name} </li> </Link>))}
                    </ul>
                </nav>
                <Button onClick={() => history.push('/login')} className='header__button--signin'> login </Button>
                <FiMenu className='header__menu-icon' />
            </header>
        </div>
    );
};