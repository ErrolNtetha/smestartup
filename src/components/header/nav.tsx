/* eslint-disable no-nested-ternary */
/* eslint-disable  react/require-default-props */
/* eslint-disable  react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiX } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import blendotDefault from 'assets/blendot.png';
import loggout from 'store/actions/loggout';
import { nav } from 'views/header/utils';
import { RootState } from 'store';
import { Button } from '../../components/button';

interface Props {
    handleToggle?: React.MouseEventHandler<SVGElement> | undefined;
    isLoggedIn: boolean;
}

export const Nav = () => {
    const loggedIn = useSelector((state: RootState) => state.isLogged);
    const { userData } = useSelector((state: RootState) => state.userProfile);
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(userData);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('persist:persist-key');
        dispatch(loggout());
        history.push('/login');
    };

    return (
        <nav className='header__nav'>
            <>
                <Profile isLoggedIn={loggedIn} />
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
            </>
            { loggedIn && <Button className='header__logout' onClick={handleLogout}> Logout </Button>}
        </nav>
    );
};

const Profile = ({ isLoggedIn, handleToggle }: Props) => {
    return (
        <section className='header__profileContainer'>
            <>
                { isLoggedIn
                ? (
                <Link to='/profile' className='header__profile'>
                <img src={blendotDefault} alt='my profile avatar' className='header__profileImage' />
                <span>
                    <h4 className='header__name'> User </h4>
                    <p className='header__title'> *** </p>
                    {/* <p className='header__recent'> 32 mins ago </p> */}
                </span>
                </Link>
                )
                : (
                <Link to='/login'>
                    Login
                </Link>
            ) }
            </>
            <FiX className='header__close' onClick={() => handleToggle} />
        </section>
    );
};
