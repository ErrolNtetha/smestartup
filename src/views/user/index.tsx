import React from 'react';
import { Header } from 'views/header';
import { useFetchData } from 'hoc/useFetchData';
import { Logo } from 'components/header/logo';
import { User } from './user';
import { Posts } from './posts';

export const Users = () => {
    const { data, loading } = useFetchData('users/622a334f4ca80ec781fd4d72');
    const profile = data?.user;
    const userPost = data?.posts;
    return (
        <main className='user'>
            <Header>
                <Logo />
            </Header>
            <section className='user__mainContainer'>
                <section className='user__userProfileContainer'>
                    {!loading && <User user={profile} />}
                    {!loading && userPost?.map((item) => {
                        return (
                            <Posts
                              post={item.post}
                              id={item._id}
                              author={item.author}
                              date={item.createdAt}
                              key={item._id}
                            />
                        );
                    })}
                </section>
            </section>
        </main>
    );
};
