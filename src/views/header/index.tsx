/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMenu, FiMessageCircle, FiX } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import loggout from 'store/actions/loggout';
import avatar from 'assets/avatar.png';
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
    const dispatch = useDispatch();
    // const [user, setUser] = useState<IState['user']>([]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(loggout());
        history.push('/login');
    };

    const loggedIn = useSelector((state: RootState) => state.isLogged);

    return (
        <div className='header'>
            <header className='header__content'>
                <span className='header__innerContent'>
                <FiMenu onClick={handleToggle} className='header__menu-icon' />
                <Link to={loggedIn ? '/feed' : '/'}> <img src={testLogo} className='header__logo' alt='Blendot' /> </Link>
                </span>
                { isOpen
                ? (
                    <nav className='header__nav'>
                        <section>
                            <section className='header__profileContainer'>
                                <section>
                                    { loggedIn
                                    ? (
                                    <Link to='/profile' className='header__profile'>
                                    <img src={avatar} alt='me' className='header__profileImage' />
                                    <span>
                                        <h4 className='header__name'> Mphumeleli Ntetha </h4>
                                        <p className='header__title'> Founder and CEO, Blendot </p>
                                        {/* <p className='header__recent'> 32 mins ago </p> */}
                                    </span>
                                    </Link>
                                    )
                                    : (
                                    <Link to='/login'>
                                        Login
                                    </Link>
                                ) }
                                </section>
                                <FiX className='header__close' onClick={() => setIsOpen(!isOpen)} />
                            </section>
                            <hr style={{ opacity: '0.2', width: '100%', margin: '0' }} />
                            <ul className='header__list'>
                                { nav.map((item) => (
                                    !loggedIn && !item.isPrivate
                                    ? <Link to={item.url} key={item.id} className={item.className}> {item.name} </Link>
                                    : loggedIn
                                    ? <Link to={item.url} key={item.id} className={item.className}> {item.icon} {item.name} </Link>
                                    : <Link to={item.url} key={item.id} className={item.className}> {item.name} </Link>
                                    ))}
                            </ul>
                        </section>
                        { loggedIn && <Button className='header__logout' onClick={handleLogout}> Logout </Button>}
                    </nav>
                    ) : null}
                <span className='header__BtnGroup'>
                    { loggedIn
                    ? <Link className='header__userIcon' to='/messsages'> <FiMessageCircle /> </Link>
                    : <Button onClick={() => history.push('/login')} className='header__button--signin'> login </Button>}
                </span>
            </header>
        </div>
    );
};
