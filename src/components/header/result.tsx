/* eslint-disable no-nested-ternary */
import React from 'react';
import { Users } from 'components/users';

export const Results = ({ searchWord, users }: any) => {
    return (
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
    );
};
