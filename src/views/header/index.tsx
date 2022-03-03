import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import { nav } from './utils';
import { Button } from '../../components/button';

export const Header: React.FC = () => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const params = window.location.href;

    return (
        <div className='header'>
            <header className='header__content'>
                <img src={logo} className='header__logo' alt='Business logo' />
                { isOpen
                ? (
                    <nav className='header__nav'>
                        <ul className='header__list'>
                            { nav.map((item) => (
                                !item.isPrivate && <Link to={item.url} key={item.key} className='header__item'> <li> {item.name} </li> </Link>))}
                        </ul>
                    </nav>
                    ) : null}
                <span className='header__BtnGroup'>
                    {params === 'http://localhost:3000/login' && <p> It works </p>}
                    <Button onClick={() => history.push('/login')} className='header__button--signin'> login </Button>
                    <FiMenu onClick={handleToggle} className='header__menu-icon' />
                </span>
            </header>
        </div>
    );
};