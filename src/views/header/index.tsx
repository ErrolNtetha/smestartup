import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMenu, FiUser } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import axios from 'axios';
import testLogo from '../../assets/testLogo.png';
import { nav } from './utils';
import { Button } from '../../components/button';

export const Header: React.FC = () => {
    // interface IState {
    //     user: {
    //         email: string
    //         name: string
    //     }[]
    // }

    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    // const [user, setUser] = useState<IState['user']>([]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        axios.get('/', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        });
    });

    const loggedIn = useSelector((state: RootState) => state.isLogged);

    return (
        <div className='header'>
            <header className='header__content'>
                <span>
                <FiMenu onClick={handleToggle} className='header__menu-icon' />
                <img src={testLogo} className='header__logo' alt='Business logo' />
                </span>
                { isOpen
                ? (
                    <nav className='header__nav'>
                        <ul className='header__list'>
                            { nav.map((item) => (
                                loggedIn
                                ? <Link to={item.url} key={item.id} className={item.className}> {item.name} </Link>
                                : null
                                ))}
                        </ul>
                    </nav>
                    ) : null}
                <span className='header__BtnGroup'>
                    { loggedIn
                    ? <Link className='header__userIcon' to='/profile'> <FiUser /> </Link>
                    : <Button onClick={() => history.push('/login')} className='header__button--signin'> login </Button>}
                </span>
            </header>
        </div>
    );
};