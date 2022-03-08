import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import axios from 'axios';
import logo from '../../assets/logo.png';
import { nav } from './utils';
import { Button } from '../../components/button';

export const Header: React.FC = () => {
    interface IState {
        user: {
            email: string
            name: string
        }[]
    }

    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<IState['user']>([]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // Use a custom to fetch data 'useFetchData'
    React.useEffect(() => {
        axios.get('http://localhost:5000/feed', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
        .then((res) => {
            console.log(res.data[0].name.firstName);
            setUser(res.data[0].name.firstName);
        })
        .catch((err) => console.error(err));

        return () => {};
    }, []);

    console.log(user);

    const loggedIn = useSelector((state: RootState) => state.isLogged);

    return (
        <div className='header'>
            <header className='header__content'>
                <img src={logo} className='header__logo' alt='Business logo' />
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
                    ? <Link to='/profile'> {user} </Link>
                    : <Button onClick={() => history.push('/login')} className='header__button--signin'> login </Button>}
                    <FiMenu onClick={handleToggle} className='header__menu-icon' />
                </span>
            </header>
        </div>
    );
};