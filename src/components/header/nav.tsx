/* eslint-disable no-nested-ternary */
/* eslint-disable  react/require-default-props */
/* eslint-disable  react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiX } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import loggout from 'store/actions/loggout';
import { nav } from 'views/header/utils';
import { RootState } from 'store';
import { useStore } from 'hoc/useStore';
import { Avatar } from 'components/avatar';
import { Button } from '../../components/button';

interface Props {
    isLoggedIn: boolean;
    handleToggleMenu: React.MouseEventHandler<SVGElement>
}

interface MenuToggle extends Omit<Props, 'isLoggedIn'> {
    handleToggleMenu: React.MouseEventHandler<SVGElement>
}

export const Nav = ({ handleToggleMenu }: MenuToggle) => {
    const loggedIn = useSelector((state: RootState) => state.isLogged);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('persist:persist-key');
        dispatch(loggout());
        history.push('/login');
    };

    return (
            <nav className='header__nav'>
                <nav>
                    <Profile isLoggedIn={loggedIn} handleToggleMenu={handleToggleMenu} />
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
                </nav>
                { loggedIn && (
                    <span className='header__logoutContainer'>
                        <Button className='header__logout' onClick={handleLogout}> Logout </Button>
                    </span>
                )}
            </nav>
    );
};

const Profile = ({ isLoggedIn, handleToggleMenu }: Props) => {
    const { userProfile: { userData } } = useStore();
    const {
        name,
        avatar,
        occupation
    } = userData;

    return (
        <section className='header__profileContainer'>
            <>
                { isLoggedIn
                    ? (
                        <Link to='/profile' className='header__profile'>
                            <Avatar avatar={avatar} className='header__profileImage' />
                            <span>
                                <h4 className='header__name'> {name.firstName} {name.lastName} </h4>
                                <p className='header__title'> {occupation} </p>
                            </span>
                        </Link>
                        )
                        : (
                        <Link to='/login' className='header__signinLink'>
                            <span className='header__signin'>
                                <Avatar avatar='' className='header__profileImage' />
                                <p>Login or Sign up</p>
                            </span>
                        </Link>
            ) }
            </>
            <FiX className='header__close' onClick={handleToggleMenu} />
        </section>
    );
};
