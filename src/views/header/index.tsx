/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
    FiMenu,
    FiMessageCircle,
    FiX
} from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import loggout from 'store/actions/loggout';
import blendotDefault from 'assets/blendot.png';
import { Search } from 'components/search';
import blendot from '../../assets/blendot1.png';
import { nav } from './utils';
import { Button } from '../../components/button';

export const Header: React.FC = () => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const dispatch = useDispatch();
    const { userData } = useSelector((state: RootState) => state?.userProfile);
    const loggedIn = useSelector((state: RootState) => state.isLogged);
    const { name, email, avatar } = userData;
    // const [user, setUser] = useState<IState['user']>([]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        dispatch(loggout());
        history.push('/login');
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
                <span className='header__innerContent'>
                <FiMenu onClick={handleToggle} className='header__menu-icon' />
                <Link to={loggedIn ? '/feed' : '/'}> <img src={blendot} className='header__logo' alt='Blendot' /> </Link>
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
                                    <img src={!avatar ? blendotDefault : avatar} alt='my profile avatar' className='header__profileImage' />
                                    <span>
                                        <h4 className='header__name'> {name.firstName} {name.lastName} </h4>
                                        <p className='header__title'> {email} </p>
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
                            <hr style={{ opacity: '0.2', width: '100%', margin: '0' }} className='header__divider' />
                            <ul className='header__list'>
                                { nav.map((item) => (
                                    !loggedIn && !item.isPrivate
                                    ? <Link to={item.url} key={item.id} className={item.className}> {item.icon} {item.name} </Link>
                                    : loggedIn && (!item.isPrivate || item.isPrivate)
                                    ? <Link to={item.url} key={item.id} className={item.className}> {item.icon} {item.name} </Link>
                                    : null
                                    ))}
                            </ul>
                        </section>
                        { loggedIn && <Button className='header__logout' onClick={handleLogout}> Logout </Button>}
                    </nav>
                    ) : null}
                <span className='header__BtnGroup'>
                    { loggedIn
                        ? (
                            <section>
                            <Link className='header__userIcon' to='/messsages'> <FiMessageCircle /> </Link>
                            <span>
                                <Search />
                            </span>
                            </section>
                        )
                    : <Button onClick={() => history.push('/login')} className='header__button--signin'> login </Button>}
                </span>
            </header>
        </div>
    );
};
