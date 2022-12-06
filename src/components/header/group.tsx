/* eslint-disable no-nested-ternary */
/* eslint-disable  react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { Search } from 'components/search';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { RootState } from 'store';
import { Users } from 'components/users';
import { Avatar } from 'components/avatar';
import { fetchAllUsers } from 'store/middlewares/fetchUsers';
import { fetchUsers } from 'store/actions/fetchUsers';
import { useStore } from 'hoc/useStore';
import { axiosPrivate } from 'config/axiosInstance';
import { Button } from '../../components/button';

export const Group = () => {
    const [users, setUsers] = useState(null);
    const history = useHistory();
    const [searchWord, setSearchWord] = useState('');
    const dispatch = useDispatch();
    const { userData } = useSelector((state: RootState) => state.userProfile);
    const loggedIn = useSelector((state: RootState) => state.isLogged);
    const { userProfile } = useStore();

    useEffect(() => {
        axiosPrivate.get('/contact')
            .then((res) => {
                setUsers(res.data.users);
                fetchAllUsers();
                dispatch(fetchUsers(res.data.users));
            })
            .catch((err) => {
                console.log('There was an error. ', err.message);
            });
    }, [searchWord]);

    const foundUsers = users && users.filter((user: any) => {
                            return searchWord === ''
                                ? null
                                : user.name.firstName.toLowerCase().includes(searchWord.toLowerCase()) || user.name.lastName.toLowerCase().includes(searchWord.toLowerCase())
                                ? user
                                : null;
                            });

    return (
        <span className='header__BtnGroup'>
            { loggedIn
                ? (
                    <>
                        <span>
                            <Search placeholder='Search people...' searchWord={searchWord} clearSearchKey={() => setSearchWord('')} searchTerm={searchWord} searchKey={(e) => setSearchWord(e.target.value)}>
                        {foundUsers
                            && (
                                <section className='header__usersContainer'>
                                    {!users ? null : users.filter((user: any) => {
                                        return searchWord === ''
                                            ? null
                                            : user.name.firstName.toLowerCase().includes(searchWord.toLowerCase()) || user.name.lastName.toLowerCase().includes(searchWord.toLowerCase())
                                            ? user
                                            : null;
                                    }).map((user: any) => {
                                        return (
                                            <Users
                                              name={user.name}
                                              occupation={user.occupation}
                                              avatar={user.avatar}
                                              userId={user._id}
                                              verified={user.isVerified}
                                            />
                                        );
                                    })}
                                </section>
                        )}
                            </Search>
                        </span>
                        {userProfile.loading
                            ? 'Loading'
                            : (
                                <Link to='/profile'>
                                    <Avatar
                                      avatar={userData?.avatar}
                                      className='header__userAvatar'
                                    />
                                </Link>
                            )}
                    </>
                )
            : <Button onClick={() => history.push('/login')} className='header__button--signin'> login </Button>}
        </span>
    );
};
